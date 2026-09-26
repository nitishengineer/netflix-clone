import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './TitleCards.css'

const TitleCards = ({ title, path }) => {
  const [cardsData, setCardsData] = useState([])
  const cardsRef = useRef(null)

  const handleWheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY
  }

  useEffect(() => {
    const ref = cardsRef.current
    ref.addEventListener('wheel', handleWheel)

    const fetchMovies = async () => {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY
      const res = await fetch(
        `https://api.themoviedb.org/3/${path}?api_key=${apiKey}&language=en-US&page=1`
      )
      const data = await res.json()
      if (data.results) {
        setCardsData(data.results.filter((movie) => movie.backdrop_path))
      }
    }
    fetchMovies()

    return () => ref.removeEventListener('wheel', handleWheel)
  }, [path])

  return (
    <div className='title-cards'>
      <h2>{title}</h2>
      <div className='card-list' ref={cardsRef}>
        {cardsData.map((card) => (
          <Link to={`/player/${card.id}`} className='card' key={card.id}>
            <img
              className='card-img'
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.title}
            />
            <p>{card.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
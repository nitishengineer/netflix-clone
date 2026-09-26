import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Player.css'

const Player = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [apiData, setApiData] = useState({ name: '', key: '', published_at: '', type: '' })

  useEffect(() => {
    const fetchVideos = async () => {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
      )
      const data = await res.json()
      if (data.results && data.results.length > 0) {
        const trailer =
          data.results.find((video) => video.type === 'Trailer') || data.results[0]
        setApiData({
          name: trailer.name,
          key: trailer.key,
          published_at: trailer.published_at,
          type: trailer.type,
        })
      }
    }
    fetchVideos()
  }, [id])

  return (
    <div className='player'>
      <button className='back-btn' onClick={() => navigate(-1)}>← Back</button>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}?autoplay=1&mute=1`}
        title={apiData.name}
        allowFullScreen
      />
      <div className='player-info'>
        <span>{apiData.published_at.slice(0, 10)}</span>
        <span>{apiData.name}</span>
        <span>{apiData.type}</span>
      </div>
    </div>
  )
}

export default Player
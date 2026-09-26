import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import './Home.css'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <div className='hero-caption'>
          <h1 className='caption-title'>Stranger Worlds</h1>
          <p>
            When a mysterious rift opens beneath the town, a group of kids must face
            upside-down forces, secret labs, and one very hungry shadow.
          </p>
          <div className='hero-btns'>
            <button className='btn'>▶ Play</button>
            <button className='btn dark-btn'>ⓘ More Info</button>
          </div>
        </div>
        <TitleCards title='Popular on Netflix' path='movie/popular' />
      </div>
      <div className='more-cards'>
        <TitleCards title='Blockbuster Movies' path='movie/top_rated' />
        <TitleCards title='Only on Netflix' path='movie/now_playing' />
        <TitleCards title='Upcoming' path='movie/upcoming' />
      </div>
      <Footer />
    </div>
  )
}

export default Home
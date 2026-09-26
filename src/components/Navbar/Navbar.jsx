import React, { useEffect, useRef } from 'react'
import { logOut } from '../../firebase'
import './Navbar.css'

const Navbar = () => {
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='navbar' ref={navRef}>
      <div className='navbar-left'>
        <span className='logo'>NETFLIX</span>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <span className='navbar-icon'>🔍</span>
        <span className='navbar-icon'>🔔</span>
        <div className='navbar-profile'>
          <span className='navbar-icon'>😎</span>
          <span className='navbar-icon'>▾</span>
          <div className='dropdown'>
            <p onClick={logOut}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
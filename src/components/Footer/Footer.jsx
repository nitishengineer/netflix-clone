import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <span>📘</span>
        <span>📸</span>
        <span>🐦</span>
        <span>▶️</span>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <button className='footer-btn'>Service Code</button>
      <p className='footer-copy'>© 2026 Netflix Clone — built by Nitish as a learning project</p>
    </div>
  )
}

export default Footer
import React from 'react'
import './Loader.css'
import logoVideo from '../../assets/logo.mp4'

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-video-container">
          <video className="loader-video" autoPlay muted loop playsInline>
            <source src={logoVideo} type="video/mp4" />
          </video>
        </div>
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
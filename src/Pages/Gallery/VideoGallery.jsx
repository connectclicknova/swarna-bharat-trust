import React from 'react'
import './VideoGallery.css'
import { Video, Clock, Film } from 'lucide-react'

const VideoGallery = () => {
  return (
    <div className="coming-soon-page">
      {/* Coming Soon Header */}
      <section className="coming-soon-header">
        <div className="container">
          <div className="coming-soon-content">
            <div className="icon-wrapper">
              <Video size={80} className="main-icon" />
            </div>
            
            <span className="coming-soon-label">Video Gallery</span>
            <h1 className="coming-soon-title">Coming Soon</h1>
            <p className="coming-soon-description">
              We're working on bringing you an amazing collection of videos showcasing 
              our programs, events, and the incredible impact we're making in the community. 
              Stay tuned for inspiring stories and moments captured on camera!
            </p>

            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <Film size={32} />
                </div>
                <h3>Program Highlights</h3>
                <p>Watch our various programs in action</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Video size={32} />
                </div>
                <h3>Event Coverage</h3>
                <p>Experience our community events</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Clock size={32} />
                </div>
                <h3>Success Stories</h3>
                <p>Hear from beneficiaries & partners</p>
              </div>
            </div>

            <div className="coming-soon-footer">
              <p className="notify-text">
                Check back soon for updates, or visit our <a href="/gallery/images">Image Gallery</a> in the meantime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VideoGallery
import React, { useState } from 'react'
import './VideoGallery.css'
import { X, Play } from 'lucide-react'

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  // Sample videos with thumbnails
  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      title: 'Educational Excellence Program',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      height: 'tall'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
      title: 'School Infrastructure Tour',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      height: 'medium'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
      title: 'Annual Community Event 2024',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      height: 'short'
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      title: 'Skill Development Workshop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      height: 'tall'
    },
    {
      id: 5,
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      title: 'Healthcare Initiative Launch',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      height: 'medium'
    },
    {
      id: 6,
      thumbnail: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
      title: 'Farmers Training Success Story',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      height: 'short'
    },
    {
      id: 7,
      thumbnail: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800',
      title: 'Elders Home Celebration',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      height: 'medium'
    },
    {
      id: 8,
      thumbnail: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800',
      title: 'Eye Care Camp Highlights',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      height: 'tall'
    },
    {
      id: 9,
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
      title: 'Rural Entrepreneurship Program',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      height: 'short'
    }
  ]

  const openVideoModal = (video) => {
    setSelectedVideo(video)
    document.body.style.overflow = 'hidden'
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="video-gallery-page">
      {/* Gallery Header */}
      <section className="gallery-header">
        <div className="container">
          <span className="section-label">Watch Our Journey</span>
          <h1 className="section-title">Video Gallery</h1>
          <p className="section-description">
            Experience our work through these inspiring videos showcasing our programs,
            events, and the positive impact we're making in the community.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="masonry-grid">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`masonry-item ${video.height}`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openVideoModal(video)}
              >
                <img src={video.thumbnail} alt={video.title} />
                <div className="video-overlay">
                  <div className="play-button">
                    <Play size={40} fill="#ffffff" />
                  </div>
                  <p className="video-title">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={closeVideoModal}>
          <button className="modal-close" onClick={closeVideoModal}>
            <X size={32} />
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="modal-title">{selectedVideo.title}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoGallery
import React, { useState } from 'react'
import './ImageGallery.css'
import { X, ZoomIn } from 'lucide-react'

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Sample images with different heights for masonry effect
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800', title: 'Students in Classroom', height: 'tall' },
    { id: 2, url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800', title: 'School Building', height: 'medium' },
    { id: 3, url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800', title: 'Community Event', height: 'short' },
    { id: 4, url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800', title: 'Educational Program', height: 'tall' },
    { id: 5, url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800', title: 'Healthcare Service', height: 'medium' },
    { id: 6, url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800', title: 'Training Session', height: 'short' },
    { id: 7, url: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800', title: 'Elder Care', height: 'tall' },
    { id: 8, url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800', title: 'Farming Initiative', height: 'medium' },
    { id: 9, url: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800', title: 'Eye Care Camp', height: 'short' },
    { id: 10, url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', title: 'Skill Development', height: 'medium' },
    { id: 11, url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800', title: 'Community Gathering', height: 'tall' },
    { id: 12, url: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=800', title: 'Veterinary Care', height: 'short' }
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="gallery-page">
      {/* Gallery Header */}
      <section className="gallery-header">
        <div className="container">
          <span className="section-label">Our Memories</span>
          <h1 className="section-title">Image Gallery</h1>
          <p className="section-description">
            Capturing moments of impact, growth, and transformation in our community.
            Browse through our collection of memorable events and initiatives.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="masonry-grid">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`masonry-item ${image.height}`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(image)}
              >
                <img src={image.url} alt={image.title} />
                <div className="masonry-overlay">
                  <ZoomIn size={32} />
                  <p className="masonry-title">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <p className="lightbox-title">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
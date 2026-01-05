import React, { useState } from 'react'
import './PinterestGallery.css'
import { X } from 'lucide-react'

const PinterestGallery = ({ images, title = "Gallery" }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  if (!images || images.length === 0) {
    return null
  }

  return (
    <section className="pinterest-gallery-section">
      <div className="pinterest-gallery-container">
        <h2 className="pinterest-gallery-title">{title}</h2>
        <div className="pinterest-gallery">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="pinterest-item"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="pinterest-lightbox" onClick={() => setSelectedImage(null)}>
          <button className="pinterest-close-btn" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <img src={selectedImage} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}

export default PinterestGallery

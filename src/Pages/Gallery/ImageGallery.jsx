import React, { useState } from 'react'
import './ImageGallery.css'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const itemsPerPage = 48

  // All service images organized by category - using only actual images from service pages
  const allImages = [
    // Swarna Bharathi Vidyamandir (7 images)
    { id: 'sbv-1', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/1.jpeg?updatedAt=1767621063032', title: 'Swarna Bharathi Vidyamandir', category: 'vidyamandir' },
    { id: 'sbv-2', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/2.jpeg?updatedAt=1767621062999', title: 'Swarna Bharathi Vidyamandir', category: 'vidyamandir' },
    { id: 'sbv-3', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/3.jpeg?updatedAt=1767621063375', title: 'Swarna Bharathi Vidyamandir', category: 'vidyamandir' },
    { id: 'sbv-4', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/4.jpeg?updatedAt=1767621063032', title: 'Swarna Bharathi Vidyamandir', category: 'vidyamandir' },
    { id: 'sbv-5', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/5.jpeg?updatedAt=1767621062999', title: 'Swarna Bharathi Vidyamandir', category: 'vidyamandir' },
    { id: 'sbv-6', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/6.jpeg?updatedAt=1767621063375', title: 'Swarna Bharathi Vidyamandir', category: 'vidyamandir' },
    { id: 'sbv-7', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/7.jpeg?updatedAt=1767621063375', title: 'Swarna Bharathi Vidyamandir', category: 'vidyamandir' },
    
    // SOMA (32 images)
    { id: 'soma-1', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/1.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-2', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/2.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-3', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/3.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-4', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/4.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-5', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/5.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-6', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/6.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-7', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/7.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-8', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/8.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-9', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/9.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-10', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/10.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-11', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/11.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-12', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/12.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-13', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/13.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-14', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/14.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-15', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/15.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-16', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/16.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-17', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/17.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-18', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/18.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-19', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/19.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-20', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/20.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-21', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/21.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-22', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/22.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-23', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/23.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-24', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/24.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-25', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/25.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-26', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/26.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-27', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/27.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-28', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/28.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-29', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/29.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-30', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/30.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-31', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/31.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    { id: 'soma-32', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/32.jpeg', title: 'SOMA - Skill Development', category: 'soma' },
    
    // Residential Bridge School (7 images - same as Vidyamandir)
    { id: 'rbs-1', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/1.jpeg?updatedAt=1767621063032', title: 'Residential Bridge School', category: 'bridge-school' },
    { id: 'rbs-2', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/2.jpeg?updatedAt=1767621062999', title: 'Residential Bridge School', category: 'bridge-school' },
    { id: 'rbs-3', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/3.jpeg?updatedAt=1767621063375', title: 'Residential Bridge School', category: 'bridge-school' },
    { id: 'rbs-4', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/4.jpeg?updatedAt=1767621063032', title: 'Residential Bridge School', category: 'bridge-school' },
    { id: 'rbs-5', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/5.jpeg?updatedAt=1767621062999', title: 'Residential Bridge School', category: 'bridge-school' },
    { id: 'rbs-6', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/6.jpeg?updatedAt=1767621063375', title: 'Residential Bridge School', category: 'bridge-school' },
    { id: 'rbs-7', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/7.jpeg?updatedAt=1767621063375', title: 'Residential Bridge School', category: 'bridge-school' },
    
    // SIRED (2 images)
    { id: 'sired-1', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/SIERED/4.jpeg?updatedAt=1767621097899', title: 'SIRED - Rural Entrepreneurship', category: 'sired' },
    { id: 'sired-2', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/SIERED/1.jpeg?updatedAt=1767621097620', title: 'SIRED - Rural Entrepreneurship', category: 'sired' },
    
    // Elders Home (9 images)
    { id: 'elders-1', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/1.jpeg', title: 'Elders Home', category: 'elders-home' },
    { id: 'elders-2', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/2.jpeg', title: 'Elders Home', category: 'elders-home' },
    { id: 'elders-3', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/3.jpeg', title: 'Elders Home', category: 'elders-home' },
    { id: 'elders-4', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/4.jpeg', title: 'Elders Home', category: 'elders-home' },
    { id: 'elders-5', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/5.jpeg', title: 'Elders Home', category: 'elders-home' },
    { id: 'elders-6', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/6.jpeg', title: 'Elders Home', category: 'elders-home' },
    { id: 'elders-7', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/7.jpeg', title: 'Elders Home', category: 'elders-home' },
    { id: 'elders-8', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/8.jpeg', title: 'Elders Home', category: 'elders-home' },
    { id: 'elders-9', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/9.jpeg', title: 'Elders Home', category: 'elders-home' },
    
    // Farmers Training Center (4 images)
    { id: 'ftc-1', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Farmer%20Training/1.jpeg', title: 'Farmers Training Center', category: 'farmers-training' },
    { id: 'ftc-2', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Farmer%20Training/2.jpeg', title: 'Farmers Training Center', category: 'farmers-training' },
    { id: 'ftc-3', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Farmer%20Training/3.jpeg', title: 'Farmers Training Center', category: 'farmers-training' },
    { id: 'ftc-4', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Farmer%20Training/4.jpeg', title: 'Farmers Training Center', category: 'farmers-training' },
    
    // LV Prasad Eye Institute (8 images)
    { id: 'lvpei-1', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/1.jpeg', title: 'LV Prasad Eye Institute', category: 'eye-institute' },
    { id: 'lvpei-2', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/2.jpeg', title: 'LV Prasad Eye Institute', category: 'eye-institute' },
    { id: 'lvpei-3', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/3.jpeg', title: 'LV Prasad Eye Institute', category: 'eye-institute' },
    { id: 'lvpei-4', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/4.jpeg', title: 'LV Prasad Eye Institute', category: 'eye-institute' },
    { id: 'lvpei-5', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/5.jpeg', title: 'LV Prasad Eye Institute', category: 'eye-institute' },
    { id: 'lvpei-6', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/6.jpeg', title: 'LV Prasad Eye Institute', category: 'eye-institute' },
    { id: 'lvpei-7', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/7.jpeg', title: 'LV Prasad Eye Institute', category: 'eye-institute' },
    { id: 'lvpei-8', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/8.jpeg', title: 'LV Prasad Eye Institute', category: 'eye-institute' },
    
    // Veterinary Hospital (2 images)
    { id: 'vet-1', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Veternity%20Hospital/1.jpeg', title: 'Veterinary Hospital', category: 'veterinary' },
    { id: 'vet-2', url: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Veternity%20Hospital/2.jpeg', title: 'Veterinary Hospital', category: 'veterinary' },
    
    // Rural Health & Dental Care (6 images)
    { id: 'rhdc-1', url: '/images/health1.jpg', title: 'Rural Health & Dental Care', category: 'health-dental' },
    { id: 'rhdc-2', url: '/images/health2.jpg', title: 'Rural Health & Dental Care', category: 'health-dental' },
    { id: 'rhdc-3', url: '/images/health3.jpg', title: 'Rural Health & Dental Care', category: 'health-dental' },
    { id: 'rhdc-4', url: '/images/health4.jpg', title: 'Rural Health & Dental Care', category: 'health-dental' },
    { id: 'rhdc-5', url: '/images/health1.jpg', title: 'Rural Health & Dental Care', category: 'health-dental' },
    { id: 'rhdc-6', url: '/images/health2.jpg', title: 'Rural Health & Dental Care', category: 'health-dental' }
  ]

  const categories = [
    { id: 'all', name: 'All Services', count: allImages.length },
    { id: 'vidyamandir', name: 'Vidyamandir', count: 7 },
    { id: 'soma', name: 'SOMA', count: 32 },
    { id: 'bridge-school', name: 'Bridge School', count: 7 },
    { id: 'sired', name: 'SIRED', count: 2 },
    { id: 'elders-home', name: 'Elders Home', count: 9 },
    { id: 'farmers-training', name: 'Farmers Training', count: 4 },
    { id: 'eye-institute', name: 'Eye Institute', count: 8 },
    { id: 'veterinary', name: 'Veterinary', count: 2 },
    { id: 'health-dental', name: 'Health & Dental', count: 6 }
  ]

  // Filter images by category
  const filteredImages = selectedCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === selectedCategory)

  // Calculate pagination
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentImages = filteredImages.slice(startIndex, endIndex)

  // Reset to page 1 when category changes
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const goToPage = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
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

      {/* Category Filter */}
      <section className="gallery-filter-section">
        <div className="container">
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
                <span className="category-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-info">
            <p className="showing-text">
              Showing {startIndex + 1} - {Math.min(endIndex, filteredImages.length)} of {filteredImages.length} images
            </p>
          </div>
          
          <div className="pinterest-gallery">
            {currentImages.map((image, index) => (
              <div
                key={image.id}
                className="pinterest-item"
                style={{ animationDelay: `${index * 0.02}s` }}
                onClick={() => openLightbox(image)}
              >
                <img src={image.url} alt={image.title} loading="lazy" />
                <div className="pinterest-overlay">
                  <ZoomIn size={32} />
                  <p className="pinterest-title">{image.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="pagination-btn prev" 
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={20} />
                Previous
              </button>
              
              <div className="pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                        onClick={() => goToPage(page)}
                      >
                        {page}
                      </button>
                    )
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return <span key={page} className="pagination-ellipsis">...</span>
                  }
                  return null
                })}
              </div>

              <button 
                className="pagination-btn next" 
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          )}
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
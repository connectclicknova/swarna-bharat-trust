import React from 'react'
import './LVPrasadEyeInstitute.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import PinterestGallery from '../../../Components/PinterestGallery/PinterestGallery'
import { Eye, Heart, Users, Award, Target, Shield } from 'lucide-react'

const LVPrasadEyeInstitute = () => {
  const images = [
    '/images/eye1.jpg',
    '/images/eye2.jpg',
    '/images/eye3.jpg',
    '/images/eye4.jpg'
  ]

  const galleryImages = [
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/1.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/2.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/3.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/4.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/5.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/6.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/7.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/8.jpeg',
  ]

  return (
    <div className="lvpei-service-page">
      <section className="lvpei-service-hero">
        <div className="lvpei-service-hero-content">
          <div className="lvpei-service-hero-text">
            <h1>L V Prasad Eye Institute</h1>
            <p>Comprehensive eye care services bringing the gift of sight to rural communities</p>
          </div>
          {/* <div className="lvpei-service-hero-carousel">
            <ImageCarousel images={images} />
          </div> */}
        </div>
      </section>

      <section className="lvpei-service-content">
        <div className="lvpei-service-content-grid">
          <div className="lvpei-service-main-content">
            <h2>About Our Eye Care Center</h2>
            <p>
              In partnership with L V Prasad Eye Institute, we provide world-class eye care services to rural
              communities. Our center offers comprehensive eye care from basic screening to advanced treatments,
              making quality eye care accessible and affordable to all.
            </p>

            <h3>Services Offered</h3>
            <ul>
              <li>Comprehensive eye examinations</li>
              <li>Cataract surgery and IOL implantation</li>
              <li>Glaucoma diagnosis and treatment</li>
              <li>Diabetic retinopathy screening</li>
              <li>Pediatric eye care</li>
              <li>Refractive error correction and spectacles</li>
              <li>Corneal treatments</li>
              <li>Low vision aids and rehabilitation</li>
            </ul>

            <h3>Special Programs</h3>
            <ul>
              <li>Free eye screening camps in villages</li>
              <li>Subsidized cataract surgeries</li>
              <li>School eye health programs</li>
              <li>Diabetic eye screening camps</li>
              <li>Free spectacles for needy patients</li>
              <li>Telemedicine consultations</li>
              <li>Community awareness programs</li>
            </ul>
          </div>

          <div className="lvpei-service-sidebar">
            <div className="lvpei-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Patients:</strong> 10,000+ annually</li>
                <li><strong>Surgeries:</strong> 500+ per year</li>
                <li><strong>Camps:</strong> Weekly</li>
                <li><strong>Specialists:</strong> 5+</li>
                <li><strong>Equipment:</strong> Modern</li>
              </ul>
            </div>

            <div className="lvpei-contact-card">
              <h3>Book Appointment</h3>
              <p>Schedule your eye check-up today</p>
              <button className="lvpei-cta-button">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="lvpei-service-features">
        <h2>Why Choose Us</h2>
        <div className="lvpei-features-grid">
          <div className="lvpei-feature-card">
            <Eye size={48} />
            <h3>Expert Care</h3>
            <p>Experienced ophthalmologists and state-of-the-art equipment</p>
          </div>
          <div className="lvpei-feature-card">
            <Heart size={48} />
            <h3>Affordable Treatment</h3>
            <p>Quality eye care at subsidized rates for rural communities</p>
          </div>
          <div className="lvpei-feature-card">
            <Shield size={48} />
            <h3>Comprehensive Services</h3>
            <p>Complete range of eye care from screening to surgery</p>
          </div>
        </div>
      </section>

      <PinterestGallery images={galleryImages} title="Eye Institute Gallery" />
    </div>
  )
}

export default LVPrasadEyeInstitute

import React from 'react'
import './VeterinaryHospital.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import PinterestGallery from '../../../Components/PinterestGallery/PinterestGallery'
import { Heart, Users, Award, Shield, Stethoscope, TrendingUp } from 'lucide-react'

const VeterinaryHospital = () => {
  const images = [
    '/images/vet1.jpg',
    '/images/vet2.jpg',
    '/images/vet3.jpg'
  ]

  const galleryImages = [
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Veternity%20Hospital/1.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Veternity%20Hospital/2.jpeg',
  ]

  return (
    <div className="vet-service-page">
      <section className="vet-service-hero">
        <div className="vet-service-hero-content">
          <div className="vet-service-hero-text">
            <h1>Veterinary Hospital</h1>
            <p>Comprehensive animal healthcare services for livestock and pets</p>
          </div>
          {/* <div className="vet-service-hero-carousel">
            <ImageCarousel images={images} />
          </div> */}
        </div>
      </section>

      <section className="vet-service-content">
        <div className="vet-service-content-grid">
          <div className="vet-service-main-content">
            <h2>About Our Veterinary Hospital</h2>
            <p>
              Our Veterinary Hospital provides comprehensive healthcare services for all types of animals,
              from farm livestock to household pets. We are committed to improving animal health and
              supporting farmers in maintaining healthy, productive livestock.
            </p>

            <h3>Services Offered</h3>
            <ul>
              <li>General health check-ups and consultations</li>
              <li>Vaccination and immunization programs</li>
              <li>Treatment for common diseases and infections</li>
              <li>Surgical procedures and emergency care</li>
              <li>Pregnancy diagnosis and obstetric care</li>
              <li>Deworming and parasite control</li>
              <li>Artificial insemination services</li>
              <li>Laboratory diagnostic services</li>
            </ul>

            <h3>Specialized Programs</h3>
            <ul>
              <li>Free veterinary camps in villages</li>
              <li>Livestock health management training</li>
              <li>Disease prevention awareness programs</li>
              <li>Fodder and nutrition consultation</li>
              <li>Breed improvement initiatives</li>
              <li>24/7 emergency services</li>
              <li>Mobile veterinary units</li>
            </ul>
          </div>

          <div className="vet-service-sidebar">
            <div className="vet-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Animals Treated:</strong> 5000+/year</li>
                <li><strong>Veterinarians:</strong> 3+</li>
                <li><strong>Camps:</strong> Bi-weekly</li>
                <li><strong>Services:</strong> 24/7</li>
                <li><strong>Villages:</strong> 50+</li>
              </ul>
            </div>

            <div className="vet-contact-card">
              <h3>Emergency Care</h3>
              <p>Call us for veterinary assistance</p>
              <button className="vet-cta-button">Contact Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="vet-service-features">
        <h2>Our Commitment</h2>
        <div className="vet-features-grid">
          <div className="vet-feature-card">
            <Stethoscope size={48} />
            <h3>Expert Veterinarians</h3>
            <p>Experienced professionals providing quality animal healthcare</p>
          </div>
          <div className="vet-feature-card">
            <Heart size={48} />
            <h3>Compassionate Care</h3>
            <p>Treating every animal with care, compassion, and expertise</p>
          </div>
          <div className="vet-feature-card">
            <Shield size={48} />
            <h3>Preventive Healthcare</h3>
            <p>Focus on disease prevention through vaccination and awareness</p>
          </div>
        </div>
      </section>

      <PinterestGallery images={galleryImages} title="Veterinary Hospital Gallery" />
    </div>
  )
}

export default VeterinaryHospital

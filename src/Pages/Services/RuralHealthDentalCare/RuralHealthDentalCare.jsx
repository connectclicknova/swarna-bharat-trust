import React from 'react'
import './RuralHealthDentalCare.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import { Heart, Users, Stethoscope, Award, Shield, Activity } from 'lucide-react'

const RuralHealthDentalCare = () => {
  const images = [
    '/images/health1.jpg',
    '/images/health2.jpg',
    '/images/health3.jpg',
    '/images/health4.jpg'
  ]

  return (
    <div className="rhdc-service-page">
      <section className="rhdc-service-hero">
        <div className="rhdc-service-hero-content">
          <div className="rhdc-service-hero-text">
            <h1>Rural Health & Dental Care</h1>
            <p>Bringing quality healthcare and dental services to rural communities</p>
          </div>
          <div className="rhdc-service-hero-carousel">
            <ImageCarousel images={images} />
          </div>
        </div>
      </section>

      <section className="rhdc-service-content">
        <div className="rhdc-service-content-grid">
          <div className="rhdc-service-main-content">
            <h2>About Our Healthcare Center</h2>
            <p>
              Our Rural Health and Dental Care center provides accessible, affordable, and quality healthcare
              services to rural communities. We focus on preventive care, early diagnosis, and comprehensive
              treatment for common health and dental issues.
            </p>

            <h3>Medical Services</h3>
            <ul>
              <li>General medical consultations</li>
              <li>Chronic disease management (diabetes, hypertension)</li>
              <li>Maternal and child health services</li>
              <li>Immunization programs</li>
              <li>Basic laboratory tests</li>
              <li>Minor surgical procedures</li>
              <li>First aid and emergency care</li>
              <li>Health education and awareness</li>
            </ul>

            <h3>Dental Services</h3>
            <ul>
              <li>Dental check-ups and consultations</li>
              <li>Teeth cleaning and scaling</li>
              <li>Tooth extraction and fillings</li>
              <li>Root canal treatment</li>
              <li>Dentures and prosthetics</li>
              <li>Pediatric dental care</li>
              <li>Oral health education</li>
              <li>Preventive dental care programs</li>
            </ul>
          </div>

          <div className="rhdc-service-sidebar">
            <div className="rhdc-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Patients:</strong> 15,000+/year</li>
                <li><strong>Doctors:</strong> 5+</li>
                <li><strong>Dentists:</strong> 2+</li>
                <li><strong>Camps:</strong> Weekly</li>
                <li><strong>Villages:</strong> 75+</li>
              </ul>
            </div>

            <div className="rhdc-contact-card">
              <h3>Book Appointment</h3>
              <p>Schedule your health check-up</p>
              <button className="rhdc-cta-button">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="rhdc-service-features">
        <h2>Our Services</h2>
        <div className="rhdc-features-grid">
          <div className="rhdc-feature-card">
            <Stethoscope size={48} />
            <h3>Comprehensive Care</h3>
            <p>Complete medical and dental services under one roof</p>
          </div>
          <div className="rhdc-feature-card">
            <Heart size={48} />
            <h3>Affordable Healthcare</h3>
            <p>Quality healthcare services at minimal cost</p>
          </div>
          <div className="rhdc-feature-card">
            <Activity size={48} />
            <h3>Preventive Focus</h3>
            <p>Emphasis on prevention through camps and awareness programs</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RuralHealthDentalCare

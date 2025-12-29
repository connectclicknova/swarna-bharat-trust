import React from 'react'
import './ResidentialBridgeSchool.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import { School, Home, Users, BookOpen, Heart, Utensils } from 'lucide-react'

const ResidentialBridgeSchool = () => {
  const images = [
    '/images/bridge1.jpg',
    '/images/bridge2.jpg',
    '/images/bridge3.jpg',
    '/images/bridge4.jpg'
  ]

  return (
    <div className="rbs-service-page">
      <section className="rbs-service-hero">
        <div className="rbs-service-hero-content">
          <div className="rbs-service-hero-text">
            <h1>Residential Bridge School</h1>
            <p>Providing education, shelter, and support to underprivileged children</p>
          </div>
          <div className="rbs-service-hero-carousel">
            <ImageCarousel images={images} />
          </div>
        </div>
      </section>

      <section className="rbs-service-content">
        <div className="rbs-service-content-grid">
          <div className="rbs-service-main-content">
            <h2>About the Program</h2>
            <p>
              Our Residential Bridge School provides comprehensive support to underprivileged children who lack
              access to quality education and basic necessities. We offer a safe, nurturing environment where
              children can learn, grow, and develop their full potential.
            </p>

            <h3>Services Provided</h3>
            <ul>
              <li>Free residential accommodation</li>
              <li>Quality education from qualified teachers</li>
              <li>Nutritious meals (breakfast, lunch, and dinner)</li>
              <li>Healthcare and medical support</li>
              <li>Clothing and school supplies</li>
              <li>Recreational and sports activities</li>
              <li>Counseling and mentorship programs</li>
            </ul>

            <h3>Our Approach</h3>
            <ul>
              <li>Individual attention to each child's needs</li>
              <li>Bridge curriculum to help children catch up academically</li>
              <li>Life skills training and character development</li>
              <li>Integration with mainstream schools when ready</li>
              <li>Continuous monitoring and assessment</li>
              <li>Family counseling and community engagement</li>
            </ul>
          </div>

          <div className="rbs-service-sidebar">
            <div className="rbs-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Capacity:</strong> 100 children</li>
                <li><strong>Age Group:</strong> 6-14 years</li>
                <li><strong>Duration:</strong> 1-3 years</li>
                <li><strong>Staff:</strong> 15+ members</li>
                <li><strong>Type:</strong> Free residential</li>
              </ul>
            </div>

            <div className="rbs-contact-card">
              <h3>Support Our Mission</h3>
              <p>Help us provide education and care to more children</p>
              <button className="rbs-cta-button">Donate Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="rbs-service-features">
        <h2>What We Offer</h2>
        <div className="rbs-features-grid">
          <div className="rbs-feature-card">
            <School size={48} />
            <h3>Quality Education</h3>
            <p>Comprehensive academic program to bring children to grade level</p>
          </div>
          <div className="rbs-feature-card">
            <Home size={48} />
            <h3>Safe Environment</h3>
            <p>Comfortable residential facilities with loving care and support</p>
          </div>
          <div className="rbs-feature-card">
            <Heart size={48} />
            <h3>Holistic Care</h3>
            <p>Complete support including food, healthcare, and emotional well-being</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResidentialBridgeSchool

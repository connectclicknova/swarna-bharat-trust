import React from 'react'
import './EldersHome.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import { Home, Heart, Users, Activity, Utensils, Shield } from 'lucide-react'

const EldersHome = () => {
  const images = [
    '/images/elders1.jpg',
    '/images/elders2.jpg',
    '/images/elders3.jpg',
    '/images/elders4.jpg'
  ]

  return (
    <div className="elders-service-page">
      <section className="elders-service-hero">
        <div className="elders-service-hero-content">
          <div className="elders-service-hero-text">
            <h1>Elders Home</h1>
            <p>Providing dignified living and compassionate care for senior citizens</p>
          </div>
          <div className="elders-service-hero-carousel">
            <ImageCarousel images={images} />
          </div>
        </div>
      </section>

      <section className="elders-service-content">
        <div className="elders-service-content-grid">
          <div className="elders-service-main-content">
            <h2>About Our Elders Home</h2>
            <p>
              Our Elders Home provides a safe, comfortable, and caring environment for senior citizens who need
              support and companionship. We ensure that our residents live with dignity, respect, and joy in
              their golden years.
            </p>

            <h3>Facilities & Services</h3>
            <ul>
              <li>Comfortable accommodation with modern amenities</li>
              <li>Nutritious meals prepared according to dietary needs</li>
              <li>24/7 medical care and nursing support</li>
              <li>Regular health check-ups and medication management</li>
              <li>Physiotherapy and exercise programs</li>
              <li>Recreation and entertainment activities</li>
              <li>Spiritual and religious activities</li>
              <li>Library and reading materials</li>
            </ul>

            <h3>Care Approach</h3>
            <ul>
              <li>Personalized care plans for each resident</li>
              <li>Trained and compassionate staff</li>
              <li>Clean and hygienic environment</li>
              <li>Regular family visits encouraged</li>
              <li>Emergency medical support</li>
              <li>Counseling and emotional support</li>
            </ul>
          </div>

          <div className="elders-service-sidebar">
            <div className="elders-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Capacity:</strong> 50 residents</li>
                <li><strong>Care Type:</strong> 24/7</li>
                <li><strong>Staff:</strong> 20+ members</li>
                <li><strong>Medical:</strong> On-site nurse</li>
                <li><strong>Rooms:</strong> Single & shared</li>
              </ul>
            </div>

            <div className="elders-contact-card">
              <h3>Admissions</h3>
              <p>Learn more about our facilities</p>
              <button className="elders-cta-button">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <section className="elders-service-features">
        <h2>Our Commitment</h2>
        <div className="elders-features-grid">
          <div className="elders-feature-card">
            <Heart size={48} />
            <h3>Compassionate Care</h3>
            <p>Loving and respectful treatment for all our residents</p>
          </div>
          <div className="elders-feature-card">
            <Shield size={48} />
            <h3>Safety & Security</h3>
            <p>Safe environment with round-the-clock monitoring and support</p>
          </div>
          <div className="elders-feature-card">
            <Activity size={48} />
            <h3>Active Living</h3>
            <p>Engaging activities to keep residents physically and mentally active</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EldersHome

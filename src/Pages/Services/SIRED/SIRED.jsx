import React from 'react'
import './SIRED.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import { Briefcase, TrendingUp, Users, Lightbulb, Target, Award } from 'lucide-react'

const SIRED = () => {
  const images = [
    '/images/sired1.jpg',
    '/images/sired2.jpg',
    '/images/sired3.jpg'
  ]

  return (
    <div className="sired-service-page">
      <section className="sired-service-hero">
        <div className="sired-service-hero-content">
          <div className="sired-service-hero-text">
            <h1>SIRED - Rural Entrepreneurship Development</h1>
            <p>Empowering rural communities through entrepreneurship and sustainable business development</p>
          </div>
          <div className="sired-service-hero-carousel">
            <ImageCarousel images={images} />
          </div>
        </div>
      </section>

      <section className="sired-service-content">
        <div className="sired-service-content-grid">
          <div className="sired-service-main-content">
            <h2>About SIRED</h2>
            <p>
              SIRED (Swarna Bharat Institute of Rural Entrepreneurship Development) is dedicated to fostering
              entrepreneurship in rural areas. We provide training, resources, and support to help rural
              entrepreneurs establish and grow sustainable businesses.
            </p>

            <h3>Our Programs</h3>
            <ul>
              <li>Entrepreneurship training and workshops</li>
              <li>Business planning and development support</li>
              <li>Financial literacy and management training</li>
              <li>Market linkage and networking opportunities</li>
              <li>Technology and digital literacy programs</li>
              <li>Mentorship from successful entrepreneurs</li>
              <li>Access to microfinance and funding support</li>
            </ul>

            <h3>Key Focus Areas</h3>
            <ul>
              <li>Agriculture-based enterprises</li>
              <li>Traditional crafts and handicrafts</li>
              <li>Food processing and value addition</li>
              <li>Service sector businesses</li>
              <li>Women entrepreneurship development</li>
              <li>Youth startup initiatives</li>
            </ul>
          </div>

          <div className="sired-service-sidebar">
            <div className="sired-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Entrepreneurs:</strong> 500+</li>
                <li><strong>Businesses:</strong> 200+</li>
                <li><strong>Villages:</strong> 50+</li>
                <li><strong>Success Rate:</strong> 75%</li>
                <li><strong>Job Creation:</strong> 1000+</li>
              </ul>
            </div>

            <div className="sired-contact-card">
              <h3>Start Your Business</h3>
              <p>Join our entrepreneurship program</p>
              <button className="sired-cta-button">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sired-service-features">
        <h2>Our Impact</h2>
        <div className="sired-features-grid">
          <div className="sired-feature-card">
            <Briefcase size={48} />
            <h3>Business Development</h3>
            <p>Comprehensive support from idea to successful business</p>
          </div>
          <div className="sired-feature-card">
            <TrendingUp size={48} />
            <h3>Income Growth</h3>
            <p>Helping families increase their income and improve living standards</p>
          </div>
          <div className="sired-feature-card">
            <Users size={48} />
            <h3>Community Impact</h3>
            <p>Creating employment and economic opportunities in rural areas</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SIRED

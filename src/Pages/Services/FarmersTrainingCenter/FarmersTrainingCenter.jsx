import React from 'react'
import './FarmersTrainingCenter.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import { Sprout, TrendingUp, Users, Lightbulb, Award, Leaf } from 'lucide-react'

const FarmersTrainingCenter = () => {
  const images = [
    '/images/farmers1.jpg',
    '/images/farmers2.jpg',
    '/images/farmers3.jpg'
  ]

  return (
    <div className="ftc-service-page">
      <section className="ftc-service-hero">
        <div className="ftc-service-hero-content">
          <div className="ftc-service-hero-text">
            <h1>Farmers Training Center</h1>
            <p>Empowering farmers with modern agricultural techniques and sustainable practices</p>
          </div>
          <div className="ftc-service-hero-carousel">
            <ImageCarousel images={images} />
          </div>
        </div>
      </section>

      <section className="ftc-service-content">
        <div className="ftc-service-content-grid">
          <div className="ftc-service-main-content">
            <h2>About Our Training Center</h2>
            <p>
              Our Farmers Training Center is dedicated to enhancing agricultural productivity and farmer welfare
              through modern farming techniques, sustainable practices, and comprehensive support services. We
              help farmers increase yields, reduce costs, and improve their livelihoods.
            </p>

            <h3>Training Programs</h3>
            <ul>
              <li>Modern farming techniques and best practices</li>
              <li>Organic farming and natural agriculture</li>
              <li>Soil health management and testing</li>
              <li>Water conservation and irrigation methods</li>
              <li>Integrated pest management</li>
              <li>Crop diversification and planning</li>
              <li>Post-harvest management and storage</li>
              <li>Marketing and value addition</li>
            </ul>

            <h3>Support Services</h3>
            <ul>
              <li>Soil testing laboratory</li>
              <li>Demonstration plots for new techniques</li>
              <li>Access to quality seeds and inputs</li>
              <li>Farm mechanization support</li>
              <li>Market linkage and price information</li>
              <li>Expert consultation and field visits</li>
              <li>Financial literacy and credit linkage</li>
            </ul>
          </div>

          <div className="ftc-service-sidebar">
            <div className="ftc-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Farmers:</strong> 2000+ trained</li>
                <li><strong>Villages:</strong> 100+</li>
                <li><strong>Programs:</strong> Monthly</li>
                <li><strong>Experts:</strong> 10+</li>
                <li><strong>Demo Plots:</strong> 5 acres</li>
              </ul>
            </div>

            <div className="ftc-contact-card">
              <h3>Join Training</h3>
              <p>Register for upcoming programs</p>
              <button className="ftc-cta-button">Register Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="ftc-service-features">
        <h2>Our Impact</h2>
        <div className="ftc-features-grid">
          <div className="ftc-feature-card">
            <Sprout size={48} />
            <h3>Better Yields</h3>
            <p>Modern techniques leading to increased crop productivity</p>
          </div>
          <div className="ftc-feature-card">
            <TrendingUp size={48} />
            <h3>Higher Income</h3>
            <p>Improved farming practices resulting in better profits</p>
          </div>
          <div className="ftc-feature-card">
            <Leaf size={48} />
            <h3>Sustainable Farming</h3>
            <p>Eco-friendly practices for long-term agricultural sustainability</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FarmersTrainingCenter

import React from 'react'
import './SOMA.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import { Award, Users, Briefcase, TrendingUp, Target, Zap } from 'lucide-react'

const SOMA = () => {
  const images = [
    '/images/soma1.jpg',
    '/images/soma2.jpg',
    '/images/soma3.jpg'
  ]

  return (
    <div className="soma-service-page">
      <section className="soma-service-hero">
        <div className="soma-service-hero-content">
          <div className="soma-service-hero-text">
            <h1>SOMA - Skill Development Center</h1>
            <p>Building careers through comprehensive skill development and vocational training</p>
          </div>
          <div className="soma-service-hero-carousel">
            <ImageCarousel images={images} />
          </div>
        </div>
      </section>

      <section className="soma-service-content">
        <div className="soma-service-content-grid">
          <div className="soma-service-main-content">
            <h2>About SOMA</h2>
            <p>
              SOMA (Skill Oriented Multi Activity Centre) is our flagship skill development initiative that
              provides vocational training and skill enhancement programs to youth and adults. We focus on
              industry-relevant skills to improve employability and create livelihood opportunities.
            </p>

            <h3>Training Programs</h3>
            <ul>
              <li>Computer and IT skills training</li>
              <li>Tailoring and garment making</li>
              <li>Beauty and wellness courses</li>
              <li>Electrical and electronics repair</li>
              <li>Plumbing and construction skills</li>
              <li>Accounting and office management</li>
              <li>Mobile and laptop repair</li>
              <li>Spoken English and communication skills</li>
            </ul>

            <h3>Program Features</h3>
            <ul>
              <li>Industry-certified courses</li>
              <li>Hands-on practical training</li>
              <li>Experienced trainers and mentors</li>
              <li>Placement assistance</li>
              <li>Entrepreneurship support</li>
              <li>Flexible timing options</li>
              <li>Affordable fees with scholarships</li>
            </ul>
          </div>

          <div className="soma-service-sidebar">
            <div className="soma-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Courses:</strong> 15+</li>
                <li><strong>Trainees:</strong> 1000+ annually</li>
                <li><strong>Duration:</strong> 3-6 months</li>
                <li><strong>Placement:</strong> 80%</li>
                <li><strong>Trainers:</strong> 20+</li>
              </ul>
            </div>

            <div className="soma-contact-card">
              <h3>Enroll Today</h3>
              <p>Start your journey to a better career</p>
              <button className="soma-cta-button">Register Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="soma-service-features">
        <h2>Why Choose SOMA</h2>
        <div className="soma-features-grid">
          <div className="soma-feature-card">
            <Award size={48} />
            <h3>Certified Training</h3>
            <p>Industry-recognized certification upon course completion</p>
          </div>
          <div className="soma-feature-card">
            <Briefcase size={48} />
            <h3>Job Placement</h3>
            <p>Strong placement support with partner companies</p>
          </div>
          <div className="soma-feature-card">
            <TrendingUp size={48} />
            <h3>Career Growth</h3>
            <p>Skills that lead to better employment and income opportunities</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SOMA

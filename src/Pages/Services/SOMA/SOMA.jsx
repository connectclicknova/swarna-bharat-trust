import React from 'react'
import './SOMA.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import PinterestGallery from '../../../Components/PinterestGallery/PinterestGallery'
import { Award, Users, Briefcase, TrendingUp, Target, Zap } from 'lucide-react'

const SOMA = () => {
  const images = [
    '/images/soma1.jpg',
    '/images/soma2.jpg',
    '/images/soma3.jpg'
  ]

  const galleryImages = [
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/1.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/2.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/3.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/4.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/5.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/6.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/7.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/8.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/9.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/10.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/11.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/12.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/13.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/14.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/15.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/16.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/17.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/18.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/19.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/20.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/21.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/22.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/23.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/24.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/25.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/26.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/27.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/28.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/29.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/30.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/31.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Soma/32.jpeg'
  ]

  return (
    <div className="soma-service-page">
      <section className="soma-service-hero">
        <div className="soma-service-hero-content">
          <div className="soma-service-hero-text">
            <h1>SOMA - Skill Development Center</h1>
            <p>Building careers through comprehensive skill development and vocational training</p>
          </div>
          {/* <div className="soma-service-hero-carousel">
            <ImageCarousel images={images} />
          </div> */}
        </div>
      </section>

      <section className="soma-service-content">
        <div className="soma-service-content-grid">
          <div className="soma-service-main-content">
            <h2>Swarna Bharat – SOMA Institute of Technical Training</h2>
            <p>
              SOMA (Skill Oriented Multi Activity Centre) is a significant initiative of Swarna Bharat Trust aimed at 
              providing Technical Training and creating sustainable livelihood programs for rural unemployed youth who 
              are constrained by low income, inadequate skills, unemployment, and the absence of opportunities for 
              training, development, financial ability, and bargaining power at economic and social levels.
            </p>

            <h3>State-of-the-Art Infrastructure</h3>
            <p>
              The infrastructure includes state-of-the-art Technical Training programs in Civil Construction, Mechanical, 
              Electrical, Computer & Information Services, and other commercial trades for providing sustainable livelihood 
              opportunities for aspirants. The institute accommodates 300 trainees for ten channels of different training 
              programs in each schedule.
            </p>

            <h3>Training Programs Offered</h3>
            <ul>
              <li>Civil Construction Technology</li>
              <li>Mechanical & Automobile Engineering</li>
              <li>Electrical and Electronics Repair & Maintenance</li>
              <li>Computer Hardware & Software</li>
              <li>Tailoring and Garment Making</li>
              <li>Beauty and Wellness Courses</li>
              <li>Plumbing and Sanitary Works</li>
              <li>Motor Rewinding</li>
              <li>Mobile and Laptop Repair</li>
              <li>Accounting and Office Management</li>
              <li>Spoken English and Communication Skills</li>
            </ul>

            <h3>Complete Support During Training</h3>
            <ul>
              <li>FREE Boarding & Lodging throughout the training period</li>
              <li>Industry-certified courses with practical training</li>
              <li>Experienced trainers and industry experts as mentors</li>
              <li>Modern equipment and hands-on learning facilities</li>
              <li>Placement assistance with partner companies</li>
              <li>Entrepreneurship support for self-employment</li>
              <li>Flexible timing options to suit different needs</li>
            </ul>

            <h3>Our Impact</h3>
            <p>
              SOMA Institute has successfully trained thousands of rural youth, enabling them to secure meaningful 
              employment or start their own businesses. Our focus on practical, industry-relevant skills ensures that 
              our graduates are job-ready from day one. The institute has become a beacon of hope for rural youth 
              seeking to improve their economic prospects.
            </p>
          </div>

          <div className="soma-service-sidebar">
            <div className="soma-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Training Channels:</strong> 10 different programs</li>
                <li><strong>Capacity:</strong> 300 trainees per batch</li>
                <li><strong>Courses:</strong> 15+ technical trades</li>
                <li><strong>Duration:</strong> 3-6 months</li>
                <li><strong>Boarding:</strong> Free accommodation</li>
                <li><strong>Placement:</strong> 80%+ success rate</li>
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

      <PinterestGallery images={galleryImages} title="SOMA Gallery" />
    </div>
  )
}

export default SOMA

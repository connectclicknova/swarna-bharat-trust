import React from 'react'
import './SIRED.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import PinterestGallery from '../../../Components/PinterestGallery/PinterestGallery'
import { Briefcase, TrendingUp, Users, Lightbulb, Target, Award } from 'lucide-react'

const SIRED = () => {
  const images = [
    '/images/sired1.jpg',
    '/images/sired2.jpg',
    '/images/sired3.jpg'
  ]

  const galleryImages = [
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/SIERED/4.jpeg?updatedAt=1767621097899',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/SIERED/1.jpeg?updatedAt=1767621097620',
  ]

  return (
    <div className="sired-service-page">
      <section className="sired-service-hero">
        <div className="sired-service-hero-content">
          <div className="sired-service-hero-text">
            <h1>SIRED - Rural Entrepreneurship Development</h1>
            <p>Empowering rural communities through entrepreneurship and sustainable business development</p>
          </div>
          {/* <div className="sired-service-hero-carousel">
            <ImageCarousel images={images} />
          </div> */}
        </div>
      </section>

      <section className="sired-service-content">
        <div className="sired-service-content-grid">
          <div className="sired-service-main-content">
            <h2>SIRED - Swarna Bharat Institute of Rural Entrepreneurship Development</h2>
            <p>
              SIRED is dedicated to fostering entrepreneurship in rural areas by providing comprehensive training, 
              resources, and support to help rural entrepreneurs establish and grow sustainable businesses. Our mission 
              is to create economic opportunities and improve livelihoods in rural communities through entrepreneurship 
              development.
            </p>

            <h3>Our Comprehensive Approach</h3>
            <p>
              We work with the Rural Self Employment Training Institutes (RSETI) established to impart free training 
              to enhance self-employment opportunities for men and women in different technical trades, repairs, and 
              servicing. The Trust in association with GMR Varalakshmi Foundation and Union Bank (formerly Andhra Bank) 
              makes relentless efforts in the direction of rural empowerment.
            </p>

            <h3>Vocational Training Programs (All FREE)</h3>
            <ul>
              <li>Cell Phone repair and servicing</li>
              <li>Television repair and maintenance</li>
              <li>Air-conditioner installation and servicing</li>
              <li>Refrigerator repair and maintenance</li>
              <li>Motor Rewinding technology</li>
              <li>Tailoring and Fashion design</li>
              <li>Computer Hardware & Software training</li>
              <li>All trainees provided FREE boarding & lodging throughout training</li>
            </ul>

            <h3>Entrepreneurship Development Programs</h3>
            <ul>
              <li>Business planning and development support</li>
              <li>Financial literacy and management training</li>
              <li>Market linkage and networking opportunities</li>
              <li>Technology and digital literacy programs</li>
              <li>Mentorship from successful entrepreneurs</li>
              <li>Access to microfinance and funding support</li>
              <li>The Trust becomes guarantor for bank loans for self-employment</li>
            </ul>

            <h3>Key Focus Areas</h3>
            <ul>
              <li>Agriculture-based enterprises and value addition</li>
              <li>Traditional crafts and handicrafts promotion</li>
              <li>Food processing and agro-based industries</li>
              <li>Service sector businesses development</li>
              <li>Women entrepreneurship development programs</li>
              <li>Youth startup initiatives and incubation</li>
              <li>Skill training for sustainable employment</li>
            </ul>

            <h3>Partnership & Support</h3>
            <p>
              In association with GMR Varalakshmi Foundation and Union Bank, we identify self-employment avenues 
              and impart suitable skills training to the needy. A unique feature of our program is that the Trust 
              becomes the guarantor for bank loans if trainees desire to be self-employed, removing one of the 
              biggest barriers to entrepreneurship.
            </p>

            <h3>Success Metrics</h3>
            <ul>
              <li>500+ entrepreneurs trained and supported</li>
              <li>200+ successful businesses established</li>
              <li>50+ villages impacted</li>
              <li>75% success rate in business sustainability</li>
              <li>1000+ jobs created through these enterprises</li>
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

      <PinterestGallery images={galleryImages} title="SIRED Gallery" />
    </div>
  )
}

export default SIRED

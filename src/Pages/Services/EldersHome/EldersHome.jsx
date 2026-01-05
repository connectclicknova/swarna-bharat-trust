import React from 'react'
import './EldersHome.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import PinterestGallery from '../../../Components/PinterestGallery/PinterestGallery'
import { Home, Heart, Users, Activity, Utensils, Shield } from 'lucide-react'

const EldersHome = () => {
  const images = [
    '/images/elders1.jpg',
    '/images/elders2.jpg',
    '/images/elders3.jpg',
    '/images/elders4.jpg'
  ]

  const galleryImages = [
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/1.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/2.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/3.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/4.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/5.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/6.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/7.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/8.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/9.jpeg',
  ]

  return (
    <div className="elders-service-page">
      <section className="elders-service-hero">
        <div className="elders-service-hero-content">
          <div className="elders-service-hero-text">
            <h1>Elders Home</h1>
            <p>Providing dignified living and compassionate care for senior citizens</p>
          </div>
          {/* <div className="elders-service-hero-carousel">
            <ImageCarousel images={images} />
          </div> */}
        </div>
      </section>

      <section className="elders-service-content">
        <div className="elders-service-content-grid">
          <div className="elders-service-main-content">
            <h2>A Home Away From Home for Our Elders</h2>
            <p>
              Understanding the need to lend emotional support to our elders, Swarna Bharat Trust in association with 
              Bollineni Foundation has established an Elders' Home equipped with all modern facilities. It is truly 
              a home away from home for the elderly, where their health-related issues are very well taken care of, 
              and their emotional and spiritual needs are met with compassion and dignity.
            </p>

            <h3>Our Commitment to Elderly Care</h3>
            <p>
              We provide a safe, comfortable, and caring environment for senior citizens who need support and companionship. 
              Our mission is to ensure that our residents live with dignity, respect, and joy in their golden years, 
              surrounded by love and professional care.
            </p>

            <h3>Facilities & Amenities</h3>
            <ul>
              <li>Comfortable accommodation with modern amenities</li>
              <li>Nutritious meals prepared according to dietary needs and preferences</li>
              <li>24/7 medical care and professional nursing support</li>
              <li>Regular health check-ups and medication management</li>
              <li>Physiotherapy and daily exercise programs</li>
              <li>Television and entertainment facilities</li>
              <li>Well-stocked Library for reading and spiritual growth</li>
              <li>Clean, hygienic, and well-maintained environment</li>
            </ul>

            <h3>Activities & Engagement</h3>
            <ul>
              <li>Recreation and entertainment activities</li>
              <li>Spiritual and religious activities</li>
              <li>Social interaction and community events</li>
              <li>Cultural celebrations and festivals</li>
              <li>Gardening and light physical activities</li>
              <li>Music, art, and creative pursuits</li>
            </ul>

            <h3>Our Care Philosophy</h3>
            <ul>
              <li>Personalized care plans for each resident</li>
              <li>Trained, compassionate, and respectful staff</li>
              <li>Focus on physical, mental, and emotional well-being</li>
              <li>Regular family visits encouraged and facilitated</li>
              <li>Emergency medical support available 24/7</li>
              <li>Counseling and emotional support when needed</li>
              <li>Maintaining dignity and independence of residents</li>
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

      <PinterestGallery images={galleryImages} title="Elders Home Gallery" />
    </div>
  )
}

export default EldersHome

import React from 'react'
import './ResidentialBridgeSchool.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import PinterestGallery from '../../../Components/PinterestGallery/PinterestGallery'
import { School, Home, Users, BookOpen, Heart, Utensils } from 'lucide-react'

const ResidentialBridgeSchool = () => {
  const images = [
    '/images/bridge1.jpg',
    '/images/bridge2.jpg',
    '/images/bridge3.jpg',
    '/images/bridge4.jpg'
  ]

  const galleryImages = [
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/1.jpeg?updatedAt=1767621063032',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/2.jpeg?updatedAt=1767621062999',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/3.jpeg?updatedAt=1767621063375',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/4.jpeg?updatedAt=1767621063032',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/5.jpeg?updatedAt=1767621062999',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/6.jpeg?updatedAt=1767621063375',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/7.jpeg?updatedAt=1767621063375'
  ]

  return (
    <div className="rbs-service-page">
      <section className="rbs-service-hero">
        <div className="rbs-service-hero-content">
          <div className="rbs-service-hero-text">
            <h1>Residential Bridge School</h1>
            <p>Providing education, shelter, and support to underprivileged children</p>
          </div>
          {/* <div className="rbs-service-hero-carousel">
            <ImageCarousel images={images} />
          </div> */}
        </div>
      </section>

      <section className="rbs-service-content">
        <div className="rbs-service-content-grid">
          <div className="rbs-service-main-content">
            <h2>Bringing Hope & Education to School Drop-outs</h2>
            <p>
              Under this transformative initiative, Swarna Bharat Trust takes into its care - orphans, children of 
              single parents who have stopped attending school due to neglect and/or various unforeseen reasons, and 
              child laborers too. Every year up to 150 children receive free food, free accommodation, and free 
              education in this residential school within our campus.
            </p>

            <h3>Our Mission</h3>
            <p>
              The Bridge School program identifies school drop-outs and provides educational awareness to the parents 
              of such children. Children between the ages of 4-14 are trained according to their levels of awareness 
              on education. The children are treated with such love & care by the teachers that they continue their 
              education without worrying thoughts about their home.
            </p>

            <h3>What We Provide - Completely FREE</h3>
            <ul>
              <li>Free residential accommodation in a safe, caring environment</li>
              <li>Quality education from dedicated, compassionate teachers</li>
              <li>Three nutritious meals daily (breakfast, lunch, and dinner)</li>
              <li>Healthcare and medical support</li>
              <li>Clothing, school supplies, and all necessities</li>
              <li>Recreational activities and sports facilities</li>
              <li>Counseling and emotional support</li>
            </ul>

            <h3>Our Dedicated Team</h3>
            <ul>
              <li>Five experienced Teachers providing quality education</li>
              <li>One Care-taker ensuring round-the-clock well-being</li>
              <li>One Mobilizer for community outreach</li>
              <li>Two Cooks preparing nutritious meals</li>
              <li>All staff members take special care of these children throughout the day</li>
            </ul>

            <h3>Success Stories</h3>
            <p>
              The awards that Bridge School has been bestowed with are touchstones for its style of work and delivery. 
              Some children, upon completion of their education, have continued to study further, including pursuing 
              Engineering degrees. These success stories inspire us to continue our mission of transforming lives 
              through education.
            </p>

            <h3>Our Approach</h3>
            <ul>
              <li>Individual attention to each child's unique needs</li>
              <li>Bridge curriculum designed to help children catch up academically</li>
              <li>Life skills training and character development</li>
              <li>Preparation for integration into mainstream schools</li>
              <li>Continuous monitoring and personalized assessment</li>
              <li>Family counseling and community engagement</li>
              <li>Creating a loving, supportive family environment</li>
            </ul>
          </div>

          <div className="rbs-service-sidebar">
            <div className="rbs-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Capacity:</strong> Up to 150 children/year</li>
                <li><strong>Age Group:</strong> 4-14 years</li>
                <li><strong>Target:</strong> Orphans & Drop-outs</li>
                <li><strong>Teachers:</strong> 5</li>
                <li><strong>Support Staff:</strong> 4 (Caretaker, Mobilizer, 2 Cooks)</li>
                <li><strong>Type:</strong> 100% Free Residential</li>
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

      <PinterestGallery images={galleryImages} title="Bridge School Gallery" />
    </div>
  )
}

export default ResidentialBridgeSchool

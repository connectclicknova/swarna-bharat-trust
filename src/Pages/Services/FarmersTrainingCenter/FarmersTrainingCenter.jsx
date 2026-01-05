import React from 'react'
import './FarmersTrainingCenter.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import PinterestGallery from '../../../Components/PinterestGallery/PinterestGallery'
import { Sprout, TrendingUp, Users, Lightbulb, Award, Leaf } from 'lucide-react'

const FarmersTrainingCenter = () => {
  const images = [
    '/images/farmers1.jpg',
    '/images/farmers2.jpg',
    '/images/farmers3.jpg'
  ]

  const galleryImages = [
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Farmer%20Training/1.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Farmer%20Training/2.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Farmer%20Training/3.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Farmer%20Training/4.jpeg',
  ]

  return (
    <div className="ftc-service-page">
      <section className="ftc-service-hero">
        <div className="ftc-service-hero-content">
          <div className="ftc-service-hero-text">
            <h1>Farmers Training Center</h1>
            <p>Empowering farmers with modern agricultural techniques and sustainable practices</p>
          </div>
          {/* <div className="ftc-service-hero-carousel">
            <ImageCarousel images={images} />
          </div> */}
        </div>
      </section>

      <section className="ftc-service-content">
        <div className="ftc-service-content-grid">
          <div className="ftc-service-main-content">
            <h2>Empowering Farmers Through Knowledge & Technology</h2>
            <p>
              The Trust runs a comprehensive Training Centre for Farmers, conducting regular programs on modern 
              agricultural practices, usage of pesticides, nutrition management, micro-irrigation techniques, 
              cultivation of new varieties of crops, medicinal plants, and new technology in farming to enhance 
              yield and improve farmers' livelihoods.
            </p>

            <h3>Our Mission</h3>
            <p>
              We are dedicated to enhancing agricultural productivity and farmer welfare through modern farming 
              techniques, sustainable practices, and comprehensive support services. Our goal is to help farmers 
              increase yields, reduce costs, improve quality, and build sustainable farming businesses.
            </p>

            <h3>Training Programs</h3>
            <ul>
              <li>Modern farming techniques and international best practices</li>
              <li>Proper usage of pesticides and fertilizers</li>
              <li>Organic farming and natural agriculture methods</li>
              <li>Soil health management, testing, and nutrient management</li>
              <li>Micro-irrigation and water conservation methods</li>
              <li>Cultivation of new high-yield varieties of crops</li>
              <li>Medicinal plants cultivation and marketing</li>
              <li>Integrated pest management techniques</li>
              <li>Crop diversification and rotation planning</li>
              <li>Post-harvest management and storage solutions</li>
              <li>Value addition and agro-processing</li>
              <li>Marketing strategies and market linkages</li>
            </ul>

            <h3>Technology & Innovation</h3>
            <p>
              We bring the latest technological advances in agriculture to farmers' doorsteps, including:
            </p>
            <ul>
              <li>Modern irrigation systems and drip technology</li>
              <li>Farm mechanization and equipment training</li>
              <li>Weather forecasting and crop advisory services</li>
              <li>Soil testing facilities and recommendations</li>
              <li>Information on government schemes and subsidies</li>
              <li>Digital tools for farm management</li>
            </ul>

            <h3>Support Services</h3>
            <ul>
              <li>On-site soil testing laboratory</li>
              <li>Demonstration plots showcasing new techniques</li>
              <li>Access to quality seeds and organic inputs</li>
              <li>Expert consultation and regular field visits</li>
              <li>Market price information and linkage support</li>
              <li>Financial literacy and credit linkage programs</li>
              <li>Networking with agricultural universities and research centers</li>
            </ul>

            <h3>Special Initiatives</h3>
            <ul>
              <li>Training on alternate crops for better income</li>
              <li>Support for artisans to become self-employed</li>
              <li>Women farmer empowerment programs</li>
              <li>Youth in agriculture initiatives</li>
              <li>Farmer Producer Organization (FPO) development</li>
            </ul>
          </div>

          <div className="ftc-service-sidebar">
            <div className="ftc-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Focus Areas:</strong> Technology & Innovation</li>
                <li><strong>Programs:</strong> Monthly training sessions</li>
                <li><strong>Farmers Trained:</strong> 2000+</li>
                <li><strong>Villages Covered:</strong> 100+</li>
                <li><strong>Services:</strong> Soil testing, Expert advice</li>
                <li><strong>Support:</strong> Market linkage, Credit</li>
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

      <PinterestGallery images={galleryImages} title="Training Center Gallery" />
    </div>
  )
}

export default FarmersTrainingCenter

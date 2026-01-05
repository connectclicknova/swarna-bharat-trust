import React from 'react'
import './RuralHealthDentalCare.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import PinterestGallery from '../../../Components/PinterestGallery/PinterestGallery'
import { Heart, Users, Stethoscope, Award, Shield, Activity } from 'lucide-react'

const RuralHealthDentalCare = () => {
  const images = [
    '/images/health1.jpg',
    '/images/health2.jpg',
    '/images/health3.jpg',
    '/images/health4.jpg'
  ]

  const galleryImages = [
    '/images/health1.jpg',
    '/images/health2.jpg',
    '/images/health3.jpg',
    '/images/health4.jpg',
    '/images/health1.jpg',
    '/images/health2.jpg'
  ]

  return (
    <div className="rhdc-service-page">
      <section className="rhdc-service-hero">
        <div className="rhdc-service-hero-content">
          <div className="rhdc-service-hero-text">
            <h1>Rural Health & Dental Care</h1>
            <p>Bringing quality healthcare and dental services to rural communities</p>
          </div>
          {/* <div className="rhdc-service-hero-carousel">
            <ImageCarousel images={images} />
          </div> */}
        </div>
      </section>

      <section className="rhdc-service-content">
        <div className="rhdc-service-content-grid">
          <div className="rhdc-service-main-content">
            <h2>Comprehensive Healthcare at Your Doorstep</h2>
            <p>
              Swarna Bharat Trust runs a Rural Health Centre staffed with a full-time physician, Gynecologist, and 
              four paramedical staff along with lab technicians who serve patients with dedication and care. 
              Investigations are conducted for patients and necessary treatment is provided. Apart from Allopathic 
              treatment, experts in Homeopathy and Ayurveda can also be consulted.
            </p>

            <h3>Dental Hospital Services (Since 2006)</h3>
            <p>
              Dental Hospital services have been available to beneficiaries within the premises of the Trust since 2006. 
              All patients receive appropriate dental treatment and medicines, <strong>free of charge</strong>. 
              Activities to impart dental hygiene & awareness are regularly conducted in surrounding villages. 
              Currently, this initiative is supported by Vishnu Dental Hospitals, Bhimavaram.
            </p>

            <h3>Medical Services</h3>
            <ul>
              <li>General medical consultations with experienced physicians</li>
              <li>Gynecological care and women's health services</li>
              <li>Chronic disease management (diabetes, hypertension)</li>
              <li>Maternal and child health services</li>
              <li>Immunization and vaccination programs</li>
              <li>Laboratory tests and diagnostic facilities</li>
              <li>Minor surgical procedures</li>
              <li>First aid and emergency care</li>
              <li>Allopathy, Homeopathy, and Ayurveda treatment options</li>
            </ul>

            <h3>Dental Care Services</h3>
            <ul>
              <li>Comprehensive dental check-ups and consultations</li>
              <li>Professional teeth cleaning and scaling</li>
              <li>Tooth extraction and cavity fillings</li>
              <li>Root canal treatment</li>
              <li>Dentures and dental prosthetics</li>
              <li>Pediatric dental care</li>
              <li>Oral health education and awareness</li>
              <li>Preventive dental care programs</li>
              <li>FREE treatment and medicines</li>
            </ul>

            <h3>Free Medical Camps (25+ Years of Service)</h3>
            <p>
              We have been conducting free medical camps every month for over 25 years, engaging specialist doctors 
              from renowned hospitals such as Global, Kamineni, Star, Rainbow, Medwin, Vijaya, and Care across Chennai, 
              Hyderabad, and other places. The Red Cross and Indian Medical Association (IMA) join the Trust in 
              conducting these medical camps at regular intervals.
            </p>

            <h3>Special Health Initiatives</h3>
            <ul>
              <li>Jaipur Foot camps in association with Bhagwan Mahaveer Viklang Sahayata Samiti</li>
              <li>Cleft lip correction in association with Meenakshi Dental Hospitals</li>
              <li>Regular health screening in villages</li>
              <li>Health awareness and education programs</li>
              <li>Collaboration with premier healthcare institutions</li>
            </ul>
          </div>

          <div className="rhdc-service-sidebar">
            <div className="rhdc-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Physician:</strong> Full-time</li>
                <li><strong>Gynecologist:</strong> Available</li>
                <li><strong>Staff:</strong> 4 Paramedical + Lab Techs</li>
                <li><strong>Dental Services:</strong> Since 2006</li>
                <li><strong>Camps:</strong> Monthly for 25+ years</li>
                <li><strong>Treatment:</strong> Allopathy, Homeopathy, Ayurveda</li>
              </ul>
            </div>

            <div className="rhdc-contact-card">
              <h3>Book Appointment</h3>
              <p>Schedule your health check-up</p>
              <button className="rhdc-cta-button">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="rhdc-service-features">
        <h2>Our Services</h2>
        <div className="rhdc-features-grid">
          <div className="rhdc-feature-card">
            <Stethoscope size={48} />
            <h3>Comprehensive Care</h3>
            <p>Complete medical and dental services under one roof</p>
          </div>
          <div className="rhdc-feature-card">
            <Heart size={48} />
            <h3>Affordable Healthcare</h3>
            <p>Quality healthcare services at minimal cost</p>
          </div>
          <div className="rhdc-feature-card">
            <Activity size={48} />
            <h3>Preventive Focus</h3>
            <p>Emphasis on prevention through camps and awareness programs</p>
          </div>
        </div>
      </section>

      <PinterestGallery images={galleryImages} title="Health & Dental Care Gallery" />
    </div>
  )
}

export default RuralHealthDentalCare

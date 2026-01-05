import React from 'react'
import './VeterinaryHospital.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import PinterestGallery from '../../../Components/PinterestGallery/PinterestGallery'
import { Heart, Users, Award, Shield, Stethoscope, TrendingUp } from 'lucide-react'

const VeterinaryHospital = () => {
  const images = [
    '/images/vet1.jpg',
    '/images/vet2.jpg',
    '/images/vet3.jpg'
  ]

  const galleryImages = [
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Veternity%20Hospital/1.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Veternity%20Hospital/2.jpeg',
  ]

  return (
    <div className="vet-service-page">
      <section className="vet-service-hero">
        <div className="vet-service-hero-content">
          <div className="vet-service-hero-text">
            <h1>Veterinary Hospital</h1>
            <p>Comprehensive animal healthcare services for livestock and pets</p>
          </div>
          {/* <div className="vet-service-hero-carousel">
            <ImageCarousel images={images} />
          </div> */}
        </div>
      </section>

      <section className="vet-service-content">
        <div className="vet-service-content-grid">
          <div className="vet-service-main-content">
            <h2>Comprehensive Veterinary Care for Rural Communities</h2>
            <p>
              The Trust runs a <strong>FREE Veterinary Hospital</strong> dedicated to improving animal health and 
              supporting farmers in maintaining healthy, productive livestock. We conduct regular camps for the benefit 
              of farmers, providing services including Artificial Insemination, vaccination, and distribution of 
              medicines - all without any charge.
            </p>

            <h3>Mobile Veterinary Medical Unit</h3>
            <p>
              Understanding the challenges faced by farmers in remote areas, we operate a Mobile Veterinary Medical 
              Unit that brings veterinary services directly to villages. These services are provided completely free 
              of charge, ensuring that even the most distant communities have access to quality animal healthcare.
            </p>

            <h3>Services Offered (All FREE)</h3>
            <ul>
              <li>General health check-ups and consultations for all animals</li>
              <li>Comprehensive vaccination and immunization programs</li>
              <li>Treatment for common diseases and infections</li>
              <li>Surgical procedures and emergency veterinary care</li>
              <li>Pregnancy diagnosis and obstetric care for livestock</li>
              <li>Deworming and parasite control programs</li>
              <li>Artificial Insemination services for breed improvement</li>
              <li>Laboratory diagnostic services</li>
              <li>Distribution of medicines at no cost</li>
            </ul>

            <h3>Regular Veterinary Camps</h3>
            <p>
              We conduct regular veterinary camps in villages focusing on:
            </p>
            <ul>
              <li>Mass vaccination drives to prevent disease outbreaks</li>
              <li>Artificial Insemination for genetic improvement of livestock</li>
              <li>Free distribution of medicines and supplements</li>
              <li>Health screening of cattle, buffaloes, goats, and sheep</li>
              <li>Expert consultation on animal health issues</li>
              <li>Awareness programs on livestock management</li>
            </ul>

            <h3>Specialized Programs</h3>
            <ul>
              <li>Livestock health management training for farmers</li>
              <li>Disease prevention awareness programs</li>
              <li>Fodder and nutrition consultation services</li>
              <li>Breed improvement initiatives</li>
              <li>Emergency care available for critical cases</li>
              <li>Mobile veterinary units reaching remote villages</li>
              <li>Collaboration with animal husbandry departments</li>
            </ul>

            <h3>Our Impact on Rural Economy</h3>
            <p>
              By providing free veterinary care, we help farmers:
            </p>
            <ul>
              <li>Maintain healthy and productive livestock</li>
              <li>Reduce mortality rates in animals</li>
              <li>Increase milk and meat production</li>
              <li>Save on veterinary expenses</li>
              <li>Improve breeding quality through AI services</li>
              <li>Prevent disease outbreaks through timely vaccination</li>
            </ul>
          </div>

          <div className="vet-service-sidebar">
            <div className="vet-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Cost:</strong> 100% FREE services</li>
                <li><strong>Animals Treated:</strong> 5000+/year</li>
                <li><strong>Camps:</strong> Regular village visits</li>
                <li><strong>Services:</strong> AI, Vaccination, Treatment</li>
                <li><strong>Mobile Unit:</strong> Available</li>
                <li><strong>Villages Served:</strong> 50+</li>
              </ul>
            </div>

            <div className="vet-contact-card">
              <h3>Emergency Care</h3>
              <p>Call us for veterinary assistance</p>
              <button className="vet-cta-button">Contact Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="vet-service-features">
        <h2>Our Commitment</h2>
        <div className="vet-features-grid">
          <div className="vet-feature-card">
            <Stethoscope size={48} />
            <h3>Expert Veterinarians</h3>
            <p>Experienced professionals providing quality animal healthcare</p>
          </div>
          <div className="vet-feature-card">
            <Heart size={48} />
            <h3>Compassionate Care</h3>
            <p>Treating every animal with care, compassion, and expertise</p>
          </div>
          <div className="vet-feature-card">
            <Shield size={48} />
            <h3>Preventive Healthcare</h3>
            <p>Focus on disease prevention through vaccination and awareness</p>
          </div>
        </div>
      </section>

      <PinterestGallery images={galleryImages} title="Veterinary Hospital Gallery" />
    </div>
  )
}

export default VeterinaryHospital

import React from 'react'
import './LVPrasadEyeInstitute.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import PinterestGallery from '../../../Components/PinterestGallery/PinterestGallery'
import { Eye, Heart, Users, Award, Target, Shield } from 'lucide-react'

const LVPrasadEyeInstitute = () => {
  const images = [
    '/images/eye1.jpg',
    '/images/eye2.jpg',
    '/images/eye3.jpg',
    '/images/eye4.jpg'
  ]

  const galleryImages = [
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/1.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/2.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/3.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/4.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/5.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/6.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/7.jpeg',
    'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/8.jpeg',
  ]

  return (
    <div className="lvpei-service-page">
      <section className="lvpei-service-hero">
        <div className="lvpei-service-hero-content">
          <div className="lvpei-service-hero-text">
            <h1>L V Prasad Eye Institute</h1>
            <p>Comprehensive eye care services bringing the gift of sight to rural communities</p>
          </div>
          {/* <div className="lvpei-service-hero-carousel">
            <ImageCarousel images={images} />
          </div> */}
        </div>
      </section>

      <section className="lvpei-service-content">
        <div className="lvpei-service-content-grid">
          <div className="lvpei-service-main-content">
            <h2>Partnership with L V Prasad Eye Institute</h2>
            <p>
              In partnership with the renowned L V Prasad Eye Institute of Hyderabad, we run a comprehensive Eye Hospital 
              within our campus at Nellore. This collaboration brings world-class eye care services to rural communities, 
              making quality eye care accessible and affordable to all who need it.
            </p>

            <h3>Our Daily Impact</h3>
            <p>
              On an average, <strong>twelve surgeries are performed here every day</strong>. This remarkable achievement 
              reflects our commitment to restoring the gift of sight to those in need. Medicines are provided free of 
              charge for all patients who undergo operations, ensuring that financial constraints do not prevent anyone 
              from receiving essential eye care.
            </p>

            <h3>Comprehensive Eye Care Services</h3>
            <ul>
              <li>Comprehensive eye examinations by specialist ophthalmologists</li>
              <li>Cataract surgery and IOL (Intraocular Lens) implantation</li>
              <li>Glaucoma diagnosis, treatment, and management</li>
              <li>Diabetic retinopathy screening and treatment</li>
              <li>Pediatric eye care and vision screening</li>
              <li>Refractive error correction and spectacles provision</li>
              <li>Corneal treatments and procedures</li>
              <li>Low vision aids and rehabilitation services</li>
              <li>Advanced diagnostic facilities</li>
            </ul>

            <h3>Special Community Programs</h3>
            <ul>
              <li>Free eye screening camps in villages across the region</li>
              <li>Subsidized cataract surgeries for the economically weaker sections</li>
              <li>School eye health programs for early detection</li>
              <li>Diabetic eye screening camps in collaboration with health centers</li>
              <li>Free spectacles distribution for needy patients</li>
              <li>Telemedicine consultations for remote areas</li>
              <li>Community awareness programs on eye health</li>
              <li>Preventive care education</li>
            </ul>

            <h3>Why Choose Our Eye Care Center</h3>
            <ul>
              <li>Association with L V Prasad Eye Institute - a world-renowned institution</li>
              <li>State-of-the-art equipment and modern facilities</li>
              <li>Experienced ophthalmologists and trained support staff</li>
              <li>Free medicines for surgery patients</li>
              <li>Affordable treatment options for rural communities</li>
              <li>Comprehensive range of services from screening to surgery</li>
              <li>Follow-up care and post-operative support</li>
            </ul>
          </div>

          <div className="lvpei-service-sidebar">
            <div className="lvpei-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Daily Surgeries:</strong> 12 on average</li>
                <li><strong>Partner:</strong> L V Prasad Eye Institute</li>
                <li><strong>Location:</strong> Nellore Campus</li>
                <li><strong>Patients:</strong> 10,000+ annually</li>
                <li><strong>Free Medicines:</strong> For surgery patients</li>
                <li><strong>Camps:</strong> Regular village screenings</li>
              </ul>
            </div>

            <div className="lvpei-contact-card">
              <h3>Book Appointment</h3>
              <p>Schedule your eye check-up today</p>
              <button className="lvpei-cta-button">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="lvpei-service-features">
        <h2>Why Choose Us</h2>
        <div className="lvpei-features-grid">
          <div className="lvpei-feature-card">
            <Eye size={48} />
            <h3>Expert Care</h3>
            <p>Experienced ophthalmologists and state-of-the-art equipment</p>
          </div>
          <div className="lvpei-feature-card">
            <Heart size={48} />
            <h3>Affordable Treatment</h3>
            <p>Quality eye care at subsidized rates for rural communities</p>
          </div>
          <div className="lvpei-feature-card">
            <Shield size={48} />
            <h3>Comprehensive Services</h3>
            <p>Complete range of eye care from screening to surgery</p>
          </div>
        </div>
      </section>

      <PinterestGallery images={galleryImages} title="Eye Institute Gallery" />
    </div>
  )
}

export default LVPrasadEyeInstitute

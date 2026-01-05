import React from 'react'
import './SwarnaBharathiVidyamandir.css'
import ImageCarousel from '../../../Components/ImageCarousel/ImageCarousel'
import PinterestGallery from '../../../Components/PinterestGallery/PinterestGallery'
import { GraduationCap, Users, BookOpen, Award, Target, Heart } from 'lucide-react'

const SwarnaBharathiVidyamandir = () => {
  const images = [
    '/images/school1.jpg',
    '/images/school2.jpg',
    '/images/school3.jpg'
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
    <div className="svb-service-page">
      <section className="svb-service-hero">
        <div className="svb-service-hero-content">
          <div className="svb-service-hero-text">
            <h1>Swarna Bharathi Vidyamandir</h1>
            <p>Empowering young minds through quality education and holistic development</p>
          </div>
          {/* <div className="svb-service-hero-carousel">
            <ImageCarousel images={images} />
          </div> */}
        </div>
      </section>

      <section className="svb-service-content">
        <div className="svb-service-content-grid">
          <div className="svb-service-main-content">
            <h2>About Swarna Bharati Vidya Mandir</h2>
            <p>
              With an intention to reach out to small-scale farmers and low-income groups in surrounding villages 
              of Venkatachalam, Swarna Bharat Trust has established a school with State syllabus that provides 
              quality education to about 900+ students every year. We are committed to making education accessible 
              and affordable while maintaining high standards of learning.
            </p>

            <h3>What We Provide</h3>
            <ul>
              <li>State Syllabus Education (Classes 1-10)</li>
              <li>Nominal tuition fee up to Rs. 8,000/- per annum per child</li>
              <li>Two sets of uniforms, socks & shoes - FREE</li>
              <li>Books and study materials - FREE</li>
              <li>Mid-day nutritious meal - FREE</li>
              <li>Safe and conducive learning environment</li>
            </ul>

            <h3>Our Mission</h3>
            <p>
              We believe that quality education should not be a privilege but a right for every child. Our school 
              is designed to provide comprehensive education to children from rural backgrounds, ensuring they receive 
              the same opportunities as their urban counterparts. The nominal fee structure ensures that financial 
              constraints do not become a barrier to education.
            </p>

            <h3>Academic Excellence</h3>
            <ul>
              <li>Experienced and dedicated teaching faculty</li>
              <li>Modern classrooms with learning aids</li>
              <li>Well-equipped laboratories for practical learning</li>
              <li>Library with extensive collection of books</li>
              <li>Regular assessments and parent-teacher interactions</li>
              <li>Focus on both academic and character development</li>
            </ul>

            <h3>Beyond Academics</h3>
            <ul>
              <li>Sports and Physical Education programs</li>
              <li>Cultural activities and celebrations</li>
              <li>Computer education and digital literacy</li>
              <li>Health and hygiene awareness programs</li>
              <li>Moral and ethical value education</li>
            </ul>
          </div>

          <div className="svb-service-sidebar">
            <div className="svb-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Students:</strong> 900+ annually</li>
                <li><strong>Syllabus:</strong> State Board</li>
                <li><strong>Classes:</strong> 1-10</li>
                <li><strong>Medium:</strong> Telugu</li>
                <li><strong>Fee:</strong> Up to Rs. 8,000/year</li>
                <li><strong>Free Benefits:</strong> Uniforms, Books, Meals</li>
              </ul>
            </div>

            <div className="svb-contact-card">
              <h3>Get in Touch</h3>
              <p>For admissions and inquiries</p>
              <button className="svb-cta-button">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <section className="svb-service-features">
        <h2>Why Choose Us</h2>
        <div className="svb-features-grid">
          <div className="svb-feature-card">
            <GraduationCap size={48} />
            <h3>Quality Education</h3>
            <p>Comprehensive curriculum focusing on academic excellence and practical knowledge</p>
          </div>
          <div className="svb-feature-card">
            <Users size={48} />
            <h3>Experienced Faculty</h3>
            <p>Dedicated teachers committed to nurturing every student's potential</p>
          </div>
          <div className="svb-feature-card">
            <Heart size={48} />
            <h3>Holistic Development</h3>
            <p>Focus on overall personality development including sports, arts, and life skills</p>
          </div>
        </div>
      </section>

      <PinterestGallery images={galleryImages} title="Our School Gallery" />
    </div>
  )
}

export default SwarnaBharathiVidyamandir

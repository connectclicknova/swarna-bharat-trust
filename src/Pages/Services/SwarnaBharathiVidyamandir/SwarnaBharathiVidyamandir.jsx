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
            <h2>About Our School</h2>
            <p>
              Swarna Bharathi Vidyamandir is a premier educational institution dedicated to providing quality education
              to children from all backgrounds. Our school focuses on holistic development, combining academic excellence
              with character building and life skills development.
            </p>

            <h3>Our Programs</h3>
            <ul>
              <li>Primary and Secondary Education (Classes 1-10)</li>
              <li>CBSE Curriculum with focus on practical learning</li>
              <li>Sports and Physical Education</li>
              <li>Arts, Music, and Cultural Activities</li>
              <li>Computer Education and Digital Literacy</li>
              <li>Life Skills and Personality Development</li>
            </ul>

            <h3>Key Features</h3>
            <ul>
              <li>Experienced and dedicated teaching staff</li>
              <li>Modern infrastructure and well-equipped classrooms</li>
              <li>Library with extensive collection of books</li>
              <li>Science and computer laboratories</li>
              <li>Playground and sports facilities</li>
              <li>Regular parent-teacher meetings</li>
            </ul>
          </div>

          <div className="svb-service-sidebar">
            <div className="svb-sidebar-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><strong>Established:</strong> 2010</li>
                <li><strong>Students:</strong> 500+</li>
                <li><strong>Teachers:</strong> 30+</li>
                <li><strong>Classes:</strong> 1-10</li>
                <li><strong>Medium:</strong> English & Telugu</li>
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

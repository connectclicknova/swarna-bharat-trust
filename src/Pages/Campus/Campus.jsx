import React from 'react'
import './Campus.css'
import { MapPin, ArrowRight, Building2, Users, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const Campus = () => {
  return (
    <div className="campus-page">
      {/* Hero Section */}
      <section className="campus-hero">
        <div className="campus-hero-overlay"></div>
        <div className="container">
          <div className="campus-hero-content">
            <h1 className="campus-hero-title">Our Campuses</h1>
            <p className="campus-hero-subtitle">
              Spreading the light of education and empowerment across three vibrant chapters
            </p>
          </div>
        </div>
      </section>

      {/* Main Campus - Venkatachalam */}
      <section className="main-campus-section">
        <div className="container">
          <div className="campus-intro">
            <div className="campus-intro-badge">Main Chapter</div>
            <h2>Swarna Bharat Trust - Venkatachalam</h2>
            <p className="campus-intro-text">
              The heart of our mission, established in 2001 at Venkatachalam, Nellore District, Andhra Pradesh. 
              This is where it all began - a vision to transform rural communities through comprehensive 
              development programs.
            </p>
          </div>

          <div className="main-campus-grid">
            <div className="main-campus-card">
              <div className="campus-card-icon" style={{ backgroundColor: '#ff6318' }}>
                <Building2 size={32} />
              </div>
              <h3>Educational Excellence</h3>
              <p>
                Home to Swarna Bharathi Vidyamandir with 900+ students and Residential Bridge School 
                serving 150 children annually with completely free education and facilities.
              </p>
            </div>

            <div className="main-campus-card">
              <div className="campus-card-icon" style={{ backgroundColor: '#372035' }}>
                <Users size={32} />
              </div>
              <h3>Skill Development</h3>
              <p>
                SOMA Institute provides technical training to 300 trainees across 10 different channels, 
                empowering rural youth with industry-relevant skills.
              </p>
            </div>

            <div className="main-campus-card">
              <div className="campus-card-icon" style={{ backgroundColor: '#ff6318' }}>
                <Award size={32} />
              </div>
              <h3>Healthcare Services</h3>
              <p>
                Comprehensive healthcare including LV Prasad Eye Institute (12 surgeries daily), 
                Rural Health & Dental Care, and Veterinary Hospital - all serving the community.
              </p>
            </div>
          </div>

          <div className="campus-facilities">
            <h3>Complete Campus Facilities</h3>
            <div className="facilities-grid">
              <div className="facility-item">
                <span className="facility-icon">🏫</span>
                <span>Educational Institutions</span>
              </div>
              <div className="facility-item">
                <span className="facility-icon">🏥</span>
                <span>Healthcare Centers</span>
              </div>
              <div className="facility-item">
                <span className="facility-icon">💼</span>
                <span>Skill Training Centers</span>
              </div>
              <div className="facility-item">
                <span className="facility-icon">🌾</span>
                <span>Farmers Training Center</span>
              </div>
              <div className="facility-item">
                <span className="facility-icon">👴</span>
                <span>Elders Home</span>
              </div>
              <div className="facility-item">
                <span className="facility-icon">👩‍💼</span>
                <span>SIRED - Women Empowerment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vijayawada Chapter */}
      <section className="chapter-section vijayawada-section">
        <div className="container">
          <div className="chapter-content-wrapper">
            <div className="chapter-text-content">
              <div className="chapter-badge">Vijayawada Chapter</div>
              <h2>Dr. Yellapragada Subba Rao Center of Excellence</h2>
              <p className="chapter-description">
                Inaugurated by Hon'ble Chief Minister Sri N. Chandrababu Naidu on Ugadi, 30th March 2025, 
                this center focuses on Pharma Manufacturing Skills training in association with leading 
                pharma companies and educational institutions.
              </p>
              
              <div className="chapter-highlights">
                <div className="highlight-item">
                  <div className="highlight-number">4</div>
                  <div className="highlight-text">Training Centers</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">15+</div>
                  <div className="highlight-text">Courses Offered</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">100%</div>
                  <div className="highlight-text">Free Training</div>
                </div>
              </div>

              <div className="chapter-key-features">
                <h4>Key Initiatives</h4>
                <ul>
                  <li>Dr. Yellapragada Subba Rao Pharma Manufacturing Skills Center</li>
                  <li>Pratibha: Dr. Abdul Kalam Skill Development Centre</li>
                  <li>Swashakthi: Rural Vocational Training Centre</li>
                  <li>Cyber Grameen: Computer Training Centre</li>
                  <li>Primary Health Centre with 12-bed Emergency Care Unit</li>
                  <li>Farmer Training Centre & Knowledge Center</li>
                </ul>
              </div>

              <Link to="/campus/vijayawada" className="know-more-btn">
                <span>Know More</span>
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="chapter-image-content">
              <div className="chapter-image-card">
                <div className="chapter-location">
                  <MapPin size={20} />
                  <span>Vijayawada, Krishna District, Andhra Pradesh</span>
                </div>
                <div className="chapter-stats">
                  <div className="stat-box">
                    <span className="stat-label">Established</span>
                    <span className="stat-value">2025</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-label">Focus</span>
                    <span className="stat-value">Pharma & Skills</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hyderabad Chapter */}
      <section className="chapter-section hyderabad-section">
        <div className="container">
          <div className="chapter-content-wrapper reverse">
            <div className="chapter-image-content">
              <div className="chapter-image-card">
                <div className="chapter-location">
                  <MapPin size={20} />
                  <span>Muchintal, Shamshabad, RR District, Telangana</span>
                </div>
                <div className="chapter-stats">
                  <div className="stat-box">
                    <span className="stat-label">Established</span>
                    <span className="stat-value">2017</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-label">Focus</span>
                    <span className="stat-value">Multi-Sector</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="chapter-text-content">
              <div className="chapter-badge">Hyderabad Chapter</div>
              <h2>Swarna Bharat Trust - Telangana Extension</h2>
              <p className="chapter-description">
                Inaugurated on 16th January 2017 by Hon'ble Union Minister Shri Manohar Parrikar and 
                Hon'ble Chief Minister Shri K. Chandrasekhar Rao, this campus extends our services to 
                Telangana with a focus on generating employability skills for rural youth.
              </p>
              
              <div className="chapter-highlights">
                <div className="highlight-item">
                  <div className="highlight-number">8</div>
                  <div className="highlight-text">Training Centers</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">90+</div>
                  <div className="highlight-text">Villages Served</div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-number">24/7</div>
                  <div className="highlight-text">Hostel Facility</div>
                </div>
              </div>

              <div className="chapter-key-features">
                <h4>Key Initiatives</h4>
                <ul>
                  <li>Pharma Pathashala (First of its kind in India)</li>
                  <li>Atal ji Skill Development Center</li>
                  <li>Deen Dayal Upadhyaya Vocational Training Institute</li>
                  <li>Smart City - Skill Development Center</li>
                  <li>Primary Health Centre with Global Hospitals partnership</li>
                  <li>Computer Training Institute with CYIENT</li>
                </ul>
              </div>

              <Link to="/campus/hyderabad" className="know-more-btn">
                <span>Know More</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="campus-cta-section">
        <div className="container">
          <div className="campus-cta-content">
            <h2>Join Our Mission</h2>
            <p>
              Be a part of the transformation. Whether you're seeking education, skill development, 
              or healthcare services, our campuses are here to serve you.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-btn primary">Get In Touch</Link>
              <Link to="/about" className="cta-btn secondary">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Campus

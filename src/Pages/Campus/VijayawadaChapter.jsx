import React from 'react'
import './VijayawadaChapter.css'
import { Building2, Users, Heart, Award, MapPin, Phone, Mail, Calendar } from 'lucide-react'

const VijayawadaChapter = () => {
  return (
    <div className="vijayawada-chapter-page">
      {/* Hero Section */}
      <section className="vij-hero">
        <div className="vij-hero-overlay"></div>
        <div className="container">
          <div className="vij-hero-content">
            <div className="vij-hero-badge">Vijayawada Chapter</div>
            <h1>Dr. Yellapragada Subba Rao<br/>Center of Excellence</h1>
            <p>Pharma Manufacturing Skills & Rural Development</p>
            <div className="vij-hero-meta">
              <div className="meta-item">
                <Calendar size={20} />
                <span>Inaugurated: 30th March 2025</span>
              </div>
              <div className="meta-item">
                <MapPin size={20} />
                <span>Vijayawada, Krishna District, AP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inauguration Story */}
      <section className="vij-story-section">
        <div className="container">
          <div className="vij-story-content">
            <div className="story-highlight-box">
              <h2>A Historic Beginning</h2>
              <p className="story-lead">
                "Dr. Yellapragada Subba Rao Center of Excellence in Pharma Manufacturing Skills" was 
                inaugurated by the <strong>Hon'ble Chief Minister Sri N. Chandrababu Naidu</strong> on 
                Ugadi, 30th March 2025, marking a new era in pharmaceutical skill development for rural youth.
              </p>
              <p>
                The inauguration ceremony witnessed the august presence of the <strong>13th Vice President 
                of India Sri M Venkaiah Naidu</strong>, Trust Chairman <strong>Sri Kamineni Srinivas</strong>, 
                Managing Trustee <strong>Smt. Deepa Venkat</strong>, along with Ministers of State and MPs, 
                making it a momentous occasion for the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Centers Grid */}
      <section className="vij-centers-section">
        <div className="container">
          <h2 className="section-title">Our Training Centers</h2>
          <p className="section-subtitle">
            Comprehensive skill development programs designed to empower rural youth with industry-ready skills
          </p>

          <div className="vij-centers-grid">
            {/* Pharma Center */}
            <div className="vij-center-card featured">
              <div className="center-card-header">
                <div className="center-icon pharma">
                  <span>💊</span>
                </div>
                <h3>Dr. Yellapragada Subba Rao Pharma Center</h3>
              </div>
              <div className="center-card-body">
                <p className="center-description">
                  State-of-the-art pharmaceutical manufacturing skills training center, offering specialized 
                  courses for Production Chemist and Machine Operator positions.
                </p>
                <div className="center-partnership">
                  <strong>Partnership:</strong> Sri Prasada Raju, MD of Cohance Pharma (formerly Suven Pharma) 
                  enabled the setup of the Pharma Lab as part of their CSR initiative in collaboration with 
                  LSSSDC & Swarna Bharat Trust.
                </div>
                <div className="center-courses">
                  <h4>Training Programs:</h4>
                  <ul>
                    <li>Production Chemist</li>
                    <li>Machine Operator</li>
                    <li>Quality Control Technician</li>
                    <li>Pharma Manufacturing Processes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pratibha Center */}
            <div className="vij-center-card">
              <div className="center-card-header">
                <div className="center-icon skill">
                  <span>🔧</span>
                </div>
                <h3>Pratibha: Dr. Abdul Kalam Skill Development Centre</h3>
              </div>
              <div className="center-card-body">
                <p className="center-partnership">
                  <strong>In association with Indian Bank</strong>
                </p>
                <div className="center-courses">
                  <h4>Courses Offered:</h4>
                  <ul>
                    <li>Plumbing & Sanitary Works</li>
                    <li>Electrical Installation & Maintenance</li>
                    <li>Air Conditioning & Refrigeration</li>
                    <li>Automobile Repair & Driving</li>
                    <li>Welding Technology</li>
                    <li>Rebar Bending</li>
                    <li>Motor Rewinding</li>
                    <li>Carpentry</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Swashakthi Center */}
            <div className="vij-center-card">
              <div className="center-card-header">
                <div className="center-icon vocational">
                  <span>💼</span>
                </div>
                <h3>Swashakthi: Rural Vocational Training Centre</h3>
              </div>
              <div className="center-card-body">
                <p className="center-partnership">
                  <strong>In association with Union Bank (formerly Andhra Bank) & GMR Varalakshmi Foundation</strong>
                </p>
                <div className="center-courses">
                  <h4>Courses Offered:</h4>
                  <ul>
                    <li>Cell Phone Repair</li>
                    <li>TV Repair & Maintenance</li>
                    <li>Two-Wheeler Repair</li>
                    <li>Videography</li>
                    <li>Screen Printing</li>
                    <li>Computer Hardware</li>
                    <li>Sewing & Dress Making</li>
                    <li>Machine Embroidery</li>
                    <li>Fabric Painting</li>
                    <li>Beautician Training</li>
                    <li>Home Nursing</li>
                    <li>Hospitality Management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cyber Grameen */}
            <div className="vij-center-card">
              <div className="center-card-header">
                <div className="center-icon computer">
                  <span>💻</span>
                </div>
                <h3>Cyber Grameen: Computer Training Centre</h3>
              </div>
              <div className="center-card-body">
                <p className="center-partnership">
                  <strong>In association with Vishnu Engineering College, Bhimavaram</strong>
                </p>
                <div className="center-courses">
                  <h4>Courses Offered:</h4>
                  <ul>
                    <li>MS Office Applications</li>
                    <li>C & C++ Programming</li>
                    <li>Web Designing</li>
                    <li>Tally Accounting</li>
                    <li>Advanced Screen Printing</li>
                    <li>Desktop Publishing (DTP)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Section */}
      <section className="vij-healthcare-section">
        <div className="container">
          <div className="vij-healthcare-grid">
            <div className="healthcare-content">
              <h2>Primary Health Centre</h2>
              <h3>12-Bedded Emergency Care Unit</h3>
              <p className="healthcare-partnership">
                <strong>In association with Kamineni Hospitals</strong>
              </p>
              <p>
                Providing comprehensive healthcare services to the rural community with modern facilities 
                and expert medical staff. Our health center ensures quality medical care is accessible to all.
              </p>
              <div className="healthcare-services">
                <h4>Services Provided:</h4>
                <div className="services-grid">
                  <div className="service-item">
                    <Heart size={24} />
                    <span>Health Examination</span>
                  </div>
                  <div className="service-item">
                    <Heart size={24} />
                    <span>Blood Tests</span>
                  </div>
                  <div className="service-item">
                    <Heart size={24} />
                    <span>X-Ray Facilities</span>
                  </div>
                  <div className="service-item">
                    <Heart size={24} />
                    <span>ECG & Scans</span>
                  </div>
                  <div className="service-item">
                    <Heart size={24} />
                    <span>Minor Operations</span>
                  </div>
                  <div className="service-item">
                    <Heart size={24} />
                    <span>Pharmacy</span>
                  </div>
                  <div className="service-item">
                    <Heart size={24} />
                    <span>Eye Testing</span>
                  </div>
                  <div className="service-item">
                    <Heart size={24} />
                    <span>Dental Check-up</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="healthcare-image">
              <div className="healthcare-stats-card">
                <div className="stat-item">
                  <div className="stat-number">12</div>
                  <div className="stat-label">Bedded Facility</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Emergency Care</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Affordable Healthcare</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Training & Knowledge Center */}
      <section className="vij-agriculture-section">
        <div className="container">
          <div className="vij-agriculture-grid">
            <div className="agriculture-card">
              <div className="agriculture-icon">🌾</div>
              <h3>Farmer Training Centre</h3>
              <p className="agriculture-partnership">
                <strong>In association with Mandava Foundation of Nuziveedu Seeds</strong>
              </p>
              <div className="agriculture-programs">
                <h4>Awareness Programs:</h4>
                <ul>
                  <li>Crop Management System</li>
                  <li>Organic Farming Techniques</li>
                  <li>Gardening with High Density Plantation</li>
                  <li>Sustainable Agriculture Practices</li>
                  <li>Modern Farming Technologies</li>
                </ul>
              </div>
            </div>

            <div className="agriculture-card">
              <div className="agriculture-icon">📚</div>
              <h3>Knowledge Center</h3>
              <p className="agriculture-partnership">
                <strong>In association with Dr. BV Raju Foundation</strong>
              </p>
              <p>
                Creating curiosity among children of Zilla Parishad schools of Krishna District through 
                comprehensive lab facilities and learning programs.
              </p>
              <div className="agriculture-programs">
                <h4>Facilities Provided:</h4>
                <ul>
                  <li>Physics Laboratory</li>
                  <li>Chemistry Laboratory</li>
                  <li>Biology Laboratory</li>
                  <li>Mathematics Learning Center</li>
                  <li>Computer Lab</li>
                  <li>Spoken English Classes</li>
                  <li>Eye & Dental Checkups</li>
                  <li>Free Transport from Schools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Facilities */}
      <section className="vij-hostel-section">
        <div className="container">
          <div className="vij-hostel-content">
            <div className="hostel-icon-large">🏠</div>
            <h2>Hostel and Dining Facilities</h2>
            <p className="hostel-description">
              We believe that learning should be accessible to all. To support trainees attending our 
              various training programs, we provide <strong>completely FREE stay and food</strong> throughout 
              the training period.
            </p>
            <div className="hostel-features">
              <div className="hostel-feature">
                <Award size={32} />
                <h4>Separate Accommodation</h4>
                <p>Dedicated facilities for women trainees ensuring safety and comfort</p>
              </div>
              <div className="hostel-feature">
                <Award size={32} />
                <h4>Nutritious Meals</h4>
                <p>Healthy and balanced meals provided three times a day</p>
              </div>
              <div className="hostel-feature">
                <Award size={32} />
                <h4>Safe Environment</h4>
                <p>24/7 security and supportive living conditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="vij-impact-section">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="impact-stats-grid">
            <div className="impact-stat">
              <div className="impact-number">4+</div>
              <div className="impact-label">Training Centers</div>
            </div>
            <div className="impact-stat">
              <div className="impact-number">20+</div>
              <div className="impact-label">Courses Offered</div>
            </div>
            <div className="impact-stat">
              <div className="impact-number">100%</div>
              <div className="impact-label">Free Training & Boarding</div>
            </div>
            <div className="impact-stat">
              <div className="impact-number">1000+</div>
              <div className="impact-label">Lives Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="vij-cta-section">
        <div className="container">
          <div className="vij-cta-content">
            <h2>Join Our Training Programs</h2>
            <p>Transform your future with industry-relevant skills and expert training</p>
            <a href="/contact" className="vij-cta-button">Get Started Today</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VijayawadaChapter

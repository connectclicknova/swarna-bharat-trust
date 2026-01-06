import React from 'react'
import './HyderabadChapter.css'
import { Building2, Users, Heart, Award, MapPin, Calendar, Target, Zap } from 'lucide-react'

const HyderabadChapter = () => {
  return (
    <div className="hyd-chapter-page">
      {/* Hero Section */}
      <section className="hyd-hero">
        <div className="hyd-hero-overlay"></div>
        <div className="container">
          <div className="hyd-hero-content">
            <div className="hyd-hero-badge">Hyderabad Chapter - Telangana</div>
            <h1>Swarna Bharat Trust<br/>Extension of Service</h1>
            <p>Empowering Telangana's Rural Youth Since 2017</p>
            <div className="hyd-hero-meta">
              <div className="meta-item">
                <Calendar size={20} />
                <span>Inaugurated: 16th January 2017</span>
              </div>
              <div className="meta-item">
                <MapPin size={20} />
                <span>Muchintal, Shamshabad, RR District</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="hyd-story-section">
        <div className="container">
          <div className="hyd-story-grid">
            <div className="story-content">
              <h2>Our Journey to Telangana</h2>
              <p className="story-intro">
                After rendering services in the state of Andhra Pradesh for sixteen years, we extended 
                our mission to the new state of Telangana with a singular objective of generating 
                employability skills to the rural youth.
              </p>
              <p>
                Swarna Bharat Trust in association with SEW Foundation was running a vocational training 
                centre by imparting skills in vocational trades and software skills to the youth under 
                the name SWASHAKTHI with an initiative to cover more students in Hyderabad.
              </p>
              <div className="story-highlight">
                <h3>The Vision Expands</h3>
                <p>
                  Being the Pharma and IT capital of India generating a high rate of employment, 
                  Hyderabad constantly looks for trained manpower for growing needs in skills that 
                  require prior knowledge in Packaging, Quality Assurance, Production, Safety and 
                  cross-functional skills for existing employees.
                </p>
              </div>
            </div>
            <div className="story-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>23rd October 2015</h4>
                  <p>Bhoomi Pooja ceremony at Muchintal village, Shamshabad Mandal</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>16th January 2017</h4>
                  <p>Grand inauguration by Hon'ble Union Minister Shri Manohar Parrikar and Hon'ble Chief Minister Shri K. Chandrasekhar Rao</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inauguration Ceremony */}
      <section className="hyd-inauguration-section">
        <div className="container">
          <div className="inauguration-card">
            <h2>A Historic Inauguration</h2>
            <p className="inauguration-lead">
              All the training infrastructure with Labs and equipment were inaugurated on <strong>16th January 2017</strong> 
              by distinguished dignitaries who blessed our mission.
            </p>
            <div className="dignitaries-grid">
              <div className="dignitary-item">
                <Award size={32} />
                <h4>Shri Manohar Parrikar</h4>
                <p>Hon'ble Union Minister for Defense</p>
              </div>
              <div className="dignitary-item">
                <Award size={32} />
                <h4>Shri K. Chandrasekhar Rao</h4>
                <p>Hon'ble Chief Minister of Telangana</p>
              </div>
              <div className="dignitary-item">
                <Award size={32} />
                <h4>Shri M. Venkaiah Naidu</h4>
                <p>Hon'ble Union Minister - Chief Source of Inspiration</p>
              </div>
              <div className="dignitary-item">
                <Award size={32} />
                <h4>Shri Bandaru Dattatreya</h4>
                <p>Union Minister for Labour Welfare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Centers */}
      <section className="hyd-centers-section">
        <div className="container">
          <h2 className="section-title">Our Training Centers</h2>
          <p className="section-subtitle">
            Comprehensive skill development programs aligned with industry needs
          </p>

          <div className="hyd-centers-grid">
            {/* Pharma Pathashala */}
            <div className="hyd-center-card featured">
              <div className="center-ribbon">First of its Kind in India</div>
              <div className="center-header">
                <div className="center-icon pharma">💊</div>
                <h3>Pharma Pathashala</h3>
              </div>
              <div className="center-body">
                <p className="center-partnership">
                  <strong>In association with Sri. Chigurupati Krishna Prasad</strong>, Chairman & Managing Director, 
                  Granules India Ltd.
                </p>
                <p>
                  First-of-its-kind pharma training center in India designed to suit the needs of the pharmaceutical 
                  industry with state-of-the-art facilities. Accredited to LSSSDC (Life Sciences Sector Skill Development Council).
                </p>
                <div className="center-highlights">
                  <div className="highlight-badge">Industry Aligned</div>
                  <div className="highlight-badge">LSSSDC Accredited</div>
                  <div className="highlight-badge">State-of-the-Art</div>
                </div>
              </div>
            </div>

            {/* Atal ji Center */}
            <div className="hyd-center-card">
              <div className="center-header">
                <div className="center-icon skill">🔧</div>
                <h3>Atal ji Skill Development Center</h3>
              </div>
              <div className="center-body">
                <p className="center-partnership">
                  <strong>In association with Union Bank (formerly Andhra Bank) & Malla Reddy Group of Institutions</strong>
                </p>
                <div className="courses-list">
                  <div className="course-pill">Refrigeration & Air Conditioning</div>
                  <div className="course-pill">Domestic & Industrial Electrical</div>
                  <div className="course-pill">Automobile Repairs & Maintenance</div>
                  <div className="course-pill">Two-Wheeler Repairs</div>
                  <div className="course-pill">Plumbing</div>
                </div>
              </div>
            </div>

            {/* Deen Dayal Center */}
            <div className="hyd-center-card">
              <div className="center-header">
                <div className="center-icon vocational">💼</div>
                <h3>Deen Dayal Upadhyaya Vocational Training Institute</h3>
              </div>
              <div className="center-body">
                <p className="center-partnership">
                  <strong>In association with Union Bank (formerly Andhra Bank) & GMR Varalakshmi Foundation</strong>
                </p>
                <div className="courses-list">
                  <div className="course-pill">Mobile Phone Repairs</div>
                  <div className="course-pill">Beautician Training</div>
                  <div className="course-pill">Garment Designing & Sewing</div>
                  <div className="course-pill">Solar Panel Installation</div>
                  <div className="course-pill">Hospitality Management</div>
                </div>
              </div>
            </div>

            {/* Smart City Center */}
            <div className="hyd-center-card">
              <div className="center-header">
                <div className="center-icon tech">🌐</div>
                <h3>Smart City - Skill Development Center</h3>
              </div>
              <div className="center-body">
                <p className="center-partnership">
                  <strong>In association with L&T Smart World Communication</strong>
                </p>
                <div className="courses-list">
                  <div className="course-pill">CCTV Technician</div>
                  <div className="course-pill">Optical Fiber Technician</div>
                </div>
              </div>
            </div>

            {/* Computer Training */}
            <div className="hyd-center-card">
              <div className="center-header">
                <div className="center-icon computer">💻</div>
                <h3>Computer Training Institute</h3>
              </div>
              <div className="center-body">
                <p className="center-partnership">
                  <strong>In association with CYIENT Technologies Ltd.</strong>
                </p>
                <div className="courses-list">
                  <div className="course-pill">AutoCAD</div>
                  <div className="course-pill">GIS Mapping</div>
                  <div className="course-pill">Allied Activities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare & Facilities */}
      <section className="hyd-facilities-section">
        <div className="container">
          <div className="facilities-grid">
            {/* Primary Health Centre */}
            <div className="facility-card health">
              <div className="facility-icon-large">
                <Heart size={48} />
              </div>
              <h3>Primary Health Centre</h3>
              <p className="facility-partnership">
                <strong>In association with Global Hospitals Ltd.</strong>
              </p>
              <p>
                Conducting medical camps for the rural poor and needy in collaboration with corporate 
                hospitals in and around Hyderabad, with the participation of highly skilled doctors from 
                different specialties.
              </p>
              <div className="facility-stats">
                <div className="facility-stat">
                  <span className="stat-number">90+</span>
                  <span className="stat-label">Villages Served</span>
                </div>
                <div className="facility-stat">
                  <span className="stat-number">Regular</span>
                  <span className="stat-label">Health Camps</span>
                </div>
              </div>
            </div>

            {/* Hostel & Dining */}
            <div className="facility-card hostel">
              <div className="facility-icon-large">
                <Building2 size={48} />
              </div>
              <h3>Hostel and Dining</h3>
              <p>
                Accommodation and nutritious food are provided to <strong>all trainees throughout the 
                training period</strong> in the Dormitory.
              </p>
              <div className="facility-features">
                <div className="feature-item">
                  <Zap size={20} />
                  <span>Free Accommodation</span>
                </div>
                <div className="feature-item">
                  <Zap size={20} />
                  <span>Nutritious Meals</span>
                </div>
                <div className="feature-item">
                  <Zap size={20} />
                  <span>Comfortable Dormitory</span>
                </div>
              </div>
            </div>

            {/* Physical Fitness */}
            <div className="facility-card fitness">
              <div className="facility-icon-large">
                <Users size={48} />
              </div>
              <h3>Physical Fitness</h3>
              <p>
                To take care of the physical & mental fitness of the aspirants, training in yoga is 
                provided in the morning under the supervision of a Yoga Master.
              </p>
            </div>

            {/* Recreation */}
            <div className="facility-card recreation">
              <div className="facility-icon-large">
                <Target size={48} />
              </div>
              <h3>Recreation Facilities</h3>
              <p>Aspirants can enjoy various sports and games:</p>
              <div className="recreation-list">
                <span className="recreation-item">🏐 Volleyball</span>
                <span className="recreation-item">🏸 Badminton</span>
                <span className="recreation-item">⚽ Kabaddi on Turf</span>
                <span className="recreation-item">♟️ Chess</span>
                <span className="recreation-item">🎯 Caroms</span>
                <span className="recreation-item">🎾 Tennikoit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="hyd-impact-section">
        <div className="container">
          <h2>Our Impact in Telangana</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-number">8+</div>
              <div className="impact-label">Training Centers</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">90+</div>
              <div className="impact-label">Villages Served</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">20+</div>
              <div className="impact-label">Courses Offered</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">24/7</div>
              <div className="impact-label">Support Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hyd-cta-section">
        <div className="container">
          <div className="hyd-cta-content">
            <h2>Join Our Mission to Transform Lives</h2>
            <p>
              Be part of Telangana's skill development revolution. Enroll in our world-class training 
              programs and secure your future.
            </p>
            <a href="/contact" className="hyd-cta-button">Start Your Journey</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HyderabadChapter

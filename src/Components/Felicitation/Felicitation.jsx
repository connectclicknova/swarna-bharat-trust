import React from 'react'
import './Felicitation.css'
import { Award, Star, Trophy, Users, Heart } from 'lucide-react'

const Felicitation = () => {
  const padmaAwardees2017 = [
    { name: 'Sri Yekka Yadagiri Rao', field: 'Indian Cultural Heritage' },
    { name: 'Dr. Mohd. Abdul Wahid', field: 'Unani Medicine' },
    { name: 'Sri Chintakindi Mallesam', field: 'Handloom Technology' },
    { name: 'Dr. Tripuraneni Hanuman Chowdary', field: 'Telecom Reforms' },
    { name: 'Sri Daripelli Janakiramaiah', field: 'Environment' },
    { name: 'Sri BVR Mohan Reddy (CYIENT)', field: 'Information Technology' },
    { name: 'Smt. PV Sindhu', field: 'Sports' }
  ]

  const padmaAwardees2020 = [
    { name: 'Sri Bhashyam Vijaya Saradhi', field: 'Sanskrit & Telugu Pandit' },
    { name: 'Sri Chintala Venkata Reddy', field: 'Soil Technology' },
    { name: 'Kum. Pusarla Venkata Sindhu', field: 'First Badminton Silver in Olympics' }
  ]

  const nationalAwards = [
    {
      name: 'Dr. M.S. Swaminathan',
      award: 'National Award for Excellence',
      amount: 'Rs. 5 lakhs',
      year: 'Jan 2020',
      icon: '🌾'
    },
    {
      name: 'Dr. G. Muniratnam Naidu',
      award: 'National Award for Social Service',
      amount: 'Rs. 5 lakhs',
      year: 'Jan 2020',
      icon: '🤝'
    },
    {
      name: 'Sri R. Parasaran',
      award: 'National Award for Excellence in Jurisprudence',
      amount: 'Rs. 5 lakhs',
      year: 'March 2023',
      description: '"God\'s Advocate" who presented facts pertaining to Lord Ram in the Supreme Court',
      icon: '⚖️'
    }
  ]

  const womenScientists = {
    shar: [
      'Ms. V. Latha',
      'Ms. Shanthi',
      'Ms. KR Madhavi',
      'Ms. KS Lakshmi',
      'Ms R. SriVidhya',
      'Ms. Jessy Varghese'
    ],
    drdl: [
      'Ms. Tessy Thomas, Director ASL',
      'Ms. V Prameels, Proj Dir',
      'Ms. Shashikala Sinha, Proj Dir',
      'Ms. G. Sharada, Sc G, Head',
      'Ms. Mahasweta Bakshi SC-G',
      'Ms. KV Sujatha SC-G',
      'Ms. S. Rama SC-F',
      'Ms. SS Rani Surender SC-G',
      'Ms. Sheena Rani SC-G'
    ],
    isro: [
      'Dr. Vijaya Khader, Former Dean of Acharya NG Ranga Agricultural University',
      'Smt A.R. Anuradha, Former DG',
      'Smt. Ghantasala Parvati Ravi, Managing Trustee of Kala Pradarshini, Chennai',
      'Ms. Usha P. Verma, Associate Director, DRDO',
      'Ms. Shirisha T, Project Director, DRDO',
      'Ms. Niveditha B.K., Associate Director, ISRO',
      'Ms. Latha A, GM, SHAR'
    ]
  }

  return (
    <div className="felicitation-section">
      <div className="container">
        {/* Section Header */}
        <div className="felicitation-header">
          <div className="header-icon">
            <Trophy size={48} />
          </div>
          <h2 className="section-main-title">Honoring Excellence</h2>
          <p className="section-main-subtitle">
            Celebrating remarkable individuals who have brought glory to the nation through their 
            exceptional contributions and outstanding achievements
          </p>
        </div>

        {/* Padma Awardees 2017 */}
        <div className="felicitation-subsection">
          <div className="subsection-header">
            <Award size={32} className="subsection-icon" />
            <h3>Padma Awardees Felicitation - 2017</h3>
          </div>
          <div className="padma-grid">
            {padmaAwardees2017.map((awardee, index) => (
              <div key={index} className="padma-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="padma-badge">
                  <Star size={20} />
                </div>
                <h4>{awardee.name}</h4>
                <p>{awardee.field}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Recognition */}
        <div className="felicitation-subsection special-recognition">
          <div className="recognition-card">
            <div className="recognition-icon">🎓</div>
            <h3>Sri Achyuta Samanta, MP - Odisha</h3>
            <p className="recognition-title">Educationist & Tribal Empowerment</p>
            <div className="recognition-content">
              <p>
                Felicitated for his contributions in the field of free Education to the Tribals through 
                his educational institute - <strong>Kalinga Institute of Social Sciences</strong>.
              </p>
              <div className="recognition-achievements">
                <div className="achievement-item">
                  <div className="achievement-icon">🏛️</div>
                  <div className="achievement-text">
                    <h5>Kalinga Institute of Industrial Technology (KIIT)</h5>
                    <p>Multi-disciplinary programs • 40,000+ students from 65 countries</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">🏥</div>
                  <div className="achievement-text">
                    <h5>Kalinga Institute of Medical Sciences</h5>
                    <p>Ranked among top 25 healthcare providers in India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Padma Awardees 2020 */}
        <div className="felicitation-subsection">
          <div className="subsection-header">
            <Award size={32} className="subsection-icon" />
            <h3>Padma Awardees Felicitation - 2020</h3>
          </div>
          <div className="padma-grid-large">
            {padmaAwardees2020.map((awardee, index) => (
              <div key={index} className="padma-card-large">
                <div className="padma-badge-large">
                  <Trophy size={28} />
                </div>
                <h4>{awardee.name}</h4>
                <p>{awardee.field}</p>
              </div>
            ))}
          </div>
        </div>

        {/* National Awards */}
        <div className="felicitation-subsection">
          <div className="subsection-header">
            <Trophy size={32} className="subsection-icon" />
            <h3>Muppavarapu Venkaiah Naidu - National Awards</h3>
          </div>
          <div className="national-awards-grid">
            {nationalAwards.map((award, index) => (
              <div key={index} className="national-award-card">
                <div className="award-card-header">
                  <div className="award-icon-large">{award.icon}</div>
                  <div className="award-year-badge">{award.year}</div>
                </div>
                <div className="award-card-body">
                  <h4>{award.name}</h4>
                  <p className="award-category">{award.award}</p>
                  {award.description && (
                    <p className="award-description">{award.description}</p>
                  )}
                  <div className="award-amount">
                    <span className="amount-label">Award Amount:</span>
                    <span className="amount-value">{award.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Women Scientists */}
        <div className="felicitation-subsection women-scientists-section">
          <div className="subsection-header">
            <Heart size={32} className="subsection-icon" />
            <h3>Eminent Contributors & Women Scientists</h3>
            <p className="subsection-description">
              Felicitated on Women's Day by Hon'ble 13th Vice President of India Sri M. Venkaiah Naidu 
              and Managing Trustee Smt. Deepa Venkat
            </p>
          </div>

          <div className="scientists-grid">
            {/* SHAR */}
            <div className="scientists-card">
              <div className="scientists-header">
                <div className="scientists-icon">🚀</div>
                <h4>Satish Dhawan Space Center & SriHari Kota</h4>
                <span className="scientists-count">{womenScientists.shar.length} Scientists</span>
              </div>
              <div className="scientists-list">
                {womenScientists.shar.map((scientist, index) => (
                  <div key={index} className="scientist-item">
                    <span className="scientist-bullet">•</span>
                    <span>{scientist}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DRDL */}
            <div className="scientists-card">
              <div className="scientists-header">
                <div className="scientists-icon">⚡</div>
                <h4>Defence Research & Development Laboratory</h4>
                <span className="scientists-count">{womenScientists.drdl.length} Scientists</span>
              </div>
              <div className="scientists-list">
                {womenScientists.drdl.map((scientist, index) => (
                  <div key={index} className="scientist-item">
                    <span className="scientist-bullet">•</span>
                    <span>{scientist}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ISRO & Others */}
            <div className="scientists-card">
              <div className="scientists-header">
                <div className="scientists-icon">🛰️</div>
                <h4>ISRO & SHAR</h4>
                <span className="scientists-count">{womenScientists.isro.length} Eminent Contributors</span>
              </div>
              <div className="scientists-list">
                {womenScientists.isro.map((scientist, index) => (
                  <div key={index} className="scientist-item">
                    <span className="scientist-bullet">•</span>
                    <span>{scientist}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Felicitation

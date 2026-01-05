import React, { useEffect, useRef, useState } from 'react'
import './AwardsRecognitions.css'
import { Award, Trophy, Star, Medal } from 'lucide-react'

const AwardsRecognitions = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const awards = [
    {
      year: '2025',
      title: 'Best Woman Entrepreneur & Top Tax Payer Award',
      description: 'The Principal Chief Commissioner (Central GST & Central Excise, Tamilnadu & Puducherry zone) presented both the awards on 30th June 2025 for being a valued GST Taxpayer by contributing towards nation building.',
      recipient: 'Smt. Deepa Venkat, Group Jt. MD',
      organization: 'Vishnu Cars Group',
      date: '8th GST Day',
      icon: <Trophy size={32} />,
      color: '#04a947'
    },
    {
      year: '2025',
      title: 'Spoorthy Award',
      description: 'Telugu One (First Telugu Web Portal) presented the "Spoorthy Award", on 18th May 2025, for the various Service activities carried out by Swarna Bharat Trust for over 25 years. The function was presided by the Chief Minister of Andhra Pradesh, Sri Nara Chandrababu Naidu garu along with H.H. Sri Tridandi Chinna Jeeyar Swami garu and Justice Sri N. V. Ramana garu.',
      recipient: 'Smt. Deepa Venkat',
      organization: 'Telugu One',
      date: '18th May 2025',
      icon: <Award size={32} />,
      color: '#04a947'
    },
    {
      year: '2025',
      title: 'SEVA Award',
      description: 'Recipient of "SEVA Award" from Lok Nayak Foundation, Visakhapatnam in Jan 2025 for Rural Development activities and spearheading several social service & skill development/training programs in Telangana & Andhra Pradesh.',
      recipient: 'Swarna Bharat Trust',
      organization: 'Lok Nayak Foundation',
      date: 'January 2025',
      icon: <Medal size={32} />,
      color: '#04a947'
    },
    {
      year: '2024',
      title: 'Swami Vivekananda Excellence Award - 2024',
      description: 'The Managing Trustee, Smt. Deepa Venkat Garu was honored by Sri Ramakrishna Seva Samithi, Anaparthi, with "Swami Vivekananda Excellence Award - 2024" (on the occasion of the Birth anniversary of Swami Vivekananda) on 24.01.2024 for the various Social Service activities & Free Skill Development/Training programs carried out under her leadership and guidance at Swarna Bharat Trust, Venkatachalam.',
      recipient: 'Smt. Deepa Venkat',
      organization: 'Sri Ramakrishna Seva Samithi',
      date: '24th January 2024',
      icon: <Star size={32} />,
      color: '#04a947'
    },
    {
      year: '2023',
      title: 'Award for Exemplary Service in Social Work',
      description: 'Rasamayi & Paidi Lakshmaiah Trust felicitated the Managing Trustee, with an Award for Exemplary Service in Social Work on 24th June 2023 at Thyagaraya Gana Sabha, Hyderabad.',
      recipient: 'Smt. I. Deepa Venkat',
      organization: 'Rasamayi & Paidi Lakshmaiah Trust',
      date: '24th June 2023',
      icon: <Award size={32} />,
      color: '#04a947'
    },
    {
      year: '2023',
      title: 'Business Excellence Award',
      description: 'Business Excellence Award was conferred on the Managing Trustee by the Andhra Chamber of Commerce, Chennai Chapter on 3rd May 2023.',
      recipient: 'Smt. I. Deepa Venkat',
      organization: 'Andhra Chamber of Commerce',
      date: '3rd May 2023',
      icon: <Trophy size={32} />,
      color: '#04a947'
    },
    {
      year: '2019',
      title: 'Champions of Change Award 2019',
      description: 'The Managing Trustee Smt. I. Deepa Venkat was presented the "Champions of Change Award 2019" for outstanding contributions in the field of Social Welfare, by Shri Pranab Mukherjee, the Hon\'ble Former President of India, in New Delhi.',
      recipient: 'Smt. I. Deepa Venkat',
      organization: 'Government of India',
      date: '2019',
      icon: <Medal size={32} />,
      color: '#04a947'
    },
    {
      year: '2018',
      title: 'SKOCH Order of Merit',
      description: 'In 2018, Swarna Bharat Trust was awarded the "SKOCH Order of Merit" certificate for rendering Skill Development Services (among top 30 Skill Development Institutes in India) - by the Chairman of the group, Shri Sameer Kochhar.',
      recipient: 'Swarna Bharat Trust',
      organization: 'SKOCH Group',
      date: '2018',
      icon: <Star size={32} />,
      color: '#04a947'
    },
    {
      year: '2017',
      title: 'Best Women Social Activist',
      description: 'Awarded "Best Women Social Activist" in National Women\'s Parliament- 2017, organized by Government of Andhra Pradesh.',
      recipient: 'Smt. I. Deepa Venkat',
      organization: 'Government of Andhra Pradesh',
      date: '2017',
      icon: <Award size={32} />,
      color: '#04a947'
    },
    {
      year: '2016',
      title: 'International Women of the Decade Award',
      description: 'Recipient of "International Women of the Decade" award at the Women\'s Economic Forum (WEF) by ALL (All Ladies League) in 2016 at Delhi, which was attended by women representatives from over 190 countries.',
      recipient: 'Smt. I. Deepa Venkat',
      organization: 'Women\'s Economic Forum',
      date: '2016',
      icon: <Trophy size={32} />,
      color: '#04a947'
    },
    {
      year: '',
      title: 'International Young Achievers Award',
      description: 'Recipient of "International Young Achievers" Award from "JCI". Received from the hands of Sri Sri Ravi Shankar Guru ji, The Art of Living, Bangalore.',
      recipient: 'Smt. I. Deepa Venkat',
      organization: 'JCI (Junior Chamber International)',
      date: '',
      icon: <Medal size={32} />,
      color: '#04a947'
    },
    {
      year: '2012',
      title: 'Women of Excellence Award',
      description: 'WAVE (Dubai) Women\'s Organization of UAE conferred "Women of Excellence" Award in 2012 in Dubai.',
      recipient: 'Smt. I. Deepa Venkat',
      organization: 'WAVE - Dubai',
      date: '2012',
      icon: <Star size={32} />,
      color: '#04a947'
    }
  ]

  return (
    <section className="awards-section" ref={sectionRef}>
      <div className="awards-container">
        {/* Section Header */}
        <div className={`awards-header ${isVisible ? 'fade-in' : ''}`}>
          <span className="section-label">Recognition</span>
          <h2 className="section-title">Awards & Recognitions</h2>
          <p className="section-description">
            Celebrating our journey of excellence, dedication, and impact in social service. 
            These accolades reflect our commitment to creating meaningful change in society.
          </p>
        </div>

        {/* Awards Timeline */}
        <div className="awards-timeline">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className={`award-item ${isVisible ? 'slide-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="award-year">
                {award.year && <span className="year-badge">{award.year}</span>}
              </div>
              
              <div className="award-content">
                <div className="award-icon" style={{ background: `linear-gradient(135deg, ${award.color}15 0%, ${award.color}05 100%)` }}>
                  <div className="icon-wrapper" style={{ color: award.color }}>
                    {award.icon}
                  </div>
                </div>
                
                <div className="award-details">
                  <h3 className="award-title">{award.title}</h3>
                  <div className="award-meta">
                    <span className="award-recipient">{award.recipient}</span>
                    {award.date && (
                      <>
                        <span className="meta-separator">•</span>
                        <span className="award-date">{award.date}</span>
                      </>
                    )}
                  </div>
                  <p className="award-description">{award.description}</p>
                  <div className="award-footer">
                    <span className="award-organization">
                      <Trophy size={14} />
                      {award.organization}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="awards-decoration">
          <div className="decoration-circle decoration-1"></div>
          <div className="decoration-circle decoration-2"></div>
          <div className="decoration-circle decoration-3"></div>
        </div>
      </div>
    </section>
  )
}

export default AwardsRecognitions

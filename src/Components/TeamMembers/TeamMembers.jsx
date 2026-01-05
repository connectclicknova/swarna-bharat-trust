import React, { useEffect, useRef, useState } from 'react'
import './TeamMembers.css'
import { Mail } from 'lucide-react'

const TeamMembers = () => {
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

  const teamMembers = [
    {
      name: 'Smt. I. Deepa Venkat',
      role: 'Managing Trustee',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: 'Leading Swarna Bharat Trust with vision and dedication towards rural development and social welfare.',
      achievements: [
        'International Women of the Decade Award',
        'Champions of Change Award 2019',
        'Business Excellence Award 2023'
      ],
      email: 'deepa@swarnabharat.org',
      phone: '+91 98765 43210',
      linkedin: '#'
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Director - Education Programs',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      bio: 'Overseeing educational initiatives including Swarna Bharathi Vidyamandir and skill development programs.',
      achievements: [
        'PhD in Educational Leadership',
        '15+ years in Rural Education',
        'Mentored 5000+ Students'
      ],
      email: 'rajesh@swarnabharat.org',
      phone: '+91 98765 43211',
      linkedin: '#'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Head - Healthcare Services',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
      bio: 'Managing healthcare facilities including dental care, veterinary services, and eye care programs.',
      achievements: [
        'MBBS, MD (Community Medicine)',
        'Rural Healthcare Pioneer',
        'Served 100,000+ Patients'
      ],
      email: 'priya@swarnabharat.org',
      phone: '+91 98765 43212',
      linkedin: '#'
    },
    {
      name: 'Mr. Arjun Reddy',
      role: 'Director - Skill Development',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Leading SIRED and SOMA programs, empowering rural youth with technical and entrepreneurial skills.',
      achievements: [
        'Certified Skill Development Trainer',
        'Trained 10,000+ Youth',
        'Entrepreneurship Mentor'
      ],
      email: 'arjun@swarnabharat.org',
      phone: '+91 98765 43213',
      linkedin: '#'
    },
    {
      name: 'Ms. Lakshmi Devi',
      role: 'Head - Elders Home',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop',
      bio: 'Providing compassionate care and creating a nurturing environment for elderly residents.',
      achievements: [
        'MSW in Geriatric Care',
        '20+ years in Elder Care',
        'Certified Counselor'
      ],
      email: 'lakshmi@swarnabharat.org',
      phone: '+91 98765 43214',
      linkedin: '#'
    },
    {
      name: 'Mr. Venkat Rao',
      role: 'Director - Agricultural Programs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Managing Farmers Training Center and promoting sustainable agricultural practices.',
      achievements: [
        'MSc in Agriculture',
        'Organic Farming Expert',
        'Trained 5000+ Farmers'
      ],
      email: 'venkat@swarnabharat.org',
      phone: '+91 98765 43215',
      linkedin: '#'
    }
  ]

  return (
    <section className="team-section" ref={sectionRef}>
      <div className="team-container">
        {/* Section Header */}
        <div className={`team-header ${isVisible ? 'fade-in' : ''}`}>
          <span className="section-label">Our Leadership</span>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-description">
            Dedicated professionals committed to creating meaningful change in rural communities.
            Our team brings together expertise, passion, and unwavering dedication to serve society.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`team-card ${isVisible ? 'slide-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="member-image-wrapper">
                <img src={member.image} alt={member.name} className="member-image" />
                <div className="image-overlay"></div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <a href={`mailto:${member.email}`} className="contact-email">
                  <Mail size={18} />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="team-decoration">
          <div className="decoration-circle decoration-1"></div>
          <div className="decoration-circle decoration-2"></div>
        </div>
      </div>
    </section>
  )
}

export default TeamMembers

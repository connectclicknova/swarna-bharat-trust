import React from 'react'
import './HomeServices.css'
import { GraduationCap, School, Briefcase, Users, Home, Sprout, Eye, Heart, Stethoscope, ArrowRight } from 'lucide-react'

const HomeServices = () => {
  const services = [
    {
      icon: <GraduationCap size={40} />,
      title: 'Swarna Bharathi Vidyamandir',
      description: 'Providing quality education and nurturing young minds for a brighter future.',
      color: '#ff6318',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop'
    },
    {
      icon: <School size={40} />,
      title: 'Residential Bridge School',
      description: 'Bridging educational gaps through comprehensive residential programs.',
      color: '#ff6318',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop'
    },
    {
      icon: <Briefcase size={40} />,
      title: 'SIRED - Rural Entrepreneurship',
      description: 'Empowering rural communities through entrepreneurship development.',
      color: '#ff6318',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop'
    },
    {
      icon: <Users size={40} />,
      title: 'SOMA - Skill Development',
      description: 'Building technical expertise and professional skills for career growth.',
      color: '#ff6318',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      icon: <Home size={40} />,
      title: 'Elders Home',
      description: 'Providing compassionate care and comfortable living for elderly members.',
      color: '#ff6318',
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&h=400&fit=crop'
    },
    {
      icon: <Sprout size={40} />,
      title: 'Farmers Training Center',
      description: 'Supporting agriculture through modern farming techniques and training.',
      color: '#ff6318',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop'
    },
    {
      icon: <Eye size={40} />,
      title: 'LV Prasad Eye Institute',
      description: 'Delivering world-class eye care services and vision correction.',
      color: '#ff6318',
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=600&h=400&fit=crop'
    },
    {
      icon: <Heart size={40} />,
      title: 'Veterinary Hospital',
      description: 'Comprehensive animal health care for animal wellbeing.',
      color: '#ff6318',
      image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&h=400&fit=crop'
    },
    {
      icon: <Stethoscope size={40} />,
      title: 'Rural Health & Dental Care',
      description: 'Accessible healthcare and dental services for rural communities.',
      color: '#ff6318',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop'
    }
  ]

  return (
    <section className="home-services-section">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Empowering Communities Through Comprehensive Services</h2>
          <p className="section-description">
            Dedicated to making a difference in the lives of people through our diverse range of 
            educational, healthcare, and social welfare initiatives.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-image-overlay">
                  <div className="service-icon" style={{ backgroundColor: `${service.color}15` }}>
                    <div style={{ color: service.color }}>
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-link">
                  Explore More
                  <ArrowRight size={18} className="arrow-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeServices
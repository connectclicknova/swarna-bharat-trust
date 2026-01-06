import React, { useEffect, useRef, useState } from 'react'
import './VisionObjective.css'
import { Target, Lightbulb, TrendingUp, Users, BookOpen, Heart, Sprout } from 'lucide-react'

const VisionObjective = () => {
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

  const objectives = [
    {
      icon: <BookOpen size={32} />,
      title: 'Education & Skill Development',
      description: 'Improve the life of the rural masses by providing Education, Vocational & Computer Training and Healthcare facilities - thereby enabling them to be gainfully and continuously employed.',
      color: '#ff6318'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Bridge Rural-Urban Gap',
      description: 'Bridge the gap between rural & urban India by bringing the technological advances and innovations in science and technology to their doorsteps and making the rural masses confident.',
      color: '#04a947'
    },
    {
      icon: <Sprout size={32} />,
      title: 'Agricultural Innovation',
      description: 'Educate the farmers about the new techniques in farming & alternate crops and train the artisans to become self-employed.',
      color: '#2122be'
    },
    {
      icon: <Users size={32} />,
      title: 'Women Empowerment',
      description: 'Empower the rural women by imparting necessary skills so as to equip them for self-employment and in turn, become part of a strong rural economy.',
      color: '#ff6318'
    },
    {
      icon: <Heart size={32} />,
      title: 'Culture & Traditions',
      description: 'Encourage and support culture and traditions to preserve our rich heritage and pass it on to future generations.',
      color: '#04a947'
    }
  ]

  return (
    <section className="vision-objective-section" ref={sectionRef}>
      <div className="vision-container">
        {/* Section Header */}
        <div className={`vision-header ${isVisible ? 'fade-in' : ''}`}>
          <span className="section-label">Our Purpose</span>
          <h2 className="section-title">Vision & Objectives</h2>
        </div>

        {/* Vision Statement */}
        <div className={`vision-statement ${isVisible ? 'fade-in' : ''}`}>
          <div className="statement-icon">
            <Lightbulb size={40} />
          </div>
          <div className="statement-content">
            <h3>Our Vision</h3>
            <p>
              Swarna Bharat Trust is guided by <strong>Mahatma Gandhi ji's dictum 'Back to Villages'</strong>. 
              The Trust neither runs on any aid from the Government nor seeks any grants. In a short span of time, 
              the Trust has earned a reputation for itself. Regular charitable activities are conducted and the Trust 
              does not host any political functions in its premises.
            </p>
            <p className="vision-aim">
              <Target size={20} />
              <span>
                The aim of the Trust is to improve the outlook of rural India, particularly in the fields of 
                <strong> Health, Education, Employment (by skill up-gradation), Human Development & Welfare, 
                Women & Child Development, and also Cattle Care.</strong>
              </span>
            </p>
          </div>
        </div>

        {/* Objectives Grid */}
        <div className="objectives-section">
          <h3 className="objectives-title">Principal Objectives</h3>
          <div className="objectives-grid">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className={`objective-card ${isVisible ? 'slide-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="objective-icon" style={{ background: `linear-gradient(135deg, ${objective.color}15 0%, ${objective.color}05 100%)` }}>
                  <div  style={{ color: objective.color }}>
                    {objective.icon}
                  </div>
                </div>
                <div className="objective-content">
                  <h4>{objective.title}</h4>
                  <p>{objective.description}</p>
                </div>
                <div className="objective-number" style={{ color: `${objective.color}20` }}>
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="vision-decoration">
          <div className="decoration-circle decoration-1"></div>
          <div className="decoration-circle decoration-2"></div>
          <div className="decoration-circle decoration-3"></div>
        </div>
      </div>
    </section>
  )
}

export default VisionObjective

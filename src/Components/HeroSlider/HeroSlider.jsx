import React, { useState, useEffect } from 'react'
import './HeroSlider.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
    {
      title: 'Swarna Bharathi Vidyamandir',
      subtitle: 'Nurturing Young Minds for a Brighter Future',
      description: 'Providing quality education with comprehensive programs that focus on holistic development and academic excellence.',
      image: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Vidya%20Mandir/Desktop/entrance.png',
      cta: 'Explore Education'
    },
    {
      title: 'SIRED - Rural Entrepreneurship',
      subtitle: 'Empowering Communities Through Innovation',
      description: 'Creating opportunities for rural communities through entrepreneurship development and skill-based training programs.',
      image: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/sired.png',
      cta: 'Learn More'
    },
    {
      title: 'SOMA - Skill Development',
      subtitle: 'Building Skills for Tomorrow',
      description: 'Technical training and professional development programs to equip youth with industry-relevant skills for career growth.',
      image: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/soma.png',
      cta: 'View Programs'
    },
    {
      title: 'Compassionate Elder Care',
      subtitle: 'Dignified Living for Our Seniors',
      description: 'Providing comfortable living and comprehensive care for elderly members with respect, love, and professional support.',
      image: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Elder%20Home/1.jpeg',
      cta: 'Our Services'
    },
    {
      title: 'Farmers Training Center',
      subtitle: 'Advancing Agricultural Excellence',
      description: 'Supporting farmers with modern farming techniques, sustainable practices, and comprehensive agricultural training.',
      image: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Farmer%20Training/2.jpeg',
      cta: 'Discover More'
    },
    {
      title: 'LV Prasad Eye Institute',
      subtitle: 'Vision Care for All',
      description: 'Delivering world-class eye care services and vision correction to rural communities with advanced technology.',
      image: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Eye%20Hospital/4.jpeg',
      cta: 'Healthcare Services'
    },
    {
      title: 'Veterinary Hospital',
      subtitle: 'Caring for Animal Health',
      description: 'Comprehensive veterinary care ensuring the health and wellbeing of livestock and animals in our community.',
      image: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/Veternity%20Hospital/1.jpeg',
      cta: 'Animal Care'
    },
    {
      title: 'Rural Health & Dental Care',
      subtitle: 'Accessible Healthcare for Everyone',
      description: 'Providing essential health and dental services to rural communities, ensuring quality care reaches every doorstep.',
      image: 'https://ik.imagekit.io/u58ih6wp1/Swarna%20Bharat/rd.jpeg',
      cta: 'Health Services'
    }
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="hero-slider-container">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''} ${
              index === currentSlide - 1 || (currentSlide === 0 && index === slides.length - 1)
                ? 'prev'
                : ''
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <h2 className="hero-subtitle">{slide.subtitle}</h2>
                <p className="hero-description">{slide.description}</p>
                <button className="hero-cta">
                  {slide.cta}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-nav slider-nav-prev" onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={32} />
      </button>
      <button className="slider-nav slider-nav-next" onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="indicator-progress"></span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
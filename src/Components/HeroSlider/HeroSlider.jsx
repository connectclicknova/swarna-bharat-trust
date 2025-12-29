import React, { useState, useEffect } from 'react'
import './HeroSlider.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Empowering Rural Communities',
      subtitle: 'Building a Brighter Future Together',
      description: 'Dedicated to transforming lives through education, healthcare, and sustainable development initiatives.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=800&fit=crop',
      cta: 'Learn More'
    },
    {
      title: 'Quality Education for All',
      subtitle: 'Nurturing Young Minds',
      description: 'Providing comprehensive educational programs from primary to skill development for a better tomorrow.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=800&fit=crop',
      cta: 'Explore Programs'
    },
    {
      title: 'Healthcare & Wellness',
      subtitle: 'Care That Reaches Everyone',
      description: 'Delivering essential healthcare services including eye care, veterinary care, and dental services to rural communities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=800&fit=crop',
      cta: 'Our Services'
    }
  ]

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
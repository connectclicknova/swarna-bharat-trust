import React, { useState, useEffect, useRef } from 'react'
import './Counter.css'

const Counter = () => {
  const [inView, setInView] = useState(false)
  const counterRef = useRef(null)

  const counters = [
    { end: 500, suffix: '+', label: 'PROJECTS COMPLETED', duration: 2000 },
    { end: 10, suffix: 'K+', label: 'LIVES IMPACTED', duration: 2000 },
    { end: 50, suffix: '+', label: 'COMMUNITY PARTNERS', duration: 2000 },
    { end: 15, suffix: '+', label: 'YEARS OF EXCELLENCE', duration: 2000 }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [])

  const AnimatedCounter = ({ end, suffix, duration }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!inView) return

      let startTime
      let animationFrame

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationFrame)
    }, [inView, end, duration])

    return (
      <span className="counter-number">
        {count}{suffix}
      </span>
    )
  }

  return (
    <section className="counter-section" ref={counterRef}>
      <div className="container">
        <div className="counter-grid">
          {counters.map((counter, index) => (
            <div 
              key={index} 
              className="counter-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnimatedCounter 
                end={counter.end} 
                suffix={counter.suffix} 
                duration={counter.duration} 
              />
              <p className="counter-label">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
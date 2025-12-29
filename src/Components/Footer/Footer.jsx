import React from 'react'
import './Footer.css'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoVideo from '../../assets/logo.mp4'

const Footer = () => {
  return (
    <footer className="sb-footer">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-brand">
                <div className="footer-logo">
                  <video className="footer-logo-video" autoPlay muted loop playsInline>
                    <source src={logoVideo} type="video/mp4" />
                  </video>
                </div>
                <h3>Swarna Bharat Trust</h3>
                <p className="brand-tagline">Excellence in Service, Trust in Action</p>
                <p className="brand-description">
                  Dedicated to serving our community with integrity, innovation, and commitment to excellence. 
                  Building a brighter future through dedicated service and unwavering trust.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/activities">Activities</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-section">
                <h4>Services</h4>
                <ul className="footer-links">
                  <li><a href="#">Swarna Bharathi Vidyamandir</a></li>
                  <li><a href="#">Residential Bridge School</a></li>
                  <li><a href="#">SIRED - Rural Entrepreneurship</a></li>
                  <li><a href="#">SOMA - Skill Development</a></li>
                  <li><a href="#">Elders Home</a></li>
                  <li><a href="#">Farmers Training Center</a></li>
                  <li><a href="#">LV Prasad Eye Institute</a></li>
                  <li><a href="#">Veterinary Hospital</a></li>
                  <li><a href="#">Rural Health & Dental Care</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-section">
                <h4>Contact Info</h4>
                <ul className="footer-contact">
                  <li>
                    <MapPin size={18} />
                    <span>123 Trust Avenue, City, State 12345</span>
                  </li>
                  <li>
                    <Phone size={18} />
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li>
                    <Mail size={18} />
                    <span>info@swaranbharattrust.org</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Swarna Bharat Trust. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
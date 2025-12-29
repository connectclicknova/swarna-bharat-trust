import React from 'react'
import './Header.css'
import logoVideo from '../../assets/logo.mp4'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="sb-header-container">
        <div className="container d-flex justify-content-between align-items-center">
            <div className="header-video-container">
                <video className="logo-video" autoPlay muted loop playsInline>
                    <source src={logoVideo} type="video/mp4" />
                </video>
            </div>
            <div className="menu-items-container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <div className="custom-dropdown">
                    <button className="dropdown-btn">
                        Services
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Swarna Bharathi Vidyamandir</a>
                        <a href="#">Residential Bridge School</a>
                        <a href="#">SIRED - Rural Entrepreneurship</a>
                        <a href="#">SOMA - Skill Development</a>
                        <a href="#">Elders Home</a>
                        <a href="#">Farmers Training Center</a>
                        <a href="#">LV Prasad Eye Institute</a>
                        <a href="#">Veterinary Hospital</a>
                        <a href="#">Rural Health & Dental Care</a>
                    </div>
                </div>
                <div className="custom-dropdown">
                    <button className="dropdown-btn">
                        Campus
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Swarna Bharat Trust</a>
                        <a href="#">Nellore</a>
                        <a href="#">Vijayawada</a>
                        <a href="#">Hyderabad</a>
                        <a href="#">CSR</a>
                    </div>
                </div>
                <div className="custom-dropdown">
                    <button className="dropdown-btn">
                        Gallery
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Photo Gallery</a>
                        <a href="#">Video Gallery</a>
                    </div>
                </div>
                <NavLink to="/contact">Contact</NavLink>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-bs-toggle="offcanvas" data-bs-target="#megaMenuModal" style={{cursor: 'pointer'}}>
                    <path d="M3 12H21M3 6H21M9 18H21" stroke="#372035" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        
        <div class="offcanvas offcanvas-end" tabindex="-1" id="megaMenuModal" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                ...
            </div>
        </div>
    </div>
  )
}

export default Header
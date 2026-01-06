import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import ImageGallery from './Pages/Gallery/ImageGallery'
import VideoGallery from './Pages/Gallery/VideoGallery'
import Loader from './Components/Loader/Loader'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import FounderPage from './Pages/FounderPage/FounderPage'
import SwarnaBharathiVidyamandir from './Pages/Services/SwarnaBharathiVidyamandir/SwarnaBharathiVidyamandir'
import ResidentialBridgeSchool from './Pages/Services/ResidentialBridgeSchool/ResidentialBridgeSchool'
import SIRED from './Pages/Services/SIRED/SIRED'
import SOMA from './Pages/Services/SOMA/SOMA'
import EldersHome from './Pages/Services/EldersHome/EldersHome'
import FarmersTrainingCenter from './Pages/Services/FarmersTrainingCenter/FarmersTrainingCenter'
import LVPrasadEyeInstitute from './Pages/Services/LVPrasadEyeInstitute/LVPrasadEyeInstitute'
import VeterinaryHospital from './Pages/Services/VeterinaryHospital/VeterinaryHospital'
import RuralHealthDentalCare from './Pages/Services/RuralHealthDentalCare/RuralHealthDentalCare'
import Campus from './Pages/Campus/Campus'
import VijayawadaChapter from './Pages/Campus/VijayawadaChapter'
import HyderabadChapter from './Pages/Campus/HyderabadChapter'


const AppContent = () => {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Show loader on route change
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      {loading && <Loader />}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/image-gallery' element={<ImageGallery />} />
        <Route path='/video-gallery' element={<VideoGallery />} />
        <Route path='/founder' element={<FounderPage />} />
        
        {/* Campus Pages */}
        <Route path='/campus' element={<Campus />} />
        <Route path='/campus/vijayawada' element={<VijayawadaChapter />} />
        <Route path='/campus/hyderabad' element={<HyderabadChapter />} />
        
        {/* Service Pages */}
        <Route path='/services/swarna-bharathi-vidyamandir' element={<SwarnaBharathiVidyamandir />} />
        <Route path='/services/residential-bridge-school' element={<ResidentialBridgeSchool />} />
        <Route path='/services/sired' element={<SIRED />} />
        <Route path='/services/soma' element={<SOMA />} />
        <Route path='/services/elders-home' element={<EldersHome />} />
        <Route path='/services/farmers-training-center' element={<FarmersTrainingCenter />} />
        <Route path='/services/lv-prasad-eye-institute' element={<LVPrasadEyeInstitute />} />
        <Route path='/services/veterinary-hospital' element={<VeterinaryHospital />} />
        <Route path='/services/rural-health-dental-care' element={<RuralHealthDentalCare />} />
      </Routes>
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
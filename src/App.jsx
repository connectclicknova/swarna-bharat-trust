import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'
import ImageGallery from './Pages/Gallery/ImageGallery'
import VideoGallery from './Pages/Gallery/VideoGallery'
import Loader from './Components/Loader/Loader'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

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
        <Route path='/contact' element={<Contact />} />
        <Route path='/image-gallery' element={<ImageGallery />} />
        <Route path='/video-gallery' element={<VideoGallery />} />
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
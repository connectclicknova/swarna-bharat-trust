import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'
import ImageGallery from './Pages/Gallery/ImageGallery'
import VideoGallery from './Pages/Gallery/VideoGallery'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/image-gallery' element={<ImageGallery />} />
        <Route path='/video-gallery' element={<VideoGallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
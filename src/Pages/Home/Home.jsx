import React from 'react'
import './Home.css'
import HeroSlider from '../../Components/HeroSlider/HeroSlider'
import HomeServices from '../../Components/HomeServices/HomeServices'

const Home = () => {
  return (
    <>
      <HeroSlider />
      <HomeServices />
    </>
  )
}

export default Home
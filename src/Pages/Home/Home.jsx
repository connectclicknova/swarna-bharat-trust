import React from 'react'
import './Home.css'
import HeroSlider from '../../Components/HeroSlider/HeroSlider'
import HomeServices from '../../Components/HomeServices/HomeServices'
import Counter from '../../Components/Counter/Counter'
import AwardsRecognitions from '../../Components/AwardsRecognitions/AwardsRecognitions'
import VisionObjective from '../../Components/VisionObjective/VisionObjective'

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Counter />
      <VisionObjective />
      <HomeServices />
      <AwardsRecognitions />
    </>
  )
}

export default Home
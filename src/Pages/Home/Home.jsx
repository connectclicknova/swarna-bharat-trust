import React from 'react'
import './Home.css'
import HeroSlider from '../../Components/HeroSlider/HeroSlider'
import HomeServices from '../../Components/HomeServices/HomeServices'
import Counter from '../../Components/Counter/Counter'
import AwardsRecognitions from '../../Components/AwardsRecognitions/AwardsRecognitions'
import VisionObjective from '../../Components/VisionObjective/VisionObjective'
import Felicitation from '../../Components/Felicitation/Felicitation'

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Counter />
      <VisionObjective />
      <HomeServices />
      <AwardsRecognitions />
      <Felicitation />
    </>
  )
}

export default Home
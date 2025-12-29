import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import FounderImage from '../../assets/venkaiah-naidu.jpg'
import Counter from '../../Components/Counter/Counter'

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Building a Better Tomorrow Through Service and Commitment</p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-content">
            <div className="founder-text">
              <span className="section-label">Our Founder</span>
              <h2>Shri M. Venkaiah Naidu</h2>
              <p className="founder-designation">Former Vice President of India</p>
              <p className="founder-bio">
                A visionary leader with deep roots in rural India, Shri M. Venkaiah Naidu's journey from a small village to the highest offices of the nation has been driven by an unwavering commitment to rural development and social welfare. His experiences of walking miles to school, studying under open skies, and witnessing the challenges faced by rural communities shaped his lifelong dedication to bringing meaningful change to villages across India.
              </p>
              <p className="founder-bio">
                As the founder of Swarna Bharat Trust, he channeled his status and experience into creating lasting impact in rural communities, focusing on education, healthcare, skill development, and preserving Indian culture and traditions.
              </p>
              <Link to="/founder" className="know-more-btn">
                Know More
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            <div className="founder-image">
              <img src={FounderImage} alt="Shri M. Venkaiah Naidu" />
            </div>
          </div>
        </div>
      </section>

      {/* About Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-header">
            <span className="section-label">Our Story</span>
            <h2>About Swarna Bharat Trust</h2>
          </div>

          {/* Introduction */}
          <div className="trust-intro">
            <p>
              Founded with a vision to create meaningful change in our community, Swarna Bharat Trust has been a beacon of hope and excellence for over a decade. Our journey began with a simple yet powerful belief: that through dedicated service and unwavering commitment, we can build a better tomorrow for all.
            </p>
            <p>
              From humble beginnings, we have grown into a trusted organization that touches countless lives through our various initiatives and programs. We focus on education, healthcare, skill development, and community welfare, creating comprehensive solutions that address the real needs of our society.
            </p>
            <p>
              Our success is measured not in numbers alone, but in the positive impact we create, the trust we build within our community, and the sustainable change we bring to people's lives. Every project we undertake is driven by our core values of excellence, integrity, and compassion.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="timeline-section about-tl-section">
            {/* Story 1 - Left */}
            <div className="timeline-item left">
              <div className="timeline-marker"></div>
              <div className="timeline-content about-tl-con">
                <div className="timeline-text">
                  <h3>The Journey</h3>
                  <p>
                    "Albeit my journey from rural life to the assembly, parliament and responsibilities in a national political party in different capacities, I can never forget my early days in the village where I was born and brought up."
                  </p>
                  <p>
                    Independent India has achieved remarkable progress over the last six decades. We have achieved substantial growth in infrastructure, industrial growth, food security, health, defense, software and communications. However, we must accept that disparities between various sections of society are increasing.
                  </p>
                </div>
              </div>
            </div>

            {/* Story 2 - Right */}
            <div className="timeline-item right">
              <div className="timeline-marker"></div>
              <div className="timeline-content about-tl-con">
                <div className="timeline-text">
                  <h3>Rural India: The Heart of Our Nation</h3>
                  <p>
                    The lifeline of our nation is in our villages. Over 60 percent of our population lives in rural India. Though we have made many achievements, it is a serious cause of concern that millions of people living in rural areas are still below the poverty line.
                  </p>
                  <p>
                    The experience of early days when I was forced to walk three kilometers to attend a school with no facilities, where classes were run under the open sky, studying in the light of a lantern due to lack of electricity – these experiences haunted me always and made me think of what was to be done for village development.
                  </p>
                </div>
              </div>
            </div>

            {/* Story 3 - Left */}
            <div className="timeline-item left">
              <div className="timeline-marker"></div>
              <div className="timeline-content about-tl-con">
                <div className="timeline-text">
                  <h3>Commitment to Rural Development</h3>
                  <p>
                    Because of this background, I opted for the Rural Development Ministry when the NDA came to power, though the Prime Minister offered me another key portfolio. After taking charge, I tried my best to give better recognition to the rural development department and designed various rural development schemes like the 'Pradhan Mantri Gram Sadak Yojana'.
                  </p>
                  <p>
                    I have seen in my childhood the collective efforts of villagers in various common social works. Development without people's participation has no meaning. It is necessary to make people play a key role in planning, implementation and supervision of various government programmes.
                  </p>
                </div>
              </div>
            </div>

            {/* Story 4 - Right */}
            <div className="timeline-item right">
              <div className="timeline-marker"></div>
              <div className="timeline-content about-tl-con">
                <div className="timeline-text">
                  <h3>Inspiration from Great Leaders</h3>
                  <p>
                    Mahatma Gandhi believed strongly that Indian freedom should begin from the grassroot level and every village should be in a position to decide its destiny. He made it clear that 'Ram Raj without Gram Raj is incomplete'.
                  </p>
                  <p>
                    Pandit Deendayal Upadhyaya stressed that development has no meaning unless we improve the living standards of those forced to stay away from the development process. This is the concept behind Antyodaya. Empowerment of rural people can be made possible only through Panchayat Raj System.
                  </p>
                </div>
              </div>
            </div>

            {/* Story 5 - Left */}
            <div className="timeline-item left">
              <div className="timeline-marker"></div>
              <div className="timeline-content about-tl-con">
                <div className="timeline-text">
                  <h3>The Birth of Swarna Bharat</h3>
                  <p>
                    Like mother, mother tongue, janma bhoomi (place of birth) and our motherland – these are the things we always have to keep in mind and be proud of. As an act of gratitude and with a passion to do my best for my people and my place, Swarna Bharat Trust has been formed with like-minded people who made a mark in their respective fields.
                  </p>
                  <p>
                    An average villager is honest, hardworking and able to resolve problems on their own. His needs are basic and minimum: food, clothes, shelter, irrigation, health and education. The challenge is to provide opportunities for the rural poor to break real and psychological barriers and join the development process.
                  </p>
                </div>
              </div>
            </div>

            {/* Story 6 - Right */}
            <div className="timeline-item right">
              <div className="timeline-marker"></div>
              <div className="timeline-content about-tl-con">
                <div className="timeline-text">
                  <h3>Our Inspiration & Support</h3>
                  <p>
                    I am inspired by Sri Nanaji Deshmukh who renounced the Industries Ministry during the Janata Party Government in 1977 to start a non-government organization and took up developmental activities in over 500 villages in Chitrakoot, Uttar Pradesh.
                  </p>
                  <p>
                    When contemplating where to begin, my daughter, Smt. Deepa, suggested starting work from our native place in Nellore district. Swarna Bharat Trust was formed at Venkatachalam where five acres of land was procured and buildings were constructed.
                  </p>
                </div>
              </div>
            </div>

            {/* Story 7 - Left */}
            <div className="timeline-item left">
              <div className="timeline-marker"></div>
              <div className="timeline-content about-tl-con">
                <div className="timeline-text">
                  <h3>Independent & Impactful</h3>
                  <p>
                    At a time when it is considered that non-government organizations work with government funds, and as I was the national president of the then ruling party, it was decided to run activities with funds collected voluntarily and not seek government funds.
                  </p>
                  <p>
                    It gives me great pleasure that the trust reached the masses within ten years with its activities: providing education, healthcare, veterinary medical aid, training in technical and computer skills for rural unemployed youth, making available the fruits of scientific advancements to rural areas, and identifying and encouraging rural talent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="trust-conclusion">
            <div className="conclusion-content">
              <h3>Our Vision Forward</h3>
              <p>
                I have decided to use my status to do my best for the welfare of rural people, instead of using it for selfish ends. I feel satisfied and draw inspiration continuously by taking part in one or other activity of the trust every month, despite my busy schedule at the national level.
              </p>
              <p>
                I invite prominent personalities for Swarna Bharat Trust programmes to make them see the activities and inspire others to take up similar experiments in various places. I would like to expand the activities of Swarna Bharat all over the state. Only then could we realize the Swarna Bharat dream completely.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Counter />
    </div>
  )
}

export default About

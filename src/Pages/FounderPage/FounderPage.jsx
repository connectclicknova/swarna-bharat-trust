import React from 'react'
import './FounderPage.css'
import { Award, Calendar, MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react'
import FounderImage from '../../assets/venkaiah-naidu.jpg'

const FounderPage = () => {
  return (
    <div className="founder-page">
      {/* Hero Section */}
      <section className="founder-hero">
        <div className="container">
          <div className="founder-hero-content">
            <div className="hero-text">
              <span className="section-label">Our Founder</span>
              <h1>Shri M. Venkaiah Naidu</h1>
              <p className="hero-designation">13th Vice President of India (2017-2022)</p>
              <p className="hero-subtitle">Padma Vibhushan | Former Union Cabinet Minister | Social Reformer</p>
            </div>
            <div className="hero-image">
              <img src={FounderImage} alt="Shri M. Venkaiah Naidu" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="quick-facts">
        <div className="container">
          <div className="facts-grid">
            <div className="fact-card">
              <Calendar className="fact-icon" />
              <h4>Born</h4>
              <p>1 July 1949</p>
            </div>
            <div className="fact-card">
              <MapPin className="fact-icon" />
              <h4>Birthplace</h4>
              <p>Chavatapalem, Nellore</p>
            </div>
            <div className="fact-card">
              <GraduationCap className="fact-icon" />
              <h4>Education</h4>
              <p>Law, Andhra University</p>
            </div>
            <div className="fact-card">
              <Briefcase className="fact-icon" />
              <h4>Political Party</h4>
              <p>Bharatiya Janata Party</p>
            </div>
            <div className="fact-card">
              <Award className="fact-icon" />
              <h4>Highest Honour</h4>
              <p>Padma Vibhushan (2024)</p>
            </div>
            <div className="fact-card">
              <Heart className="fact-icon" />
              <h4>Social Work</h4>
              <p>Swarna Bharat Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="biography-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Biography</span>
            <h2>A Life of Service and Dedication</h2>
          </div>

          <div className="bio-content">
            <div className="bio-card">
              <h3>Early Life & Education</h3>
              <p>
                Muppavarapu Venkaiah Naidu was born on 1 July 1949 at Chavatapalem village (near Venkatachalam) in Nellore district of Andhra Pradesh, to Rangaiah Naidu and Ramanamma. His journey from a small village to the highest offices of the nation is a testament to his dedication and commitment to public service.
              </p>
              <p>
                He completed his schooling from Zilla Parshad High School, Bucchireddy Palem (Nellore), and pursued his bachelor's degree in politics and diplomatic studies at V. R. College, Nellore. Later, he acquired a bachelor's degree in law with specialisation in international law from Andhra University College of Law, Visakhapatnam.
              </p>
              <p>
                He was a swayamsevak in the Rashtriya Swayamsevak Sangh and joined ABVP during his college days. He was elected as the president of the students' union of colleges affiliated with the Andhra University. He came into the spotlight for his prominent role in the Jai Andhra Movement of 1972. While Kakani Venkata Ratnam led the movement from Vijayawada, Naidu took active part in the agitation in Nellore.
              </p>
              <p>
                In 1974, he became the convener of Jayaprakash Narayan Chhatra Sangharsh Samiti of Andhra Pradesh. He took to the streets in protest against the Emergency and was imprisoned. From 1977 to 1980, he was president of its youth wing.
              </p>
            </div>

            <div className="bio-card">
              <h3>Political Career</h3>
              <p>
                Both as a student leader and political figure, Naidu gained prominence as an orator who championed the cause of the farmers and the development of backward areas. His oratory skills and political activism propelled his political career, and he was elected as an MLA to the Andhra Pradesh Legislative Assembly twice from Udaygiri constituency in Nellore district in 1978 and 1983. He rose to become one of the most popular leaders of the BJP in Andhra Pradesh.
              </p>
              <p>
                After serving in various organisational posts of the BJP at the state and national level, he was elected as a member of the Rajya Sabha from Karnataka in 1998. He was re-elected twice, in 2004 and 2010, from Karnataka. He served as the party spokesperson from 1996 to 2000, bringing to the job his panache for quirky alliterations and similes. Unlike most politicians from southern India, Naidu made an effort to master Hindi, going on to address public rallies in northern India.
              </p>
            </div>

            <div className="bio-card highlight">
              <h3>Minister of Rural Development (1999-2002)</h3>
              <p>
                After the NDA victory in the 1999 general elections, he became the Union Cabinet Minister for Rural Development in the government headed by Prime Minister Atal Bihari Vajpayee. He was known for aggressively pushing for reforms in rural development and for the many schemes introduced during this period such as the 'Pradhan Mantri Gram Sadak Yojana'.
              </p>
            </div>

            <div className="bio-card">
              <h3>National President of BJP (2002-2004)</h3>
              <p>
                Naidu succeeded Jana Krishnamurthi as the National President of the Bharatiya Janata Party in 2003. On 28 January 2004, he was elected unopposed for a full three-year term. After the defeat of the BJP-led NDA in the 2004 general elections, he resigned from his post on 18 October 2004 and was succeeded by L. K. Advani. However, he remained at the forefront of the BJP as one of its senior vice-presidents and an important campaigner.
              </p>
            </div>

            <div className="bio-card">
              <h3>First Modi Ministry (2014-2017)</h3>
              <p>
                Following the victory of the BJP in the 2014 general elections, he was sworn in as the Minister for Urban Development and Parliamentary Affairs on 26 May 2014. On 5 July 2016, he concurrently served as Minister of Information and Broadcasting.
              </p>
              <p>
                During this period, Naidu is also involved with the Swarna Bharat Trust, a social service organisation founded by him in Nellore. The trust runs a school for poor, orphaned and special-needs children and imparts self-employment training programmes, especially for women and youth.
              </p>
            </div>

            <div className="bio-card highlight">
              <h3>Vice President of India (2017-2022)</h3>
              <p>
                A year later, he resigned from both offices to contest the 2017 vice presidential election. He won the election to become India's 13th Vice President. He obtained 516 votes against UPA candidate Gopalkrishna Gandhi, who received 244 votes. He took the oath as the Vice President of India and the Chairman of the Rajya Sabha (ex-officio as the Vice President) on 11 August 2017.
              </p>
              <p>
                As his tenure ended, Naidu decided to move back to Hyderabad with his family and declared that he will resume his career in the service of the nation. He was succeeded by Jagdeep Dhankhar on 11 August 2022.
              </p>
            </div>

            <div className="bio-card">
              <h3>Personal Life</h3>
              <p>
                Naidu married Usha on 14 April 1972, with whom he has a son and a daughter. Usha served as the 13th Second Lady of India during his tenure as Vice President.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Career Timeline</span>
            <h2>Positions Held</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">1973-1974</span>
                <h4>President, Students' Union</h4>
                <p>Andhra University</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">1974</span>
                <h4>Convener, JP Yuvajana Chatra Sangharsha Samithi</h4>
                <p>Andhra Pradesh</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">1977-1980</span>
                <h4>President, Youth Wings of Janata Party</h4>
                <p>Andhra Pradesh</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">1978-1985</span>
                <h4>Member, Legislative Assembly</h4>
                <p>Andhra Pradesh (2 terms from Udayagiri)</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">1980-1985</span>
                <h4>Leader, BJP Legislative Party</h4>
                <p>Andhra Pradesh</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">1985-1988</span>
                <h4>General Secretary, BJP</h4>
                <p>Andhra Pradesh State</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">1988-1993</span>
                <h4>President, BJP</h4>
                <p>Andhra Pradesh State</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">1993-2000</span>
                <h4>National General Secretary, BJP</h4>
                <p>Also served as Secretary of BJP Parliamentary Board and Central Election Committee</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">1998-2016</span>
                <h4>Member, Rajya Sabha</h4>
                <p>Karnataka (3 terms)</p>
              </div>
            </div>

            <div className="timeline-item highlight">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">2000-2002</span>
                <h4>Minister of Rural Development</h4>
                <p>Union Cabinet, Government of India</p>
              </div>
            </div>

            <div className="timeline-item highlight">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">2002-2004</span>
                <h4>National President, Bharatiya Janata Party</h4>
                <p>Elected unopposed for full three-year term</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">2005-2017</span>
                <h4>National Vice-President, BJP</h4>
                <p>Senior leadership role</p>
              </div>
            </div>

            <div className="timeline-item highlight">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">2014-2017</span>
                <h4>Union Cabinet Minister</h4>
                <p>Urban Development, Housing & Urban Poverty Alleviation, Parliamentary Affairs</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">2016</span>
                <h4>Member, Rajya Sabha</h4>
                <p>Rajasthan</p>
              </div>
            </div>

            <div className="timeline-item highlight">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">2016-2017</span>
                <h4>Minister of Information and Broadcasting</h4>
                <p>Union Cabinet, Government of India</p>
              </div>
            </div>

            <div className="timeline-item highlight">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">2017-2022</span>
                <h4>Vice President of India</h4>
                <p>13th Vice President | Chairman of Rajya Sabha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Recognition</span>
            <h2>Awards & Honours</h2>
          </div>

          <div className="awards-grid">
            <div className="award-card">
              <div className="award-icon">
                <Award size={40} />
              </div>
              <h3>Padma Vibhushan</h3>
              <p className="award-year">2024</p>
              <p className="award-desc">India's second highest civilian award, presented by the Government of India</p>
            </div>

            <div className="award-card">
              <div className="award-icon">
                <Award size={40} />
              </div>
              <h3>Order of the Green Crescent of Comoros</h3>
              <p className="award-year">2019</p>
              <p className="award-desc">Commander - Foreign honour from Comoros</p>
            </div>

            <div className="award-card">
              <div className="award-icon">
                <GraduationCap size={40} />
              </div>
              <h3>Doctor of Philosophy (D.Phil.)</h3>
              <p className="award-year">2019</p>
              <p className="award-desc">Honorary degree from University for Peace - First Indian to receive this honour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="legacy-section">
        <div className="container">
          <div className="legacy-content">
            <h2>A Legacy of Service</h2>
            <p>
              Throughout his distinguished career spanning over five decades, Shri M. Venkaiah Naidu has remained committed to the welfare of the common people, especially those in rural India. His initiatives in rural development, including the pioneering Pradhan Mantri Gram Sadak Yojana, have transformed countless lives.
            </p>
            <p>
              As the founder of Swarna Bharat Trust, he continues his mission of social service, focusing on education, healthcare, skill development, and empowerment of rural communities. His life stands as a testament to the power of dedication, integrity, and service to the nation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FounderPage
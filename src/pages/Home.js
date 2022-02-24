import Banner from '../components/Banner'
import Socials from '../components/Socials'
import Subsection from '../components/Subsection'
import Faq from '../components/Faq'
import MMO from '../components/MMO'
import Roadmap from '../components/Roadmap'
import Team from '../components/Team'
import Footer from '../components/Footer'
import MobileDivider from '../components/MobileDivider'
import DesktopDivider from '../components/DesktopDivider'
import About from '../components/About'

import purpleCyborg from '../assets/images/purplecyborg.png'
import pinkCyborg from '../assets/images/pinkcyborg.png'

import styles from '../styles/home.module.css'

const Home = () => {
  return (
    <>
      <div className={styles.flexbox}>
        <Banner>
          <Socials />
          <h2 className={styles.h2}>SUPER CYBORGS</h2>
        </Banner>
        <Subsection img={purpleCyborg}>
          <span>
            <h2 className={styles.h2}>What are <span id={styles.gold}>Super Cyborgs?</span></h2>
            <p className={styles.p}>
              Super Cyborgs are citizens of <span id={styles.lime}>NEON CITY</span>, the most technologically advanced city
              in the whole galaxy. It is the year <span id={styles.gold}>2099</span>, and people have started to become more machine than man. 
            </p>
            </span>
        </Subsection> 
        <Subsection img={pinkCyborg} reverse>
          <span>
          <h2 className={styles.h2}>What is the <span id={styles.gold}>Super Cyborgs</span> <span id={styles.red}>MMO</span>?</h2>
          <p className={styles.p}>
            The Super Cyborgs <span id={styles.red}>MMO</span> is a multiplayer video game that allows players to play as their one-of-a-kind NFT avatar
            and explore <span id={styles.lime}>NEON CITY</span>. Every aspect of the city&apos;s open world will be owned
            by the community.
          </p>
          </span>
        </Subsection>
        <Faq />
        <MobileDivider />
        <DesktopDivider />
        <MMO />
        <Roadmap />
        <About />
        <Team />
        <Footer />
      </div>
    </>
  )
}

export default Home
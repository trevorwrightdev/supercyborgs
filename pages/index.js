import Meta from '../components/Meta'
import Banner from '../components/Banner'
import Socials from '../components/Socials'
import Subsection  from '../components/Subsection'
import Faq from '../components/Faq'

import purpleCyborg from '../public/images/purplecyborg.png'
import pinkCyborg from '../public/images/pinkcyborg.png'

import homeStyles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Meta />
      <div className={homeStyles.flexbox}>
      <Banner>
        <Socials />
        <h2 className={homeStyles.h2}>SUPER CYBORGS</h2>
      </Banner>
      <Subsection img={purpleCyborg}>
        <h2 className={homeStyles.h2}>What are <span id={homeStyles.gold}>Super Cyborgs?</span></h2>
        <p className={homeStyles.p}>
          Super Cyborgs are citizens of <span id={homeStyles.lime}>NEON CITY</span>, the most technologically advanced city
          in the whole galaxy. It is the year <span id={homeStyles.gold}>2099</span>, and people have started to become more machine than man. 
        </p>
      </Subsection> 
      <Subsection img={pinkCyborg}>
        <h2 className={homeStyles.h2}>What is the <span id={homeStyles.gold}>Super Cyborgs</span> <span id={homeStyles.red}>MMO</span>?</h2>
        <p className={homeStyles.p}>
          The Super Cyborgs <span id={homeStyles.red}>MMO</span> is a multiplayer video game that allows players to play as their one-of-a-kind NFT avatar
          and explore <span id={homeStyles.lime}>NEON CITY</span>. Every aspect of the city&apos;s open world will be owned
          by the community.
        </p>
      </Subsection>
      <Faq />
      </div>
    </>
  )
}

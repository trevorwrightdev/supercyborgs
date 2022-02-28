import gameHeart from '../assets/images/gameheart.png'
import boardGame from '../assets/images/boardgame.png'
import coding from '../assets/images/coding.gif'
import solana from '../assets/images/solana.png'
import lightbulb from '../assets/images/lightbulb.png'
import threeCyborgs from '../assets/images/threecyborgs.png'

import styles from '../styles/home.module.css'

const About = () => {
  return (
      <div className={styles.aboutContainer}>
        <div className={styles.about}>
            <h1 className={styles.aboutTitle}>ABOUT ME</h1>
            <div className={`${styles.aboutSection} ${styles.aboutReverse}`}>
                <p>
                    It all began when a kid found that he really loved video games.
                </p>
                <img className={styles.gameHeart} src={gameHeart} alt=''/>
            </div>
            <div className={`${styles.aboutSection} ${styles.aboutBorder}`} style={{paddingBottom: '25px'}}>
                <p>
                    He decided that he wanted to make his own video games! But he was young and coding was hard, so he made paper board games instead.
                </p>
                <img className={styles.boardGame} src={boardGame} alt=''/>
            </div>
            <p className={styles.aboutP}>
                When he got older, he decided to give coding a try, so he could make real video games!
            </p>
            <img className={styles.coding} src={coding} alt='' />
            <p className={styles.aboutP}>
                He got pretty good at coding games. He wanted to spend his life making all of the games he's dreamed of.
            </p>
            <div className={`${styles.aboutSection}`}>
                <p>
                    Then one day, he learned about NFTs. He thought that NFTs could make video games even better.
                </p>
                <img className={styles.solPic} src={solana} alt=''/>
            </div>
            <div className={`${styles.aboutSection} ${styles.aboutReverse} ${styles.aboutBorder}`}>
                <p>
                    Then he had an idea! 
                </p>
                <img className={styles.lightbulb} src={lightbulb} alt=''/>
            </div>
            <p className={styles.aboutP}>
                What if he made his own NFT game? A 2D MMO, similar to the online browser games he played during his childhood.
                He could make a metaverse world completely owned by its players!
            </p>
            <p className={styles.aboutP}>
                So.....
            </p>
            <img src={threeCyborgs} className={styles.threeCyborgs} alt=''/>
            <h2 className={styles.cyborgsWasBorn}><span id={styles.lime}>SUPER CYBORGS WAS BORN!</span> </h2>
        </div>
      </div>
  )
}

export default About
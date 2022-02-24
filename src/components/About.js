import einstein from '../assets/images/einsteinscythe-transparent.png'

import styles from '../styles/home.module.css'

const About = () => {
  return (
    <div className={styles.about}>
        <h1 className={styles.aboutTitle}>ABOUT ME</h1>
        <div className={`${styles.aboutSection} ${styles.aboutReverse}`}>
            <p>
                It all began when a kid found that he really loved video games.
            </p>
            <img src={einstein} alt=''/>
        </div>
        <div className={`${styles.aboutSection} ${styles.about2}`} style={{paddingBottom: '25px'}}>
            <p>
                He decided that he wanted to make his own video games! But he was young and coding was hard, so he made board games instead.
            </p>
            <img src={einstein} alt=''/>
        </div>
        <p style={{textAlign: 'center', lineHeight: '20px'}}>
            When he got older, he decided to give coding a try, so he could make real video games!
        </p>
    </div>
  )
}

export default About
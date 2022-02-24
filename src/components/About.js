import einstein from '../assets/images/einsteinscythe-transparent.png'

import styles from '../styles/home.module.css'

const About = () => {
  return (
    <div className={styles.about}>
        <h1 className={styles.aboutTitle}>ABOUT ME</h1>
        <div className={`${styles.aboutSection}`}>
            <p>
                It all began when a 
            </p>
            <img src={einstein} alt=''/>
        </div>
    </div>
  )
}

export default About
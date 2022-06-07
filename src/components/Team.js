// import einstein from '../assets/images/EinsteinScythe.png'
import greenDude from '../assets/images/greendude.png'

import styles from '../styles/home.module.css'

const Team = () => {
    return (
    <>
        {/* <h1 className={styles.teamTitle}>THE TEAM</h1> */}
        <div className={styles.team}>
            {/* <span className={styles.teamMember}>
                <img className={styles.teamImage} alt='' src={einstein} />
                <span className={styles.job}>Developer</span>
                <a className={styles.link} href="https://twitter.com/trevdev__" target="_blank" rel="noopener noreferrer">@trevdev__</a>
            </span> */}
            <span className={styles.teamMember}>
                <img className={styles.teamImage} alt='' src={greenDude} />
                <span className={styles.job}>Artist</span>
                <a className={styles.link} href="https://twitter.com/GraysonVarn" target="_blank" rel="noopener noreferrer">@GraysonVarn</a>
            </span>
        </div>
    </>
    )
}

export default Team


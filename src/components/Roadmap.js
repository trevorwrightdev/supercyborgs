import identity from '../assets/images/stage-one.gif'
import globe from '../assets/images/stage-two.gif'
import house from '../assets/images/stage-three.gif'

import styles from '../styles/home.module.css'

const Roadmap = () => {
    return (
        <div className={styles.roadmap}>
            <h1 className={styles.title}>ROADMAP</h1>
            <div className={`${styles.imgContainer} ${styles.identityContainer}`}>
                <img src={identity} alt=''/>
            </div>
            <h2>STAGE 1</h2>
            <h3>Identity</h3>
            <p className={styles.roadParagraph}>Minting the NFTs</p>
            <div className={`${styles.imgContainer}`}>
                <img src={globe} alt=''/>
            </div>
            <h2>STAGE 2</h2>
            <h3>Civilization</h3>
            <p className={styles.roadParagraph}>Releasing the MMO</p>
            <div className={`${styles.houseContainer} ${styles.imgContainer}`}>
                <img src={house} alt=''/>
            </div>
            <h2>STAGE 3</h2>
            <h3>Delegation</h3>
            <p className={styles.roadParagraph}>Airdropping land</p>
        </div>
    )
}

export default Roadmap


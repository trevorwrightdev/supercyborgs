import identity from '../assets/images/stage-one.gif'

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
            <h2>STAGE 2</h2>
            <h3>Civilization</h3>
            <h2>STAGE 3</h2>
            <h3>Delegation</h3>
            <h2>STAGE 4</h2>
            <h3>BEYOND</h3>
        </div>
    )
}

export default Roadmap


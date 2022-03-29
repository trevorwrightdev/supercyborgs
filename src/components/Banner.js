import styles from '../styles/home.module.css'

const Banner = ({ children }) => {
    return (
        <div className={styles.banner}>
            <div className={styles.gradient} />
            {children}
        </div>
    )
}

export default Banner


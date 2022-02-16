import styles from '../styles/home.module.css'

const Banner = ({ children }) => {
    return (
        <div className={styles.banner}>
            {children}
        </div>
    )
}

export default Banner

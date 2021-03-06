import styles from '../styles/home.module.css'

const Faq = () => {
    return (
        <div className={styles.faq}>
            <h1 className={styles.title}>FAQ</h1>
            <h2 className={styles.question}>What is the mint price?</h2>
            <h3 className={styles.answer}>The mint price is <span id={styles.sol}>1 SOL</span>.</h3>
            <h2 className={styles.question}>What is the total supply?</h2>
            <h3 className={styles.answer}>The total supply is 4444.</h3>
            <h2 className={styles.question}>When does the MMO release?</h2>
            <h3 className={styles.answer}>The game will release exactly one month after minting.</h3>
        </div>
    )
}

export default Faq


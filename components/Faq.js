import homeStyles from '../styles/Home.module.css'

const Faq = () => {
    return (
        <div className={homeStyles.faq}>
            <h1 className={homeStyles.title}>FAQ</h1>
            <h2 className={homeStyles.question}>What is the mint price?</h2>
            <h3 className={homeStyles.answer}>The mint price is <span id={homeStyles.sol}>0.5 SOL</span>. It&apos;s one mint per whitelisted wallet.</h3>
            <h2 className={homeStyles.question}>What is the total supply?</h2>
            <h3 className={homeStyles.answer}>The total supply is 3333.</h3>
            <h2 className={homeStyles.question}>When does the MMO release?</h2>
            <h3 className={homeStyles.answer}>The game will release a week or two after minting.</h3>
        </div>
    )
}

export default Faq

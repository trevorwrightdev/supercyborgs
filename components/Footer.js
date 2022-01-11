import homeStyles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <div className={homeStyles.footer}>
            <a href='https://demonlabs.io' target="_blank" rel="noopener noreferrer" className={homeStyles.footerLink}>by DEMON LABS</a>
        </div>
    )
}

export default Footer

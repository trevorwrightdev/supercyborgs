import homeStyles from '../styles/Home.module.css'

const Banner = ({ children }) => {
    return (
        <div className={homeStyles.banner}>
            {children}
        </div>
    )
}

export default Banner

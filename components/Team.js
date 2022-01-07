import WrappedImage from './WrappedImage'

import einstein from '../public/images/EinsteinScythe.png'
import greenDude from '../public/images/greendude.png'

import homeStyles from '../styles/Home.module.css'

const Team = () => {
    return (
        <div className={homeStyles.team}>
            <h1 className={homeStyles.title}>THE TEAM</h1>
            <WrappedImage className={homeStyles.teamImage} src={einstein} quality={100}/>
            <span className={homeStyles.dev}>Developer</span>
            <a className={homeStyles.link} href="https://twitter.com/trevdev_eth" target="_blank" rel="noopener noreferrer">@trevdev_eth</a>
            <WrappedImage className={homeStyles.teamImage} src={greenDude} quality={100}/>
            <span className={homeStyles.dev}>Artist</span>
            <a className={homeStyles.link} href="https://www.youtube.com/c/YoogChannel" target="_blank" rel="noopener noreferrer">yoog</a>
        </div>
    )
}

export default Team

import WrappedImage from './WrappedImage'

import einstein from '../public/images/EinsteinScythe.png'
import greenDude from '../public/images/greendude.png'

import homeStyles from '../styles/Home.module.css'

const Team = () => {
    return (
        <>
        <h1 className={homeStyles.teamTitle}>THE TEAM</h1>
        <div className={homeStyles.team}>
            <span className={homeStyles.teamMember}>
            <WrappedImage className={homeStyles.teamImage} src={einstein} quality={100}/>
            <span className={homeStyles.dev}>Developer</span>
            <a className={homeStyles.link} href="https://twitter.com/trevdev_eth" target="_blank" rel="noopener noreferrer">@trevdev_eth</a>
            </span>
            <span className={homeStyles.teamMember}>
            <WrappedImage className={homeStyles.teamImage} src={greenDude} quality={100}/>
            <span className={homeStyles.dev}>Artist</span>
            <a className={homeStyles.link} href="https://twitter.com/GraysonVarn" target="_blank" rel="noopener noreferrer">Grayson Varn</a>
            </span>
        </div>
        </>
    )
}

export default Team

import Image from 'next/image'
import Link from 'next/link'
import einstein from '../public/images/einsteinscythe.png'

import homeStyles from '../styles/Home.module.css'

const Team = () => {
    return (
        <div className={homeStyles.team}>
            <h1 className={homeStyles.title}>THE TEAM</h1>
            <Image className={homeStyles.teamImage} src={einstein} quality={100}/>
            <Link className={homeStyles.link} href="https://twitter.com/trevdev_eth">@trevdev_eth</Link>
        </div>
    )
}

export default Team

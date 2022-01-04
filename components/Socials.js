import SocialButton from './SocialButton'
import discordLogo from '../public/images/discordwhiteimage.png'
import twitterLogo from '../public/images/2021 Twitter logo - black.png'
import openseaLogo from '../public/images/opensea-transparent-logo.png'

import homeStyles from '../styles/Home.module.css'

const Socials = () => {
    return (
        <nav className={homeStyles.nav}>
            <SocialButton img={discordLogo} link='https://discord.gg/hcFPbPdSPj'/>
            <SocialButton img={twitterLogo} link='https://twitter.com/SuperCyborgsNFT'/>
            <SocialButton img={openseaLogo} link='https://opensea.io/collection/neo-tokyo-identities'/>
        </nav>
    )
}

export default Socials

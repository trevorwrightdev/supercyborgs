import SocialButton from './SocialButton'
import discordLogo from '../public/images/discordicon.svg'
import twitterLogo from '../public/images/twittericon.svg'
import openseaLogo from '../public/images/openseaicon.svg'

import homeStyles from '../styles/Home.module.css'

const Socials = () => {

    console.log()

    return (
        <nav className={homeStyles.nav}>
            <SocialButton img={discordLogo} link='https://discord.gg/hcFPbPdSPj'/>
            <SocialButton img={twitterLogo} link='https://twitter.com/SuperCyborgsNFT'/>
            <SocialButton img={openseaLogo} link='https://opensea.io/collection/neo-tokyo-identities'/>
        </nav>
    )
}

export default Socials

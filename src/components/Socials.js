import SocialButton from "./SocialButton"
import discordLogo from '../images/Discord-Logo-White.png'
import twitterLogo from '../images/2021 Twitter logo - black.png'
import openseaLogo from '../images/opensea-transparent-logo.png'

const Socials = () => {
    return (
        <nav>
            <SocialButton img={discordLogo} link='https://discord.gg/hcFPbPdSPj'/>
            <SocialButton img={twitterLogo} link='https://twitter.com/SuperCyborgsNFT'/>
            <SocialButton img={openseaLogo} link='https://opensea.io/collection/neo-tokyo-identities'/>
        </nav>
    )
}

export default Socials

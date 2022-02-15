import SocialButton from './SocialButton'
import discordLogo from '../assets/images/discordicon.svg'
import twitterLogo from '../assets/images/twittericon.svg'

const Socials = () => {

    return (
        <nav className='nav'>
            <SocialButton img={discordLogo} link='https://discord.gg/hcFPbPdSPj'/>
            <SocialButton img={twitterLogo} link='https://twitter.com/SuperCyborgsNFT'/>
            {/* <SocialButton img={openseaLogo} link='https://opensea.io/collection/neo-tokyo-identities'/> */}
        </nav>
    )
}

export default Socials

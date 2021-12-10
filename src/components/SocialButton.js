import discordLogo from '../images/Discord-Logo-White.png'
import twitterLogo from '../images/2021 Twitter logo - black.png'
import openseaLogo from '../images/opensea-transparent-logo.png'


const SocialButton = ({ social }) => {

    // TODO: Pass in url as prop? and then link to page as prop?

    let imgURL = '';

    if (social === 'Discord') imgURL = discordLogo;
    else if (social === 'Twitter') imgURL = twitterLogo;
    else if (social === 'OpenSea') imgURL = openseaLogo;

    console.log(imgURL);

    return (
        <img src={imgURL} alt=''/>
    )
}

export default SocialButton

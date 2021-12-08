const SocialButton = ({ social }) => {

    let imgURL = '';

    if (social === 'Discord') imgURL = '/src/images/Disord-Logo-Color.svg';
    else if (social === 'Twitter') imgURL = '/src/images/Logo Blue.svg';
    else if (social === 'OpenSea') imgURL = '/src/images/opensea-logo.svg';

    return (
        <img src={imgURL} alt=''/>
    )
}

export default SocialButton

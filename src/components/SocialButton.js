

const SocialButton = ({ img, link }) => {

    const openInNewTab = (url) => {
        let win = window.open(url, '');
        win.focus();
    }

    return (
        <img src={img} alt='' onClick={() => openInNewTab(link)} />
    )
}

export default SocialButton


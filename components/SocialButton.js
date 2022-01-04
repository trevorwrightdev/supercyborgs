import Image from 'next/image'
import WrappedImage from './WrappedImage'
import homeStyles from '../styles/Home.module.css'

const SocialButton = ({ img, link }) => {

    const openInNewTab = (url) => {
        let win = window.open(url, '');
        win.focus();
    }

    return (
        <WrappedImage src={img} alt='' onClick={() => openInNewTab(link)} quality={75}/>
    )
}

export default SocialButton

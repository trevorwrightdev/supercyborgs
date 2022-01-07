import Image from 'next/image'

import homeStyles from '../styles/Home.module.css'

const WrappedImage = ({src, width, height, onClick, quality}) => {
    return (
        <div className={homeStyles.wrappedImage}>
            <Image className={homeStyles.isolatedImage} src={src} objectFit="contain" width={width} height={height} onClick={onClick} quality={quality} alt=''/>
        </div>
    )
}

export default WrappedImage

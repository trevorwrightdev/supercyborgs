import Image from 'next/image'

import homeStyles from '../styles/Home.module.css'

const WrappedImage = ({src, width, height, onClick, quality, layout, objectFit}) => {

    return (
        <div className={homeStyles.wrappedImage}>
            <Image className={homeStyles.isolatedImage} layout={layout} objectFit={objectFit} src={src} width={width} height={height} onClick={onClick} quality={quality} alt=''/>
        </div>
    )
}

export default WrappedImage

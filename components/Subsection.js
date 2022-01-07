import WrappedImage from './WrappedImage'

import homeStyles from '../styles/Home.module.css'

const Subsection = ( { img, children, cyborg } ) => {

    return (
        <div className={homeStyles.section}>
            <WrappedImage className={cyborg === 'purple' ? homeStyles.purple : homeStyles.pink} layout='fill' objectFit='contain' src={img} alt='' quality={100}/>
            {children}
        </div>
    )
}

export default Subsection

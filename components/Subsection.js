import WrappedImage from './WrappedImage'

import homeStyles from '../styles/Home.module.css'

const Subsection = ( { img, children } ) => {
    return (
        <div className={homeStyles.section}>
            <WrappedImage src={img} alt='' quality={100}/>
            {children}
        </div>
    )
}

export default Subsection

import styles from '../styles/home.module.css'


const Subsection = ( { img, children, reverse} ) => {

    return (
        <div className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
            <img src={img} alt=''/>
            {children}
        </div>
    )
}

export default Subsection

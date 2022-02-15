
const Subsection = ( { img, children, reverse} ) => {

    return (
        <div className={`${'section'} ${reverse ? 'reverse' : ''}`}>
            <img src={img} alt=''/>
            {children}
        </div>
    )
}

export default Subsection

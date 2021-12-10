const Subsection = ( { img, children } ) => {
    return (
        <div className='section'>
            <img src={img} alt='' />
            {children}
        </div>
    )
}

export default Subsection

const Banner = ({ title, children }) => {
    return (
        <div className='banner'>
            {children}
            <h2>{title}</h2>
        </div>
    )
}

export default Banner

import einstein from '../assets/images/EinsteinScythe.png'
import greenDude from '../assets/images/greendude.png'

const Team = () => {
    return (
    <>
        <h1 className='teamTitle'>THE TEAM</h1>
        <div className='team'>
            <span className='teamMember'>
                <img className='teamImage' alt='' src={einstein} />
                <span className='job'>Developer</span>
                <a className='link' href="https://twitter.com/trevdev__" target="_blank" rel="noopener noreferrer">@trevdev__</a>
            </span>
            <span className='teamMember'>
                <img className='teamImage' alt='' src={greenDude} />
                <span className='job'>Artist</span>
                <a className='link' href="https://twitter.com/GraysonVarn" target="_blank" rel="noopener noreferrer">@GraysonVarn</a>
            </span>
        </div>
    </>
    )
}

export default Team

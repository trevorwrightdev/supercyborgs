import Image from 'next/image'

import homeStyles from '../styles/Home.module.css'

const Roadmap = () => {
    return (
        <div className={homeStyles.roadmap}>
            <h1 className={homeStyles.title}>ROADMAP</h1>
            {/* use images here before each phase title */}
            <h2>STAGE 1</h2>
            <h3>Identity</h3>
            <h2>STAGE 2</h2>
            <h3>Civilization</h3>
            <h2>STAGE 3</h2>
            <h3>Delegation</h3>
        </div>
    )
}

export default Roadmap

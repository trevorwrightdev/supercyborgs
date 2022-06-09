import { Link } from 'react-router-dom'
import mask from '../assets/images/mask.png'

import styles from '../styles/home.module.css'

const MMO = () => {
  return (
      <div className={styles.mmoContainer}>
          <div className={styles.mmo}>
              <h1 className={styles.mmoHeader}>MMO</h1>
              <p className={styles.mmoDesc}>
                  The Super Cyborgs MMO is an online social game that takes
                  place in NEON CITY, the home of all Super Cyborgs. The game
                  consists of a main open world, which is split into sectors.
              </p>
              <h3 className={styles.mmoTitle}>SECTORS</h3>
              <div className={styles.mmoSectors}>
                  <h3 className={styles.sectorName}>HYPERNIA</h3>
                  <p className={styles.sectorDescription}>
                      A rooftop metropolis located at the center of Neon City.
                  </p>
                  <h3 className={styles.sectorName}>UTOPIA</h3>
                  <p className={styles.sectorDescription}>
                      A wildlife preserve where structures are built to
                      optimally coexist with nature.
                  </p>
                  <h3 className={styles.sectorName}>TOKYO</h3>
                  <p className={styles.sectorDescription}>
                      A recreation of present day Tokyo, for the future.
                  </p>
                  <h3 className={styles.sectorName}>NEO ROME</h3>
                  <p className={styles.sectorDescription}>
                      A city of beauty, where the ancient buildings of Rome are
                      combined with contrasting futuristic technology.
                  </p>
                  <h3 className={styles.sectorName}>CHASM</h3>
                  <p className={styles.sectorDescription}>
                      A crime ridden sector hidden in the catacombs on Neon
                      City.
                  </p>
              </div>
              <h3 className={styles.mmoTitle}>LAND AIRDROPS</h3>
              <p className={styles.mmoDesc}>
                  Each sector consists of scarce land that can be owned by
                  owning the corresponding NFT. These land NFTs will be
                  <span id="white">airdropped</span> to all Super Cyborgs
                  holders during the &quot;Delegation&quot; phase on our
                  roadmap.
              </p>
              <h3 className={styles.mmoTitle}>COMMUNITY STORY</h3>
              <p className={styles.mmoDesc}>
                  Super Cyborgs holders get exclusive access to work directly
                  with the game developers to have a real and tangible effect on
                  the MMO. Each Cyborg is a character in a branching story that
                  the community hand-crafts.
              </p>
          </div>
          <Link to="/clan">
              <img className={styles.mask} src={mask} alt="" />
          </Link>
      </div>
  );
};

export default MMO;


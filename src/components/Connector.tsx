import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';
import Player from './Player'

import styles from '../styles/play.module.css'
import homeStyles from '../styles/home.module.css'

const Connector = () => {

  const wallet = useWallet();

  return (
    <>
      {!wallet.connected ? (
      <div className={styles.connectContainer}>
        <div className={styles.connectBox}>
          <div className={styles.instructions}>
            <h2>Connect your wallet to enter <span id={homeStyles.lime}>NEON CITY</span>.</h2>
          </div>
          <WalletDialogButton className={styles.connectButton}>Connect Wallet</WalletDialogButton>
        </div>
      </div>
    ) : (
      // * PLAYER GOES HERE, REQUIRES ADDRESS AS PROP!!!
      <Player address={wallet.publicKey?.toString()}/>
    )}
    </>
  );
};

export default Connector;

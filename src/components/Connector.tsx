import styled from 'styled-components';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';
import Player from './Player'
import { StylesContext } from '@material-ui/styles';

import styles from '../styles/play.module.css'

const ConnectButton = styled(WalletDialogButton)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const Connector = () => {

  const wallet = useWallet();

  return (
    <>
      {!wallet.connected ? (
      <div className={styles.connectContainer}>
        <WalletDialogButton className={styles.connectButton}>Connect Wallet</WalletDialogButton>
      </div>
    ) : (
      // * PLAYER GOES HERE, REQUIRES ADDRESS AS PROP!!!
      <Player address={wallet.publicKey?.toString()}/>
    )}
    </>
  );
};

export default Connector;

import styled from 'styled-components';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';

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
    <div>
        {!wallet.connected ? (
      <ConnectButton>Connect Wallet</ConnectButton>
    ) : (
      // * PLAYER GOES HERE, REQUIRES ADDRESS AS PROP!!!
      <h1>{wallet.publicKey?.toString()}</h1>
    )}
    </div>
  );
};

export default Connector;

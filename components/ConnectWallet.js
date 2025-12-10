'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig, createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';

const { connectors } = getDefaultWallets({
  appName: 'Prediction Market',
  projectId: 'walletconnect-project-id', // substitua pelo seu real
});

const config = createConfig({
  autoConnect: true,
  connectors,
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

export default function ConnectWallet() {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider>
        <ConnectButton />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

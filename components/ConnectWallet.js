'use client';

import { RainbowKitProvider, getDefaultWallets, ConnectButton } from '@rainbow-me/rainbowkit';
import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { connectors } = getDefaultWallets({
  appName: 'Prediction Market',
  projectId: 'walletconnect-project-id',
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient: publicProvider(),
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
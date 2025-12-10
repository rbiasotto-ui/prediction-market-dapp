'use client';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
} from '@rainbow-me/rainbowkit';

import {
  WagmiProvider,
  createConfig,
  http,
} from 'wagmi';

import { mainnet } from 'wagmi/chains';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const { wallets, connectors } = getDefaultWallets({
  appName: 'Prediction Market',
  projectId: 'walletconnect-project-id',
  chains: [mainnet],
});

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(), // 🔥 novo método do Wagmi 2024+
  },
  connectors,
  autoConnect: true,
});

const queryClient = new QueryClient();

export default function ConnectWallet() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ConnectButton />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

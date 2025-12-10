import './globals.css';
import ConnectWallet from '../components/ConnectWallet';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConnectWallet />
        {children}
      </body>
    </html>
  );
}

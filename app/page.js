import ConnectWallet from "../components/ConnectWallet";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl mb-4">Prediction Market DApp</h1>
      <ConnectWallet />
      <p className="mt-6">Sua plataforma Web3 está pronta! 🟢</p>
    </main>
  );
}
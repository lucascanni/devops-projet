import Link from "next/link"

export default async function Home() {
  return (
    <main className="my-24 text-center">
      <h1 className="text-2xl"> Bienvenue sur le site de convertisseur de cryptomonnaies pour  l'evaluation de l'estiam</h1>
      <div className="flex gap-2 justify-center mt-12">
        <Link
          className=" inline-block py-3 px-6 rounded-md font-bold text-black bg-[#627EEA]"
          href="/ethereum"
        >
          Ethereum
        </Link>
        <Link
          className="text-black  inline-block py-3 px-6 rounded-md font-bold bg-[#F7931A] -to-tr from-teal-400 to-cyan-400"
          href="/bitcoin"
        >
          Bitcoin
        </Link>
        <Link
          className="inline-block py-3 px-6 rounded-md font-bold bg-[#E2761B] -to-tr text-black"
          href="/MetaMask"
        >
          MetaMask
        </Link>
      </div>
    </main>
  )
}

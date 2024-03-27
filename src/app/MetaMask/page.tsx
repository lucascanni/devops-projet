"use client"
import React, { useState } from 'react';
import Web3 from 'web3';
import Link from "next/link"

const EthereumLogin = () => {
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [account, setAccount] = useState('');
    const [balance, setBalance] = useState('');

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);

                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);

                const balanceWei = await web3Instance.eth.getBalance(accounts[0]);
                const balanceEth = web3Instance.utils.fromWei(balanceWei, 'ether');
                setBalance(balanceEth);
            } catch (error) {
                console.error("Error connecting to MetaMask:", error);
            }
        } else {
            alert("Please install MetaMask to use this feature.");
        }
    };

    return (
        <main className="my-24 text-center">
            <h1 className="text-3xl font-bold mb-6">Ethereum Account Info</h1>
            {account ? (
                <div className="space-y-4">
                    <p>Votre compte: <span className="font-semibold">{account}</span></p>
                    <p>Votre solde: <span className="font-semibold">{balance} ETH</span></p>
                </div>
            ) : (
                <button onClick={connectWallet} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors">
                    Se connecter
                </button>
            )} <br /> <br />
            <Link
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors"
          href="/"
        >
          Retour à l'accueil
    </Link>
        </main>
    );
};

export default EthereumLogin;

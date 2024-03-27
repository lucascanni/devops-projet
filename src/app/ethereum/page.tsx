"use client"
import React, { useState } from 'react';
import Link from "next/link"
import getEthToEurRate from '@/util/getEthToEurRate';

export const dynamic = "force-dynamic";

export default function EthConverter() {
  const [ethAmount, setEthAmount] = useState('');
  const [conversionResult, setConversionResult] = useState('');

  const convertEthToEur = async () => {
    try {
      const rate: number = await getEthToEurRate();
      const result = (parseFloat(ethAmount) * rate).toFixed(2);
      setConversionResult(result);
    } catch (error) {
      console.error('Erreur lors de la récupération du taux de change:', error);
      setConversionResult('Erreur lors de la conversion');
    }
  };

  return (
    <main className="my-24 text-center">
  <h1 className="text-3xl font-bold mb-6">Convertisseur Ethereum en Euro</h1>
  <div className="space-y-4">
    <input
      type="text"
      value={ethAmount}
      onChange={(e) => setEthAmount(e.target.value)}
      placeholder="Montant en ETH"
      className="input border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-white text-black"
    />
    <button
      onClick={convertEthToEur}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors"
    >
      Convertir
    </button>
    <p className="mt-4">Résultat: <span className="font-semibold">{conversionResult} Euros</span></p> <br />
    <Link
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors"
          href="/"
        >
          Retour à l'accueil
    </Link>
  </div>
</main>
  );
}

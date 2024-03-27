"use client"
import React, { useState } from 'react';
import Link from "next/link"
import getCryptoToEurRate from '@/util/getCryptoToEurRate';
export const dynamic = "force-dynamic";

export default function BitcoinConverter() {
  const [btcAmount, setBtcAmount] = useState('');
  const [conversionResult, setConversionResult] = useState('');

  const convertBtcToEur = async () => {
    try {
      const rate = await getCryptoToEurRate("bitcoin");
      const result = (parseFloat(btcAmount) * rate).toFixed(2);
      setConversionResult(result);
    } catch (error) {
      console.error('Erreur lors de la récupération du taux de change:', error);
      setConversionResult('Erreur lors de la conversion');
    }
  };

  return (
    <main className="my-24 text-center">
      <h1 className="text-3xl font-bold mb-6">Convertisseur Bitcoin en Euro</h1>
      <div className="space-y-4">
        <input
          type="text"
          value={btcAmount}
          onChange={(e) => setBtcAmount(e.target.value)}
          placeholder="Montant en BTC"
          className="input border-2 border-gray-200 p-2 rounded-md focus:outline-none focus:border-indigo-500 transition-colors bg-white text-black"
        />
        <button
          onClick={convertBtcToEur}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Convertir
        </button>
        <p>Résultat: <span className="font-semibold">{conversionResult} Euros</span></p> <br />
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

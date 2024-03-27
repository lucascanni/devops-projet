async function getCryptoToEurRate(cryptoId: string): Promise<number> {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=eur`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération du taux de change pour ${cryptoId}/EUR`);
    }
    const data = await response.json();
    return data[cryptoId].eur;
  }
  
  export default getCryptoToEurRate;
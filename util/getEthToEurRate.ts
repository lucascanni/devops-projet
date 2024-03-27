// getEthToEurRate.ts
async function getEthToEurRate(): Promise<number> {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur');
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du taux de change Ethereum/Euro');
    }
    const data = await response.json();
    return data.ethereum.eur;
  }
  
  export default getEthToEurRate;
  
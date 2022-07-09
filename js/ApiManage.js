const manageApi = {
    getSummary: async (coin, period) => {
        return await fetchRequest(coinApiEndPoints.summary(coin, period))
    },
    getCoinList: async () => {
        return await fetchRequest(coinApiEndPoints.coinlist())
    },
    getSecondchart: async (coin,priceFrom,priceTo) => {
        return await fetchRequest(coinApiEndPoints.secondList(coin,priceFrom,priceTo))
    },
    
}




const crypto_api_base = 'https://api.coingecko.com/api/v3/coins/'



const coinApiEndPoints = {
    summary: (coin, period) => {
        // let coin = 'bitcoin'
        return getApiPath(`${coin}/ohlc?vs_currency=usd&days=${period}`);
    },
    coinlist: () => {
        return getApiPath(`markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`);
    },
    secondList:(coin,priceFrom,priceTo)=>{
        return getApiPath(`${coin}/market_chart/range?vs_currency=usd&from=${priceFrom}&to=${priceTo}`)
    }
}



getApiPath = (end_point) => {
    return crypto_api_base + end_point
}
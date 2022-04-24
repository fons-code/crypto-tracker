import React, { useState, useEffect } from 'react';
import './App.css';

interface Crypto {
  id:string
  name: string
  symbol:string
  image: {
    thumb: string
  }
  market_data: {
    current_price: {
      usd:number
    }
    market_cap: {
      usd:number
    }
    price_change_percentage_24h: number
    price_change_percentage_7d: number
    price_change_percentage_30d: number
  }
}

const App = () => {
  const [cryptoData, setCryptoData] = useState<Crypto[] | []>([])

  const getData = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/')
    const data = await res.json()
    setCryptoData(data)
    console.log(data)
  }
  const formatNumber = (n: number) => {
    return n.toFixed(2)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      <h1>Crypto tracker</h1>
      <table>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Coin</th>
            <th scope='col'>Price</th>
            <th scope='col'>24h</th>
            <th scope='col'>7d</th>
            <th scope='col'>30d</th>
            <th scope='col'>Mkt cap</th>
          </tr>
        </thead>
        <tbody>
            {cryptoData.map((crypto, count) => {
              return(
                <tr key={crypto.id}>
                  <td scope='row'>{count + 1}</td>
                  <td><img src={crypto.image.thumb} alt="" /> {crypto.name} ({crypto.symbol})</td>
                  <td>${formatNumber(crypto.market_data.current_price.usd)}</td>
                  <td>{formatNumber(crypto.market_data.price_change_percentage_24h)}</td>
                  <td>{formatNumber(crypto.market_data.price_change_percentage_7d)}</td>
                  <td>{formatNumber(crypto.market_data.price_change_percentage_30d)}</td>
                  <td>${crypto.market_data.market_cap.usd}</td>
                </tr>
              )
            })
            }
        </tbody>
      </table>
    </div>
  );
}

export default App;

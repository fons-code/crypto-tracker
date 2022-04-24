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
  const [search, setSearch] = useState<string>("")

  const [filteredCoins, setFilteredCoins] = useState<Crypto[] | []>([]) 

  const searchCoins = (name : string) => {
    setSearch(name)
    setFilteredCoins(cryptoData.filter(crypto => crypto.name.toLowerCase().includes(name.toLowerCase().trim()))) 
  }

  const getData = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/')
    const data = await res.json()
    setCryptoData(data)
    setFilteredCoins(data)
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
      <label htmlFor="search">Search</label>
      <input type="text" id='search' placeholder='Search' value={search} onChange={(e) => searchCoins(e.target.value)}/>
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
            {filteredCoins.map((crypto, count) => {
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

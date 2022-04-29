import React, { useState, useEffect } from 'react';
import Header from './components/header'
import Datatable from './components/Datatable'
import {Coin} from './types/Coin'
import './App.css';


const App = () => {
  const [cryptoData, setCryptoData] = useState<Coin[] | []>([])
  const [search, setSearch] = useState<string>("")

  const [filteredCoins, setFilteredCoins] = useState<Coin[] | []>([]) 

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
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      <Header/>
      <h1>Crypto tracker</h1>
      <label htmlFor="search">Search</label>
      <input type="text" id='search' placeholder='Search' value={search} onChange={(e) => searchCoins(e.target.value)}/>
      <Datatable data={filteredCoins}/>
    </div>
  );
}

export default App;

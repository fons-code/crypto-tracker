import React, { useState, useEffect } from 'react';
import Header from './components/header'
import Input from './components/Input'
import Datatable from './components/Datatable'
import searchIcon from './assets/search.svg'
import { Coin } from './types/Coin'
import './App.css';


const App = () => {
  const [cryptoData, setCryptoData] = useState<Coin[] | []>([])
  const [search, setSearch] = useState<string>("")

  const [filteredCoins, setFilteredCoins] = useState<Coin[] | []>([])

  const searchCoins = (name: string) => {
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
      <Header />
      <main>
        <h1 className='sr-only'>Crypto tracker</h1>
        <div>
          <Input name='search' state={search} setState={searchCoins} icon={searchIcon}/>
          <Datatable data={filteredCoins} />
        </div>
      </main>
    </div>
  );
}

export default App;

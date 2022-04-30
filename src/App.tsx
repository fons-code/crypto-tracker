import React from 'react';
import { Route, Routes } from 'react-router-dom'
//pages
import Home from './pages/Home'
import Login from './pages/Login'
//components
import Header from './components/header'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom'
//pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
//components
import Header from './components/header'
import './App.css';
//context
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup/>} />
          </Routes>
        </AuthProvider>
      </main>
    </div>
  );
}

export default App;

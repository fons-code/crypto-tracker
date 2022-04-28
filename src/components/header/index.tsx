import React from 'react'
import './styles.css'

export default function Header() {
  return (
    <header className='header'>
     <div className="logo_container">
        <img src="./logo.svg" alt="Crypto tracker logo" />
     </div>
     <a className='button primary' href="#">Login</a> 
    </header>
  )
  }
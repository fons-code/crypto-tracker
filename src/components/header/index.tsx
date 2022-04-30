import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

export default function Header() {
  return (
    <header className='header'>
     <div className="logo_container">
        <Link to={'/'}>
          <img src="./logo.svg" alt="Crypto tracker logo" />
        </Link>
     </div>
     <Link to={'/login'} className="primary button">
       Login
     </Link>
    </header>
  )
  }
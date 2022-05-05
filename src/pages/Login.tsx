import React, { useState } from 'react'
import {Link} from 'react-router-dom'
//components
import Input from '../components/Input'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <h1>Login</h1>
      <form>
        <Input name='email' state={email} setState={setEmail} type="email"/>      
        <Input name='password' state={password} setState={setPassword} type="password"/>
      </form>
      <Link to='/signup'>
        Create a new account
      </Link>
    </>
  )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  return (
    <>
      <h1>Sign up</h1>
      <form>
        <Input name='email' state={email} setState={setEmail} type="email" />
        <Input name='password' state={password} setState={setPassword} type="password" />
        <Input name='Repeat password' state={repeatPassword} setState={setRepeatPassword} />
        <button>Sign up</button>
      </form>
      <Link to="/login">
        Do you already have an account?
      </Link>
    </>
  )
}

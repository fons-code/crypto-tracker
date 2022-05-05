import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'        
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Input from '../components/Input'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [error, setError] = useState('')
  const signup = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError('')
    e.preventDefault()
    if(password == repeatPassword){
    try {
      await signup(email, password)
      navigate('/')
    } catch (error : any) {
      console.log(error)
      setError(error.code)
    }
    }else{
      setError('Passwords do not match')
    }
  }
  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <Input name='email' state={email} setState={setEmail} type="email" />
        <Input name='password' state={password} setState={setPassword} type="password" />
        <Input name='Repeat password' state={repeatPassword} setState={setRepeatPassword} />
        <button>Sign up</button>
      </form>
      {error && <p>{error}</p>}
      <Link to="/login">
        Do you already have an account?
      </Link>
    </>
  )
}

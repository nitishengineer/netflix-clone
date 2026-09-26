import React, { useState } from 'react'
import { login, signUp } from '../../firebase'
import './Login.css'

const Login = () => {
  const [signState, setSignState] = useState('Sign In')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    if (signState === 'Sign In') {
      await login(email, password)
    } else {
      await signUp(name, email, password)
    }
    setLoading(false)
  }

  return (
    <div className='login'>
      <span className='login-logo'>NETFLIX</span>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>{signState}</h2>
        {signState === 'Sign Up' && (
          <input
            type='text'
            placeholder='Your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit' disabled={loading}>
          {loading ? 'Please wait...' : signState}
        </button>
        <p className='form-switch'>
          {signState === 'Sign In' ? 'New to Netflix? ' : 'Already have an account? '}
          <span onClick={() => setSignState(signState === 'Sign In' ? 'Sign Up' : 'Sign In')}>
            {signState === 'Sign In' ? 'Sign Up Now' : 'Sign In'}
          </span>
        </p>
      </form>
    </div>
  )
}

export default Login
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'

const AuthGate = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // onAuthStateChanged returns an "unsubscribe" function —
    // returning it from useEffect cleans up properly. Nice habit!
    return onAuthStateChanged(auth, (user) => {
      if (user && location.pathname === '/login') {
        navigate('/')
      } else if (!user && location.pathname !== '/login') {
        navigate('/login')
      }
    })
  }, [navigate, location])

  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer theme='dark' />
      <AuthGate />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
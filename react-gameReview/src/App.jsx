import React, { useState } from 'react'
import Login from './Login'
import Reviews from './Reviews'
import './App.css'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (status) => {
    setIsLoggedIn(status)
  }

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Reviews />
      )}
    </div>
  )
}

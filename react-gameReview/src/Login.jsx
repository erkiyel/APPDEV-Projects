import React, { useState } from 'react'

export default function Login({ onLogin }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const account = {
    username: "admin",
    password: "admin"
  }

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    if (userName === account.username && password === account.password) {
      onLogin(true)
    } else {
      setError('Invalid username or password');
    }
  }

  return (
    <div className="login-container">
      <h1>Welcome to Wormmmy's Reviews!</h1>
      <h4>Login to Continue:</h4>
      <div>
        Username:
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleUserNameChange}
        />
      </div>
      <div>
        Password:
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlePasswordChange}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

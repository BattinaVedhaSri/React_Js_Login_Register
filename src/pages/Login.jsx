import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert('Please enter email and password')
      return
    }

    const users = JSON.parse(localStorage.getItem('users')) || []

    const user = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    )

    if (user) {
      alert(`Welcome, ${user.name}!`)
    } else {
      alert('Invalid email or password')
    }
  }

  return (
    <div className="container">
      <div className="form-box">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
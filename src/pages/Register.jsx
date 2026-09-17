import { useState } from 'react'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()

    if (!name || !email || !password) {
      alert('Please fill all fields')
      return
    }

    const users = JSON.parse(localStorage.getItem('users')) || []

    const existingUser = users.find(
      (user) => user.email === email
    )

    if (existingUser) {
      alert('User already exists')
      return
    }

    const newUser = {
      name: name,
      email: email,
      password: password
    }

    users.push(newUser)

    localStorage.setItem('users', JSON.stringify(users))

    alert('Registration successful!')

    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="container">
      <div className="form-box">
        <h1>Register</h1>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
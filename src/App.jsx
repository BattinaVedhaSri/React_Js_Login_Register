import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'

function App() {
  const [page, setPage] = useState('login')

  return (
    <div>
      {page === 'login' ? (
        <Login />
      ) : (
        <Register />
      )}

      <div className="switch-page">
        {page === 'login' ? (
          <p>
            Don't have an account?{' '}
            <button onClick={() => setPage('register')}>
              Register
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <button onClick={() => setPage('login')}>
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  )
}

export default App
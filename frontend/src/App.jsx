import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'

export const App = () => {
  return (
  <>
    <Router>
      <div>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      </div>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  </>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import User from './pages/User'
import Flights from './pages/Flights'

export const App = () => {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/flights' element={<Flights/>}/>
      </Routes>
    </Router>
  </>
  
  )
}

export default App

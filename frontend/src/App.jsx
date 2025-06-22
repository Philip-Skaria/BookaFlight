import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'

export const App = () => {
  return (
  <>
    <Router>
      <div>
      <Link to="/signup"></Link>
      <Link to="/login"></Link>
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

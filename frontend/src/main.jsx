import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/login.jsx'
import Signup from './pages/Signup.jsx'
import{createBrowserRouter,RouterProvider} from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage.jsx'

const router=createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/signup",element:<Signup/>},
  {path:"/login",element:<Login/>},
  {path:"*",element:<NotFoundPage/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

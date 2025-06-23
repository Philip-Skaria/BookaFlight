import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center text-black h-screen'>
        <p className='mb-10'>
            Home
        </p>
        <div className='flex gap-5'>
            <Link to='/login' className='hover:cursor-pointer hover:text-blue-600'>
                Login
            </Link>
            <Link to='/signup' className='hover:cursor-pointer hover:text-blue-600'>
                Signup
            </Link>
        </div>
    </div>
  )
}

export default Home
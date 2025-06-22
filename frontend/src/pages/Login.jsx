import React from 'react'
import {useState} from 'react'

export const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=()=>{
        console.log("login attempt:",{email,password})
    }


  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-purple-300 to-purple-400 bg-opacity-60 border-2 border-cyan-400 rounded-3xl p-8 w-full max-w-md shadow-2xl backdrop-blur-sm">
            <h1 className="text-3xl font-light text-white text-center mb-8">Login</h1>
            <div className="space-y-6">
                <div>
                    <input
                    type="email"
                    placeholder='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-full bg-purple bg-opacity-20 border-2 border-white border-opacity-40 text-black placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent text-center"
                    />
                </div>

                <div>
                    <input
                    type="password"
                    placeholder='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-full bg-purple bg-opacity-20 border-2 border-white border-opacity-40 text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent text-center"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                    onClick={handleSubmit}
                    className="px-8 py-3 rounded-full bg-purple bg-opacity-25 border-2 border-white border-opacity-50 text-white font-medium hover:bg-opacity-35 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-200"
                    >
                    Submit
                    </button>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-white text-sm">
                         Dont have an account?
                        <a href='/signup' className="text-blue-600 hover:text-cyan-100 underline">
                        Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Login
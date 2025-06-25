import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react'

const Home = () => {
    const [from,setFrom]=useState('')
    const [to,setTo]=useState('')
    const [depart,setDepart]=useState('')
    const [returnDate,setReturnDate]=useState('')
    const [travellers,setTravellers]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("flight details:",{from,to,depart,returnDate,travellers})
    }

return(
<div className="min-h-screen bg-indigo-600 text-white font-sans">
        <div className="flex justify-between p-6">
            <h1 className="text-2xl font-semibold">BookaFlight</h1>
            <div className="space-x-4">
                <Link to="/signup" className="hover:underline">Sign Up</Link>
                <Link to="/login" className="hover:underline">Login</Link>
            </div>
        </div>
        <h2 className="text-3xl text-center font-semibold mb-10">Book Your Flight Now</h2>
    <div className="flex flex-col items-center justify center space-y-6">
        <div className="flex flex-col items-start space-y-6">
            <button className="bg-gray-200 text-black px-4 py-1 rounded-full hover:bg-white">
                One-Way
            </button>
            <div className="flex space-x-4">
            <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center gap-4 flex-wrap"
            >
                <input
                type="text"
                placeholder='From'
                className="p-4 bg-gray-200 text-black rounded-md w-[140px] text-center"
                value={from}
                onChange={(e)=>setFrom(e.target.value)}
                />
                <input
                type="text"
                placeholder="To"
                className="p-4 bg-gray-200 text-black rounded-md w-[140px] text-center"
                value={to}
                onChange={(e)=>setTo(e.target.value)}
                />
                <input
                type="date"
                className="p-4 bg-gray-200 text-black rounded-md w-[140px] text-center"
                value={depart}
                onChange={(e)=>setDepart(e.target.value)}
                />

                <input
                type="date"
                className="p-4 bg-gray-200 text-black rounded-md w-[140px] text-center"
                value={returnDate}
                onChange={(e)=>setReturn(e.target.value)}
                />
                <input
                type="text"
                placeholder='Travellers'
                className="p-4 bg-gray-200 text-black rounded-md w-[140px] text-center"
                value={travellers}
                onChange={(e)=>setTravellers(e.target.value)}
                />
                <button
                type="submit"
                className="p-4 bg-gray-200 text-black rounded-md w-[100px] text-center hover:bg-gray-300"
                >
                    Submit
                </button>
            </form>
            </div>
        </div>
    </div>
    
</div>
    )
}

export default Home
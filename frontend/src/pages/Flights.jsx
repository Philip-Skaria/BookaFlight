import React from 'react';
import FlightCard from '../components/FlightCard';

const Flights = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 font-poppins flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <a href="/" className="text-2xl font-semibold text-gray-800">
                    Book<span className="text-red-500">a</span>Flight
                </a>
                <div className="flex gap-8">
                    <a href="/" className="text-black hover:text-gray-800 text-[18px]">Your Bookings</a>
                    <a href="/user" className="text-black hover:text-gray-800 text-[18px]">Profile</a>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t-3 border-black opacity-30 mb-8"></div>

            {/* Route Badge */}
            <div className="flex justify-center mb-2">
                <div className="bg-white px-6 py-3 rounded-full text-gray-700 font-medium shadow-[0_0_20px_rgba(0,0,0,0.25)]">
                    COK → DXB
                </div>

            </div>


            <div className='w-4xl self-center'>
                {/* Flights Title */}
                <h2 className="text-3xl font-semibold mb-8" style={{ color: '#F85A41' }}>
                    Flights
                </h2>

                {/* Flight List */}
                <div className="space-y-4">
                    {[...Array(6)].map((_, index) => (
                        <FlightCard key={index} flightNumber={"AI101"} departure={"6:00 AM"} arrival={"10:00 PM"} price={17000} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Flights;
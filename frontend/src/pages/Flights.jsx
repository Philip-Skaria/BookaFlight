import React from 'react';
import FlightCard from '../components/FlightCard';
import {useLocation} from 'react-router-dom';

const Flights = () => {
    const location = useLocation();
    const { flights = [], from = '', to = '' } = location.state || {};

    return (
        <div className="max-w-6xl mx-auto p-6 font-poppins flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <a href="/" className="text-2xl font-semibold text-gray-800">
                    Book<span className="text-red-500">a</span>Flight
                </a>
                <div className="flex gap-8">
                    <a href="/" className="text-black hover:text-gray-800 text-[18px]">Your Bookings</a>
                    <a href="/user" className="text-black hover:text-gray-800 text-[18px]">Profile</a>
                </div>
            </div>

            <div className="border-t-3 border-black opacity-30 mb-8"></div>

            <div className="flex justify-center mb-2">
                <div className="bg-white px-6 py-3 rounded-full text-gray-700 font-medium shadow-[0_0_20px_rgba(0,0,0,0.25)]">
                    {from} → {to}
                </div>
            </div>

            <div className='w-4xl self-center'>
                <h2 className="text-3xl font-semibold mb-8" style={{ color: '#F85A41' }}>
                    Flights
                </h2>

                <div className="space-y-4">
                    {flights.length === 0 ? (
                        <p className="text-center text-gray-600">No flights found.</p>
                    ) : (
                        flights.map((flight, index) => (
                            <FlightCard
                                key={index}
                                flightNumber={flight.flight_number}
                                departure={flight.departure_time}
                                arrival={flight.arrival_time}
                                price={flight.price}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Flights;

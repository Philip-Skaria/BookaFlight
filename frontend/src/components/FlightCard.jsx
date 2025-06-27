import React from 'react'

const FlightCard = ({key, flightNumber, departure, arrival, price}) => {
    return (
        <div>
            <a
                key={key}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-[0_0_10px_rgba(0,0,0,0.25)] transition-shadow hover:cursor-pointer"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                        <img src="./assets/flight.png" alt="" className='p-2 opacity-70' />
                    </div>
                    <div>
                        <div className="text-lg font-semibold text-gray-800">{flightNumber}</div>
                        <div className="text-gray-600">{departure} - {arrival}</div>
                    </div>
                </div>
                <div className="text-lg font-semibold text-gray-500">
                    ₹{price}/-
                </div>
            </a>
        </div>
    )
}

export default FlightCard
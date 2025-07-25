import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const [from,setFrom]=useState('')
    const [to,setTo]=useState('')
    const [depart,setDepart]=useState('')
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [flights,setFlights]=useState([])



    const navigate=useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setIsLoggedIn(false);
            return;
        }

        const fetchProfile = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/auth/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (res.status === 401) {
                    localStorage.removeItem('token');
                    setIsLoggedIn(false);
                    return;
                }

                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.message || 'Failed to fetch profile');
                }

                setUser(data.user);
                setIsLoggedIn(true);
            } catch (err) {
                console.error('Profile fetch error:', err);
                setIsLoggedIn(false);
            }
        };

        fetchProfile();
    }, []);

    const handleLoginClick=()=>{
        navigate('/login')
    }

    const handleSignupClick = () => {
        console.log('Signup button clicked')
        navigate('/signup')
    }

    const handleUserClick = () => {
        navigate('/user');
    }

const handleSearchClick = async () => {
    console.log("🔍 handleSearchClick fired");
    console.log("Sending POST to backend with:", { from, to });

    try {
        const response = await fetch('http://localhost:5000/api/flights/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ from, to }),
        });

        const data = await response.json();
        console.log("✅ Got response from backend:", data);

        navigate('/flights', {
            state: {
                flights: data,
                from,
                to,
                depart,
            },
        });
    } catch (err) {
        console.error('❌ Error fetching flights:', err);
    }
};


return (
        <div
            className="h-screen bg-cover bg-center font-poppins"
            style={{ backgroundImage: "url('/assets/home_bg2.png')" }}
        >
            {/* Make this a column that spaces its children top ↔ bottom*/}
            <div className="h-full flex flex-col justify-between font-medium">
            
            {/* Top Nav */}
            <div className="w-full mt-5 text-2xl flex justify-between items-center px-10">
                <img src="./assets/logo.png" alt="" className="w-14" />
                <div className="text-center">
                Book<span className="text-red-500">a</span>Flight
                </div>
                <div className="text-[20px] font-normal">
                    {isLoggedIn && user ? (
                        <button 
                            onClick={handleUserClick}
                            className="hover:bg-[#FF5F46]/50 px-3 py-1 rounded-xl transition-colors duration-300 hover:cursor-pointer"
                        >
                            {user.name || user.username || user.email}
                        </button>
                    ) : (
                        <>
                            <button 
                                onClick={handleLoginClick}
                                className="hover:bg-[#FF5F46]/50 px-3 py-1 rounded-xl mr-2 transition-colors duration-300 hover:cursor-pointer"
                            >
                                Login
                            </button>
                            <button 
                                onClick={handleSignupClick}
                                className="hover:bg-[#FF5F46]/50 px-3 py-1 rounded-xl transition-colors duration-300 hover:cursor-pointer"
                            >
                                Signup
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Main Content (still centered right) */}
            <div className="flex-1 flex items-center justify-end pr-10 overflow-hidden">
                <div className="flex flex-col justify-center h-full items-center text-right max-w-[500px] w-full py-10">
                {/* Top Section */}
                <div className="text-center">
                    <div className="font-bold text-[55px] leading-tight">
                    Your Ticket to<br />Explore the World
                    </div>
                    <div className="font-normal text-xl mt-4">
                    Plan your next adventure with ease. Our seamless flight booking
                    platform connects you to destinations around the world—making
                    travel simpler, faster, and more convenient than ever.
                    </div>
                </div>
                </div>
            </div>

            {/* Bottom Search Bar: centered with mx-auto, sits at bottom */}
            <div className="bg-white flex justify-between items-center w-[800px] max-w-full mx-auto mb-20 px-6 py-4 rounded-xl" style={{
                    boxShadow: "0px 0px 38.7px 8px rgba(0, 0, 0, 0.25)",
                }}>
                <div className="w-[180px] flex justify-center items-center">
                    <img src="./assets/home_departure.png" alt="" className='w-10 mr-3' />
                    <div>
                        <p className='text-xl'>
                            From
                        </p>
                        <input
                            type="text"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            placeholder="Pick a Location"
                            className='text-neutral-500 font-normal bg-transparent outline-none w-full'
                        />
                    </div>
                </div>
                <div className="w-[180px] flex justify-center items-center">
                    <img src="./assets/home_landing.png" alt="" className='w-10 mr-3' />
                    <div>
                        <p className='text-xl'>
                            To
                        </p>
                        <input
                            type="text"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            placeholder="Pick a Location"
                            className='text-neutral-500 font-normal bg-transparent outline-none w-full'
                        />
                    </div>
                </div>
                <div className="w-[180px] flex justify-center items-center">
                    <img src="./assets/home_calender.png" alt="" className='w-10 mr-3' />
                    <div>
                        <p className='text-xl'>
                            Departure
                        </p>
                        <input
                            type="date"
                            value={depart}
                            onChange={(e) => setDepart(e.target.value)}
                            className='text-neutral-500 font-normal bg-transparent outline-none w-full'
                        />
                    </div>
                </div>
                <div className="w-[80px] text-center">
                <button onClick={handleSearchClick}>
                    <img src="./assets/home_search.png" alt="" className="w-16 mx-auto hover:cursor-pointer" />
                </button>
                </div>
            </div>
            </div>
        </div>
    );


}

export default Home
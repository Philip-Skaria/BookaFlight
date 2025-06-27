import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      localStorage.setItem('token', data.token);

      navigate('/flights');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B46879] to-[#E57456] flex items-center justify-center p-4 font-poppins relative">
        {/* Home Button - Top Left */}
        <button 
            onClick={handleHomeClick}
           className="absolute top-6 left-6 hover:opacity-80 transition-opacity duration-200 hover:cursor-pointer"
        >
            <img src="./assets/logo.png" alt="" className="w-10 ml-5" />
        </button>

        <div className="bg-gradient-to-br from-white/24 to-white/12 rounded-3xl p-8 w-full max-w-md backdrop-blur-[128px]"
        style={{
            boxShadow: '0px 0px 81.8px 7px rgba(0, 0, 0, 0.25)',
        }}>
        <h1 className="text-3xl text-white text-center mb-10">Sign Up</h1>
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        <div className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-purple bg-opacity-20 border-2 border-white border-opacity-40 text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent text-center"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-purple bg-opacity-20 border-2 border-white border-opacity-40 text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent text-center"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-purple bg-opacity-20 border-2 border-white border-opacity-40 text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent text-center"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-xl bg-purple bg-opacity-25 border-2 border-white border-opacity-50 text-white font-medium hover:bg-opacity-35 focus:outline-none transition-all duration-200 hover:cursor-pointer hover:bg-white/20 mt-5"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="mt-6 text-center flex items-center justify-center">
          <p className="text-white text-sm font-light mr-2">
            Already have an account?
          </p>
          <a
            href="/login"
            className="text-red-900 hover:text-cyan-100 underline text-sm"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
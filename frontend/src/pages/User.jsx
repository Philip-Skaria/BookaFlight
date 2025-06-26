import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
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
          navigate('/signup');
          return;
        }

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || 'Failed to fetch profile');
        }

        setMessage(data.message);
        setUser(data.user);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  if (error) {
    return (
      <div className="p-4">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-4">
        <p>Loading your profile…</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white relative">
      {/* Home Button - Top Left */}
      <button 
          onClick={handleHomeClick}
          className="absolute top-6 left-6 hover:opacity-80 transition-opacity duration-200 hover:cursor-pointer"
      >
          <img src="./assets/logo_black.png" alt="" className="w-10 ml-5" />
      </button>

      <div className="bg-gradient-to-br from-white/24 to-white/12 rounded-3xl p-8 w-full max-w-md backdrop-blur-[128px]"
        style={{
            boxShadow: '0px 0px 81.8px 7px rgba(0, 0, 0, 0.25)',
        }}>
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p className="mb-6 text-green-600">{message}</p>

        <div className="space-y-2 mb-6">
          {Object.entries(user).map(([key, value]) => (
            <div key={key} className="flex">
              <span className="w-24 font-semibold">{key}:</span>
              <span>{value?.toString()}</span>
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-4 w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
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
      navigate('/signup');
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
    <div className='flex justify-center items-center h-screen bg-[#6448FF]'>
        <div className="p-8 w-xl bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p className="mb-6 text-green-600">{message}</p>

        <div className="space-y-2">
            {Object.entries(user).map(([key, value]) => (
            <div key={key} className="flex">
                <span className="w-24 font-semibold">{key}:</span>
                <span>{value?.toString()}</span>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default User;
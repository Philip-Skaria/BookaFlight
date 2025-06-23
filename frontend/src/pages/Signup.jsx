import React, { useState } from 'react';

export const Signup = () => {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('sign up attempt:', { name, email, password });
  };

  return (
    <div className="min-h-screen bg-[#6448FF] flex items-center justify-center p-4 font-serif">
      <div className="bg-gradient-to-br from-white/40 to-white/12 rounded-3xl p-8 w-full max-w-md shadow-xl backdrop-blur-2xl">
        <h1 className="text-3xl text-white text-center mb-10">Sign Up</h1>
        <div className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-purple bg-opacity-20 border-2 border-white border-opacity-40 text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent text-center"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-purple bg-opacity-20 border-2 border-white border-opacity-40 text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent text-center"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-purple bg-opacity-20 border-2 border-white border-opacity-40 text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent text-center"
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
            className="text-blue-800 hover:text-cyan-100 underline text-sm"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;

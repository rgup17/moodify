import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-white">Login</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-400">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 bg-gray-800 text-white rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 bg-gray-800 text-white rounded"
          />
        </div>
        <button type="submit" className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
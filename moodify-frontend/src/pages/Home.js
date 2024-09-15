import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <a
        href="https://github.com/rgup17/moodify"
        className="absolute top-5 right-5 text-white hover:underline"
      >
        GitHub
      </a>

      <h1 className="text-9xl font-bold tracking-widest rainbow-text">
        MOODIFY
      </h1>
      <p className="mt-4 text-lg text-gray-400 text-center max-w-2xl">
        Your go-to app for tracking your emotions and discovering music that matches your mood. Let your feelings guide your playlist.
      </p>

      <div className="mt-10 space-x-4">
        <Link to="/about">
          <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
            About
          </button>
        </Link>
        <Link to="/login">
          <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
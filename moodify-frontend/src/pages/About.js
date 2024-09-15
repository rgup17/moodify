import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold tracking-widest text-white">
        About
      </h1>
      <p className="mt-4 text-lg text-gray-400 text-center max-w-2xl">
        This is the about page. Here you can find more information about Moodify.
      </p>
    </div>
  );
}

export default About;
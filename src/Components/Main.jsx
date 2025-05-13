import React from 'react';
import Typewriter from 'typewriter-effect';
import giff from '../assets/giff.mp4'

const Main = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center p-4">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-xl max-w-6xl w-full flex flex-col md:flex-row items-center justify-between p-10 gap-10 transition-all duration-500">

        {/* Left Side */}
        <div className="text-center md:text-left text-white md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
              Uzma
            </span>
          </h1>
          <p className="text-lg text-slate-300 font-medium">
            A Creative and Passionate
          </p>
          <div className="text-2xl font-semibold text-cyan-400">
            <Typewriter
              options={{
                strings: ['Full Stack Web Developer', 'Front-end Developer'],
                autoStart: true,
                loop: true,
                pauseFor: 1500,
              }}
            />
          </div>
          <button className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300">
            🚀 Uzma Aasia
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 flex justify-center">

          <video
            src={giff}
            autoPlay
            loop
            muted
            playsInline
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-purple-400 shadow-lg hover:scale-105 transition-transform duration-300"
          />

        </div>

      </div>
    </div>
  );
};

export default Main;

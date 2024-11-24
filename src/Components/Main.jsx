import React from 'react';
import Typewriter from 'typewriter-effect';

const Main = () => {
  return (
    <div>
      <div className="main flex flex-nowrap gap-4 justify-around text-slate-900 p-4 font-semibold custom:flex-wrap custom:gap-4 bg-slate-200">
        <div className="left text-4xl p-6 mt-20">
          Hey, My name is <span className='text-blue-600 font-semibold'>Uzma,</span>
          <p>a Creative and Passionate</p>
          <div className="p flex gap-2">
            <p className='text-blue-600 font-semibold'>
              <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'Front-end Developer'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 1000,
                }}
              />
            </p>
          </div>
        </div>
        <div className="right mt-8">
          <img
            className='rounded-full'
            src="https://img.freepik.com/premium-vector/cute-girl-working-computer-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-1444.jpg"
            height={300}
            width={400}
            alt="Programmer"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Main;

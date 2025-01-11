import React, { useState, useEffect } from 'react';

const Footer = () => {

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* Contact Section */}
          <div className='font-semibold'>  
            <h2 className="text-2xl md:text-3xl  mb-4">Contact Me</h2>
            <p className="text-base font-medium sm:text-sm md:text-base lg:text-lg">
              Email:<span className="px-1  text-lg sm:text-base md:text-lg">uzmaaasia444@gmail.com</span>
            </p>
          </div>

          {/* Back To Top Section */}
          <div className="flex justify-center md:justify-end">
            <button
              className="p-3 bg-violet-700 rounded-md border-2 border-white text-white font-semibold hover:bg-violet-800"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Back To Top
            </button>
          </div>
        </div>

        {/* Divider and Footer Text */}
        <hr className="border-gray-700 my-8 " />
        <p className="text-center font-semibold text-sm sm:text-base">
          &copy; 2024 Uzma. All rights reserved.
        </p>
      </div>
    </footer>

  );
}

export default Footer;

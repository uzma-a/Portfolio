import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import github from '../assets/github.svg'
import linkedIn from '../assets/linkedIn.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("portfolio");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full sticky top-0 bg-slate-900 shadow-2xl z-50 backdrop:blur  border-bottom'>
      <div className='nav w-full h-16 text-slate-200  '>
        <div className='flex justify-between items-center h-full px-4 md:px-8'>
          <div className="logo flex items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/4365/4365945.png" height={50} width={30} alt="logo" />
            <p className='text-2xl font-bold cursor-pointer hover:underline underline-offset-8 decoration-2' onClick={() => { setMenu("portfolio") }}>
              <Link to='/'>Uzma's Portfolio</Link> {menu === "portfolio" ? <hr /> : <></>}
            </p>
          </div>
          <div className="hidden md:flex gap-6">
            <ul className='flex gap-8 cursor-pointer items-center'>
              <li data-aos='fade-left' onClick={() => { setMenu("github") }}>
                <a to='/github' href="https://github.com/uzma-a" target="_blank" rel="noopener noreferrer"><button className='text-black bg-slate-200 hover:bg-slate-300 hover:ring-gray-400 m-3  rounded-full flex  justify-between items-center ring-black ring-2 p-1'>

                  <img src={github} alt="" />
                  <span className='font-bold px-2'>GitHub</span>

                </button></a>{menu === "github" ? <hr /> : <></>}
              </li>

              <li data-aos='fade-left' onClick={() => { setMenu("linkedin") }}>
                <a to='/linkedin' href="https://www.linkedin.com/in/uzma-aashiya-700a46316/" target="_blank" rel="noopener noreferrer"><button className='text-black bg-slate-200 hover:bg-blue-500 hover:ring-gray-400  rounded-full flex  justify-center items-center ring-black ring-2 p-1.5'>

                  <img src={linkedIn} alt="" />
                  <span className='font-bold px-2 text-black mt-1 '>LinkedIn</span>

                </button></a>{menu === "linkedin" ? <hr /> : <></>}
              </li>


              <Link to='/contactme'>
                <button data-aos='fade-left' className='bg-slate-200 font-semibold p-2 rounded-full text-black ring-black ring-2 hover:bg-slate-300 hover:ring-gray-400'>
                 Contact me
                </button>
              </Link>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900">
          <ul className='flex flex-col items-center gap-4 py-4'>
       
          <li onClick={() => { setMenu("github") }}>
            
                <a to='/github' href="https://github.com/uzma-a" target="_blank" rel="noopener noreferrer"><button className='text-white bg-green-500 m-3  rounded-full flex  justify-between items-center ring-white ring-2'>
                <button onClick={() => setIsOpen(false)}>
                  
                  <span className='font-bold px-2'>GitHub</span>

                </button></button></a>{menu === "github" ? <hr /> : <></>}
              </li>

              <li onClick={() => { setMenu("linkedin") }}>
            
                <a to='/linkedin' href="https://www.linkedin.com/in/uzma-aashiya-700a46316/" target="_blank" rel="noopener noreferrer"><button className='text-white bg-blue-500 m-3  rounded-full flex  justify-between items-center ring-white ring-2'>
                <button onClick={() => setIsOpen(false)}>
                  
                  <span className='font-bold px-2'>LinkedIn</span>

                </button></button></a>{menu === "linkedin" ? <hr /> : <></>}
              </li>


            <Link to='/contactme'>
              
              <button onClick={() => setIsOpen(false)} className='bg-slate-200 font-semibold p-2 rounded-full text-black ring-black ring-2 hover:bg-slate-300 hover:ring-gray-400'>
                 Contact me
                </button>
             
            </Link>
          </ul>
        </div>
      )}
      <div className={isOpen ? "hidden" : "block"}>
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default Navbar;

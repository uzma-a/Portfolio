import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("portfolio");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar-container')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/uzma-a',
      icon: '🐙',
      gradient: 'from-gray-600 to-gray-800',
      hoverGradient: 'from-purple-600 to-pink-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/uzma-aasiya-32189a367/',
      icon: '💼',
      gradient: 'from-blue-600 to-cyan-600',
      hoverGradient: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="navbar-container">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-slate-700/50' 
          : 'bg-slate-900/60 backdrop-blur-sm'
      }`}>
        {/* Gradient border effect */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">U</span>
                </div>
              </div>
              
              <Link to='/' onClick={() => setMenu("portfolio")}>
                <div className="relative">
                  <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-400 hover:to-pink-500 transition-all duration-300 cursor-pointer">
                    Uzma's Portfolio
                  </h1>
                  {menu === "portfolio" && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />
                  )}
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenu(link.name.toLowerCase())}
                    className="group relative"
                  >
                    <div className={`relative overflow-hidden bg-gradient-to-r ${link.gradient} hover:${link.hoverGradient} 
                      rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25
                      border border-slate-600 hover:border-slate-400`}>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{link.icon}</span>
                        <span className="text-white font-semibold text-sm">{link.name}</span>
                      </div>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {menu === link.name.toLowerCase() && (
                      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />
                    )}
                  </a>
                ))}
              </div>

              {/* Contact Button */}
              <Link to='/contactme'>
                <button className="relative group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-500 hover:to-pink-500 
                  text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 
                  shadow-lg hover:shadow-xl hover:shadow-purple-500/25 border border-transparent hover:border-white/20">
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center">
                  <span className={`bg-white block h-0.5 w-5 rounded-sm transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                  }`} />
                  <span className={`bg-white block h-0.5 w-5 rounded-sm transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <span className={`bg-white block h-0.5 w-5 rounded-sm transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Social Links */}
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setMenu(link.name.toLowerCase());
                      setIsOpen(false);
                    }}
                    className="block"
                  >
                    <div className={`bg-gradient-to-r ${link.gradient} hover:${link.hoverGradient} 
                      rounded-2xl p-4 transition-all duration-300 transform hover:scale-105 
                      border border-slate-600 hover:border-slate-400`}>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{link.icon}</span>
                        <span className="text-white font-semibold text-lg">{link.name}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Mobile Contact Button */}
              <Link to='/contactme' onClick={() => setIsOpen(false)}>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-500 hover:to-pink-500 
                  text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 
                  shadow-lg hover:shadow-xl hover:shadow-purple-500/25 border border-transparent hover:border-white/20">
                  <span className="text-lg">Contact Me</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20" />
    </div>
  );
};

export default Navbar;
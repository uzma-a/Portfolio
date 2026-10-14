import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certificates', id: 'certificates' }
  ];

  // Handle scroll detection for navbar background & active section state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Auto-detect which section is currently on screen
      const sections = ['hero', 'about', 'skills', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
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

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar-container">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-950/85 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-slate-800/80' 
          : 'bg-slate-950/60 backdrop-blur-md'
      }`}>
        {/* Glowing top/bottom border accent */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo Section */}
            <div 
              onClick={() => scrollToSection('hero')} 
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  <span className="text-xl font-black text-white">U</span>
                </div>
              </div>
              
              <div className="relative">
                <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                  Uzma's Portfolio
                </h1>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative text-gray-300 hover:text-white font-medium text-sm transition-colors duration-300 py-1"
                  >
                    <span>{item.name}</span>
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" />
                    )}
                  </button>
                ))}
              </div>

              {/* Contact Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="relative group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-500 hover:to-pink-500 
                  text-white font-bold py-2.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 
                  shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 border border-transparent hover:border-white/20"
              >
                <span className="relative z-10 text-sm">Contact Me</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="relative w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300"
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

        {/* Mobile Navigation Dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800/80 px-4 py-5 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left py-2.5 px-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}

            <button className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-500 hover:to-pink-500 
                text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg text-center"
            >
              
              Contact Me
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent page content from hiding under fixed navbar */}
      <div className="h-20" />
    </div>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Sparkles } from 'lucide-react';

const Main = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const roles = [
    'Full Stack Web Developer',
    'MERN Stack Developer', 
    'Front-end Developer',
    'UI/UX Enthusiast'
  ];

  // Typewriter effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < currentText.length) {
        setDisplayText(currentText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Wait before starting next role
        setTimeout(() => {
          setIsTyping(true);
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setDisplayText('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no portfolio section, scroll down a bit
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com/uzmaaasia", 
      label: "GitHub",
      color: "hover:bg-gray-700"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://linkedin.com/in/uzma-aasiya", 
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: "mailto:uzmaaasia444@gmail.com", 
      label: "Email",
      color: "hover:bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl max-w-6xl w-full flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-10 transition-all duration-500 relative z-10">

        {/* Left Side */}
        <div className="text-center md:text-left text-white md:w-1/2 space-y-6">
          
          {/* Greeting with Animation */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              <span className="text-lg text-slate-300 font-medium">Hello, I'm</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
                Uzma Aasiya
              </span>
            </h1>
          </div>

          {/* Bio Section */}
          <div className="space-y-3">
            <p className="text-lg text-slate-300 font-medium">
              A Creative and Passionate
            </p>
            <div className="text-2xl font-semibold text-cyan-400 h-8 flex items-center justify-center md:justify-start">
              {displayText}
              {isTyping && <span className="animate-pulse ml-1">|</span>}
            </div>
          </div>

          {/* Short Description */}
          <p className="text-slate-300 text-sm md:text-base max-w-md leading-relaxed">
            Crafting beautiful, functional web experiences with modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={scrollToPortfolio}
              className="group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span className="relative z-10">Explore My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button>
            
            <a 
              href="mailto:uzmaaasia444@gmail.com"
              className="px-6 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 ${link.color}`}
              >
                {link.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Right Side (Video/Image) */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative">
            
            {/* Video Element */}
            {!videoError ? (
              <video
                src="/assets/giff.mp4"
                autoPlay
                loop
                muted
                playsInline
                onError={() => setVideoError(true)}
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-purple-400 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            ) : (
              /* Fallback when video fails */
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-purple-400 shadow-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center backdrop-blur-lg">
                <div className="text-center text-white">
                  <Code className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                  <p className="text-lg font-semibold">Uzma Aasiya</p>
                  <p className="text-sm text-slate-300">Full Stack Developer</p>
                </div>
              </div>
            )}

            {/* Floating Elements around the video */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/70">
        <span className="text-sm font-medium">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>

    </div>
  );
};

export default Main;
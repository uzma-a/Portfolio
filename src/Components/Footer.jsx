import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Github, Linkedin, Twitter, Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/uzma-a", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/uzma-aasiya-32189a367/", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/uzmaaasia", label: "Twitter" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Let's Connect
            </h2>

            <div className="flex items-center gap-3 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-300 text-sm font-medium">Email</p>
                <a
                  href="mailto:uzmaaasia444@gmail.com"
                  className="text-white font-semibold hover:text-blue-400 transition-colors duration-300"
                >
                  uzmaaasia444@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="group relative w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center hover:scale-110 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20"
                >
                  {link.icon}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Fun Stats */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Fun Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Code className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Lines of code written: 10,000+</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Coffee className="w-5 h-5 text-amber-400" />
                <span className="text-sm">Cups of coffee consumed: ∞</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-sm">Projects completed with love: 7+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-slate-300 text-sm font-medium">
              © {currentYear} Uzma. All rights reserved.
            </p>
            <p className="text-slate-400 text-xs mt-1">
              Made with <Heart className="w-3 h-3 inline text-red-400 mx-1" /> and lots of coffee
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className={`
              group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
              rounded-full font-semibold text-white shadow-lg shadow-blue-500/25 
              hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 
              hover:scale-105 active:scale-95 flex items-center gap-2
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'}
            `}
          >
            <span className="relative z-10">Back To Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />

            {/* Button Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </button>
        </div>
      </div>

      {/* Floating Back to Top (Mobile) */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-6 right-6 md:hidden z-50 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 
          rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25 
          hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
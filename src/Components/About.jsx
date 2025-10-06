import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);

  const techStack = [
    { name: 'JavaScript', color: 'from-yellow-400 to-orange-500', icon: '🚀' },
    { name: 'React.js', color: 'from-blue-400 to-cyan-500', icon: '⚛️' },
    { name: 'Node.js', color: 'from-green-400 to-emerald-500', icon: '🌟' },
    { name: 'MongoDB', color: 'from-green-500 to-teal-500', icon: '🗃️' },
    { name: 'TailwindCSS', color: 'from-cyan-400 to-blue-500', icon: '🎨' },
    { name: 'Python', color: 'from-blue-500 to-purple-500', icon: '🐍' },
    { name: 'AI/ML', color: 'from-purple-500 to-pink-500', icon: '🤖' }
  ];

  const highlights = [
    { icon: '🎓', title: 'Education', value: 'BCA from Manipal University Jaipur' },
    { icon: '💻', title: 'Specialization', value: 'MERN Stack Development' },
    { icon: '🚀', title: 'Current Focus', value: 'AI & Python Development' },
    // { icon: '🌟', title: 'Goal', value: 'Big Tech Companies' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTech(prev => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <FloatingElements />

      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-3xl">👨‍💻</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-tight">
              About Me
            </h1>
          </div>

          {/* Animated subtitle */}
          <div className="text-2xl md:text-3xl text-gray-300 font-light mb-8">
            <span className="inline-block">Passionate </span>
            <span className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">
              Full-Stack Developer
            </span>
            <span className="inline-block"> & </span>
            <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
              AI Enthusiast
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/30 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🎯</span>
                  <h2 className="text-2xl font-bold">My Journey</h2>
                </div>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-gray-300">
                    I'm currently pursuing a <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">Bachelor of Computer Application</span> from <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">Manipal University Jaipur</span>, where I've developed expertise in the <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">MERN stack</span> and completed several <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">full-stack projects</span>.
                  </p>

                  <p className="text-gray-300">
                    My passion lies in creating <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">responsive and dynamic web applications</span> using cutting-edge technologies. I'm currently exploring <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">Artificial Intelligence</span> more deeply by <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">building AI-powered apps</span> using <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">Gemini</span> and <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">Whisper</span>, aiming to push the boundaries of innovation in real-world applications.
                  </p>

                  <p className="text-gray-300">
                    What sets me apart is my commitment to <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-semibold">continuous learning</span> and <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-semibold">adaptability</span>, which help me keep up with the <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-semibold">latest industry trends</span> and dive deeper into the evolving world of <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-semibold">AI development</span>.
                  </p>
                </div>

              </div>
            </div>

            {/* Tech Stack Showcase */}

          </div>

          {/* Right Column - Highlights & Goals */}
          <div className="space-y-8">
            {/* Key Highlights */}
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/30 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">✨</span>
                  <h2 className="text-2xl font-bold">Key Highlights</h2>
                </div>

                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-cyan-400 mb-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision & Goals */}

          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-full px-8 py-4 border border-cyan-500/30">
            <span className="text-2xl animate-bounce">🚀</span>
            <span className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to build the future together?
            </span>
            <span className="text-2xl animate-bounce">✨</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
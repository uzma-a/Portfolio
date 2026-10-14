import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Briefcase, 
  Brain, 
  Code2, 
  Bot, 
  Terminal, 
  CheckCircle2 
} from 'lucide-react';
import { SiKaggle } from "react-icons/si";

const Main = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'AI Systems & Agent Architect',
    'Full-Stack Developer (FastAPI + Next.js)',
    'LLM & RAG Engineer',
    'Open-Source AI Builder'
  ];

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
        setTimeout(() => {
          setIsTyping(true);
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setDisplayText('');
        }, 2200);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/uzma-a",
      label: "GitHub",
      color: "hover:bg-gray-800 hover:border-gray-600"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/uzma-aasiya-32189a367/",
      label: "LinkedIn",
      color: "hover:bg-blue-600/30 hover:border-blue-500/50"
    },
    {
      icon: <SiKaggle className="w-5 h-5" />,
      href: "https://www.kaggle.com/uzmaaasiya",
      label: "Kaggle",
      color: "hover:bg-cyan-600/30 hover:border-cyan-500/50"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:uzmaaasia444@gmail.com",
      label: "Email",
      color: "hover:bg-rose-600/30 hover:border-rose-500/50"
    }
  ];

  const highlights = [
    {
      icon: <Bot className="w-5 h-5 text-cyan-400" />,
      title: "Agentic Systems",
      desc: "Multi-Agent Workflows · Google ADK · Tool Calling"
    },
    {
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      title: "RAG & Graph AI",
      desc: "NetworkX · Embeddings · Vector Search · Instructor"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      title: "Full-Stack Web",
      desc: "Next.js · FastAPI · PostgreSQL · Tailwind CSS"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white relative overflow-hidden">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Ambient Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 relative z-10 max-w-7xl mx-auto">
        
        {/* Main Card */}
        <div className="w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-6 md:p-10 transition-all duration-500 hover:border-white/20">

          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Available for Remote Internships & Developer Roles</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column — Text Intro */}
            <div className="lg:col-span-7 space-y-6 text-center md:text-left">

              {/* Greeting & Name */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 justify-center md:justify-start text-gray-400 text-base font-medium">
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                  <span>Hello, I'm</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
                    Uzma Aasiya
                  </span>
                </h1>
              </div>

              {/* Dynamic Typewriter */}
              <div className="space-y-1">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Specializing in</p>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 h-10 flex items-center justify-center md:justify-start">
                  <span>{displayText}</span>
                  {isTyping && <span className="animate-pulse ml-1 text-purple-400">|</span>}
                </div>
              </div>

              {/* Elevator Pitch Description */}
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                I build end-to-end <span className="text-cyan-400 font-semibold">multi-agent architectures</span>,{' '}
                <span className="text-purple-400 font-semibold">semantic knowledge graphs</span>, and production full-stack AI applications. Focused on deterministic workflows, structured LLM outputs, and real-world system design using <span className="text-slate-100 font-medium">FastAPI, Next.js, and Gemini</span>.
              </p>

              {/* Action Callouts */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                <button
                  onClick={scrollToPortfolio}
                  className="group relative overflow-hidden px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 justify-center"
                >
                  <span>Explore Featured Work</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                </button>

                <a
                  href="mailto:uzmaaasia444@gmail.com"
                  className="px-7 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Get In Touch</span>
                </a>
              </div>

              {/* Social Links Bar */}
              <div className="flex gap-3 justify-center md:justify-start pt-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 ${link.color}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column — Code Terminal & Core Competency Highlights */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Code Snippet Card */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 shadow-2xl font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-400 font-sans font-semibold">agent_orchestrator.py</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                </div>
                <div className="space-y-1 text-left leading-relaxed">
                  <p><span className="text-purple-400">class</span> <span className="text-yellow-300">BoardroomPipeline</span>:</p>
                  <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):</p>
                  <p className="pl-8 text-slate-400"># 6 Autonomous Executives</p>
                  <p className="pl-8">self.agents = [<span className="text-emerald-300">CTO</span>, <span className="text-emerald-300">CFO</span>, <span className="text-emerald-300">Legal</span>, <span className="text-emerald-300">CEO</span>]</p>
                  <p className="pl-4"><span className="text-purple-400">async def</span> <span className="text-blue-400">execute_debate</span>(self, proposal):</p>
                  <p className="pl-8">graph = <span className="text-cyan-300">NetworkX</span>.build_mesh(proposal)</p>
                  <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-purple-400">await</span> self.agents.synthesize(graph)</p>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-3">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center gap-1.5 text-gray-500 text-xs">
          <span className="font-medium tracking-wide">Scroll down to explore project architecture</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </div>

      </div>
    </div>
  );
};

export default Main;
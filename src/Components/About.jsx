import React, { useState, useEffect } from 'react';
import { BookOpen, Cpu, Code2, Network, Terminal, GraduationCap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const corePillars = [
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "Agentic Systems & LLMs",
      desc: "Building multi-agent orchestration pipelines (Google ADK, Gemini) with tool-calling, deterministic debate steps, and structured output schemas."
    },
    {
      icon: <Network className="w-5 h-5 text-purple-400" />,
      title: "RAG & Graph AI",
      desc: "Transforming unstructured data into directed graph hierarchies using NetworkX, Pydantic validation, and local vector embeddings (Sentence-Transformers)."
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      title: "Full-Stack Architecture",
      desc: "Developing production web applications with FastAPI, Next.js (App Router), React Flow, MongoDB Atlas, and SQLite with SSE streaming."
    }
  ];

  return (
    <section id="about">
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white flex items-center justify-center p-4 md:p-8 relative overflow-hidden">

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Ambient Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl w-full my-12">
          <div
            className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-6 md:p-10 transition-all duration-1000 hover:border-white/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
          >

            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                <BookOpen className="w-7 h-7 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  About Me
                </h2>
                <p className="text-gray-400 text-sm mt-1">Bridging Complex AI Research with Scalable Software Systems</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Bio Text */}
              <div className="lg:col-span-7 space-y-5 text-gray-300 leading-relaxed text-base">
                <p>
                  I am an <span className="text-cyan-400 font-semibold">AI Systems & Full-Stack Developer</span> specializing in compound AI architectures, multi-agent workflows, and unstructured data transformation. I don't just write prompts — I engineer deterministic execution pipelines, graph reasoning engines, and production APIs.
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                  <p className="text-sm">
                    Currently pursuing a <span className="text-yellow-400 font-semibold">Bachelor of Computer Applications (BCA)</span> at <span className="text-slate-100 font-medium">Manipal University Jaipur</span>, certified with <span className="text-slate-100 font-medium">IBM Full Stack Software Developer</span>.
                  </p>
                </div>

                <p>
                  My engineering focus revolves around solving real operational bottlenecks:
                </p>

                <ul className="space-y-2 text-sm text-gray-300 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">▸</span>
                    <span><strong>Multi-Agent Decision Support:</strong> Orchestrating parallel domain-specialist models (CTO, CFO, Legal) that cross-examine ideas deterministically without generic hallucination loops.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">▸</span>
                    <span><strong>Graph Knowledge Extraction:</strong> Transforming dense texts/PDFs into directed graph webs using NetworkX, mathematical centrality algorithms, and zero-cost local embeddings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 font-bold">▸</span>
                    <span><strong>Production-Grade Web Stack:</strong> Connecting FastAPI backends with Next.js 15, Server-Sent Events (SSE) streaming, and clean client-side state management.</span>
                  </li>
                </ul>

                <p className="text-gray-400 text-sm italic pt-2">
                  "I believe the future of software isn't just standalone chatbots, but deterministic AI workflows that execute structured tasks reliably at scale."
                </p>
              </div>

              {/* Right Core Pillars */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Technical Focus & Expertise</h3>

                {corePillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300 space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                        {pillar.icon}
                      </div>
                      <h4 className="font-bold text-white text-base">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed pl-1">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, Cpu, Code2, Sparkles } from 'lucide-react';

const Certificates = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const certificatesData = [
    {
      id: 1,
      title: "IBM Full Stack Software Developer Professional Certificate",
      issuer: "IBM · Coursera",
      date: "Completed Sep 2026",
      type: "Specialization",
      description: "Rigorous 12-course professional specialization covering full-stack cloud application development, microservices, containerization, DevOps, databases, and hands-on capstone projects.",
      skills: ["Cloud Native", "Python", "Node.js", "React", "Docker", "DevOps", "Microservices"],
      gradient: "from-blue-500 via-indigo-500 to-cyan-500",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      verifyLink: "https://coursera.org/share/9e38b01f02af6e817cc51ac47b6dbdd5"
    },
    {
      id: 2,
      title: "Google AI Professional Certificate",
      issuer: "Google · Coursera",
      date: "Completed May 2026",
      type: "Specialization",
      description: "Comprehensive 7-course specialization demonstrating practical application of Google Generative AI tools, prompt engineering, data analysis, and building real-world AI solutions.",
      skills: ["Generative AI", "Google AI", "Prompt Engineering", "Data Analysis", "LLM Applications"],
      gradient: "from-amber-400 via-emerald-400 to-teal-500",
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      verifyLink: "https://coursera.org/share/c684a3b1c7921f634b526e0478e3b13d"
    },
    {
      id: 3,
      title: "Agents Intensive Capstone Project",
      issuer: "Kaggle · Google",
      date: "Issued Dec 2025",
      type: "AI & Agents",
      description: "Completed an intensive hands-on program focused on designing, building, and deploying autonomous agent systems using the Google Agent Development Kit (ADK).",
      skills: ["AI Agents", "Google ADK", "Tool Calling", "Multi-Agent Systems", "Capstone Project"],
      gradient: "from-cyan-400 via-purple-500 to-pink-500",
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      verifyLink: "https://www.kaggle.com/certification/badges/uzmaaasiya/105"
    },
  ];

  const filters = ['All', 'Specialization', 'AI & Agents'];

  const filteredCertificates = selectedFilter === 'All'
    ? certificatesData
    : certificatesData.filter(cert => cert.type === selectedFilter);

  return (
    <section id="certificates">
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white p-4 md:p-8 relative overflow-hidden">

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Ambient Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto py-8">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold mb-4">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Verified Credentials</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
              Certificates & Badges
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Industry-recognized professional specializations and practical AI program certifications
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header Info */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        {cert.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                          {cert.type}
                        </span>
                        <p className="text-xs text-gray-400">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Skills & Action */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Verify Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certificates;
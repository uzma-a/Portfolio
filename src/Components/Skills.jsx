import React, { useState, useEffect } from 'react';
import {
  Code,
  Palette,
  Server,
  Database,
  GitBranch,
  Wrench,
  Rocket,
  Brain,
  Shield,
  Bot,
  Network
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillsData = [
    {
      title: 'Agentic Systems & Frameworks',
      icon: <Bot className="w-6 h-6" />,
      color: 'cyan',
      skills: ['Google ADK', 'Multi-Agent Orchestration', 'Tool Calling', 'MCP Protocol', 'Instructor (Pydantic)', 'Deterministic Workflows']
    },
    {
      title: 'RAG & Graph Intelligence',
      icon: <Network className="w-6 h-6" />,
      color: 'purple',
      skills: ['NetworkX', 'Sentence-Transformers', 'Cosine Similarity', 'Vector Search', 'LangChain', 'RAG Pipelines']
    },
    {
      title: 'Machine Learning & AI',
      icon: <Brain className="w-6 h-6" />,
      color: 'pink',
      skills: ['PyTorch', 'Python', 'NumPy', 'Pandas', 'Scikit-learn', 'HuggingFace', 'Embeddings', 'Tokenization']
    },
    {
      title: 'Backend Engineering',
      icon: <Server className="w-6 h-6" />,
      color: 'green',
      skills: ['FastAPI', 'Node.js', 'Express.js', 'Django', 'REST APIs', 'SSE Streaming', 'Asyncio']
    },
    {
      title: 'Frontend Architecture',
      icon: <Palette className="w-6 h-6" />,
      color: 'orange',
      skills: ['React.js', 'Next.js 15', 'TypeScript', '@xyflow/react (React Flow)', 'Tailwind CSS', 'Redux / Context API']
    },
    {
      title: 'Databases & State',
      icon: <Database className="w-6 h-6" />,
      color: 'blue',
      skills: ['MongoDB Atlas', 'PostgreSQL', 'SQLite', 'Firebase Firestore', 'Supabase', 'SQLAlchemy']
    },
    {
      title: 'Auth & Security',
      icon: <Shield className="w-6 h-6" />,
      color: 'teal',
      skills: ['JWT', 'Prompt Injection Defense', 'Clerk Auth', 'OAuth 2.0', 'Input Sanitization']
    },
    {
      title: 'Developer Tools & Workflows',
      icon: <Wrench className="w-6 h-6" />,
      color: 'indigo',
      skills: ['Git', 'GitHub Actions', 'Postman', 'Docker', 'Gemini API', 'Gemma Models']
    },
    {
      title: 'Deployment & Infrastructure',
      icon: <Rocket className="w-6 h-6" />,
      color: 'violet',
      skills: ['Vercel', 'Google Cloud Run', 'Render', 'HuggingFace Spaces', 'Netlify']
    }
  ];

  const colorClasses = {
    cyan: 'text-cyan-400 border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-500/10',
    purple: 'text-purple-400 border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10',
    pink: 'text-pink-400 border-pink-500/30 hover:border-pink-500/60 hover:bg-pink-500/10',
    green: 'text-green-400 border-green-500/30 hover:border-green-500/60 hover:bg-green-500/10',
    orange: 'text-orange-400 border-orange-500/30 hover:border-orange-500/60 hover:bg-orange-500/10',
    blue: 'text-blue-400 border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10',
    teal: 'text-teal-400 border-teal-500/30 hover:border-teal-500/60 hover:bg-teal-500/10',
    indigo: 'text-indigo-400 border-indigo-500/30 hover:border-indigo-500/60 hover:bg-indigo-500/10',
    violet: 'text-violet-400 border-violet-500/30 hover:border-violet-500/60 hover:bg-violet-500/10'
  };

  return (
    <section id="skills">
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white flex items-center justify-center p-4 md:p-8 relative overflow-hidden">

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Ambient Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full py-12">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
              Technical Stack & Skills
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              A battle-tested technical toolkit for engineering intelligent multi-agent systems, graph engines, and scalable full-stack web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, index) => (
              <div
                key={index}
                className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:border-white/20 flex flex-col justify-between ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl bg-white/5 border ${colorClasses[category.color].split(' ')[1]} flex items-center justify-center ${colorClasses[category.color].split(' ')[0]}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-lg bg-white/5 border text-xs font-medium transition-all duration-300 ${colorClasses[category.color]}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Footer */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-4xl font-black text-cyan-400 mb-2">9</div>
              <div className="text-gray-400 font-medium text-sm">Specialized Skill Domains</div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
              <div className="text-4xl font-black text-purple-400 mb-2">50+</div>
              <div className="text-gray-400 font-medium text-sm">Frameworks & Libraries</div>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-pink-500/30 transition-all duration-300">
              <div className="text-4xl font-black text-pink-400 mb-2">100%</div>
              <div className="text-gray-400 font-medium text-sm">Production & Open Source Focus</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
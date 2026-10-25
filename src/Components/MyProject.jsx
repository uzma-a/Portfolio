import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Zap, 
  Users, 
  Dumbbell, 
  ArrowRight, 
  Trophy, 
  Bot, 
  Network, 
  Briefcase, 
  Leaf, 
  FileText 
} from 'lucide-react';

const ProjectsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      name: "Synapse AI",
      description: "A full-stack AI Knowledge Synthesis engine that transforms unstructured text into interactive semantic graphs and active-recall flashcards using NetworkX, Gemini, and React Flow.",
      skills: ["FastAPI", "Next.js", "NetworkX", "Vector Search", "Gemini API"],
      icon: <Network className="w-8 h-8" />,
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      liveDemo: "https://synapse-ai-live.vercel.app/",
      github: "https://github.com/uzma-a/Synapse-AI",
      category: "AI Application"
    },
    {
      id: 2,
      name: "BoardRoom AI",
      description: "Autonomous board of directors: 6 specialized Gemini agents analyze business ideas, debate deterministically, and generate cited executive resolutions.",
      skills: ["Google ADK", "Multi-Agent Systems", "FastAPI", "Next.js", "SQLite"],
      icon: <Briefcase className="w-8 h-8" />,
      gradient: "from-amber-400 via-orange-500 to-red-500",
      liveDemo: "https://ai-board-director.vercel.app/",
      github: "https://github.com/uzma-a/BoardRoom-AI",
      category: "AI Application"
    },
    {
      id: 3,
      name: "Carbon Mirror",
      description: "AI-driven climate mitigation platform leveraging Gemma models to estimate, analyze, and drive personalized behavioral sustainability and carbon reduction.",
      skills: ["Gemma 4", "Python", "FastAPI", "React.js", "Pandas"],
      icon: <Leaf className="w-8 h-8" />,
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      liveDemo: "https://carbonmirror.vercel.app/",
      github: "https://github.com/uzma-a/carbonmirror",
      category: "AI Application"
    },
    {
      id: 4,
      name: "PrescriptionDecoder AI",
      description: "AI-powered medical prescription decoder that turns confusing medical notes into clear, actionable health guidance using Gemini API, containerized on Google Cloud Run.",
      skills: ["Gemini API", "Cloud Run", "Docker", "Python", "FastAPI"],
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-teal-400 via-emerald-500 to-green-600",
      liveDemo: "https://prescription-decoder-ai-380824212144.us-west1.run.app/",
      github: "https://github.com/uzma-a/prescription-ai",
      category: "AI Application"
    },
    {
      id: 5,
      name: "MockMate",
      description: "AI-driven technical interview practice platform with real-time voice interaction, dynamic question adaptation, and automated speech-to-feedback analysis.",
      skills: ["Django", "React.js", "Gemini 2.5", "pyttsx3", "Bootstrap"],
      icon: <Users className="w-8 h-8" />,
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      liveDemo: "https://mockmate-interview.vercel.app/",
      github: "https://github.com/uzma-a/MockMate",
      category: "Full Stack"
    },
    {
      id: 6,
      name: "Study Buddy",
      description: "Personal AI-powered learning assistant that converts raw notes into summaries, interactive quizzes, and downloadable PDF study guides with authentication.",
      skills: ["React.js", "Gemini API", "Clerk Auth", "jsPDF", "TailwindCSS"],
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-purple-400 via-pink-500 to-rose-500",
      liveDemo: "https://ai-studybuddy.vercel.app/",
      github: "https://github.com/uzma-a/Study-Buddy",
      category: "Frontend"
    },
   
  ];

  const categories = ['All', 'AI Application', 'Full Stack', 'Frontend'];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI Application': return 'bg-gradient-to-r from-purple-500 to-indigo-600';
      case 'Full Stack': return 'bg-gradient-to-r from-emerald-500 to-teal-600';
      case 'Frontend': return 'bg-gradient-to-r from-pink-500 to-rose-600';
      default: return 'bg-gradient-to-r from-gray-600 to-slate-700';
    }
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id='projects'>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white p-4 md:p-8 relative overflow-hidden">

        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Architecting intelligent multi-agent systems, graph reasoning engines, and full-stack applications
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`
                  relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between
                  transition-all duration-500 hover:border-white/20
                  ${hoveredProject === project.id ? 'transform -translate-y-2 shadow-2xl shadow-cyan-500/20' : ''}
                `}>
                  {/* Category Badge */}
                  <div className={`
                    absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md
                    ${getCategoryColor(project.category)}
                  `}>
                    {project.category}
                  </div>

                  <div>
                    {/* Project Icon */}
                    <div className={`
                      w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} 
                      flex items-center justify-center text-white mb-6 shadow-lg
                      transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3
                    `}>
                      {project.icon}
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.name}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                        {project.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/5 text-gray-300 rounded-lg text-xs font-medium
                                      border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-6 mt-auto">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 
                                text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/40
                                transition-all duration-300 flex-1 justify-center group/btn"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl 
                                font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 
                    transition-opacity duration-300 pointer-events-none
                    ${hoveredProject === project.id ? 'opacity-5' : ''}
                  `}></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://github.com/uzma-a?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 
                        border border-white/10 rounded-2xl text-white font-bold text-lg
                        hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-6 h-6" />
              <span>View More on GitHub</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

           
          </div>

          {/* Stats Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-4xl font-black text-cyan-400 mb-2">5+</h3>
              <p className="text-gray-400 font-medium">Production AI & Web Projects</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-4xl font-black text-purple-400 mb-2">3</h3>
              <p className="text-gray-400 font-medium">Domain Categories</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-pink-500/30 transition-all duration-300">
              <h3 className="text-4xl font-black text-pink-400 mb-2">100%</h3>
              <p className="text-gray-400 font-medium">Deployed & Open Source</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
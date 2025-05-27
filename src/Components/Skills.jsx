import React from 'react';

const skillsData = [
  {
    title: 'Programming Languages',
    color: 'from-purple-500 to-indigo-500',
    icon: '💻',
    skills: ['JavaScript', 'Python'],
  },
  {
    title: 'Frontend',
    color: 'from-pink-500 to-red-400',
    icon: '🎨',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TailwindCSS', 'Bootstrap', 'React.js', 'Redux', 'Next.js'],
  },
  {
    title: 'Backend',
    color: 'from-green-500 to-emerald-400',
    icon: '🛠️',
    skills: ['Node.js', 'Express.js', 'Firebase Functions'],
  },
  {
    title: 'Database',
    color: 'from-yellow-500 to-orange-400',
    icon: '🗄️',
    skills: ['MongoDB', 'Firebase Firestore'],
  },
  {
    title: 'UI/UX Design',
    color: 'from-cyan-500 to-blue-400',
    icon: '🎯',
    skills: ['Figma', 'Responsive Design'],
  },
  {
    title: 'Version Control',
    color: 'from-teal-500 to-sky-400',
    icon: '🔧',
    skills: ['Git', 'GitHub'],
  },
  {
    title: 'Additional Tools',
    color: 'from-indigo-500 to-purple-400',
    icon: '🧰',
    skills: ['APIs', 'ChatGPT-3.5', 'Postman'],
  },
  {
    title: 'Deployment & Hosting',
    color: 'from-fuchsia-500 to-pink-400',
    icon: '🚀',
    skills: ['Netlify', 'Vercel', 'Render'],
  },
];

const Skills = () => {
  return (
    <div className="py-10 px-6 md:px-20 bg-slate-900 text-white min-h-screen">
      <h2 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg tracking-wide">
        🚀 Skills
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((section, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 shadow-lg bg-gradient-to-br ${section.color} hover:scale-105 transition-transform`}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">{section.icon}</span>
              <h3 className="text-2xl font-semibold">{section.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
              {section.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium shadow text-white border border-white border-opacity-30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

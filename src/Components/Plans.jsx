import React from 'react';
import { Code, Database, Brain, Target, CheckCircle, Sparkles, ArrowRight, Zap } from 'lucide-react';

const Plans = () => {
    const planAFeatures = [
        {
            icon: <Code className="w-5 h-5" />,
            text: "Dive deep into Python and Django for backend development",
            highlights: ["Python", "Django"]
        },
        {
            icon: <Database className="w-5 h-5" />,
            text: "Master SQL for efficient database management",
            highlights: ["SQL"]
        },
        {
            icon: <Brain className="w-5 h-5" />,
            text: "Integrate Generative AI into my workflow for faster development",
            highlights: ["Generative AI"]
        },
        {
            icon: <Target className="w-5 h-5" />,
            text: "Build scalable, AI-powered applications with full stack approach",
            highlights: ["AI-powered applications"]
        }
    ];

    const planBFeatures = [
        {
            icon: <Code className="w-5 h-5" />,
            text: "Focus on mastering Data Structures and Algorithms (DSA) in C++",
            highlights: ["Data Structures and Algorithms (DSA)", "C++"]
        },
        {
            icon: <Zap className="w-5 h-5" />,
            text: "Sharpen problem-solving skills for technical interviews",
            highlights: ["problem-solving"]
        },
        {
            icon: <Target className="w-5 h-5" />,
            text: "Prepare for interviews with top tech companies",
            highlights: []
        },
        {
            icon: <CheckCircle className="w-5 h-5" />,
            text: "Build strong foundation for complex software development challenges",
            highlights: []
        }
    ];

    const highlightText = (text, highlights) => {
        if (!highlights.length) return text;

        let result = text;
        highlights.forEach(highlight => {
            // Escape special regex characters
            const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(${escapedHighlight})`, 'gi');
            result = result.replace(regex, '<span class="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-bold">$1</span>');
        });

        return <span dangerouslySetInnerHTML={{ __html: result }} />;
    };


    

return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
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

        <div className="relative z-10 container mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                    <span className="text-emerald-400 font-semibold text-lg">What's Next</span>
                    <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Future <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">Plans</span>
                </h1>
                <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
                    Charting my journey towards becoming a more skilled developer with two exciting paths ahead
                </p>
            </div>

            {/* Plans Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

                {/* Plan A */}
                <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 via-teal-400 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">

                        {/* Plan Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xl">A</span>
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Full Stack Evolution</h2>
                                <p className="text-slate-300 text-sm">Python • Django • SQL • AI</p>
                            </div>
                        </div>

                        {/* Plan Description */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-emerald-400 mb-3">The AI-Powered Path</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Transform into a cutting-edge full-stack developer by mastering Python ecosystems and integrating AI technologies for next-generation applications.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-4">
                            {planAFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3 group/item">
                                    <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 group-hover/item:bg-emerald-500/30 transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                    <p className="text-slate-200 flex-1 leading-relaxed">
                                        {highlightText(feature.text, feature.highlights)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-8 pt-6 border-t border-slate-700/50">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm">Priority Level</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Plan B */}
                <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">

                        {/* Plan Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xl">B</span>
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Algorithm Mastery</h2>
                                <p className="text-slate-300 text-sm">C++ • DSA • Problem Solving</p>
                            </div>
                        </div>

                        {/* Plan Description */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">The Competitive Edge</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Build unshakeable foundations in computer science fundamentals and algorithmic thinking for technical excellence and interview success.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-4">
                            {planBFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3 group/item">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 group-hover/item:bg-blue-500/30 transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                    <p className="text-slate-200 flex-1 leading-relaxed">
                                        {highlightText(feature.text, feature.highlights)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-8 pt-6 border-t border-slate-700/50">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm">Priority Level</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="text-center mt-16">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full border border-slate-600/50">
                    <span className="text-slate-300">Ready to embark on this journey</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400 animate-pulse" />
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Plans;
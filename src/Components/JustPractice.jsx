import React from 'react'

const JustPractice = () => {

    const plans = [
        {
            id: 1,
            technology: "Front-End",
            source: "Apna College",
            topics: "HTML, CSS, React.js"
        },
        {
            id: 2,
            technology: "Backend-End",
            source: "Chai aur Code",
            topics: "Node.js, Express.js, Middlewares"
        },
        {
            id: 3,
            technology: "Programming Languages",
            source: "CodewithHarry",
            topics: "Python, JavaScript, C"
        },
        {
            id: 4,
            technology: "DSA",
            source: "Apna College",
            topics: "C++, Data Structures, Algorithm"
        },
        {
            id: 5,
            technology: "Database",
            source: "FreeCodeCamp",
            topics: "MongoDB, SQL, Firebase"
        }

    ];
    return (
        <div className='bg-gradient-to-r  from-blue-500 to-purple-500 h-screen'>
            <h1 className='text-center text-4xl mt-2'>Chapters for becoming a developer!</h1>
            <div className="container  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 max-w-7xl">
                {plans.map((plan) => (
                     <div className="cards mt-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 h-full border border-slate-700/50 transition-all duration-500">
                            <h2 className='text-2xl mt-4 font-semibold'> {plan.id}. {plan.technology} </h2>
                            <span className='text-gray-400 mt-4'><span className='font-bold text-gray-300'>Source:</span> {plan.source} </span>

                            <p className='mt-4'><span className='font-bold text-gray-300'>Topics:  {plan.topics} </span> </p>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default JustPractice

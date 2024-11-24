import React from 'react'

const Plans = () => {
    return (
        <div className='bg-slate-800 text-lg p-4 md:p-6 lg:p-8 rounded-md m-4 md:m-8 lg:m-20 gap-4 md:gap-6 lg:gap-8'>

            <h1 className='text-3xl md:text-4xl lg:text-5xl p-2 text-pink-100 font-semibold text-center bg-gradient-to-r from-teal-400 to-blue-500'>Future Plans</h1>

            <div className="paragraph mt-20 text-slate-200 flex flex-col">
                <div className='text-center mb-16'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-center text-white mb-4 md:mb-6 lg:mb-8 font-semibold underline underline-offset-4 decoration-2'> Plan <span className='font-bold text-green-600'>A</span>: <span className='font-semibold text-4xl'>Python and Django</span></h1>
                    <p>Recently, I have been focusing on backend development, specifically diving deep into <span className='font-bold text-green-600'>Node.js</span> and <span className='font-bold text-green-600'>Express.js</span> to enhance my server-side skills. Once I solidify my knowledge in these areas, my next goal is to learn <span className='font-bold text-green-600'>Python</span> and <span className='font-bold text-green-600'>Django</span>, as Python is my favorite programming language. I am eager to sharpen my expertise in Python and leverage its versatility for web development and <span className='font-bold text-green-600'>AI</span> integration. By mastering these technologies, I aim to build scalable and efficient applications while expanding my knowledge in backend frameworks and exploring new opportunities in the tech field.</p>

                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-center text-white mt-12 mb-4 font-semibold underline underline-offset-4 decoration-2'> Plan <span className='font-bold text-green-600'>B</span>: <span className='font-semibold text-4xl'>DSA in C++</span></h1>
                    <p>

                        My plan is to focus on learning <span className='font-bold text-green-600'>Data Structures and Algorithms</span> (DSA) in <span className='font-bold text-green-600'>C++</span>. I believe that mastering DSA in C++ will strengthen my <span className='font-bold text-green-600'>problem-solving</span> abilities and prepare me for technical interviews, particularly in big tech companies. This knowledge will also provide a solid foundation for tackling complex challenges in software development and enhance my overall coding proficiency.</p>
                </div>
            </div>
        </div>
    )
}

export default Plans

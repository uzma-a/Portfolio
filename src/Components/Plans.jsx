import React from 'react'

const Plans = () => {
    return (
        <div className='bg-slate-800 text-lg p-4 sm:p-6 md:p-8 lg:p-10 rounded-md m-4 sm:m-6 md:m-8 lg:m-10 gap-4 sm:gap-6 md:gap-8'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl p-2 text-pink-100 font-semibold text-center bg-gradient-to-r from-teal-400 to-blue-500'>
                Future Plans
            </h1>

            <div className="paragraph mt-10 sm:mt-14 md:mt-20 text-slate-200 flex flex-col sm:space-y-8 md:space-y-12">
                <div className='text-center'>
                    {/* Plan A Section */}
                    <div className='bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg'>
                        <h1 className='text-2xl sm:text-3xl md:text-3xl text-white mb-8 font-semibold'>
                            Plan <span className='font-bold text-green-600'>A</span>: <span className='font-semibold text-xl sm:text-2xl md:text-3xl'>Full Stack with Python, Django, SQL, and Generative AI</span>
                        </h1>
                        <ul className='text-white text-left text-lg sm:text-base md:text-lg space-y-4'>
                            <li className=' items-start'>
                                <span className='text-green-600 mr-2'>•</span>
                                Dive deep into <span className='bg-gradient-to-r from-green-200 to-green-500 bg-clip-text text-transparent font-semibold  mx-1'>Python</span> and <span className='bg-gradient-to-r from-green-200 to-green-500 bg-clip-text text-transparent font-semibold  mx-1'>Django</span> for backend development.
                            </li>
                            <li className=' items-start'>
                                <span className='text-green-600 text-xl font-bold mr-2'>•</span>
                                Master <span className='bg-gradient-to-r from-green-200 to-green-500 bg-clip-text text-transparent font-semibold  mx-1'>SQL</span> for efficient database management.
                            </li>
                            <li className=' items-start'>
                                <span className='text-green-600 text-xl font-bold mr-2'>•</span>
                                Integrate <span className='bg-gradient-to-r from-green-200 to-green-500 bg-clip-text text-transparent font-semibold  mx-1'>Generative AI</span> into my workflow for faster development and smarter decision-making.
                            </li>
                            <li className=' items-start'>
                                <span className='text-green-600 text-xl font-bold mr-2'>•</span>
                                Build scalable, <span className='bg-gradient-to-r from-green-200 to-green-500 bg-clip-text text-transparent font-semibold text-xl mx-1'>AI-powered applications</span> while innovating faster with a full stack approach.
                            </li>
                        </ul>
                    </div>

                    {/* Plan B Section */}
                    <div className='bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg mt-12 sm:mt-16 md:mt-20'>
                        <h1 className='text-2xl sm:text-3xl md:text-3xl text-white mb-8 font-semibold'>
                            Plan <span className='font-bold text-green-600'>B</span>: <span className='font-semibold sm:text-2xl md:text-3xl'>Mastering DSA in C++</span>
                        </h1>
                        <ul className='text-white text-left text-lg sm:text-base md:text-lg space-y-4'>
                            <li className=' items-start'>
                                <span className='text-green-600 text-xl font-bold mr-2'>•</span>
                                Focus on mastering <span className='bg-gradient-to-r from-green-200 to-green-500 bg-clip-text text-transparent font-semibold  mx-1'>Data Structures and Algorithms (DSA)</span> in <span className='font-semibold mx-1'>C++</span>.
                            </li>
                            <li className=' items-start'>
                                <span className='text-green-600 text-xl font-bold mr-2'>•</span>
                                Sharpen <span className='bg-gradient-to-r from-green-200 to-green-500 bg-clip-text text-transparent font-semibold  mx-1'>problem-solving</span> skills for technical interviews.
                            </li>
                            <li className=' items-start'>
                                <span className='text-green-600 text-xl font-bold mr-2'>•</span>
                                Prepare for interviews with top tech companies and improve coding proficiency.
                            </li>
                            <li className=' items-start'>
                                <span className='text-green-600 text-xl font-bold mr-2'>•</span>
                                Build a strong foundation for tackling complex software development challenges.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans

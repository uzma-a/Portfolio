import React from 'react'
import { Link } from 'react-router-dom'

const MyProject = () => {

    return (
        <div className='bg-slate-800 text-lg p-4 md:p-6 lg:p-8 rounded-md m-4 md:m-8 lg:m-20 gap-4 md:gap-6 lg:gap-8'>

            <h1 className='text-3xl md:text-4xl lg:text-5xl p-2 text-pink-100 font-semibold text-center bg-gradient-to-r from-teal-700 to-blue-700'>MY PROJECTS</h1>
            {/* Portfolio */}
            <div className="paragraph mt-20 text-slate-200 flex flex-col">
                <h1 data-aos='fade-up' className='text-3xl text-center text-white font-bold'>
                    Project 1 : <span data-aos='fade-right' className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent text-4xl underline underline-offset-2 decoration-2'>My Portfolio</span>
                </h1>

                <p className='mt-10 font-medium text-lg'>
                    A clean and responsive personal portfolio to showcase my skills in <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>web development</span>.
                    It features sections like About, Skills, Projects, and Contact. Built using <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>React.js</span> and <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>Tailwind CSS</span>.
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Technologies Used: </span> JavaScript, React.js, TailwindCSS, AOS, ChatGPT.
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Challenge: </span> Ensuring full responsiveness across all devices.
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Solution: </span> Leveraged Tailwind CSS utilities and <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>ChatGPT-3.5</span> for optimization.
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Live Demo: </span>
                    <a href="https://uzma-portfolio-website.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline underline-offset-2'>View Live</a>
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Source Code: </span>
                    <a href="https://github.com/uzma-a/portfolio" target="_blank" rel="noopener noreferrer" className='text-blue-600 underline underline-offset-2'> GitHub Repository</a>
                </p>
            </div>

            {/* Eventify */}
            <div className="paragraph mt-20 text-slate-200 flex flex-col">
                <h1 data-aos='fade-up' className='text-3xl text-center text-white font-bold'>
                    Project 2: <span data-aos='fade-right' className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-4xl underline underline-offset-2 decoration-2'>Eventify</span>
                </h1>

                <p className="text-xl sm:text-lg text-center font-bold mt-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Event Management Platform
                </p>

                <p className='mt-6 font-medium text-lg'>
                    Eventify is a <span className='font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>Full-stack event management platform</span>  designed to streamline <span className='font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'> event organization</span>. It features a secure <span className='font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>user authentication</span> system with <span className='font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'> OTP verification</span> and password recovery, allowing users to seamlessly <span className='font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>create</span>, <span className='font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'> manage</span>, and <span className='font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>book event tickets</span> with ease.
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Technologies Used:</span> <span className='font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>MERN Stack</span>, AOS, TailwindCSS,
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Challenges:</span> Implementing <span className='font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>secure authentication</span> and smooth ticket booking.
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Solution:</span> Used <span className='font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>JWT authentication</span>, <span className='font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>OTP verification</span>, and optimized <span className='font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>database</span> queries for efficiency.
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Live Demo: </span>
                     <a href="https://eventify-frontend-hyvw.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <span className='text-blue-600 underline underline-offset-2'>Eventify Website</span></a> 
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Source Code: </span>
                     <a href="https://github.com/uzma-a/eventify-repo" target="_blank" rel="noopener noreferrer">
                        <span className='text-blue-600 underline underline-offset-2'>GitHub Repository</span></a> 
                </p>
            </div>


            {/* FitHub  */}
            <div className="paragraph mt-20 text-slate-200 flex flex-col">
                <h1 data-aos="fade-up" className="text-3xl text-center text-white font-bold">
                    Project 3:
                    <span data-aos="fade-right" className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-4xl"> FitHub </span>
                </h1>
                <p className="text-xl sm:text-lg text-center font-bold mt-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Modern Responsive Gym Website
                </p>
                <p className="mt-8 text-lg font-medium">
                    <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-xl">FitHub </span>
                    is a modern, fully responsive gym website with sections like Home, Services, Trainers, Membership Plans, and Contact. It features
                    an engaging UI and a <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-xl">Register</span> functionality.
                    Built with <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-xl">React.js</span> and
                    <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-xl"> Tailwind CSS</span>.
                </p>

                <p className="mt-6 font-semibold">
                    <span className="text-cyan-300 font-semibold">- Technologies Used:</span> JavaScript, React.js, TailwindCSS, Node.js, Express.js, MongoDB.
                </p>

                <p className="mt-6 font-medium">
                    <span className="text-blue-400 font-semibold">- Source Code: </span>
                    <a href="https://github.com/uzma-a/fithubnewwebsite" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-2">
                        GitHub Repository
                    </a>
                </p>

                <p className="mt-6">
                    <span className="font-bold text-blue-500">- Live Demo:</span>
                    <a href="https://fithub-website.netlify.app/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 px-1 underline">
                        FitHub Website
                    </a>
                </p>
            </div>


            {/* DevMock */}
            <div className="paragraph mt-20 text-slate-200 flex flex-col">

                <h1 data-aos='fade-up' className='text-3xl text-center text-white font-bold'>Project 4 : <span data-aos='fade-right' className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent text-4xl'>DevMock: </span></h1>
                <p className='text-xl sm:text-lg text-center font-bold mt-1 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent'>Your Ultimate Developer Mock Interview Platform</p>
                <p className='mt-8 text-lg font-medium'>
                    I developed <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>DevMock</span> as an <span className=' text-xl bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold' >AI-powered</span> application to assist users in preparing for technical interviews.
                    This project generates dynamic and relevant coding questions in topics such as
                    <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl px-1'>JavaScript</span>,
                    <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl px-1'>React.js</span>, and
                    <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl px-1'>Node.js</span>.
                    DevMock demonstrates my ability to integrate modern technologies and highlights my expertise in building practical solutions.
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Technologies Used: </span>
                    HTML5, CSS3, JavaScript, React.js, TailwindCSS, Node.js, Express.js.
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Challenges: </span>
                    Implementing dynamic question generation.
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Solution: </span>
                    Utilized <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>ChatGPT-3.5</span> for AI-powered question generation, ensuring the app meets its core functionality requirements effectively.
                </p>

                <p className='mt-6 font-medium'>
                    <span className='text-blue-400 font-semibold '>- Source Code : </span> <span className='text-blue-600 underline underline-offset-2 '><a href="https://github.com/uzma-a/DevMock" target="_blank" rel="noopener noreferrer"></a></span>  <a href="https://github.com/uzma-a/DevMock" target="_blank" rel="noopener noreferrer"><span className='text-blue-600 underline underline-offset-2 '>GitHub Repository</span></a> <span className='text-blue-400 font-semibold '> </span> </p>

                <p className='mt-6'>
                    <span className='font-bold text-blue-500'>- Live Demo :  <a href="https://dev-mock.vercel.app/" target="_blank" rel="noopener noreferrer" className=" font-medium text-blue-600 px-1 underline">
                        DevMock Website
                    </a>
                        </span>
                </p>

            </div>


            {/* Microsoft-UI-Clone */}
            <div className="paragraph mt-20 flex flex-col text-slate-200">
                <h1 data-aos='fade-up' className='text-3xl text-center text-white font-bold'>
                    Project 5: <span data-aos='fade-right' className='bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent text-4xl'>Microsoft-UI-Clone</span>
                </h1>

                <p className='mt-8 text-lg font-medium'>
                    Built a <span className='font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent'>Microsoft UI</span> clone to refine my <span className='font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent'>front-end</span> skills and master <span className='font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent'>React routing</span>. The homepage mirrors <span className='font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent'>Microsoft's official site</span>, with a custom <span className='font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent'>Microsoft 365</span> feature in the navbar, enhancing functionality and UI accuracy.
                </p>

                <p className='mt-6 '>
                    <span className='text-blue-400 font-semibold'>- Live Demo: </span>
                     <a href="https://ui-micro-soft.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <span className='text-blue-700 font-medium underline underline-offset-2'>Microsoft-Clone Website</span></a> 
                </p>

                <p className='mt-6 '>
                    <span className='text-blue-400 font-semibold'>- Source Code: </span>
                     <a href="https://github.com/uzma-a/Microsoft-UI-Clone" target="_blank" rel="noopener noreferrer">
                        <span className='text-blue-700 font-medium underline underline-offset-2'>GitHub Repository </span></a> 
                </p>
            </div>


            {/* Gemini-Clone */}
            <div className="paragraph mt-20 flex flex-col text-slate-200">
                <h1 data-aos='fade-up' className='text-3xl text-center text-white font-bold'>
                    Project 6: <span data-aos='fade-right' className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-4xl'>Gemini-Clone</span>
                </h1>

                <p className='mt-8 text-lg font-medium'>
                    Built a <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>Gemini clone</span> to gain hands-on experience with <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>APIs</span> and <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>AI technologies</span>. Integrated <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>Google Generative AI</span> for dynamic responses and added a <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>dark mode</span> for an enhanced UI.
                </p>

                <p className='mt-6 font-medium'>
                    <span className='text-blue-400 font-semibold'>- Technologies Used:</span> React.js, Tailwind CSS, JavaScript, HTML5, CSS3, <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>Google Generative AI (API Key)</span>.
                </p>

                <p className='mt-6 font-medium'>
                    <span className='text-blue-400 font-semibold'>- Challenges:</span> Ensuring seamless <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>AI integration</span>  while maintaining a smooth, <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>adaptive UI</span>.
                </p>

                <p className='mt-6 font-medium'>
                    <span className='text-blue-400 font-semibold'>- Solution:</span> Used Tailwind CSS for a responsive design and integrated <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>Google Generative AI</span> to enhance interactivity.
                </p>

                <p className='mt-6 '>
                    <span className='text-blue-400 font-semibold'>- Live Demo: </span>
                     <a href="https://gemini-ui.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <span className='text-blue-700 font-medium underline underline-offset-2'>Gemini-Clone Website </span></a> 
                </p>

                <p className='mt-6 '>
                    <span className='text-blue-400 font-semibold'>- Source Code: </span>
                     <a href="https://github.com/uzma-a/Gemini-Clone" target="_blank" rel="noopener noreferrer">
                        <span className='text-blue-700 font-medium underline underline-offset-2'>GitHub Repository</span></a> 
                </p>
            </div>



            <hr className='border-0 h-0.5 bg-slate-800 m-8' />


        </div>
    )
}

export default MyProject

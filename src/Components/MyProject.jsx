import React from 'react'
import { Link } from 'react-router-dom'

const MyProject = () => {

    return (
        <div className='bg-slate-800 text-lg p-4 md:p-6 lg:p-8 rounded-md m-4 md:m-8 lg:m-20 gap-4 md:gap-6 lg:gap-8'>

            <h1 className='text-3xl md:text-4xl lg:text-5xl p-2 text-pink-100 font-semibold text-center bg-gradient-to-r from-teal-700 to-blue-700'>MY PROJECTS</h1>

            <div className="paragraph mt-20 text-slate-200 flex flex-col">

                <h1 data-aos='fade-up' className='text-3xl text-center text-white font-bold'>Project 1 : <span data-aos='fade-right' className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent text-4xl  underline underline-offset-2 decoration-2'>My PortFolio</span></h1>
                <p className='mt-10 font-medium text-lg'>I created this personal portfolio website to showcase my skills and creativity in <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl '>web development </span>. The website includes section of About, Skills, My Project, Contact me and Footer. I made my <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl '>portfolio</span> clean with whatever I learned. This portfolio is completely responsive. Every Section of the project <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl '>highlights</span> my proficiency in technologies like <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>Tailwind CSS  </span >and <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>React.js</span>.</p>

                <p className='mt-6 font-semibold'><span className='text-blue-400 font-semibold '>- Technologies Used :  </span> JavaScript, React.js, TailwindCSS, ChatGPT.</p>

                <p className='mt-6 font-semibold'><span className='text-blue-400 font-semibold '>- Challenges :  </span>  Making the portfolio <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>fully responsive  </span >on all devices.</p>

                <p className='mt-6 font-semibold'><span className='text-blue-400 font-semibold'>- Solution :  </span> Utilized Tailwind CSS's responsive utilities and also using <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl '>ChatGPT-3.5 </span> to ensure the website looks good on all screen sizes.</p>

                <p className='mt-6 font-semibold'><span className='text-blue-400 font-semibold '>- Source Code : [</span> <span className='text-blue-600 underline underline-offset-2 '><a href="https://github.com/uzma-a/Portfolio" target="_blank" rel="noopener noreferrer"></a></span>  <a href="https://github.com/uzma-a/portfolio" target="_blank" rel="noopener noreferrer"><span className='text-blue-600 underline underline-offset-2 '>https://github.com/uzma-a/portfolio</span></a> <span className='text-blue-400 font-semibold '> ]</span> </p>

            </div>

            <div className="paragraph mt-20 text-slate-200 flex flex-col">

                <h1 data-aos='fade-up' className='text-3xl text-center text-white font-bold'>Project 2 :
                    <span data-aos='fade-right' className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-4xl'> FitHub </span>
                </h1>
                <p className='text-xl sm:text-lg text-center font-bold mt-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                    Modern Responsive Gym Website
                </p>
                <p className='mt-8 text-lg font-medium'>
                    I developed <span className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>FitHub</span>,
                    my latest <span className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>full-stack project</span>, which boasts an <span className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>attractive</span>, responsive UI  with <span className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>Register</span>  functionality.
                    FitHub is a modern and fully <span className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>responsive website</span>  for a gym, featuring sections such as Home, Services, Trainers, Membership Plans, and Contact.
                    This project demonstrates my ability to create <span className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>user-friendly</span>  designs and implement <span className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>real-world</span> solutions with a sleek UI, built using
                    <span className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-xl px-1'>React.js</span>
                    and <span className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>Tailwind CSS</span>.
                </p>


                <p className='mt-6 font-semibold'>
                    <span className='text-cyan-300 font-semibold'>- Technologies Used: </span>
                    JavaScript, React.js, TailwindCSS, Node.js, Express.js, MongoDB.
                </p>


                <p className='mt-6 font-medium'>
                    <span className='text-blue-400 font-semibold '>- Source Code : [</span>
                    <span className='text-blue-600 underline underline-offset-2 '>
                        <a href="https://github.com/uzma-a/fithubnewwebsite" target="_blank" rel="noopener noreferrer"></a>
                    </span>
                    <a href="https://github.com/uzma-a/fithubnewwebsite" target="_blank" rel="noopener noreferrer">
                        <span className='text-blue-600 underline underline-offset-2 '>https://github.com/uzma-a/FitHub</span>
                    </a>
                    <span className='text-blue-400 font-semibold '> ]</span>
                </p>

                <p className='mt-6'>
                    <span className='font-bold text-blue-500'>- Visit Link : [
                        <a href="https://fithub-website.netlify.app/" target="_blank" rel="noopener noreferrer" className=" font-medium text-blue-600 px-1 underline">
                        https://fithub-website.netlify.app/
                        </a>
                        ]</span>
                </p> 

            </div>


            <div className="paragraph mt-20 text-slate-200 flex flex-col">

                <h1 data-aos='fade-up' className='text-3xl text-center text-white font-bold'>Project 3 : <span data-aos='fade-right' className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent text-4xl'>DevMock: </span></h1>
                <p className='text-xl sm:text-lg text-center font-bold mt-1 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent'>Your Ultimate Developer Mock Interview Platform</p>
                <p className='mt-8 text-lg font-medium'>
                    I developed <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>DevMock</span> as an <span className=' text-xl bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold' >AI-powered</span> application to assist users in preparing for technical interviews.
                    This project generates dynamic and relevant coding questions in topics such as
                    <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl px-1'>JavaScript</span>,
                    <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl px-1'>React.js</span>, and
                    <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl px-1'>Node.js</span>.
                    DevMock demonstrates my ability to integrate modern technologies and highlights my expertise in building practical solutions. The application is fully responsive, built with <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>Tailwind CSS</span> and <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>React.js</span>, showcasing my skills in creating user-friendly, innovative web experiences.
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Technologies Used: </span>
                    HTML5, CSS3, JavaScript, React.js, TailwindCSS, Node.js, Express.js.
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Challenges: </span>
                    Implementing dynamic question generation and ensuring the application is
                    <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'> fully responsive </span> across all devices.
                </p>

                <p className='mt-6 font-semibold'>
                    <span className='text-blue-400 font-semibold'>- Solution: </span>
                    Leveraged<span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'> Tailwind CSS's</span> responsive utilities to ensure proper layout and design for all screen sizes.
                    Additionally, utilized <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>ChatGPT-3.5</span> for AI-powered question generation, ensuring the app meets its core functionality requirements effectively.
                </p>

                <p className='mt-6 font-medium'>
                    <span className='text-blue-400 font-semibold '>- Source Code : [</span> <span className='text-blue-600 underline underline-offset-2 '><a href="https://github.com/uzma-a/DevMock" target="_blank" rel="noopener noreferrer"></a></span>  <a href="https://github.com/uzma-a/DevMock" target="_blank" rel="noopener noreferrer"><span className='text-blue-600 underline underline-offset-2 '>https://github.com/uzma-a/DevMock</span></a> <span className='text-blue-400 font-semibold '> ]</span> </p>

                <p className='mt-6'>
                    <span className='font-bold text-blue-500'>- Visit Link : [ <a href="https://dev-mock.vercel.app/" target="_blank" rel="noopener noreferrer" className=" font-medium text-blue-600 px-1 underline">
                        https://dev-mock.vercel.app/
                    </a>
                        ]</span>
                </p>

            </div>

            <div className="paragraph mt-20 flex flex-col text-slate-200">
                <h1 data-aos='fade-up' className='text-3xl text-center text-white font-bold'>Project 4 : <span data-aos='fade-right' className='bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent text-4xl'>Microsoft-UI-Clone: </span></h1>
                <p className='mt-8 text-lg font-medium'>I built a Microsoft UI clone to challenge myself and test my skills in <span className=' bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent font-semibold text-xl'>Front-end development</span>. The project includes a homepage that mirrors the official Microsoft page, providing a hands-on experience with <span className=' bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent font-semibold text-xl'>React routing</span>. Additionally, I created a <span className=' bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>Microsoft 365</span> option in the navbar, where I implemented a custom feature to enhance functionality. This project not only allowed me to refine my <span className=' bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent font-semibold text-xl'>React routing</span> techniques but also demonstrated my ability to <span className=' bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent font-semibold text-xl'>replicate complex UI designs</span>.</p>


                <p className='mt-6 '><span className='text-blue-400 font-semibold '>- Visit Link :   [ <a href="https://ui-micro-soft.netlify.app/" target="_blank" rel="noopener noreferrer"><span className='text-blue-700 underline underline-offset-2'>https://ui-micro-soft.netlify.app/</span></a> ]</span></p>
                <p className='mt-6 '><span className='text-blue-400 font-semibold '>- Source Code : [ <a href="https://github.com/uzma-a/Microsoft-UI-Clone" target="_blank" rel="noopener noreferrer"><span className='text-blue-700 underline underline-offset-2'>https://github.com/uzma-a/Microsoft-UI-Clone</span></a> ] </span> </p>
            </div>

            <div className="paragraph mt-20 flex flex-col text-slate-200">
                <h1 data-aos='fade-up' className='text-3xl text-center text-white font-bold'>Project 5 : <span data-aos='fade-right' className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-4xl'>Gemini-Clone: </span></h1>
                <p className='mt-8 text-lg font-medium'>I developed a Gemini clone to gain practical experience with <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>APIs</span> and <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>AI technologies</span>. This project involved integrating various APIs and implementing <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>AI functionalities</span> to closely replicate the <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>Gemini </span>  platform's features. Additionally, I included a <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>dark mode </span>theme to enhance user experience and demonstrate my skills in creating <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>adaptable </span> and visually appealing interfaces.</p>
                <p className='mt-6 font-medium'>
                    <span className='text-blue-400 font-semibold'>- Technologies Used : </span> HTML5, CSS3, JavaScript, React.js, TailwindCSS, <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>Google Generative AI (API Key)</span>.
                </p>

                <p className='mt-6 font-medium'>
                    <span className='text-blue-400 font-semibold'>- Challenges : </span> Making the Gemini Clone <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent font-semibold text-xl'>fully responsive</span> across various devices while integrating AI functionality.
                </p>

                <p className='mt-6 font-medium'>
                    <span className='text-blue-400 font-semibold'>- Solution : </span> Utilized Tailwind CSS's responsive utilities to make the design fully adaptable. Integrated <span className='bg-gradient-to-r from-zinc-400 to-blue-500 bg-clip-text text-transparent text-xl font-semibold'>Google Generative AI (API Key)</span>. to enhance the clone’s interactivity and ensure it responds to users dynamically.
                </p>


                <p className='mt-6 '><span className='text-blue-400 font-semibold '>- Visit Link :   [ <a href="https://gemini-ui.netlify.app/" target="_blank" rel="noopener noreferrer"><span className='text-blue-700 underline underline-offset-2'>https://gemini-ui.netlify.app/</span></a> ]</span></p>
                <p className='mt-6 '><span className='text-blue-400 font-semibold '>- Source Code : [ <a href="https://github.com/uzma-a/Gemini-Clone" target="_blank" rel="noopener noreferrer"><span className='text-blue-700 underline underline-offset-2'>https://github.com/uzma-a/Gemini-Clone</span></a> ] </span> </p>

            </div>


            <hr className='border-0 h-0.5 bg-slate-800 m-8' />


        </div>
    )
}

export default MyProject

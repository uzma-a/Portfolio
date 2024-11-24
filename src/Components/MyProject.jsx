import React from 'react'
import { Link } from 'react-router-dom'

const MyProject = () => {


    return (
        <div className='bg-slate-800 text-lg p-4 md:p-6 lg:p-8 rounded-md m-4 md:m-8 lg:m-20 gap-4 md:gap-6 lg:gap-8'>

            <h1 className='text-3xl md:text-4xl lg:text-5xl p-2 text-pink-100 font-semibold text-center bg-gradient-to-r from-teal-400 to-blue-500'>My Project</h1>

            <div className="paragraph mt-20 text-slate-200 flex flex-col">

                <h1 className='text-3xl text-center text-white font-semibold'>Project 1 : <span className='text-yellow-300 text-4xl  underline underline-offset-2 decoration-2'>My PortFolio</span></h1>
                <p className='mt-10 text-lg'>I created this personal portfolio website to showcase my skills and creativity in web development. The website includes section of About, Skills, My Project, Contact me and Footer. I made my portfolio clean with whatever I learned. This portfolio is completely responsive. Every Section of the project highlights my proficiency in technologies like <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>Tailwind CSS  </span >and <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>React.js</span>.</p>
                <p className='mt-6 font-bold'><span className='text-blue-400 font-semibold '>- Technologies Used :  </span>    HTML5 , CSS3, JavaScript, React.js, TailwindCSS.</p>

                <p className='mt-6 '><span className='text-blue-400 font-semibold '>- Challenges :  </span>  Making the portfolio <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>fully responsive  </span >on all devices.</p>

                <p className='mt-6 '><span className='text-blue-400 font-semibold'>- Solution :  </span> Utilized Tailwind CSS's responsive utilities and also using <span className='bg-gradient-to-r from-yellow-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl '>ChatGPT-3.5 </span> to ensure the website looks good on all screen sizes.</p>
                <p className='mt-6 '><span className='text-blue-400 font-semibold '>- Source Code : [</span> <span className='text-blue-600 underline underline-offset-2 '><a href="https://github.com/uzma-a/Portfolio" target="_blank" rel="noopener noreferrer"></a></span>  <a href="https://github.com/uzma-a/portfolio" target="_blank" rel="noopener noreferrer"><span className='text-blue-600 underline underline-offset-2 '>https://github.com/uzma-a/portfolio</span></a> <span className='text-blue-400 font-semibold '> ]</span> </p>

            </div>

            <div className="paragraph mt-20 text-slate-200 flex flex-col">

                <h1 className='text-3xl text-center text-white font-semibold'>Project 2 : <span className='text-purple-500 text-4xl  underline underline-offset-2 decoration-2'>DevMock</span></h1>
                <p className='mt-10 text-lg'>
                    I developed <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>DevMock</span> as an <span className=' text-xl bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold' >AI-powered</span> application to assist users in preparing for technical interviews.
                    This project generates dynamic and relevant coding questions in topics such as
                    <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl px-1'>JavaScript</span>,
                    <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl px-1'>React.js</span>, and
                    <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl px-1'>Node.js</span>.
                    DevMock demonstrates my ability to integrate modern technologies and highlights my expertise in building practical solutions. The application is fully responsive, built with <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>Tailwind CSS</span> and <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>React.js</span>, showcasing my skills in creating user-friendly, innovative web experiences.
                </p>

                <p className='mt-6 font-bold'>
                    <span className='text-blue-400 font-semibold'>- Technologies Used: </span>
                    HTML5, CSS3, JavaScript, React.js, TailwindCSS, Node.js, Express.js.
                </p>

                <p className='mt-6 '>
                    <span className='text-blue-400 font-semibold'>- Challenges: </span>
                    Implementing dynamic question generation and ensuring the application is
                    <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'> fully responsive </span> across all devices.
                </p>

                <p className='mt-6 '>
                    <span className='text-blue-400 font-semibold'>- Solution: </span>
                    Leveraged<span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'> Tailwind CSS's</span> responsive utilities to ensure proper layout and design for all screen sizes.
                    Additionally, utilized <span className='bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold text-xl'>ChatGPT-3.5</span> for AI-powered question generation, ensuring the app meets its core functionality requirements effectively.
                </p>

                <p className='mt-6 '><span className='text-blue-400 font-semibold '>- Source Code : [</span> <span className='text-blue-600 underline underline-offset-2 '><a href="https://github.com/uzma-a/DevMock" target="_blank" rel="noopener noreferrer"></a></span>  <a href="https://github.com/uzma-a/DevMock" target="_blank" rel="noopener noreferrer"><span className='text-blue-600 underline underline-offset-2 '>https://github.com/uzma-a/DevMock</span></a> <span className='text-blue-400 font-semibold '> ]</span> </p>

                <p className='mt-6'>
                    <span className='font-bold text-blue-500'>- Visit Link : [ <a href="https://dev-mock.vercel.app/" target="_blank" rel="noopener noreferrer" className=" font-medium text-blue-600 px-1 underline">
                        https://dev-mock.vercel.app/
                    </a>
                         ]</span>
                </p>

            </div>

            <div className="paragraph mt-20 flex flex-col text-slate-200">
                <h1 className='text-3xl text-center text-white font-semibold'>Project 3 : <span className='text-cyan-500 font-semibold underline underline-offset-2 decoration-2'>Microsoft UI Clone </span></h1>
                <p className='mt-10 text-lg'>I built a Microsoft UI clone to challenge myself and test my skills in front-end development. The project includes a homepage that mirrors the official Microsoft page, providing a hands-on experience with <span className=' text-cyan-500 font-semibold'>React routing</span>. Additionally, I created a <span className=' text-cyan-500 font-semibold'>Microsoft 365</span> option in the navbar, where I implemented a custom feature to enhance functionality. This project not only allowed me to refine my React routing techniques but also demonstrated my ability to replicate complex UI designs.</p>


                <p className='mt-6 '><span className='text-blue-400 font-semibold '>- Visit Link :   [ <a href="https://ui-micro-soft.netlify.app/" target="_blank" rel="noopener noreferrer"><span className='text-blue-700 underline underline-offset-2'>https://ui-micro-soft.netlify.app/</span></a> ]</span></p>
                <p className='mt-6 '><span className='text-blue-400 font-semibold '>- Source Code : [ <a href="https://github.com/uzma-a/Microsoft-UI-Clone" target="_blank" rel="noopener noreferrer"><span className='text-blue-700 underline underline-offset-2'>https://github.com/uzma-a/Microsoft-UI-Clone</span></a> ] </span> </p>
            </div>

            <div className="paragraph mt-20 flex flex-col text-slate-200">
                <h1 className='text-3xl text-center text-white font-semibold'>Project 4 : <span className='text-violet-500 font-semibold underline underline-offset-2 decoration-2'>Gemini Clone</span></h1>
                <p className='mt-10 text-lg'>I developed a Gemini clone to gain practical experience with APIs and AI technologies. This project involved integrating various APIs and implementing AI functionalities to closely replicate the Gemini platform's features. Additionally, I included a dark mode theme to enhance user experience and demonstrate my skills in creating adaptable and visually appealing interfaces.</p>


                <p className='mt-6 '><span className='text-blue-400 font-semibold '>- Visit Link :   [ <a href="https://gemini-ui.netlify.app/" target="_blank" rel="noopener noreferrer"><span className='text-blue-700 underline underline-offset-2'>https://gemini-ui.netlify.app/</span></a> ]</span></p>
                <p className='mt-6 '><span className='text-blue-400 font-semibold '>- Source Code : [ <a href="https://github.com/uzma-a/Gemini-Clone" target="_blank" rel="noopener noreferrer"><span className='text-blue-700 underline underline-offset-2'>https://github.com/uzma-a/Gemini-Clone</span></a> ] </span> </p>
            </div>

            <div className="paragraph mt-20 flex flex-col text-slate-200">
                <h1 className='text-3xl text-center text-white font-semibold'>Project 5 : <span className='text-pink-500 font-semibold underline underline-offset-2 decoration-2'>Myntra New Website</span></h1>
                <p className='mt-10 text-lg'>I undertook a project to redesign Myntra’s website, focusing on creating an attractive and modern interface. This includes a refreshed layout, improved typography, and a vibrant color scheme.</p>
                <p className='mt-6 text-yellow-400'><span className='text-red-500 font-semibold text-xl'>*Note:   </span>Currently, the design is not fully responsive across all devices, with some areas not adjusting seamlessly for smaller screens. I am actively working on optimizing the responsiveness to ensure a smooth and consistent user experience across various devices.</p>


                <p className='mt-6 '><span className='text-blue-400 font-semibold '>- Visit Link :  </span>[ <span className='text-blue-600 underline underline-offset-2 '><a href="https://uzma-a.github.io/Myntra-New-UI/" target="_blank" rel="noopener noreferrer"></a></span>  <a href="https://uzma-a.github.io/Myntra-New-UI/" target="_blank" rel="noopener noreferrer"><span className='text-blue-600 underline underline-offset-2 '>https://uzma-a.github.io/Myntra-New-UI/</span></a> <span className='text-blue-400 font-semibold '> ]</span> </p>
                <p className='mt-6 '><span className='text-blue-400 font-semibold '>- Source Code :  [</span> <span className='text-blue-600 underline underline-offset-2 '><a href="https://github.com/uzma-a/Myntra-New-UI" target="_blank" rel="noopener noreferrer"></a></span>  <a href="https://github.com/uzma-a/Myntra-New-UI" target="_blank" rel="noopener noreferrer"><span className='text-blue-600 underline underline-offset-2 '>https://github.com/uzma-a/Myntra-New-UI</span></a> <span className='text-blue-400 font-semibold '> ]</span> </p>
            </div>
            <hr className='border-0 h-0.5 bg-slate-800 m-8' />


        </div>
    )
}

export default MyProject

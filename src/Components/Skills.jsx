import React from 'react';

const Skills = () => {
  return (
    <div className='skill flex flex-col m-8 bg-slate-800 p-8  rounded-md md:m-20 gap-6'>
      
      <h1 className='text-5xl p-1 text-pink-100 font-semibold text-center  bg-gradient-to-r from-teal-400 to-blue-500'>Skills</h1>
      <div className="boxes grid grid-col s-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12">
        <div className="card rounded-lg bg-slate-200 bg-opacity-75 p-4 flex flex-col">
          <img className='bg-cover w-full rounded-lg' src="https://img-c.udemycdn.com/course/750x422/4925142_c0ab.jpg" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl text-center font-semibold h-16 flex items-center'>Frontend:</h1>
            <ul className='list-disc mt-2 text-blue-950 font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>TailwindCSS</li>
              <li>Bootstrap</li>
             
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-slate-200 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://liveimages.algoworks.com/new-algoworks/wp-content/uploads/2016/03/05134032/Why-use-ExpressJS-over-NodeJS.jpeg" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center text-center'>Backend:</h1>
            <ul className='list-disc mt-2 text-blue-950 font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Express.js</li>
              <li>Firebase Functions</li>
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-slate-200 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/8960950/og_image/optimized/1015_Next.js_vs._React-_A_Comparative_Tutorial_Illustration_Brief_Social-d04df761f8138010d9d98703e77ce0e9.png" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center text-center'>Frameworks:</h1>
            <ul className='list-disc mt-2 text-blue-950  font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>React.js</li>
              <li>Redux</li>
              <li>Next.js</li>
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-slate-200 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center text-center'>UI/UX Design:</h1>
            <ul className='list-disc mt-2 text-blue-950  font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>Figma</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-slate-200 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center text-center'>Database Management:</h1>
            <ul className='list-disc mt-2 text-blue-950  font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>MongoDB</li>
              <li>Firebase Firestore</li>
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-slate-200 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://img-c.udemycdn.com/course/480x270/3352204_9c9a_20.jpg" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center text-center'>Version Control:</h1>
            <ul className='list-disc mt-2 text-blue-950 font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-slate-200 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://www.freecodecamp.org/news/content/images/2023/03/coverchaat.jpg" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center text-center'>Additional Tools:</h1>
            <ul className='list-disc mt-2 text-blue-950  font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>npm</li>
              <li>APIs</li>
              <li>ChatGPT-3.5</li>
              <li>Postman</li>
              
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-slate-200 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://pmtips.net/Portals/0/project-deployment-phase.jpg" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center te text-center'>Deployment and Hosting:</h1>
            <ul className='list-disc mt-2 text-blue-950  font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>Netlify</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='border-0 h-0.5 bg-slate-200 m-8'/>
    </div>
  );
};

export default Skills;

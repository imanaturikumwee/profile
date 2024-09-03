import React from 'react';
import Skill from './Skill';
import Project from './Project';
import Footer from './Footer';
import Link from './Link';
import data from '../data.json'
function Home() {
  return (
    <div className=' bg-dark-black h-fit w-full'>
        <div className='mx-[2rem] md:mx-[6rem] '>
            <header className=' flex flex-col md:flex-row md:justify-between' >
               <div className=' font-bold text-[24px] leading-[32px] tracking-[-0.33px] text-white text-center py-8'>
                <span>EMMANUEL </span>
                </div>
                <div className=''>
                    <nav className=' bg-ie-bg bg-cover h-[720px] bg-[65%] p-4 md:p-8 rounded-md justify-center md:mx-[0] md:w-[350px] md:h-[720px] lg:w-[445px] lg:h-[600px] flex md:justify-end'>
                        <Link/>
                    </nav>
                    <div className='text-white md:absolute md:top-[100px] md:left-[6rem] md:w-[30%] lg:w-[50%] text-center md:text-left '>
                        <p className='md:text-[56px] text-[40px] leading-[40px] md:leading-[72px] font-bold md:tracking-[-2.5px] tracking-[-1.14px] my-6'>
                            Hi there! I'm <a href="https://www.linkedin.com/in/emmanuelimanaturikumwe/" target="_blank" rel="noopener noreferrer"><span className=' underline decoration-light-green'>Emmanuel Imanaturikumwe</span></a>,
                        </p>
                        <p className='text-[16px] font-normal leading-[26px] mt-[80px]'>
                        I am an enthusiastic front-end developer with a passion for creating immersive and 
                        user-friendly digital experiences. I'm on a journey to turn my love for  
                        coding and design into impactful web solutions.
                        </p>
                        <div className='mt-[50px]'>
                            <button>
                            <a href="https://x.com/ie_togetha" target="_blank" rel="noopener noreferrer" className=' w-4'>Contact me <hr className=' text-light-green'/></a>
                            </button>
                        
                        </div>
                        
                    </div>
                </div>
            </header>
            <main className=' my-8'>
                <hr className=' text-white' />
                <div className='grid  grid-cols-1 text-center md:text-left md:grid-cols-2 lg:grid-cols-3 justify-between'>
                    {
                        data.map((skill, index)=>{
                            return (
                                <div key={index}>
                                    <Skill skill={skill.language} experience={skill.Experience} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className=' flex justify-between text-white my-[3rem]'>
                    <h1 className='text-[40px] leading-[40px] font-bold tracking-[-1.14px]'>Projects</h1>
                    <button> Contact me <hr className=' text-light-green'/> </button>
                </div>
                <div className='grid  grid-cols-1 text-center md:text-left md:grid-cols-2 lg:grid-cols-2 gap-5  justify-between'>
                    <Project projectImage={'./assets/profile.png'} projectName={"Portifolio"} languages={"HTML & CSS"} height={70}/>
                    <Project projectImage={'./assets/eCommerce.png'} projectName={"E-Commerce Web App"} languages={"HTML, CSS, Tailwind.CSS, JavaScript & React.js"} height={70}/>
                    <Project projectImage={'./assets/clock.png'} projectName={"Timer Web App"} languages={"HTML, SASS & React.js"} height={80}/>
                    <Project projectImage={'./assets/game.png'} projectName={"Game Web App"} languages={"HTML, CSS JavaScript"} height={80}/>
                </div>
            </main>
            
        
        </div>
        <Footer/>
    </div>
  )
}

export default Home

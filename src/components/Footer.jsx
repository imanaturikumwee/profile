import React from 'react'
import Link from './Link'
function Footer() {
  return (
    <div className='text-white bg-light-black px-[2rem] md:px-[6rem] py-[2rem] '>
        <div className=' flex flex-col md:flex-row md:justify-between '>
            <div className=' md:w-[35%]'>
                <h1 className=' mb-8 font-bold text-[40px] leading-[40px] tracking-[-0.33px]'>Contact</h1>
                <p>I'm excited to connect with fellow developers, designers, 
                    and anyone who shares a passion for web development. Let's 
                    exchange ideas, share experiences, and work together
                </p>
            </div>
            <form action="" method="post" className=' text-white md:w-[40%]' >
                <input type="text" name="name" id="name" placeholder='Name' className=' block mb-2 bg-light-black border-dark-gray border-b-[1px] px-4 py-2 w-[100%]'  /> 
                
                <input type="text" name="email" id="email" placeholder='Email'  className=' block my-2 bg-light-black border-dark-gray border-b-[1px] px-4 py-2 w-[100%]' />
                <textarea name="massage" id="massage" placeholder='Massage' className=' my-2 bg-light-black border-dark-gray border-b-[1px] px-4 py-2 w-[100%]'></textarea>
                <div className='flex justify-end'>
                    <button>Send message <hr className=' text-light-green mb-4'/></button>
                </div>
            </form>
        </div>
        <hr  className=' my-8'/>
        <div className=' flex justify-between'>
            <h1 className=' w-[30%]'>Emmanuel</h1>
            <Link/>
        </div>
        <div className=' text-center'>
            <p> Ie.Together © 2024 All Rights Reserved </p>
        </div>
      
    </div>
  )
}

export default Footer

import React from 'react'

function Project({projectImage, projectName, languages, height}) {
  return (
    <div className=' text-white md:w-[100%] md:h-[300px] lg:h-[487px] '>
        <img src={projectImage} alt=""  className={` md:h-[70%] lg:h-[${height}%] md:w-[100%]  rounded-md`}/>
        <h1 className=' my-4'>{projectName}</h1>
        <h3>{languages}</h3>
      
    </div>
  )
}

export default Project

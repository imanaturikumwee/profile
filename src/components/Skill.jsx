import React from 'react'

function Skill({skill, experience, key}) {
  return (
    <div className=' text-white my-4'>
        <h1 className=' text-[28px]  leading-[40px]  font-bold  md:tracking-[-1.5px]'>{skill}</h1>
        <p>{experience} Years of experience</p>
      
    </div>
  )
}

export default Skill

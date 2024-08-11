import React from 'react';
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { SiFrontendmentor, SiJavascript } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";


function Link() {
  return (
    <div className=' flex justify-between gap-[1rem] md:justify-end mb-[3rem] w-[30%]' >
        <a href="http://" target="_blank" rel="noopener noreferrer"><VscGithub size={15}  /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><SiFrontendmentor size={15} /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={15} /></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> <BsTwitterX size={15} /></a>
        
    </div>
)
}

export default Link

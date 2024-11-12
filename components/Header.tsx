"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../public/assets/owais_logo.png'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import { CgClose, CgMenuRight } from "react-icons/cg";


const Header = () => {
  const [isoOpen, setisoOpen] = useState(false);

  function handleLinkClick() {
    setisoOpen(false); 
    }

  function getMenuClassNames(){
    let menuClasses = [];

    if(isoOpen){
      menuClasses = [
        	"flex", "absolute", "w-full", "mt-2","p-8", "gap-10", "flex-col", "left-0", "top-[60px]", "bg-background", "z-50"
      ];
    } else {
      menuClasses = [
        "hidden", "md:flex", "md:ml-auto", "flex-wrap", "items-center", "justify-center"
      ];
    }
    return menuClasses.join(" ")
  }
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row z-">
    <Link href={"/"} className="flex mb-4 md:mb-0">
        <Image src={Logo} width={80} height={40} alt={'logo'}/>
    </Link>

    <nav className={getMenuClassNames()}>
      <Link href={"/"} onClick={handleLinkClick} className="mr-5 text-white text-base hover:text-accent">HOME</Link>
      <Link href={"/about"} onClick={handleLinkClick} className="mr-5 text-white text-base hover:text-accent">ABOUT</Link>
      <Link href={"/projects"} onClick={handleLinkClick} className="mr-5 text-white text-base hover:text-accent">PROJECTS</Link>
      <Link href={"/skills"} onClick={handleLinkClick} className="mr-5 text-white text-base hover:text-accent">SKILLS</Link>
      <Link href={"/contact"} onClick={handleLinkClick} className="mr-5 text-white text-base hover:text-accent">CONTACT</Link>

      <button className="group inline-flex items-center font-bold bg-accent text-white border-0 py-2 px-4 focus:outline-none duration-500 hover:bg-white hover:text-accent rounded-full text-base mt-4 md:mt-0">
    <Link href={"/contact"} onClick={handleLinkClick}>HIRE ME</Link>
    <FaArrowRight className="pl-3 text-2xl"/> 
    </button>
    </nav>
    <button className='md:hidden flex items-center justify-end -mt-12 text-2xl text-gray-600 hover:text-accent' onClick={()=>{setisoOpen(!isoOpen);}}>
      {isoOpen ? <CgClose/> : <CgMenuRight />}
    </button>
  </div>
</header>
  )
}

export default Header
import Image from 'next/image'
import React from 'react'
import Logo from '../public/assets/owais_logo.png'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";


const Header = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={"/"} className="flex mb-4 md:mb-0">
        <Image src={Logo} width={80} height={40} alt={'logo'}/>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 text-white hover:text-accent">HOME</Link>
      <Link href={"/about"} className="mr-5 text-white hover:text-accent">ABOUT</Link>
      <Link href={"/projects"} className="mr-5 text-white hover:text-accent">PROJECTS</Link>
      <Link href={"/skills"} className="mr-5 text-white hover:text-accent">SKILLS</Link>
      <Link href={"/contact"} className="mr-5 text-white hover:text-accent">CONTACT</Link>
    </nav>
    
    <button className="inline-flex items-center font-bold bg-accent text-white border-0 py-2 px-4 focus:outline-none duration-500 hover:bg-white hover:text-accent rounded-full text-base mt-4 md:mt-0">
    <Link href={"/contact"}>HIRE ME</Link>
    <span className="pl-3"><FaArrowRight /></span>  
    </button>
    
  </div>
</header>
  )
}

export default Header
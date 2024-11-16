import React from "react";
import owais from "../public/assets/Owais Abdullah.png";
import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";
import { FaChevronRight } from "react-icons/fa";
import { RiNextjsLine, RiWordpressLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 overflow-hidden">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:w-3/5">
          <h2 className="title-font sm:text-lg text-base mb-4 font-montserrat text-text">
            WELCOME TO MY WORLD
          </h2>
          <h1 className=" sm:text-5xl text-4xl mb-4 font-montserrat font-bold text-text ">
            Hi, I&apos;m <span className="text-accent">Owais Abdullah</span>
            <br />
            {"a "}
            <span>
              <Typewriter
                words={[
                  "Web Developer.",
                  "Digital Marketer.",
                  "Professional Coder.",
                  "AI Architect.",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mb-8 leading-relaxed font-poppins">
            I craft high-performing WordPress websites, optimize them for search
            engines, and develop data-driven digital marketing strategies - all
            powered by my passion for AI. Let&apos;s discuss how I can help your
            business flourish online!
          </p>
          <div className="flex justify-center group">
            <Link href="#about" className="scroll-smooth duration-300">
            <button className="inline-flex text-white bg-accent border-0 py-2 focus:outline-none hover:bg-text hover:text-accent rounded-full font-medium text-lg px-8">
              About Me
              <span className="pl-3 pt-2 group-hover:rotate-90 group-hover:pl-6 group-hover:-mt-2 duration-300">
                <FaChevronRight />
              </span>
            </button>
            </Link>
          </div>
          <p className="mt-8 mb-2 font-bold md:ml-4">
              BEST SKILL ON:
          </p>
          <div className="container flex flex-row items-center gap-3 justify-center md:justify-start ">
            <div
              title="Wordpress"
              className=" shadow-lg opacity-50 shadow-slate-700 rounded-lg bg-gray-900 p-3 text-2xl text-text hover:text-black hover:bg-gray-600"
            >
            <RiWordpressLine />
            </div>
            <div
              title="TypeScript"
              className=" shadow-lg opacity-50 shadow-slate-700 rounded-lg bg-gray-900 p-3 text-2xl text-text hover:text-black hover:bg-gray-600"
            >

            <TbBrandTypescript /> 
            </div>
            <div
              title="Next JS"
              className=" shadow-lg opacity-50 shadow-slate-700 rounded-lg bg-gray-900 p-3 text-2xl text-text hover:text-black hover:bg-gray-600"
            >
            <RiNextjsLine />
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg md:w-2/5 sm:-ml-16 sm:pt-0 relative lg:-mt-8 xl:-mt-14 md:ml-20 md:-mt-52 ">
          <div className="-mt-56 -mr-[155px] w-11/12 h-4/5 shadow-xl opacity-30 shadow-slate-500 rounded-xl absolute top-72 right-40 z-0 bg-black md:w-11/12 md:h-3/5 md:-mr-28 md:-mt-20 xs:h-3/4 xs:-mt-48 sm:-mt-40 sm:-mr-40 sm:w-10/12 lg:w-11/12 lg:-mr-40 xl:w-10/12 xl:-mr-30 xl:h-4/6 xl:-mt-24"></div>
          <Image
            src={owais}
            className="relative object-cover object-center -mt-16 xs:-mt-14 z-10 md:mt-32  md:-ml-10 sm:-mt-9 sm:ml-12 lg:ml-2 lg:mt-6 xl:ml-16 xl:mt-8"
            width={400}
            height={100}
            loading="lazy"
            placeholder="blur"
            alt="hero"
          />
        </div>
      </div>
      <div className="w-11/12 h-px bg-gray-950 opacity-80 justify-center flex m-auto mt-10"></div>
    </section>
  );
};

export default Hero;

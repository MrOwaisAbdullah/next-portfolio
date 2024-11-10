import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const About = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 grid content-center">
    <div>
    <h3 className="text-base text-accent font-medium sm:text-lg">
            About Me!
          </h3>
    <h2 className="sm:text-3xl text-2xl text-text font-medium title-font mb-2 md:w-2/5">
    Crafting Websites & Fueling Growth with AI
    </h2>
    </div>
    <div className="md:-mt-20 md:w-3/5 md:pl-6 justify-self-end">
      <p className="leading-relaxed text-base text-gray-500">
      I&apos;m Owais, an enthusiastic developer, digital marketing strategist, and aspiring AI integrator. <br/>
      My passion lies in crafting high-performing websites, optimizing them for search engines, and developing data-driven digital marketing strategies - all powered by a commitment to continuous learning and exploration of AI&apos;s potential.
      </p>
      <div className="flex md:mt-4 mt-6">
        <Link href="/contact">
        <button className="inline-flex font-semibold text-white bg-accent border-0 py-2 px-4 focus:outline-none hover:bg-white hover:text-accent rounded-full">
          Contact Me
        </button>
        </Link>
        <Link href={"#"} className="group text-accent-500 inline-flex items-center ml-4">
          Learn More
          <span className='group-hover:rotate-90 ml-5 duration-300 group-hover:text-accent'><FaArrowRight /></span>
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default About
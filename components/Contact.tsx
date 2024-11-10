import Image from "next/image";
import React from "react";
import Link from "next/link";
import contactimg from "../public/assets/contact.png"

const Contact = () => {
  return (
    <section className="text-gray-400 body-font grid relative">
      <div className="container px-5 py-24 mx-auto flex justify-center gap-5 sm:justify-evenly sm:flex-nowrap flex-wrap">
        <div className=" md:w-1/3 w-11/12 justify-center bg-zinc-900 opacity-90 rounded-lg overflow-hidden px-5 py-10">
        <Image src={contactimg} alt="contact" className="rounded-md -mt-4 mb-5 h-52">
        </Image>
        <h2 className="font-semibold text-text text-2xl sm:5xl">
              OWAIS ABDULLAH
            </h2>
            <p className="mt-1">
            AI-powered WordPress Developer & Digital Marketer <br />
            I am available for freelance work. Connect with me via Email or call.
            </p>
            <h2 className="font-semibold text-text text-xs mt-4">
              ADDRESS
            </h2>
            <p className="mt-1">
              Karachi, Pakistan
            </p>
            <h2 className="title-font font-semibold text-text text-xs mt-4">
              EMAIL
            </h2>
            <Link href="mailto:owais@oneklickdigi.com" className="text-accent leading-relaxed">owais@oneklickdigi.com
            </Link>
            <h2 className="title-font font-semibold text-text text-xs mt-4">
              PHONE
            </h2>
            <Link href={"tel:+923262283140"}>
            <p className="leading-relaxed">+923262283140</p>
            </Link>
        </div>
        <div className="md:w-3/5 bg-background flex flex-col md:ml-auto w-5/6 md:py-8 mt-8 md:mt-0 font-montserrat">
          <h2 className="text-text text-2xl mb-1 font-semibold title-font">
            CONNECT WITH ME
          </h2>
          <div className="relative mb-4 ">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full shadow-inner shadow-zinc-900 bg-zinc-800 rounded border border-gray-900 focus:border-accent focus:ring-1 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full shadow-inner shadow-zinc-900 bg-zinc-800 rounded border border-gray-900 focus:border-accent focus:ring-1 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full shadow-inner shadow-zinc-900 bg-zinc-800 rounded border border-gray-900 focus:border-accent focus:ring-1 h-52 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="text-white bg-accent border-0 py-4 px-6 focus:outline-none hover:bg-text hover:text-accent hover:scale-105 duration-300 ease-out rounded text-md font-semibold">
            SEND MESSAGE
          </button>
          <p className="text-xs text-center text-gray-500 mt-3">
          Send me a message, and I&apos;ll contact you shortly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

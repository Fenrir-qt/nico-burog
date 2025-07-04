import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import self from "../assets/images/Mirror.png";
import Header from "../components/Header";

export default function LandingPage() {
  const [text] = useTypewriter({
    words: [" Web Developer.", " App Developer.", " Cybersecurity Specialist."],
    loop: true,
    typeSpeed: 30,
  });

  const [welcome] = useTypewriter({
    words: ["Feel free to browse my portfolio."],
    loop: false,
    typeSpeed: 50,
    deleteSpeed: 0,
    delaySpeed: 2000,
  });
  return (
    <>
      <title>Home</title>
      <div className="min-h-screen bg-gradient-to-r from-gray-500 to-black flex flex-col">
        <Header />
        <div className="flex flex-col md:flex-row items-center justify-center flex-grow px-10 text-white text-3xl font-bold">
          <div className="md:flex-1 flex justify-center order-first md:order-last mb-10 md:mb-0 md:mt-0 mt-20 ">
            <div className="w-75 md:w-80 lg:w-150 h-20 md:h-50 rounded-lg flex justify-center items-center">
              <img src={self} alt="me" className="rounded-xl object-contain md:ml-40 ml-0 opacity-80" />
            </div>
          </div>
          <div className="md:flex-1 text-center md:text-left md:ml-20 ml-0 md:mt-0 mt-10">
            <div className="text-5xl">
              Hi There! My name is
              <span className="text-gray-400 text-shadow-lg mb-5">
                {" "}
                Nico Angelo.
              </span>
            </div>
            <div className="mt-4">
              I am an aspiring
              <span className="italic text-sky-300">
                {text}
                <Cursor cursorStyle="_" />
              </span>
              <br />
              <span className="text-[20px] block mt-8 md:mt-15 mb-20 md:mb-10 text-slate-300">
                {welcome}
                <Cursor cursorStyle=" " />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

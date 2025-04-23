import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import self from "../assets/images/me.jpg";
import Header from "../components/Header";

export default function LandingPage() {
  const [text] = useTypewriter({
    words: [" Full-Stack Developer.", " Web Developer.", " App Developer."],
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
      <div className="min-h-screen bg-gradient-to-r from-gray-500 to-black">
        <Header />
        <div className="flex flex-col justify-start items-center px-10 text-white text-3xl font-bold">
          <div className="relative w-75 md:w-80 lg:w-150 h-20 md:h-50 rounded-lg bg-white flex justify-center items-center mt-40 mb-15 lg:mb-25">
            <img
              src={self}
              alt="me"
              className="rounded-xl object-contain"
            />
          </div>
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
            <span className="text-center text-[20px] block mt-8 md:mt-15 mb-20 md:mb-10text-slate-300">
              {welcome}
              <Cursor cursorStyle=" " />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

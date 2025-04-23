import { useTypewriter, Cursor } from "react-simple-typewriter";
import Header from "../components/Header";

import githubImage from "../assets/images/github.png";
import linkedinImage from "../assets/images/linkedin.png";
import gmailImage from "../assets/images/gmail.png";

export default function Contact() {
  const [text] = useTypewriter({
    words: [
      "These are the social media connections through which you can reach me.",
    ],
    loop: 1,
    typeSpeed: 30,
    deleteSpeed: 0,
    delaySpeed: 2000,
  });

  return (
    <>
      <title>Contact</title>
      <div className="min-h-screen bg-gradient-to-r from-gray-500 to-black">
        <Header />
        <h1 className="text-center text-3xl mt-7 text-white font-bold -mb-2">
          Social Media Links
        </h1>
        <div className="flex flex-col justify-start mt-20 items-center gap-10 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative w-75 md:w-80 lg:w-100 h-50 p-4 rounded-lg bg-white flex justify-center items-center hover:bg-slate-200 cursor-pointer">
              <a href="https://github.com/Fenrir-qt">
                <img
                  src={githubImage} 
                  alt="GitHub"
                  className="w-60 h-60 object-contain"
                />
              </a>
            </div>
            <div className="relative w-75 md:w-80 lg:w-100 h-50 p-4 rounded-lg bg-white flex justify-center items-center hover:bg-slate-200 cursor-pointer">
              <a href="https://ph.linkedin.com/in/nico-angelo-burog-42199235b">
                <img
                  src={linkedinImage} 
                  alt="LinkedIn"
                  className="w-60 h-60 object-contain"
                />
              </a>
            </div>
          </div>
          <div className="relative w-75 md:w-80 lg:w-100 h-50 p-4 rounded-lg bg-white flex justify-center items-center hover:bg-slate-200 cursor-pointer">
            <a href="mailto:fenrirqtpie@gmail.com">
              <img
                src={gmailImage} 
                alt="Gmail"
                className="w-60 h-60 object-contain"
              />
            </a>
          </div>
          <span className="text-white text-center mt-2 w-80 md:w-100 md:mt-10 mb-5 italic">
            {text}
            <Cursor cursorStyle=" " />
          </span>
        </div>
      </div>
    </>
  );
}

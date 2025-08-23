import "bootstrap-icons/font/bootstrap-icons.css";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { useDarkMode } from "../context/DarkModeContext";
import { motion } from "framer-motion";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Header from "../components/Header";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import profileImage from "../assets/images/me.jpg";

function Hero() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <title>Home</title>
      <div
        className={`bg-neutral-50 min-h-screen transition duration-500 transform ease-in-out ${
          isDarkMode ? "dark-mode-header" : ""
        }`}
      >
        {/*Particles Component*/}
        <ParticlesBackground />

        {/*Header Component*/}
        <Header />

        {/*Hero Content*/}
        <motion.div
          className="flex flex-col justify-center items-center min-h-[calc(90vh-80px)] relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: "0.2" }}
        >
          <div className="w-50 h-50">
            <LazyLoadImage
              src={profileImage}
              alt="My Picture"
              effect="blur"
              className="w-full h-full rounded-full object-cover shadow-xl"
              wrapperClassName="w-full h-full"
            />
          </div>
          <div className="text-2xl lg:text-3xl mt-5 text-center">
            <div>
              <span>Hi! I'm </span>
              <span className="font-bold text-sky-600">Nico Angelo</span>
            </div>
            <div className="text-xl lg:text-2xl mt-2 lg:mt-5 ml-5 mr-5 sm:ml-0 sm:mr-0">
              <p>
                A developer in the making, crafting web & mobile apps,
                <br className=" hidden sm:inline" />
                with a hacker's curiosity for security. On a mission to
                merge&nbsp;
                <br className=" hidden sm:inline" />
                creativity with security one project at a time.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="text-base bg-sky-600 hover:bg-sky-900 hover:text-white transform transition duration-250 text-white pr-5 pl-5 pt-3 pb-3 rounded-3xl mt-5 cursor-pointer flex justify-center items-center">
                <a href="../sample.pdf" download>
                  Download CV
                </a>
                <FaArrowAltCircleDown className="ml-1.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;

import Header from "../components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { useDarkMode } from "../context/DarkModeContext";
import { motion } from "framer-motion";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import VectorImg from "../assets/images/vector.png";

function Contact() {
  const { isDarkMode } = useDarkMode();

  const Socials = [
    {
      name: "Gmail",
      icon: <SiGmail className="mr-3" />,
      link: "mailto:fenrirqtpie@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="mr-3" />,
      link: "https://ph.linkedin.com/in/nico-angelo-burog-42199235b",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="mr-3" />,
      link: "https://github.com/Fenrir-qt",
    },
  ];

  return (
    <>
      <title>Contact</title>
      <div
        className={`bg-neutral-50 min-h-screen transition duration-500 transform ease-in-out ${
          isDarkMode ? "dark-mode-header" : ""
        }`}
      >
        {/*Particles Component*/}
        <ParticlesBackground />

        {/*Header Component*/}
        <Header />

        {/*Content*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: "0.2" }}
          className="max-w-7xl mx-auto px-8 py-5 relative z-10"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-center mb-5 lg:mb-7">
            Let's Connect!
          </h1>
          <p className="text-lg text-center px-0 lg:px-auto mb-5 lg:mb-7">
            Got an exciting project in mind? Let's bring it to life! Whether
            you're looking for development, design, consulting,
            <br />
            or just brainstorming ideas, I'd love to help. I'm responsive,
            detail-oriented, and committed to delivering high-quality results.
          </p>

          <div className="flex flex-wrap md:gap-8 justify-center items-start">
            <div className="w-180 h-150 mr-5 hidden md:block sm:block sm:mb-5 flex-shrink-0">
              <LazyLoadImage
                src={VectorImg}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
                effect="blur"
                wrapperClassName="w-full h-150"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 flex-grow md:max-w-2xs">
              {Socials.map((socialLinks) => (
                <a
                  key={socialLinks.name}
                  href={socialLinks.link}
                  className="flex text-3xl font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    key={socialLinks.name}
                    className="w-70 h-40 border backdrop-blur-xs shadow-2xl mx-auto flex justify-center items-center rounded-2xl cursor-pointer hover:scale-75 transform transition ease-out duration-350"
                  >
                    <span>{socialLinks.icon}</span>
                    <span>{socialLinks.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;

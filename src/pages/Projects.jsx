import Header from "../components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { useDarkMode } from "../context/DarkModeContext";
import { GitBtn } from "../components/GithubBtn";
import { LinkBtn } from "../components/LinkBtn";
import { FigmaBtn } from "../components/FigmaBtn";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import CozyControl from "../assets/images/cozy_control.png";
import GasLawSys from "../assets/images/gas_law.png";
import GeoHazard from "../assets/images/geo_hazard.png";
import FoodSystem from "../assets/images/pansiteria.png";
import TechTrolley from "../assets/images/techtrolley.png";
import UpskillAI from "../assets/images/upskill.png";
import Weatherly from "../assets/images/weatherly.png";
import Portfolio from "../assets/images/portfolio.png";

function Projects() {
  const { isDarkMode } = useDarkMode();

  const flexContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  const cardMotion = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const Projects = [
    {
      title: "Personal Portfolio",
      description:
        "A responsive and interactive portfolio showcasing my skills, projects, and experiences as a student. Includes dynamic animations and easy access to my contact information. Built with ReactJS and Tailwind CSS.",
      image: Portfolio,
      link: "https://nico-burog.vercel.app/",
      github: "https://github.com/Fenrir-qt/nico-burog",
    },
    {
      title: "Weatherly",
      description:
        "Search for the current weather in any location using the WeatherAPI. This project demonstrates basic API integration, DOM manipulation, and responsive layout techniques.",
      image: Weatherly,
      link: "https://weatherly-seven-rho.vercel.app/",
      github: "https://github.com/Fenrir-qt/weatherly",
    },
    {
      title: "Gas Law System",
      description:
        "The Gas Law System is a console-based application written in C++ that allows users to calculate various properties of gases using fundamental gas laws. It provides an interactive interface to solve for missing variables. ",
      image: GasLawSys,
      github: "https://github.com/Fenrir-qt/gas-law-calculator",
    },
    {
      title: "Food Ordering System",
      description:
        "A straightforward Python-based CLI food ordering system focused on pansiterias and lomians. This final project was built using Object-Oriented Programming (OOP) principles in Python. It features a text-based menu, order management, and simple cart logic.",
      image: FoodSystem,
      github: "https://github.com/Fenrir-qt/food-ordering-system",
      customClass: "object-scale-down",
    },
    {
      title: "Techtrolley",
      description:
        "TechTrolley is a modern e-commerce UI design concept focused on IoT devices and cutting-edge tech products. It delivers a streamlined shopping experience with intuitive navigation, smart filters, and responsive product grids.",
      image: TechTrolley,
      figma:
        "https://www.figma.com/proto/qzsOA06Ot9n4wkwlPssheb/ABC-E-Commerce-Draft?node-id=0-1&t=YxMgqnh8SluNSa7j-1",
    },
    {
      title: "Upskill AI",
      description:
        "Upskill AI is a modern UI design concept focused on helping users learn and enhance their tech skills and other related fields. The interface features a clean, intuitive layout that promotes easy navigation, interactive learning paths, progress tracking, and personalized recommendations.",
      image: UpskillAI,
      figma:
        "https://www.figma.com/proto/MitCkQXO3hTNGVdFC4tWme?node-id=0-1&t=XzwaLsGqARAndBDV-6",
    },
    {
      title: "Geohazard Sentinel",
      description:
        "The GeoHazard Sentinel project is a GIS project used to map and mitigate vulnerable areas. This project is written in HTML, CSS, Javascript and utilizes ExpressJS in the backend. This is our final group project in our 3rd Year 1st Semester Course - Web Systems and Technologies.",
      image: GeoHazard,
      customClass: "object-scale-down",
    },
    {
      title: "CozyControl",
      description:
        "A mobile application linked to an IoT device that can provide sensor readings of electricity consumption, light levels, and temperature by incorporating relays that control both lights and sockets. This is our capstone project, created throughout our third year's second semester and fourth year's first semester. This project is written in Flutter and uses Firebase as its database.",
      image: CozyControl,
    },
  ];

  return (
    <>
      <title>Projects</title>
      <div
        className={`bg-neutral-50 min-h-screen transition duration-500 pb-5 transform ease-in-out ${
          isDarkMode ? "dark-mode-header" : ""
        }`}
      >
        {/*Particles Component*/}
        <ParticlesBackground />

        {/*Header Component*/}
        <Header />

        {/*Project Content*/}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: "0.2" }}
          >
            <h1 className="text-center text-3xl sm:text-5xl mt-5 font-bold relative z-10">
              My Projects
            </h1>

            <h2 className="text-center mt-5 mx-10 relative z-10">
              Here are some of the projects I've been involved in, including
              collaborations with others.
            </h2>

            <motion.div
              className="flex flex-wrap justify-center items-center mt-10 gap-5 relative z-10"
              variants={flexContainer}
              initial="hidden"
              animate="show"
            >
              {Projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`w-80 h-97 relative bg-slate-100 shadow-lg ${
                    isDarkMode ? "card-background" : ""
                  } transition duration-500 transform ease-in-out`}
                  variants={cardMotion}
                >
                  <LazyLoadImage
                    src={project.image}
                    alt={project.title}
                    effect="blur"
                    className={`bg-stone-500 w-full h-50 object-cover ${
                      project.customClass || ""
                    }`}
                    wrapperClassName="w-full h-50"
                  />

                  <div
                    className={`text-center text-black p-2 font-semibold ${
                      isDarkMode ? "card-font-color" : ""
                    } transition duration-500 transform ease-in-out`}
                  >
                    {project.title}
                    <p className="text-xs font-normal mt-1 ml-2 mr-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <LinkBtn />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <GitBtn />
                      </a>
                    )}
                    {project.figma && (
                      <a href={project.figma} target="_blank" rel="noopener noreferrer">
                        <FigmaBtn />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Projects;

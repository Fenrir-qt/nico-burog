import React, { useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import geohazardImage from "../assets/images/geohazard.png";
import todoImage from "../assets/images/todo.png";
import portfolioImage from "../assets/images/portfolio.png";
import foodsystemImage from "../assets/images/foodsystem.png";
import cozycontrolImage from "../assets/images/cozycontrol.png";

const projects = [
  {
    title: "GeoHazard Sentinel",
    description:
      "The GeoHazard Sentinel project is a GIS project used to map and mitigate vulnerable areas. This project is written in HTML, CSS, Javascript and utilizes ExpressJS in the backend. This is our final group project in our 3rd Year 1st Semester Course - Web Systems and Technologies.",
    image: geohazardImage,
  },
  {
    title: "Simple To-Do App",
    description:
      "A simple, interactive, and responsive web application for a to-do list that was created with HTML, CSS, and JavaScript. Tasks can be added, edited, and deleted with this application, which uses the browser's localStorage for persistent storage.",
    image: todoImage,
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive and interactive portfolio showcasing my skills, projects, and experiences as a developer. Includes dynamic animations, swipeable carousels, and easy access to my contact information. Built with React and Tailwind CSS.",
    image: portfolioImage,
  },
  {
    title: "Food Ordering System",
    description:
      "A straightforward Python-based CLI (Command Line Interface) food ordering system.",
    image: foodsystemImage,
  },
  {
    title: "CozyControl Application",
    description:
      "A mobile application linked to an IoT device that can provide sensor readings of electricity consumption, light levels, and temperature by incorporating relays that control both lights and sockets. This is our capstone project, created throughout our third year's second semester and fourth year's first semester. This project is written in Flutter and uses Firebase as its database. We also used Arduino for the development of the IoT device.",
    image: cozycontrolImage,
  },
];

export default function Projects() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <>
      <title>Projects</title>
      <div className="min-h-screen bg-gradient-to-r from-gray-500 to-black">
        <Header />
        <div className="flex flex-col justify-start mt-20 items-center gap-10 h-full relative">
          <i
            onClick={handlePrev}
            className="bi bi-arrow-left-circle-fill absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-white cursor-pointer hover:text-blue-500 z-10 ml-70 hidden md:block"
          ></i>
          <i
            onClick={handleNext}
            className="bi bi-arrow-right-circle-fill absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-white cursor-pointer hover:text-blue-500 z-10 mr-70 hidden md:block"
          ></i>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={50}
            slidesPerView={1}
            className="w-75 md:w-300"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-auto bg-white rounded-xl p-4 flex flex-col items-center gap-4">
                  <div className="flex justify-center items-center w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-50 object-cover rounded-lg md:h-100"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-center w-full">
                    <h2 className="text-xl font-bold text-gray-800 text-center">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 mt-2 text-center">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <span className="mt-10" />
        </div>
      </div>
    </>
  );
}

import React from "react";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import htmlImage from "../assets/images/html.png";
import cssImage from "../assets/images/css.png";
import jsImage from "../assets/images/js.png";
import tailwindImage from "../assets/images/tailwind.png";
import bootstrapImage from "../assets/images/bootstrap.png";
import reactImage from "../assets/images/react.png";
import flutterImage from "../assets/images/flutter.png";

import laravelImage from "../assets/images/laravel.png";
import expressImage from "../assets/images/expressjs.png";

import arduinoImage from "../assets/images/arduino.png";
import blynkImage from "../assets/images/blynk.png";

import mysqlImage from "../assets/images/mysql.png";
import postgresqlImage from "../assets/images/postgresql.png";
import firebaseImage from "../assets/images/firebase.png";

const frontendImages = [
  { src: htmlImage, alt: "HTML" },
  { src: cssImage, alt: "CSS" },
  { src: jsImage, alt: "JavaScript" },
  { src: tailwindImage, alt: "Tailwind" },
  { src: bootstrapImage, alt: "Bootstrap" },
  { src: reactImage, alt: "React" },
  { src: flutterImage, alt: "Flutter" },
];

const backendImages = [
  { src: laravelImage, alt: "Laravel" },
  { src: expressImage, alt: "ExpressJS" },
];

const IoTImages = [
  { src: arduinoImage, alt: "Arduino" },
  { src: blynkImage, alt: "Blynk" },
];
const databaseImages = [
  { src: mysqlImage, alt: "MySQL" },
  { src: postgresqlImage, alt: "PostgreSQL" },
  { src: firebaseImage, alt: "Firebase" },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-500 to-black">
      <title>Skills & Experience</title>
      <Header />
      <div className="flex flex-col items-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-85 md:w-150 bg-white rounded-lg shadow-lg p-6 relative mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-5">
              Frontend Development
            </h2>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              autoplay={{ delay: 2500 }}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              className="h-48"
            >
              {frontendImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-50 h-40 mx-auto object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl text-gray-700 cursor-pointer hover:text-blue-500 z-10 hidden md:block">
              <i className="bi bi-arrow-left-circle-fill"></i>
            </button>
            <button className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-gray-700 cursor-pointer hover:text-blue-500 z-10 hidden md:block">
              <i className="bi bi-arrow-right-circle-fill"></i>
            </button>
          </div>
          <div className="w-85 md:w-150 bg-white rounded-lg shadow-lg p-6 relative mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-5">
              Backend Development
            </h2>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".custom-next2",
                prevEl: ".custom-prev2",
              }}
              autoplay={{ delay: 2500 }}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              className="h-48"
            >
              {backendImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-50 h-40 mx-auto object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="custom-prev2 absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl text-gray-700 cursor-pointer hover:text-blue-500 z-10 hidden md:block">
              <i className="bi bi-arrow-left-circle-fill"></i>
            </button>
            <button className="custom-next2 absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-gray-700 cursor-pointer hover:text-blue-500 z-10 hidden md:block">
              <i className="bi bi-arrow-right-circle-fill"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="w-85 md:w-150 bg-white rounded-lg shadow-lg p-6 relative">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-5">
                IoT Development
              </h2>
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  nextEl: ".custom-next3",
                  prevEl: ".custom-prev3",
                }}
                autoplay={{ delay: 2500 }}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                className="h-48"
              >
                {IoTImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-50 h-40 mx-auto object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="custom-prev3 absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl text-gray-700 cursor-pointer hover:text-blue-500 z-10 hidden md:block">
                <i className="bi bi-arrow-left-circle-fill"></i>
              </button>
              <button className="custom-next3 absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-gray-700 cursor-pointer hover:text-blue-500 z-10 hidden md:block">
                <i className="bi bi-arrow-right-circle-fill"></i>
              </button>
            </div>

            <div className="w-85 md:w-150 bg-white rounded-lg shadow-lg p-6 relative">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-5">
                Database Management
              </h2>
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  nextEl: ".custom-next4",
                  prevEl: ".custom-prev4",
                }}
                autoplay={{ delay: 2500 }}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                className="h-48"
              >
                {databaseImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-50 h-40 mx-auto object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="custom-prev4 absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl text-gray-700 cursor-pointer hover:text-blue-500 z-10 hidden md:block">
                <i className="bi bi-arrow-left-circle-fill"></i>
              </button>
              <button className="custom-next4 absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-gray-700 cursor-pointer hover:text-blue-500 z-10 hidden md:block">
                <i className="bi bi-arrow-right-circle-fill"></i>
              </button>
            </div>
          </div>
        </div>
        <span className="mt-10" />
      </div>
    </div>
  );
}

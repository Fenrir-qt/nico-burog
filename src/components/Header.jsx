import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {

  const { isDarkMode, toggleDarkMode } = useDarkMode();
   
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex flex-row items-end p-6 relative">
        <h1 className="text-xl font-bold ml-2 lg:ml-5">Portfolio</h1>
        <div className="flex items-center ml-auto gap-4">
          <button
            className={`text-black md:hidden cursor-pointer lg:mr-5 transform transition-transform duration-300 ease-in-out
            ${
              isMenuOpen ? "-rotate-90" : "rotate-0"
            } transition duration-500 transform ease-in-out ${
              isDarkMode ? "ul-dark-font" : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <i className="bi bi-list text-2xl"></i>
          </button>
          <ul
            className={`text-white sm:text-black transition duration-100 transform ease-in-out ${
              isDarkMode ? "ul-dark-font" : ""
            } cursor-pointer flex flex-col md:flex-row gap-5 
            md:gap-10 absolute md:static top-16 right-5 bg-sky-600 opacity-90 z-50 lg:z-10 lg:opacity-100 md:bg-transparent p-5 
            md:p-0 rounded-md shadow-md md:shadow-none 
            ${isMenuOpen ? "block" : "hidden"} md:flex`}
          >
            <NavLink to="/">
              <li className="ml-auto hover:text-sky-600 transform transition duration-300">
                Home
              </li>
            </NavLink>
            <NavLink to="/projects">
              <li className="hover:text-sky-600 transform transition duration-300">
                Projects
              </li>
            </NavLink>
            <NavLink to="/skills">
              <li className="hover:text-sky-600 transform transition duration-300">
                Skills
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li className="mr-5 hover:text-sky-600 transform transition duration-300">
                Contact
              </li>
            </NavLink>
          </ul>
          <button
            onClick={toggleDarkMode}
            className="cursor-pointer"
          >
            {isDarkMode ? (
              <i className="bi bi-brightness-high hover:text-yellow-500 transform transition duration-300"></i>
            ) : (
              <i className="bi bi-moon hover:text-sky-600 transform transition duration-300"></i>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

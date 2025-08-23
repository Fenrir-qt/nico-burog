import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

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
            <RxHamburgerMenu className="text-2xl" />
          </button>
          <nav
            className={`text-white sm:text-black transition duration-100 transform ease-in-out ${
              isDarkMode ? "ul-dark-font" : ""
            } cursor-pointer flex flex-col md:flex-row gap-5 
            md:gap-10 absolute md:static top-16 right-5 bg-sky-600 opacity-90 z-50 lg:z-10 lg:opacity-100 md:bg-transparent p-5 
            md:p-0 rounded-md shadow-md md:shadow-none 
            ${isMenuOpen ? "block" : "hidden"} md:flex`}
          >
            <NavLink to="/" className="hover:text-sky-600 transform transition duration-300">
                Home
            </NavLink>
            <NavLink to="/projects" className="hover:text-sky-600 transform transition duration-300">       
                Projects
            </NavLink>
            <NavLink to="/skills" className="hover:text-sky-600 transform transition duration-300">  
                Skills
            </NavLink>
            <NavLink to="/contact" className="mr-5 hover:text-sky-600 transform transition duration-300">
                Contact
            </NavLink>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="cursor-pointer"
            name="toggleDarkMode"
          >
            {isDarkMode ? (
              <CiSun className="bi bi-brightness-high hover:text-yellow-500 transform transition duration-300 text-2xl" />
            ) : (
              <IoMoonOutline className="bi bi-moon hover:text-sky-600 transform transition duration-300 text-xl" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

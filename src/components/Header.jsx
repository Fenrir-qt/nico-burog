import { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header-container bg-black sticky top-0 z-50 flex justify-between items-center p-7">
        <h1 className="text-white text-xl">Portfolio</h1>
        <button
          className={`text-white md:hidden cursor-pointer transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "-rotate-90" : "rotate-0"}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <i className="bi bi-list text-2xl"></i>
        </button>
        <ul
          className={`text-white cursor-pointer flex flex-col md:flex-row gap-5 
            md:gap-10 absolute md:static top-16 right-5 bg-black md:bg-transparent p-5 
            md:p-0 rounded-md shadow-md md:shadow-none 
            ${
            isMenuOpen ? "block" : "hidden"
          } md:flex`
        }
        >
          <NavLink to="/">
            <li className="hover:text-gray-600">Home</li>
          </NavLink>
          <NavLink to="/experience">
            <li className="hover:text-gray-600">Experience</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="hover:text-gray-600">Contact</li>
          </NavLink>
          <NavLink to="/projects">
            <li className="hover:text-gray-600">Projects</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default Header;

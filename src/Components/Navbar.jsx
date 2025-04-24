import React, { useState, useRef, useEffect } from "react";
import menuIcon from "../Images/gg_menu-right.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [textcolor, setTextcolor] = useState(0);
  const navMenu = ["Home", "About", "Services", "Portfolio"];
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTextColor = (index) => {
    setTextcolor(index);
    setIsMobileMenuOpen(false);
  };

  const handleNavLinksChange = () => {
    setTextcolor(0);
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full shadow-md bg-white">
      <div className="flex items-center justify-between px-6 py-4 md:h-[70px] md:px-[90px]">
        <div>
          <Link to="/portfolio-website">
            <h1
              onClick={handleNavLinksChange}
              className="text-[28px] font-semibold font-sans text-[#0C7FB0] md:text-[35px] cursor-pointer"
            >
              Portfolio
            </h1>
          </Link>
        </div>

        
        <nav className="hidden md:flex md:items-center md:gap-9">
          {navMenu.map((item, index) => (
            <Link
              key={index}
              to={`${index === 0 ? "/portfolio-website" : `/${item.toLowerCase()}`}`}
              className={`transition-all duration-[0.3s] cursor-pointer ${
                textcolor === index
                  ? "text-[#0C7FB0] font-bold text-2xl"
                  : "text-gray-700"
              } hover:text-[#0C7FB0]`}
            >
              <div onClick={() => handleTextColor(index)}>{item}</div>
            </Link>
          ))}
          <Link to="/contactme">
            <button className="bg-[#0C7FB0] text-white px-4 py-2 rounded-md hover:bg-[#095a87] transition duration-300">
              Contact Me
            </button>
          </Link>
        </nav>

        
        <div className="md:hidden" onClick={toggleMobileMenu}>
          <img
            src={menuIcon}
            alt="menu-icon"
            className="cursor-pointer w-8 h-8"
          />
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-[70px] right-0 w-full bg-white shadow-lg z-50 md:hidden"
        >
          <nav className="flex flex-col items-start pl-10 gap-6 py-6">
            {navMenu.map((item, index) => (
              <Link
                key={index}
                to={`${index === 0 ? "/portfolio-website" : `/${item.toLowerCase()}`}`}
                className={`hover:text-[#0C7FB0] transition-all duration-300 cursor-pointer text-lg ${
                  textcolor === index
                    ? "text-[#0C7FB0] font-bold text-2xl"
                    : "text-gray-700"
                }`}
              >
                <div onClick={() => handleTextColor(index)}>{item}</div>
                <hr />
              </Link>
            ))}
            <Link to="/contactme">
              <button className="bg-[#0C7FB0] text-white px-6 py-2 rounded-md hover:bg-[#095a87] transition duration-300" onClick={toggleMobileMenu}>
                Contact Me
              </button>
            </Link>
            <div className="flex flex-col justify-center">
              <h1 className="font-bold font-sans text-[#0C7FB0] text-[20px]">
                HASSAN ALI
              </h1>
              <h1>UI/UX DESIGNER</h1>
            </div>
            <hr />
            <div>
              <p className="text-[12px] text-center pr-12">
                Copyright 2023 Inc. All rights reserved. | Terms of Use |
                Updated Privacy Policy | Accessibility
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

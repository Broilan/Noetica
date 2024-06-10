// src/components/Navbar.tsx
import React, { useState } from 'react';
import logo from '../assets/NeuroNexusLogo.webp';
import { TfiAlignJustify } from "react-icons/tfi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
          <div className='flex justify-between p-3'>
            <div>
              <a href="/">
                <img src={logo} className="h-16 w-16" />
              </a>
            </div>

            <div className="flex space-x-5 items-center mr-2">
              <a href="/about" className=" text-black font-semibold">About Us</a>
              <a href="/Research" className=" text-black font-semibold">Research</a>
              <a href="/Psychometrics" className=" text-black font-semibold">Psychometrics</a>
              <a href="/Contact" className=" text-black font-semibold">Contact</a>

            </div>

          </div>

          {/* <div className="hidden sm:display items-center">
            <button onClick={toggleMenu}> 
                <TfiAlignJustify />
            </button>
          </div> */}

      {/* <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center space-y-1 py-4">
          <a href="/about" className="py-2 px-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About Us</a>
          <a href="/Research" className="py-2 px-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Research</a>
          <a href="/Psychometrics" className="py-2 px-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Psychometrics</a>
          <a href="/Contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</a>
        </div>
      </div> */}

    </nav>
  );
};

export default Navbar;

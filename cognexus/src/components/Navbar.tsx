// src/components/Navbar.tsx
import React, { useState } from 'react';
import logo from '../assets/NeuroNexusLogo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <div>
              <a href="/" className="flex items-center">
                <img src={logo} className="h-20 w-20" />
                <span className="font-bold text-gray-500 text-3xl">NeuroNexus</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</a>
              <a href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
              <a href="/services" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</a>
              <a href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              <svg
                className="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center space-y-1 py-4">
          <a href="/" className="py-2 px-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</a>
          <a href="/about" className="py-2 px-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
          <a href="/services" className="py-2 px-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</a>
          <a href="/contact" className="py-2 px-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

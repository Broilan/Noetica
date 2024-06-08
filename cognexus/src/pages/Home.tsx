// src/components/HomePage.tsx
import React from 'react';
import { IoGameController } from "react-icons/io5";
import { BsClipboard2DataFill } from "react-icons/bs";
import { FaBrain } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import logo from '../assets/NeuroNexusLogo.webp';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="md:flex md:justify-between">
            <div className="md:w-1/2">
            <div className='flex flex-col items-center'>
            <img src={logo} className="h-20 w-20" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
              NeuroNexus
            </h1>
            </div>
              <p className="my-6 text-lg md:text-xl text-gray-600">
                Dubito, ergo cogito, ergo sum.
              </p>
              <a href="/brain-training" className="mt-8 px-8 py-3 bg-gray-600 text-white text-lg font-semibold rounded hover:bg-green-700 transition duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Juncture Section */}
      <section className="bg-white py-8">
        <div className="mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Choose Your Path</h2>
          <div className="mt-8 flex flex-row md:flex-col justify-center">
            <div className="bg-gray-100 shadow-md rounded-lg p-6 hover:bg-gray-200 transition duration-300 flex-1 md:max-w-md">
              <div className="flex justify-center mb-4">
                <IoGameController className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Training Paradigms</h3>
              <p className="mt-4 text-gray-600">
                Engage in our comprehensive brain training programs designed to enhance your cognitive abilities.
              </p>
              <a href="/tasks" className="mt-4 inline-block px-6 py-2 bg-gray-600 text-white text-lg font-semibold rounded hover:bg-gray-800 transition duration-300">
                Explore Training
              </a>
            </div>
            <div className="bg-gray-100 shadow-md rounded-lg p-6 hover:bg-gray-200 transition duration-300 flex-1 md:max-w-md">
              <div className="flex justify-center mb-4">
                <BsClipboard2DataFill className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Studies</h3>
              <p className="mt-4 text-gray-600">
                Dive into the latest neuroscience research and reviews to stay updated with cutting-edge findings.
              </p>
              <a href="/studies" className="mt-4 inline-block px-6 py-2 bg-gray-600 text-white text-lg font-semibold rounded hover:bg-gray-800 transition duration-300">
                Explore Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Our Features</h2>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <FaBrain className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Personalized Brain Training</h3>
              <p className="mt-4 text-gray-600">
                Tailored exercises to improve cognitive functions and enhance mental agility.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <GiNetworkBars className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Data-Driven Insights</h3>
              <p className="mt-4 text-gray-600">
                Comprehensive reviews of the latest neuroscience research and data.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <GrUserExpert className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Expert Guidance</h3>
              <p className="mt-4 text-gray-600">
                Learn from experts in the field with guided tutorials and courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-600 py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-semibold">Join NeuroNexus Today</h2>
          <p className="my-8 text-lg md:text-xl">
            Unlock your full potential with our brain training programs and data reviews.
          </p>
          <a href="/signup" className="mt-8 px-8 py-3 bg-white text-gray-600 text-lg font-semibold rounded hover:bg-gray-100 transition duration-300">
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

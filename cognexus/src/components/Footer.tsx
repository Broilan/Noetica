import React from 'react';

const Footer: React.FC = () => {
    return (
        <>
        <footer className="bg-gray-600 py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-semibold">Join NeuroNexus Today</h2>
          <p className="my-8 text-lg md:text-xl">
            Unlock your full potential with our brain training programs and data reviews.
          </p>
          <a href="/signup" className="mt-8 px-8 py-3 bg-white text-gray-600 text-lg font-semibold rounded hover:bg-gray-100 transition duration-300">
            Sign Up Now
          </a>
        </div>
      </footer>
      </>
    );
};

export default Footer;
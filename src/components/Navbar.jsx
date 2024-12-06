import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-green-600 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        
        <h1 className="text-2xl font-bold text-white">Glory Foods</h1>

        
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute md:static top-full left-0 w-full md:w-auto bg-green-600 md:bg-transparent shadow-lg md:shadow-none md:flex space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0 overflow-hidden`}
        >
          <a
            href="#home"
            className="block text-white hover:text-yellow-300 transition cursor-pointer px-4 md:px-0"
            onClick={() => setIsMenuOpen(false)} 
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-white hover:text-yellow-300 transition cursor-pointer px-4 md:px-0"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#products"
            className="block text-white hover:text-yellow-300 transition cursor-pointer px-4 md:px-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="#impact"
            className="block text-white hover:text-yellow-300 transition cursor-pointer px-4 md:px-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Impact
          </a>
          <a
            href="#contact"
            className="block text-white hover:text-yellow-300 transition cursor-pointer px-4 md:px-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

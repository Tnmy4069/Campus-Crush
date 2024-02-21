import React from 'react';

const Header = () => {
 
  return (
    <>
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold">Campus Crush</h1>
          {/* Navbar */}
          <nav className="flex space-x-4 ">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Features
            </a>
            <a href="#" className="hover:underline">
              Testimonials
            </a>
            <a
              href="#"
              className="bg-white text-blue-500 hover:bg-blue-200 font-bold py-2 px-6 rounded"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="bg-pink-500 text-white hover:bg-blue-200 font-bold py-2 px-6 rounded ml-2"
            >
              Log In
            </a>
          </nav>
          {/* Mobile Navbar Button */}
          <div className="md:hidden">
            <button id="mobile-menu-button" className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          {/* Mobile Navbar */}
          <div id="mobile-menu" className="hidden md:hidden">
            <div className="bg-pink-500 px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block text-white hover:bg-pink-400 rounded-md py-3 px-3 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-white hover:bg-pink-400 rounded-md py-2 px-3 font-medium"
              >
                Features
              </a>
              <a
                href="#"
                className="block text-white hover:bg-pink-400 rounded-md py-2 px-3 font-medium"
              >
                Testimonials
              </a>
              <a
                href="#"
                className="bg-white text-blue-500 hover:bg-blue-200 font-bold py-2 px-6 rounded"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="bg-pink-500 text-white hover:bg-blue-200 font-bold py-2 px-6 rounded ml-2"
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

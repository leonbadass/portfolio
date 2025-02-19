import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white fixed w-full shadow-lg">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#about" className="hover:text-gray-400">Skills</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

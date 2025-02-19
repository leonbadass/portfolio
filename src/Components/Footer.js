import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-0">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-center md:text-left text-gray-400">
          © {new Date().getFullYear()} Godwin Azuka. All rights reserved.
        </p>

        {/* Quick Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#hero" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/godwin-azuka-b0176a179/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-400 text-2xl hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/leonbadass" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-400 text-2xl hover:text-gray-500 transition" />
          </a>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;

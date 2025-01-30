import React from "react";
import { motion } from "framer-motion";
import profileImage from "../Assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-6 bg-gradient-to-br from-gray-500 via-white-500 to-black-500
"
    >
        {/* Profile Image */}
      <motion.div
        className="relative mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />
      </motion.div>

      <motion.h1
        className="text-4xl sm:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-400">Godwin Azuka</span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl mt-4 text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A Frontend Developer passionate about building beautiful & user-friendly web experiences.
      </motion.p>
       {/* Call to Action Buttons */}
       <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 rounded-full text-lg font-medium hover:bg-blue-600 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

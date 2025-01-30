import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-6"
    >
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
    </section>
  );
};

export default Hero;

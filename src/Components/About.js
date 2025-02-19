import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        {/* Bio Section */}
        <motion.p
          className="text-lg text-gray-300 text-center max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I am a passionate Frontend Developer and a student of Electronics and Computer Engineering with a strong foundation in JavaScript,
           HTML, CSS, and React.js. I love building beautiful, responsive, and user-friendly web applications, leveraging modern technologies
            like Tailwind CSS to create seamless digital experiences.
        </motion.p>

        {/* Skills Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-orange-500 text-5xl" />
            <p className="mt-2">HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-blue-500 text-5xl" />
            <p className="mt-2">CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <FaJs className="text-yellow-400 text-5xl" />
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-blue-400 text-5xl" />
            <p className="mt-2">React.js</p>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-green-500 text-5xl" />
            <p className="mt-2">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGitAlt className="text-red-500 text-5xl" />
            <p className="mt-2">Git</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

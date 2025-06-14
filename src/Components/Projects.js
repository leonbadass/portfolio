import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Weatherpreview from "../Assets/Weatherpreview.png"
import portfolioImage from "../Assets/Portfolioapp.png";
import createexecutedelete from "../Assets/createexecutedelete.png"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    image: portfolioImage,
    tech: ["React", "TailwindCSS", "Framer Motion"],
    demoLink: "https://godwinazukaportfolio.netlify.app/",
    githubLink: "https://github.com/leonbadass/portfolio",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A basic todo list App",
    image: createexecutedelete,
    tech: ["React", "Node.js","Tailwind CSS","Framer Motion"],
    demoLink: "https://createexcutedelete.netlify.app/",
    githubLink: "https://github.com/leonbadass/TodoApp",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather forecast app using OpenWeather API.",
    image: Weatherpreview,
    tech: ["Vite+React", "API", "Typescript","Tailwind CSS"],
    demoLink: "https://my-weather-reveal-app.netlify.app/",
    githubLink: "https://github.com/leonbadass/Weather_Reveal",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
      
        <motion.h2
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg p-5 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-blue-500 px-3 py-1 text-sm rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-4 flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-600"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

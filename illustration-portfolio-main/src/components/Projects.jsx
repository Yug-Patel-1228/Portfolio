import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Faculty Management System",
    description:
      "A full-stack MERN application to manage faculty records, payroll, and leave management. Built with a modern React (Vite) frontend and a scalable Node.js & Express backend with MongoDB Atlas.",
    image: "/assets/Dashboard.png",
    github: "https://github.com/Yug-Patel-1228",
    live: ""
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 10,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            {/* IMAGE */}
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* CONTENT */}
            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>

              <p className="font-bold text-white text-xl lg:text-3xl">
                {project.title}
              </p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>

              {/* LINKS */}
              <div className="flex gap-5 mt-3">

                {/* GitHub */}
                <a
                  href="https://github.com/Yug-Patel-1228/faculty-management-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center gap-2"
                >
                  <BsGithub size={22} />
                  <span className="text-sm">Code</span>
                </a>

                {/* Live  */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white flex items-center gap-2"
                  >
                    <TbExternalLink size={22} />
                    <span className="text-sm">Live</span>
                  </a>
                )}

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
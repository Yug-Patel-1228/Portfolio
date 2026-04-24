import React from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaJava, FaAngular, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  const skills = [
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React.js", icon: <FaReact size={50} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "MongoDB", icon: <FaDatabase size={50} /> },
    { id: 5, name: "SQL", icon: <FaDatabase size={50} /> },
    { id: 6, name: "Tailwind CSS", icon: <RiTailwindCssFill size={50} /> },
     { id: 7, name: "Angular.js", icon: <FaAngular size={50} /> },
      { id: 8, name: "Python", icon: <FaPython size={50} /> },
  ];

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        {/* SKILLS */}
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7 lg:mt-16 place-items-center">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 flex flex-col items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p className="font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* MY JOURNEY */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Journey</span>
        </motion.h2>

        <div className="px-5 lg:px-28 my-10 space-y-8">

          {/* EDUCATION */}
          <div className="border border-gray-600 rounded p-5 text-white">
          <div className="flex items-center gap-4">
            <img
              src="public/assets/univercity.png" 
              alt="University"
              className="w-10 h-10 object-contain bg-white p-1 rounded"
            />
            <h2 className="text-lg font-semibold">
              Bachelor of Computer Applications (BCA)
            </h2>
          </div>

            <p className="text-sm text-gray-400 mt-2">
              June 2023 - April 2026
            </p>
          <p className="text-sm text-gray-400 mt-2">
            Vidyabharti Trust College of Business, Computer-Science & Research (VTCBCSR)
          </p>
          <p className="text-sm text-gray-500">
            Veer Narmad South Gujarat University (VNSGU) • Completed
          </p>

          <p className="mt-3 text-sm text-gray-300">
            Studied core computer science subjects including web development, databases, and programming. Built multiple full-stack projects using MERN stack.
          </p>
        </div>

          {/* INTERNSHIP */}
          <div className="border border-gray-600 rounded p-5 text-white">
            <div className="flex items-center gap-4">
              <img
                src="public/assets/upgrowth.png"
                alt="UpGrowth Infotech"
                className="w-10 h-10 object-contain bg-white p-1 rounded"
              />
              <h2 className="text-lg font-semibold">
                Trainee Full Stack Developer at UpGrowth Infotech
              </h2>
            </div>

            <p className="text-sm text-gray-400 mt-2">
              15 Nov 2025 - 12 Jan 2026
            </p>

            <p className="mt-3 text-sm text-gray-300">
              Worked as a trainee full stack developer, building and improving web applications using the MERN stack. Gained hands-on experience in developing frontend interfaces with React and handling backend APIs using Node.js and Express. Also worked with MongoDB for database management.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import yugImage from "../assets/Yug.png";
export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row items-center gap-10" id="about">
      
      {/* IMAGE */}
      <motion.div
        className="lg:w-1/2 w-full flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img
          src={yugImage}
          alt="Yug Patel"
         className="max-w-[420px] w-full rounded-2xl shadow-xl"
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5">
          I'm Yug Patel, a passionate Full Stack Web Developer with a strong foundation in the MERN stack. I enjoy building modern, responsive, and scalable web applications that solve real-world problems.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-4">
          I have completed my Bachelor of Computer Applications (BCA) and gained practical experience as a Trainee Full Stack Developer at UpGrowth Infotech, where I worked on real-world projects using React, Node.js, Express, and MongoDB.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-4">
          I’m always eager to learn new technologies, improve my skills, and build impactful digital products. My goal is to grow as a developer and contribute to innovative and meaningful projects in the tech industry.
        </p>
      </motion.div>
    </div>
  );
}
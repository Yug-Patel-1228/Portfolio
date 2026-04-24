import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          {/* TEXT SECTION */}
          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >

            {/* NAME + TYPE ANIMATION */}
            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Hello,{" "}
              <TypeAnimation
                sequence={[
                  "I am Yug Patel",
                  1500,
                  // "I build Web Apps",
                  // 1500,
                ]}
                speed={30}
                repeat={Infinity}
                style={{ fontWeight: 600 }}
              />
            </motion.h2>

            {/* ROLE */}
            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <span className="font-extrabold">Full Stack</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Web Developer
              </span>
            </motion.h2>

            {/* LOCATION */}
            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Based In <span className="font-extrabold">India.</span>
            </motion.h2>

          </motion.div>

          {/* ABOUT */}
          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I’m a BCA graduate and a passionate Full Stack Web Developer specializing in the MERN stack. 
            I enjoy building modern, scalable web applications and continuously improving my skills. 
            My goal is to create impactful digital experiences and grow as a developer in the tech industry.
          </motion.p>

          {/* SOCIAL LINKS */}
          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >

            <motion.a
              href="mailto:yugcpatel2812@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 lg:p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
            >
              <BiLogoGmail className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/yug-patel-1062813bb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 lg:p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
            >
              <IoLogoLinkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://x.com/yugpatel1228?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 lg:p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
            >
              <IoLogoTwitter className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://github.com/Yug-Patel-1228"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 lg:p-3 rounded border-2 border-black"
              whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
            >
              <BsGithub className="w-5 h-5" />
            </motion.a>

          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="h-full w-full"
            src="/assets/hero-vector.svg"
            alt="Hero"
          />
        </motion.div>

      </div>
    </div>
  );
}
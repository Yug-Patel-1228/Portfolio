import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row gap-10'>

        {/* LEFT FORM */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%] w-full'
        >
          <form className='w-full space-y-4'>
            <input className='border-2 px-5 py-3 border-black rounded text-sm w-full' type="text" placeholder='Your name' required />
            <input className='border-2 px-5 py-3 border-black rounded text-sm w-full' type="email" placeholder='Email' required />
            <textarea className='resize-none border-2 px-5 py-3 h-32 border-black rounded text-sm w-full' placeholder='Your message'></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              type='submit'
              className='bg-black text-white px-4 py-2 rounded w-full font-medium hover:shadow-lg'
            >
              Send Message
            </motion.button>

            {/* SOCIAL ICONS */}
            <div className='flex items-center gap-4 mt-4'>
              
              <a href="mailto:yugcpatel2812@gmail.com" target="_blank" rel="noopener noreferrer"
                className="bg-white p-2 rounded border-2 border-black hover:bg-black hover:text-white transition">
                <BiLogoGmail />
              </a>

              <a href="https://www.linkedin.com/in/yug-patel-1062813bb" target="_blank" rel="noopener noreferrer"
                className="bg-white p-2 rounded border-2 border-black hover:bg-black hover:text-white transition">
                <IoLogoLinkedin />
              </a>

              <a href="https://x.com/yugpatel1228?s=21" target="_blank" rel="noopener noreferrer"
                className="bg-white p-2 rounded border-2 border-black hover:bg-black hover:text-white transition">
                <IoLogoTwitter />
              </a>

              <a href="https://github.com/Yug-Patel-1228" target="_blank" rel="noopener noreferrer"
                className="bg-white p-2 rounded border-2 border-black hover:bg-black hover:text-white transition">
                <BsGithub />
              </a>

            </div>
          </form>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='font-extrabold text-2xl lg:text-5xl space-y-2'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span></h2>
            <h2>and build something amazing</h2>
          </div>

          <p className='text-[#71717A] text-sm/6 lg:text-base mt-4'>
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
          </p>

          {/* EMAIL ONLY */}
          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-3'>
            <a
              className='flex items-center gap-2 group'
              href="mailto:yugcpatel2812@gmail.com"
            >
              <span className='border-2 border-transparent group-hover:border-black rounded-full p-1'>
                <IoMdMail />
              </span>
              yugcpatel2812@gmail.com
            </a>
          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}
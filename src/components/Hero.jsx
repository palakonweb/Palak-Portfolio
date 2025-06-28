"use client";
import React from 'react';
import { motion } from "framer-motion";
import Heroimg from './Hero.png';
import { Link } from 'react-router-dom'; 


const Hero = () => {
  return (
    <div className="bg-pink-50 text-black py-20 md:py-28 px-6 m-2 rounded-xl border-2">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        
       
        <motion.div 
          className="text-left space-y-4 md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold">👋 Hello, I'm</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600">Palak Sharma</h1>
          <p className="text-xl md:text-2xl font-medium">
            Freelance Frontend Developer, Website Designer
          </p>
          <p className="text-lg md:text-xl">I Create Websites!</p>
         <Link to="/contact">
  <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition active:scale-90">
    Contact Me
  </button>
</Link>

        </motion.div>

        
        <motion.div 
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={Heroimg} alt="Palak" className="h-90 md:h-[28rem] rounded-xl  object-cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

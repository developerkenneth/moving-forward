import React from "react";
import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between letters
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DropText = ( {text} ) => {


  return (
    <div className="">
      <motion.h1
        className="text-2xl md:text-4xl lg:text-6xl font-bold font-secondary"
        variants={sentence}
        initial="hidden"
        animate="visible"
      
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default DropText;

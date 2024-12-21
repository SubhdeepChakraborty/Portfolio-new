import React from "react";
import "./hero.scss";
import { animate, motion } from "framer-motion";

// Text variants for the headings and buttons
const textVariants = {
  initial: {
    x: -500, // Start outside the viewport on the left
    opacity: 0, // Fully transparent initially
  },
  animate: {
    x: 0, // Slide into view
    opacity: 1, // Fade in
    transition: {
      duration: 1, // Duration of the animation
    },
  },
};

// Container variants to manage staggered animation
const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2, // Delay between child animations for a stagger effect
    },
  },
};

// Variants for the scroll button image
const scrollButtonVariants = {
  initial: {
    opacity: 0, // Start with zero opacity
    y: 10, // Positioned slightly downwards
  },
  animate: {
    opacity: 1, // Fade in to full opacity
    y: 0, // Move to its original position
    transition: {
      duration: 1, // One-second animation
      repeat: Infinity, // Repeat forever
      repeatType: "reverse", // Move up and down
    },
  },
};

//Slider variantrs
const sliderVariant = {
    initial: {
        x : 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container h-[100%] w-[56%] flex items-center flex-col justify-center gap-[40px]"
          variants={containerVariants} // Apply container animation
          initial="initial"
          animate="animate"
        >
          {/* Heading 2 */}
          <motion.h2
            variants={textVariants} // Apply staggered text animation
            className="text-4xl w-[100%] text-ellipsis text-nowrap"
          >
            Subhadeep Chakraborty
          </motion.h2>

          {/* Heading 1 */}
          <motion.h1 variants={textVariants} className="w-[100%]">
            Mern Stack
          </motion.h1>

          {/* Buttons */}
          <motion.div className="buttons w-[100%]">
            <motion.button
              variants={textVariants} // Button uses the same animation
              className="bg-transparent text-white"
            >
              See the latest works
            </motion.button>
            <motion.button
              variants={textVariants} // Button uses the same animation
              className="bg-white text-black"
            >
              Contact me
            </motion.button>
          </motion.div>

          {/* Scroll Button */}
          <motion.div className="w-[100%]">
            <motion.img
              variants={scrollButtonVariants} // Separate variants for scroll button animation
              initial="initial"
              animate="animate"
              src="/scroll.png"
              alt="Scroll Indicator"
              className="w-[50px]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Sliding Text */}
      <motion.div variants={sliderVariant} animate='animate' initial ='initial' className="slidingText z-[-1]">Backend - Frontend - Developer</motion.div>

      {/* Hero Image */}
      <div className="image-container">
        <img src="/hero.png" alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;

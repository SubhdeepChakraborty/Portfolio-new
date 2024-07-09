import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const Spanvariants = {
    hidden: { opacity: 0 , scale : 0.5, y : 10},
    visible: { opacity: 1, scale : 1, y : 0, transition: { duration: 0.6 } },
  };
  return (
    <>
      <div className="navbar">
        {/* section */}
        <div className="wrapper">
          <motion.span
            variants={Spanvariants}
            animate="visible"
            initial="hidden"
            className="text-2xl font-semibold"
          >
            Chakraborty
          </motion.span>
          <div className="social">
            <a href="#">
              <img src="" alt="" />
              Links
            </a>
            <a href="#">
              <img src="" alt="" />
              Links
            </a>
            <a href="#">
              <img src="" alt="" />
              Links
            </a>
            <a href="#">
              <img src="" alt="" />
              Links
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

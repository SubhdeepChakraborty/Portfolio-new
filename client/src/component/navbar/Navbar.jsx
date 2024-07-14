import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const Spanvariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };
  return (
    <>
      <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
          <motion.span
            variants={Spanvariants}
            animate="visible"
            initial="hidden"
            className="text-lg font-semibold"
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

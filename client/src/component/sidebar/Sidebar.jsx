import React, { useState } from "react";
import "./sidebar.scss";
import Togglebutton from "./toggleButton/Togglebutton";
import { Links } from "./links/Links";
import {motion} from "framer-motion"

const Sidebar = () => {
    const [ open, setOpen ] = useState(false);

   const variants = {
     open: {
       clipPath: "circle(1200px at 35px 35px)",
       transition: {
         duration: 1,
         ease: [0.6, -0.05, 0.01, 0.99],
       },
     },
     closed: {
       clipPath: "circle(30px at 50px 50px)",
       transition: {
         duration: 1,
         ease: [0.6, -0.05, 0.01, 0.99],
        //  delay: 0.3,
       },
     },
   };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"} >
      <motion.div className="bg" variants={variants} >
        <Links />
      </motion.div>
      <Togglebutton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;

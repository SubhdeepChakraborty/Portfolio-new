import React from "react";
import {motion} from "framer-motion"
const Test = () => {
  return (
    <div className="framer-course">
          <motion.div className="box"
              initial={{ opacity : 0, scale : 0.5}}
              animate={{ opacity : 1, scale : 1, x : 200}}
              transition={{ duration : 2}}
          >Test</motion.div>
    </div>
  );
};

export default Test;

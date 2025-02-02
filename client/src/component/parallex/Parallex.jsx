// import React from "react";
// import "./parallex.scss";
// import { motion, useTransform } from "framer-motion";

// const Parallex = ( { type, scrollY } ) => {
//   // Define motion values for animations
//   const yBg = useTransform(scrollY, [0, 5000], ["0%", "50%"]);
//   const yText = useTransform(scrollY, [0, 5000], ["0%", "300%"]);
//   const planetsUp = useTransform(scrollY, [0, 5000], ["0%" ,"120%"]); // Move upwards as you scroll down
//   const planetsDown = useTransform( scrollY, [ 0, 5000 ], [ "0%", "300%" ] ); // Move downwards as you scroll down

//   return (
//     <div
//       className="parallex"
//       style={{
//         background:
//           type === "Services"
//             ? "linear-gradient(180deg, #111132, #0c0c1d)"
//             : "linear-gradient(180deg, #111132, #505064)",
//       }}
//     >
//       {/* Animated Heading */}
//       <motion.h1
//         style={{ y: planetsDown }}
//         transition={{
//           duration: 1,
//           ease: "easeInOut",
//         }}
//       >
//         {type === "Services" ? "What we did?" : "What we do?"}
//       </motion.h1>

//       {/* Static Mountain Element */}
//       <motion.div
//         className="mountain"
//         transition={{
//           duration: 1,
//           ease: "easeInOut",
//         }}
//       ></motion.div>

//       {/* Planets Animation */}
//       <motion.div
//         style={{
//           y: type === "Services" ? planetsUp : planetsDown, // Move up for Services, down otherwise
//           backgroundImage: `url(${
//             type === "Services" ? "/planets.png" : "/sun.png"
//           })`,
//         }}
//         transition={{
//           duration: 1,
//           ease: "easeInOut",
//         }}
//         className="planets"
//       ></motion.div>

//       {/* Stars Background Animation */}
//       <motion.div
//         style={{ x: yBg }}
//         className="stars"
//         transition={{
//           duration: 1,
//           ease: "easeInOut",
//         }}
//       ></motion.div>
//     </div>
//   );
// };

// export default Parallex;

import { useRef } from "react";
import "./parallex.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallex = ({ type }) => {
  const ref = useRef();
  console.log(type)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallex"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountain"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallex;
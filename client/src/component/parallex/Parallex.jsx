import React, { useRef } from 'react'
import './parallex.scss'
import {motion, useScroll, useTransform} from "framer-motion"

const Parallex = ( { type } ) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll( {
    target: ref,
    offset : ["start start", "end start"]
  } )
  const yBg = useTransform( scrollYProgress, [ 0, 1 ], [ "0%", "50%" ] )
  const text = useTransform(scrollYProgress, [0,1], ['0%', '200%'])
  console.log(type);
  return (
    <div
      className="parallex"
      ref={ref}
      style={{
        background:
          type === "Services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1
        style={{ y: text }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        {type === "Services" ? "What we do?" : "What we did?"}
      </motion.h1>
      <motion.div
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="mountain"
      ></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "Services" ? "/planets.png" : "/sun.png"
          })`,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="planets"
      ></motion.div>
      <motion.div
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        style={{ x: yBg }}
        className="stars"
      ></motion.div>
    </div>
  );
}

export default Parallex
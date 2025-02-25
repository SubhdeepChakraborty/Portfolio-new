import React, { useRef } from "react";
import "./services.scss";
import { useInView, motion } from "framer-motion";
import { Dock } from "../Fun";

const Services = () => {
  const listenRef = useRef();
  const inView = useInView(listenRef, { margin: "-20px" });
  const varients = {
    initial: { x: -500, y: 100, opacity: 0 },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
  };
  return (
    <motion.div
      ref={listenRef}
      className="services"
      variants={varients}
      initial={"initial"}
      animate={inView && "animate"}
    >
      <motion.div className="textContainer" variants={varients}>
        <p>
          I build seamless and modern web experiences <br /> that move your
          vision forward.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={varients}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b
              whileHover={{ color: "orange" }}
              className="transition-colors"
            >
              Design
            </motion.b>{" "}
            Addict
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b
              whileHover={{ color: "orange" }}
              className="transition-colors"
            >
              Abstract
            </motion.b>{" "}
            Thinker.
          </h1>
          <button> Tech Stack? </button>
        </div>
      </motion.div>
      <motion.div variants={varients} className="relative listContainer">
        {/* <motion.div
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
          }}
          className="box relative transition-colors"
        >
          <h2>Branding</h2>
          <p className="line-clamp-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
          }}
          className="box relative transition-colors"
        >
          <h2>Branding</h2>
          <p className="line-clamp-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
          }}
          className="box relative transition-colors"
        >
          <h2>Branding</h2>
          <p className="line-clamp-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{
            backgroundColor: "lightgray",
            color: "black",
          }}
          className="box relative transition-colors"
        >
          <h2>Branding</h2>
          <p className="line-clamp-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
          <button className="font-medium cursor-pointer">Go</button>
        </motion.div> */}
        <Dock collapsible={false} position="" responsive="bottom" />
      </motion.div>
    </motion.div>
  );
};

export default Services;


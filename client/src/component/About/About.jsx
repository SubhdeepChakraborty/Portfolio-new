import React, { useRef } from "react";
import "./about.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Ensures smooth scrolling effect
  });

  // Transform the scroll progress to translate Y movement
  const yTransform = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  // Apply useSpring for smooth motion
  const smoothY = useSpring(yTransform, {
    stiffness: 80, // Lower value = slower movement
    damping: 20, // Higher value = less bounce
    mass: 0.5, // Controls the weight of the animation
  });

  const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const smoothOpacity = useSpring(opacityTransform, {
    stiffness: 100,
    damping: 25,
  });

  // Image animation (moves slightly for parallax effect & fades in)
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]); // Less movement than text
  const smoothYImage = useSpring(yImage, { stiffness: 100, damping: 50 });
  // const opacityImage = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  // const smoothOpacityImage = useSpring(opacityImage, {
  //   stiffness: 100,
  //   damping: 25,
  // });

  return (
    <section>
      <div className="container-div overflow-hidden">
        <div className="wrapper-div">
          <div className="w-[80%] flex items-center justify-center gap-10">
            <motion.div
              className="imgContainer rounded-sm"
              ref={ref}
              style={{ y: smoothYImage }}
            >
              <img src={item.img} alt="image" />
            </motion.div>
            <motion.div
              className="text-div"
              style={{ y: smoothY, opacity: smoothOpacity }}
            >
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
    const AboutRefConatiner = useRef()
    const { scrollYProgress } = useScroll( { target: AboutRefConatiner, offset: [ "end end", "start start" ] } )
    const scaleX = useSpring(scrollYProgress, {stiffness: 100, damping: 30})
  const items = [
    {
      id: 1,
      title: "React Commerce",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 2,
      title: "Next.js Blog",
      img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 3,
      title: "Vanilla JS App",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 4,
      title: "Music App",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
  ];

  return (
      <div className="about" id="About" ref={AboutRefConatiner}>
          <div className="progress">
              <h1>Featured Works</h1>
              <motion.div style={{
                  scaleX :scaleX
              }} className="progressBar"></motion.div>
          </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default About;

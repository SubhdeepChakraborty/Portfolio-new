// import React, {useRef, useEffect} from "react";
// import "./app.scss";
// import { Hero, Navbar, Parallex, Services, UseWindowSize } from "./component";
// // import Test from "./Test";

// const App = () => {

//   //using hooks
//   const size = UseWindowSize();
//   console.log(size);
  
//   useEffect( () => {
//       requestAnimationFrame(() => {
//         skewScrolling();
//       });
//   }, [])

//   const app = useRef()
//   const scrollContainer = useRef()
//   useEffect( () => {
//     document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`
//   }, [size.height])

//   const skewConfig = {
//     ease: .1,
//     current: 0,
//     previous: 0,
//     rounded : 0
//   }

//   const skewScrolling = () => {
//     skewConfig.current = window.scrollY;
//     skewConfig.previous += ( skewConfig.current - skewConfig.previous ) * skewConfig.ease
//     skewConfig.rounded = Math.round( skewConfig.previous * 100 ) / 100
    
//     //variables
//     const difference = skewConfig.current - skewConfig.rounded
//     const accelration = difference / size.width
//     const velocity = +accelration;
//     const skew = velocity * 7.5


//     //
//     scrollContainer.current.style.transform = `translate3d(0, -${skewConfig.rounded}px, 0)`;

//     requestAnimationFrame( () => {
//       skewScrolling()
//     })
  
//   }

//   return (
//     <div ref={app} className="relative top-0 left-0" >
//       <div className="relative" ref={scrollContainer}>
//         <section id="Homepage" className="">
//           <Navbar />
//           <Hero />
//         </section>
//         <section id="Services" className="">
//           <Parallex type="Portfolio" />
//         </section>
//         <section id="Portfolio" className="">
//           <Services />
//         </section>
//         <section id="Services" className="">
//           <Parallex type="Services" />
//         </section>
//         <section id="About" className="">
//           Parallex
//         </section>
//         <section id="Contact" className="">
//           contact
//         </section>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useRef, useEffect } from "react";
import "./app.scss";
import { Hero, Navbar, Parallex, Services, UseWindowSize } from "./component";
import { motion, useMotionValue } from "framer-motion";

const App = () => {
  const size = UseWindowSize();
  const app = useRef();
  const scrollContainer = useRef();
  const scrollY = useMotionValue(0); // Use MotionValue for Framer Motion

  const skewConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  useEffect(() => {
    const skewScrolling = () => {
      skewConfig.current = window.scrollY;
      skewConfig.previous +=
        (skewConfig.current - skewConfig.previous) * skewConfig.ease;
      skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

      scrollContainer.current.style.transform = `translate3d(0, -${skewConfig.rounded}px, 0)`;

      // Update scrollY for Framer Motion
      scrollY.set(skewConfig.rounded);

      requestAnimationFrame(skewScrolling);
    };

    skewScrolling();
  }, [scrollY]);

  return (
    <div ref={app} className="relative top-0 left-0">
      <div className="relative" ref={scrollContainer}>
        <section id="Homepage">
          <Navbar />
          <Hero />
        </section>
        <section id="Services">
          <Parallex type="Portfolio" scrollY={scrollY} />
        </section>
        <section id="Portfolio">
          <Services />
        </section>
        <section id="Services1">
          <Parallex type="Services" scrollY={scrollY} />
        </section>
        <section id="About">Parallex</section>
        <section id="Contact">Contact</section>
      </div>
    </div>
  );
};

export default App;

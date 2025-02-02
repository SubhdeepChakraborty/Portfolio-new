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
import { About, Contact, Hero, Navbar, Parallex, Services} from "./component";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallex type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallex type="portfolio" />
      </section>
      <About/>
      <section id="Contact">
      <Contact />
      </section>
    </div>
  );
};

export default App;

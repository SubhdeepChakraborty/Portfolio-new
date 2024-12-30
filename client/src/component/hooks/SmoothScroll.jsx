// import React, {useEffect, useState} from 'react'

// const UseWindowSize = () => {
//     function getSize () {
//         return {
//             width: window.innerWidth,
//             height : window.innerHeight
//         }
//     }

//     const [ windowSize, setWindowSize ] = useState( getSize )
    
//     useEffect( () => {
//         function handleSize () {
//             setWindowSize(getSize())
//         }
//         window.addEventListener( "resize", handleSize );
//         return () => window.removeEventListener("resize", handleSize)
//     })

//   return windowSize
// }

// export default UseWindowSize

// import Scrollbar from "smooth-scrollbar";
// import { useEffect } from "react";
// import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

// const overscrollOptions = {
//   enable: true,
//   effect: "bounce",
//   damping: 0.15,
//   maxOverscroll: 150,
//   glowColor: "#fff",
// };

// //   const overscrollOptions = {
// //     enable: true,
// //     effect: 'glow',
// //     damping: 0.1,
// //     maxOverscroll: 200,
// //     glowColor: '#222a2d',
// //   };

// const options = {
//   damping: 0.07,
//   plugins: {
//     overscroll: { ...overscrollOptions },
//   },
// };

// const SmoothScroll = () => {
//   useEffect(() => {
//     Scrollbar.use(OverscrollPlugin);

//     Scrollbar.init(document.body, options);

//     return () => {
//       if (Scrollbar) Scrollbar.destroy(document.body);
//     };
//   }, []);

//   return null;
// };

// export default SmoothScroll;

import Scrollbar from "smooth-scrollbar";
import { useEffect, useRef } from "react";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: "#fff",
};

const options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      Scrollbar.use(OverscrollPlugin);

      const scrollbarInstance = Scrollbar.init(scrollRef.current, options);

      return () => {
        if (scrollbarInstance) scrollbarInstance.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} style={{ height: "100vh", overflow: "hidden" }}>
      {children}
    </div>
  );
};

export default SmoothScroll;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// const Test = () => {
//   const [open, setOpen] = useState(false);

//   const variants = {
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         staggerChildren: 0.2,
//         duration: 1,
//       },
//     },
//     hidden: { opacity: 0, y : 100 },
//   };

//   const items = ["item1", "item2", "item3", "item4"];

//   return (
//     <div className="framer-course">
//       <motion.ul variants={variants} animate="visible" initial="hidden">
//         {items.map((ele, i) => (
//           <motion.li key={i} variants={variants}>
//             {ele}
//           </motion.li>
//         ))}
//       </motion.ul>
//     </div>
//   );
// };

// export default Test;

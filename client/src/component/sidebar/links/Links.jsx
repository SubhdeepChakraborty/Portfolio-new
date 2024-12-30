import { Link } from "react-scroll"
import {motion} from "framer-motion"

export const Links = () => {
    const variants = {
      open: {
        transition: {
          staggerChildren: 0.1,
          ease: [0.6, -0.05, 0.01, 0.99],
        },
      },
      closed: {
        transition: {
          staggerChildren: 0.05,
          staggeredDirection: -1,
          ease: [0.6, -0.05, 0.01, 0.99],
        },
      },
    };

    const itemV = {
        open: {
            y: 0,
            opacity : 1
        },
        closed: {
            y: 50,
            opacity : 0
        }
    }

    const items = ["Homepage", "Services", "Portfolio", "About", "Contact"]
  return (
    <motion.div className="links" variants={variants}>
      {items.map((e, i) => (
          <motion.div variants={itemV} whileHover={{
            scale : 1.1
          }} whileTap={{
            scale : 0.95
        }} >
          <Link className="cursor-pointer" to={e} duration={1} key={i} smooth={true}>
            {e}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

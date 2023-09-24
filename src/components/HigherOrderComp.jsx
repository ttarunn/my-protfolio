import { styles } from "../styles";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const HigherOrderComp = (Component, id) => 
  function HOC(){
    return (
        <motion.section variants={staggerContainer()} initial="hidden" whileInView={'show'} viewport={{ once: true, amount: 0.25}} className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            {/* <span className="hash-span" id={id}>&nbsp;</span> */}
            <Component/>
        </motion.section>
    )
  }


export default HigherOrderComp
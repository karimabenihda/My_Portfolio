import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

 const Card = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className=" rounded shadow p-4 mb-4"
    >
      {children}
    </motion.div>
  );
};
export default Card
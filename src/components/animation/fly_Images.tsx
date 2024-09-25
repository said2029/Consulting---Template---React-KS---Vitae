import { motion, Transition, Variants } from "framer-motion";

export default function Fly_Image({
  image,
  variants,
  transition
}: {
  variants: Variants;
  image: string;
  transition?:Transition
}) {
  return (
    <motion.div
      variants={variants}
      initial="start"
      animate="end"
      transition={{
        ...transition,
        delay: 1,
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="absolute top-0"
    >
      <img src={image}/>
    </motion.div>
  );
}

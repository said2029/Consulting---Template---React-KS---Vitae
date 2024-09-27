import { motion } from "framer-motion";
import { useState } from "react";
export default function Button_Hover({ text }: { text: string }) {
  const [hover, SetisHover] = useState(false);
  return (
    <motion.a
      variants={{
        initial: {
          opacity: 0,
          y: 50,
          rotate: Math.floor(Math.random() * 20) - 20,
        },
        animate: { opacity: 1, y: 0 },
        hover: { rotate: 0 },
      }}
      initial="initial"
      animate="animate"
      whileHover={"hover"}
      transition={{
        type:"spring",

        ease: "easeInOut",
      }}
      onMouseEnter={() => {
        SetisHover(true);
      }}
      onMouseLeave={() => {
        SetisHover(false);
      }}
      className="border-2 right-28 text-white border-white rounded-full px-6 text-6xl absolute py-2 flex uppercase overflow-hidden cursor-pointer"
    >
      {text.split("").map((chart, i) => (
        <motion.div
          variants={{
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            hover: {
              y: [0, 50, 0],
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.1 * i,
              },
            },
          }}
          animate={hover ? "hover" : "animate"}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: 0.7 + 0.1 * i,
          }}
        >
          {chart}
        </motion.div>
      ))}
    </motion.a>
  );
}

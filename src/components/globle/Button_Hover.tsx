import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Button_Hover({
  text,
  className,
  href = "#",
}: {
  text: string;
  href?: string;
  className?: string;
}) {
  const [hover, SetisHover] = useState(false);
  return (
    <motion.a
      href={href}
      variants={{
        initial: {
          opacity: 0,
          y: 50,
        },
        animate: { opacity: 1, y: 0 },
        hover: { rotate: 0 },
      }}
      initial="initial"
      animate="animate"
      whileHover={"hover"}
      transition={{
        type: "spring",

        ease: "easeInOut",
      }}
      onMouseEnter={() => {
        SetisHover(true);
      }}
      onMouseLeave={() => {
        SetisHover(false);
      }}
      className={cn(
        "border-2 text-white border-white rounded-full px-6 md:text-4xl xl:text-6xl py-2 flex uppercase overflow-hidden cursor-pointer",
        className
      )}
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
          }}
        >
          {chart}
        </motion.div>
      ))}
    </motion.a>
  );
}

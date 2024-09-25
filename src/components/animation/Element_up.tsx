import { motion, Transition } from "framer-motion";
import { ReactNode } from "react";

export default function Element_up({ children,transition }: { children: ReactNode,transition:Transition }) {
  return (
    <motion.div
      variants={{
        ini: { opacity: 0, y: 200 },
        anim: { opacity: 1, y: 0 },
      }}
      initial="ini"
      whileInView={"anim"}
      viewport={{once:true}}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

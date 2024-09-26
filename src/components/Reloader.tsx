import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Reloader() {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => setLoading(true), 300);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
        <div className="fixed top-0 z-50 hidden pointer-events-none lg:grid w-full h-screen grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
            key={i}
              variants={{
                ini: { opacity: 1, y: "0" },
                anim: { opacity: 0, y: "100%" },
              }}
              initial="ini"
              animate={isLoading && "anim"}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: "linear" }}
              onAnimationComplete={() => {
                if (i >= 11) setLoading(false);
              }}
              className="bg-gradient-to-t z-[99] from-primary-foreground to-primary top-0 h-screen w-full"
            ></motion.div>
          ))}
        </div>
        {/* mobile */}
        <div className="fixed top-0 z-50 w-full h-screen grid grid-rows-12 pointer-events-none lg:hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
            key={i}
              variants={{
                ini: { x: "0" },
                anim: { x: "-100%" },
              }}
              initial="ini"
              animate={isLoading && "anim"}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: "linear" }}
              onAnimationComplete={() => {
                if (i >= 11) setLoading(false);
              }}
              className="bg-primary z-[99] top-0 h-screen w-full"
            ></motion.div>
          ))}
        </div>
    </>
  );
}

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Reloader() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("stop-scrolling");
  }, []);

  return (
    <>
      {isLoading && (
        <div className="absolute top-0 z-50 w-full h-screen grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              variants={{
                ini: { opacity: 1, y: "0" },
                anim: { opacity: 0, y: "100%" },
              }}
              initial="ini"
              animate="anim"
              transition={{ duration: .5, delay: 0.1 * i, ease: "linear" }}
              onAnimationComplete={() => {
                console.log("Animation");
                if (i >= 11) setLoading(false);
              }}
              className="bg-primary top-0 h-screen w-full"
            ></motion.div>
          ))}
        </div>
      )}
    </>
  );
}

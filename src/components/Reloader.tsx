import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Reloader() {
  const name = "Want to improve your sales?";
  const [isLoading, setLoading] = useState(true);
  const [isNight, SetisNight] = useState(true);
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      // dark mode
      SetisNight(true);
    } else {
      SetisNight(false);
    }
  }, []);

  return (
    <div className="pointer-events-none">
      {isLoading && (
        <motion.div
          variants={{
            initial: {
              maskPosition: `center center`,
              maskSize: `0.1%`,
            },
            animate: {
              maskSize: `200%`,
            },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.8,
            delay: name.length / 3,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => {
            setLoading(false);
          }}
          className={`w-screen Loading_Mask fixed z-[9999] top-0 h-[100vh] ${
            isNight ? "bg-black" : "bg-white"
          } flex justify-center items-center`}
        >
          <motion.div
            variants={{
              initial: { width: "content-fit" },
              animate: { width: 0 },
            }}
            transition={{ duration: 0.5, delay: name.length / 3.5 }}
            className="h-fit overflow-hidden"
          >
            <div
              className={`font-bold  ${
                isNight ? "text-white" : "text-black"
              } f text-3xl md:text-5xl lg:text-8xl object-cover text-transparent w-full to-primary-foreground flex uppercase`}
            >
              {name.split("").map((c, i) => (
                <motion.div
                  key={i}
                  className="block"
                  variants={{
                    initial: { y: 200 },
                    animate: { y: 0 },
                  }}
                  transition={{ duration: 1, delay: 0.1 * i }}
                >
                  {c}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

// return (
//   <>
//       <div className="fixed top-0 z-50 hidden pointer-events-none lg:grid w-full h-screen grid-cols-12">
//         {Array.from({ length: 12 }).map((_, i) => (
//           <motion.div
//           key={i}
//             variants={{
//               ini: { opacity: 1, y: "0" },
//               anim: { opacity: 0, y: "100%" },
//             }}
//             initial="ini"
//             animate={isLoading && "anim"}
//             transition={{ duration: 0.5, delay: 0.1 * i, ease: "linear" }}
//             onAnimationComplete={() => {
//               if (i >= 11) setLoading(false);
//             }}
//             className="bg-gradient-to-t z-[99] from-primary-foreground to-primary top-0 h-screen w-full"
//           ></motion.div>
//         ))}
//       </div>
//       {/* mobile */}
//       <div className="fixed top-0 z-50 w-full h-screen grid grid-rows-12 pointer-events-none lg:hidden">
//         {Array.from({ length: 12 }).map((_, i) => (
//           <motion.div
//           key={i}
//             variants={{
//               ini: { x: "0" },
//               anim: { x: "-100%" },
//             }}
//             initial="ini"
//             animate={isLoading && "anim"}
//             transition={{ duration: 0.5, delay: 0.1 * i, ease: "linear" }}
//             onAnimationComplete={() => {
//               if (i >= 11) setLoading(false);
//             }}
//             className="bg-primary z-[99] top-0 h-screen w-full"
//           ></motion.div>
//         ))}
//       </div>
//   </>
// );

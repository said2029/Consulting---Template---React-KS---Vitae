import clsx from "clsx";
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
    <div
      className={clsx(
        "w-screen  z-[9999] fixed top-0 h-[100vh]",
        {
          hidden: !isLoading,
        }
      )}
    >
      {isLoading && (
        <motion.div
          variants={{
            initial: {
              y: 0,
            },
            animate: {
              y: "-100vh",
            },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.8,
            delay: name.length * 0.13,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => {
            setLoading(false);
          }}
          className={`w-screen fixed top-0 h-[100vh] ${
            isNight ? "bg-black" : "bg-white"
          } flex justify-center items-center`}
        >
          <div className="h-fit overflow-hidden">
            <div
              className={`font-bold  ${
                isNight ? "text-white" : "text-black"
              } text-xl px-5 sm:text-3xl md:text-5xl text-center lg:text-6xl 2xl:text-8xl object-cover text-transparent w-full to-primary-foreground flex justify-center flex-wrap items-center uppercase`}
            >
              {name.split("").map((word, index) => {
                if(word==" ") return <span key={index+word} className=" w-2 sm:w-3 md:w-4 xl:w-6"></span>
                return (
                  <motion.div
                    key={index+word}
                    className="block"
                    variants={{
                      initial: { y: 200 },
                      animate: { y: 0 },
                    }}
                    transition={{ duration: 1, delay: 0.04 * index }}
                  >
                    {word}
                  </motion.div>
                );
              })}
            </div>
          </div>
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

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
                if(word==" ") return <span key={index} className=" w-2 sm:w-3 md:w-4 xl:w-6"></span>
                return (
                  <motion.div
                    key={index}
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


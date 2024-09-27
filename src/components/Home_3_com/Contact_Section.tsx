import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Button_Hover from "../globle/Button_Hover";

export default function Contact_Section({ indexView }: { indexView: number }) {
  const { scrollYProgress } = useScroll();
  const moveUpMd = useTransform(scrollYProgress, [0, 1], [2000, -300]);

  return (
    <AnimatePresence>
      {indexView >= 4 && (
        <motion.div
          variants={{
            initial: { scale: 0, rotate: 50 },
            animate: { scale: 1, rotate: 0 },
            exit: { scale: 0, y: [0, 100], rotate: 50 },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-full h-[100vh] bg-blue-400 backdrop-blur-xl bg-[url('/assets/img/all-images/case-img15.png')] bg-no-repeat bg-cover sticky top-0 flex justify-center items-center"
        >
          {/* content */}
          <div className="w-full h-full flex justify-start items-center relative backdrop-blur-2xl">
            <div className="grid grid-cols-3 lg:ml-28 lg:gap-12 w-full">
              <motion.div
                style={{ y: moveUpMd }}
                variants={{
                  initial: { opacity: 0, x: "-100vw" },
                  animate: { opacity: 1, x: 0 },
                }}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                className="col-span-1 h-[400px] rounded-md w-full overflow-hidden bg-slate-200 bg-[url('/assets/img/all-images/testimonial-img10.png')]"
              >
                <div className="w-full h-full bg-gradient-to-t from-black to-transparent flex items-end p-4">
                  <h1 className="text-3xl">Empowering Businesses to Succeed</h1>
                </div>
              </motion.div>
              <div className="col-span-1 h-[400px] grid grid-rows-2 gap-2 w-full">
                <motion.div
                  style={{ y: moveUpMd }}
                  variants={{
                    initial: { opacity: 0, x: "100vh" },
                    animate: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                  className="backdrop-blur-3xl bg-white/45 rounded-md"
                ></motion.div>
                <motion.div
                  style={{ y: moveUpMd }}
                  variants={{
                    initial: { opacity: 0, x: "100vh" },
                    animate: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
                  className="bg-red-500/45 backdrop-blur-3xl w-full rounded-md"
                ></motion.div>
              </div>
            </div>
            <Button_Hover text="contact" />

            {/* Main title */}
            <motion.h1
              variants={{
                initial: { opacity: 0, y: 50, scaleY: 1.4 },
                animate: { opacity: 1, y: 0, scaleY: 1 },
              }}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.9 }}
              className="text-7xl font-thin absolute bottom-4 left-4 uppercase"
            >
              Empowering Your Business Success
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

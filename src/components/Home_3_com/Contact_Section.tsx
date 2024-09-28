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
          className="w-full h-[100vh] bg-blue-400 backdrop-blur-xl bg-[url('/assets/img/all-images/blog-img10.png')] bg-no-repeat bg-cover sticky top-0 flex justify-center items-center"
        >
          {/* content */}
          <div className="w-full h-full flex justify-center lg:justify-start items-center relative backdrop-blur-2xl">
            <div className="grid gap-3 px-4 grid-cols-2 lg:grid-cols-3 lg:ml-10 xl:ml-28 lg:gap-12 w-full ">
              <motion.div
                style={{ y: moveUpMd }}
                variants={{
                  initial: { opacity: 0, x: "-100vw" },
                  animate: { opacity: 1, x: 0 },
                }}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                className="col-span-full sm:col-span-1 place-self-center h-fit rounded-md w-full overflow-hidden bg-slate-200"
              >
                <form className="w-full flex flex-col items-center gap-5 justify-center px-8 py-6 text-black font-thin h-full" action="">
                  <div className="w-full grid grid-cols-2">
                    <input
                      className="place-self-center"
                      type="text"
                      placeholder="First name"
                    />
                    <input
                      className="place-self-center"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="w-full grid grid-cols-2">
                    <input
                      className="place-self-center"
                      type="text"
                      placeholder="Email Address"
                    />
                    <input
                      className="place-self-center"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                  <textarea className="w-full" rows={5} name="" placeholder="Message" id=""></textarea>
                </form>
              </motion.div>
            </div>

            <Button_Hover href="/contact" text="contact" />

            {/* Main title */}
            <motion.h1
              variants={{
                initial: { opacity: 0, y: 50, scaleY: 1.4 },
                animate: { opacity: 1, y: 0, scaleY: 1 },
              }}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.9 }}
              className="text-4xl lg:text-7xl font-thin absolute bottom-4 left-4 uppercase"
            >
              Reach Out to Start Transforming Your Business Today
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion } from "framer-motion";

const brandImages = [
  "brand6.png",
  "brand7.png",
  "brand8.png",
  "brand9.png",
  "brand10.png",
];
const variantsPup = {
  initial: { opacity: 0, y: 45 },
  animate: { opacity: 1, y: 0 },
};
export default function Hero_Section() {
  return (
    <div className="flex items-center w-screen overflow-hidden mt-4 px-6  lg:px-20 xl:px-32 flex-col gap-6 text-center">
      <motion.h1
        variants={variantsPup}
        initial="initial"
        animate="animate"
        transition={{ duration: 1}}
        className="h1 !font-normal max-w-4xl scale-y-150  text-center leading-tight font-['Bungee']"
      >
        Empowering Businesses to Thrive
      </motion.h1>
      <motion.p
        variants={variantsPup}
        initial="initial"
        animate="animate"
        transition={{ duration: 1}}
        className="text-[24px]"
      >
        Tailored strategies and actionable insights to drive growth and success.
      </motion.p>
      <motion.button
        variants={variantsPup}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
        className="shadow_Button text-white rounded-full py-4 px-16 shadow-inner "
      >
        Get Started
      </motion.button>
      <motion.span
        variants={variantsPup}
        initial="initial"
        animate="animate"
        transition={{ duration: 1}}
      >
        Available now
      </motion.span>

      <div className="shadow_Button w-full h-[5.4rem] rounded-full flex items-center justify-center overflow-hidden">
        <motion.div
          variants={{
            initial: { x: 0 },
            animate: { x: "-5090px" },
          }}
          initial="initial"
          animate="animate"
          transition={{ duration: 100, ease: "linear", repeat: Infinity }}
          className="w-fit gap-10 flex items-center"
        >
          {Array.from({ length: 29 }).map(() =>
            brandImages.map((image,i) => (
              <div key={image+i}>
                <span className="bg-red-400 rounded-full w-3 h-3"></span>
                <div className="h-fit w-[6rem] flex items-center">
                  <img
                    className="w-full h-full object-cover"
                    src={`/assets/img/elements/${image}`}
                  />
                </div>
              </div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}

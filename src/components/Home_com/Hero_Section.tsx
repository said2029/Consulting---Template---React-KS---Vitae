import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

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

const HeroWorld = ({ world, index }: { world: string; index: number }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      key={world + index}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {world.split("").map((c, index) => (
        <motion.span
          key={index + c}
          variants={{
            initial: { y: 0 },
            animate: { y: [0, -50, 0] },
          }}
          initial="initial"
          animate={hover ? "animate" : "initial"}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: 0.1 * index,
          }}
          className="text-4xl sm:text-6xl xl:text-6xl !font-normal inline-block leading-tight font-['Bungee']"
        >
          {c}
        </motion.span>
      ))}
    </div>
  );
};

const HeroEmpowe = () => {
  return (
    <motion.h1
      variants={variantsPup}
      initial="initial"
      animate="animate"
      transition={{ duration: 1 }}
      className="flex max-w-4xl scale-y-150 gap-2 justify-center text-center flex-wrap"
    >
      {"Empowering Businesses to Thrive".split(" ").map((world, i) => {
        return <HeroWorld index={i} world={world} />;
      })}
    </motion.h1>
  );
};
export default function Hero_Section() {
  return (
    <div className="flex items-center w-screen overflow-hidden mt-4 px-6  lg:px-20 xl:px-32 flex-col gap-6 text-center">
      <HeroEmpowe />
      <motion.p
        variants={variantsPup}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
        className="text-[24px]"
      >
        Tailored just for you, crafted for growth—success at every step!
      </motion.p>
      <Link
        to="/get_started"
        className="shadow_Button text-white rounded-full py-4 px-16 shadow-inner "
      >
        Get Started
      </Link>
      <motion.span
        variants={variantsPup}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
      >
        Partnered with
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
            brandImages.map((image, i) => (
              <div key={image + i}>
                <span className="bg-red-400 rounded-full w-3 h-3"></span>
                <div className="h-fit w-[6rem] flex items-center">
                  <img
                    className="w-full h-full object-cover"
                    src={`/assets/img/change/${image}`}
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

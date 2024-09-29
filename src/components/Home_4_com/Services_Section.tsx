import { motion } from "framer-motion";
const variantsUp = {
  initial: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0 },
};
export default function Services_Section() {
  return (
    <div className="flex justify-center w-screen overflow-hidden text-center items-center flex-col mt-10 px-6 lg:px-20 xl:px-48">
      <motion.h2
        variants={variantsUp}
        initial="initial"
        whileInView={"show"}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h2 max-w-3xl"
      >
        Our Expertise, Your Competitive Edge
      </motion.h2>
      <motion.h2
        variants={variantsUp}
        initial="initial"
        whileInView={"show"}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[24px] max-w-3xl"
      >
        From business strategy to digital transformation, we offer solutions
        tailored to your needs
      </motion.h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 place-content-center lg:grid-cols-3 mt-8 lg:gap-28">
        <motion.div
          variants={variantsUp}
          initial="initial"
          whileInView={"show"}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col gap-3 items-center"
        >
          <div className="w-28 h-28 rounded-full bg-red-500"></div>
          <p className="font-thin text-xl">
            Business strategy and planning for sustainable growth
          </p>
        </motion.div>
        <motion.div
          variants={variantsUp}
          initial="initial"
          whileInView={"show"}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col gap-3 items-center"
        >
          <div className="w-28 h-28 rounded-full bg-red-500"></div>
          <p className="font-thin text-xl">
            Digital transformation to keep your business competitive
          </p>
        </motion.div>
        <motion.div
          variants={variantsUp}
          initial="initial"
          whileInView={"show"}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col gap-3 items-center"
        >
          <div className="w-28 h-28 rounded-full bg-red-500"></div>
          <p className="font-thin text-xl">
            Financial advisory and solutions for optimized performance
          </p>
        </motion.div>
      </div>
    </div>
  );
}

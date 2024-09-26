import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";

const variantsText: Variants = {
  initial: { opacity: 0, x: 200 },
  animate: {
    opacity: 1,
    x: 0,
  },
  hover: { y: 10 },
};

export default function About_Us_Section() {
  return (
    <div className="container_1 overflow-hidden relative w-full h-fit place-content-center lg:h-[500px] flex flex-col lg:flex-row gap-10 lg:gap-36 mt-28">
      <section className="grid grid-cols-2 gap-2 w-fit flex-shrink-0">
        <div className="w-64 h-[500px] gap-2 flex flex-col">
          <div className="w-full h-[12em] flex gap-2 justify-between">
            <div>
              <img
                className="animate-slow_spin"
                src="assets\img\elements\elements15.png"
                alt=""
              />
            </div>
            <motion.div
              variants={{
                initial: { opacity: 0, y: 200 },
                animate: { opacity: 1, y: 0 },
                hover: { y: 10 },
              }}
              whileHover={"hover"}
              whileInView={"animate"}
              initial="initial"
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="min-w-[9em] h-full flex gap-1 overflow-hidden rounded-md"
            >
              <img
                className="w-full h-full object-cover"
                src="/assets/img/all-images/testimonial-img10.png"
                alt=""
              />
            </motion.div>
          </div>

          <motion.div
            variants={{
              initial: { opacity: 0, y: 200 },
              animate: { opacity: 1, y: 0 },
              hover: { y: 10 },
            }}
            whileHover={"hover"}
            whileInView={"animate"}
            initial="initial"
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-red-50 h-full w-full overflow-hidden rounded-md"
          >
            <img
              className="w-full h-full object-cover"
              src="\assets\img\all-images\case-img3.png"
              alt=""
            />
          </motion.div>
        </div>

        <div className="w-full h-full">
          <div className="w-fit">
            <img
              className="animate-slow_spin"
              src="assets/img/elements/elements5.png"
              alt=""
            />
          </div>
          <motion.div
            variants={{
              initial: { opacity: 0, y: 200 },
              animate: { opacity: 1, y: 0 },
              hover: { y: 10 },
            }}
            whileInView={"animate"}
            initial="initial"
            whileHover={"hover"}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-56 w-full overflow-hidden rounded-md"
          >
            <img
              className="w-full object-cover"
              src="/assets/img/all-images/case-img12.png"
            />
          </motion.div>
        </div>
      </section>

      <section className="w-fit h-full flex-shrink flex flex-col justify-center space-y-6 text-center lg:!text-start">
        <div className="space-y-3">
          <motion.h1
            variants={variantsText}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", stiffness: 40, mass: 1, delay: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold"
          >
            We Provide All Kinds of Consulting Services
          </motion.h1>
          <motion.p
            variants={variantsText}
            initial="initial"
            whileInView={"animate"}
            transition={{ type: "spring", stiffness: 120, mass: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="opacity-70 font-semibold"
          >
            Our mission is to deliver high-quality consulting services across
            multiple industries.
          </motion.p>
        </div>

        <div className="mt-6">
          <motion.h1
            variants={variantsText}
            initial="initial"
            whileInView={"animate"}
            transition={{ type: "spring", stiffness: 120, mass: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl font-bold "
          >
            Our Mission & Vision
          </motion.h1>
          <div className="space-y-2 opacity-70 font-semibold">
            <motion.p
              variants={variantsText}
              initial="initial"
              whileInView={"animate"}
              transition={{
                type: "spring",
                stiffness: 120,
                mass: 1,
                delay: 0.5,
              }}
              viewport={{ once: true }}
              className="mt-3"
            >
              We have over 20 years of experience helping businesses grow.
            </motion.p>
            <motion.p
              variants={variantsText}
              initial="initial"
              whileInView={"animate"}
              transition={{
                type: "spring",
                stiffness: 120,
                mass: 1,
                delay: 0.6,
              }}
              viewport={{ once: true }}
            >
              Our team of experts provides solutions tailored to your needs.
            </motion.p>
          </div>
        </div>

        <Button className="bg-gradient-to-r from-primary h-[50px] w-fit to-primary-foreground text-white">
          Learn More About
        </Button>
      </section>

      {/* effect  */}
      <motion.img
        variants={{
          initial: { opacity: 0, x: 200, rotateZ: "-90deg" },
          animate: { opacity: 1, x: 0 },
        }}
        whileInView={"animate"}
        initial="initial"
        transition={{ type: "spring", stiffness: 120 }}
        className="absolute right-0 h-full object-cove -rotate-90 -z-30"
        src="/assets/img/bg/inner-bg1.png"
        alt=""
      />
      {/* <motion.img
        variants={{
          initial: { opacity: 0, x: 200,rotateY:"380deg" },
          animate: { opacity: 1, x: 0 },
        }}
        whileInView={"animate"}
        initial="initial"
        transition={{ type: "spring", stiffness: 120 }}
        className="absolute right-0 h-full object-cove -rotate-90 -z-30"
        src="/assets/img/bg/header-bg6.png"
        alt=""
      /> */}

      <motion.img
        variants={{
          initial: { opacity: 0, x: -200, rotateZ: "90deg" },
          animate: { opacity: 1, x: 0 },
        }}
        whileInView={"animate"}
        initial="initial"
        transition={{ type: "spring", stiffness: 120 }}
        className="absolute left-0 h-full object-cove -rotate-180 -z-30"
        src="/assets/img/bg/inner-bg1.png"
        alt=""
      />
    </div>
  );
}

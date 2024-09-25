import { motion } from "framer-motion";
export default function Testimonials_Section() {
  return (
    <div className="container_1 w-full mt-10 lg:mt-28 relative">
      <div className="text-3xl text-center relative font-bold flex gap-10 justify-between">
        <div className="w-full lg:w-1/3 font-bold leading-normal">
          OUR TRACK RECORD OF CPMLETED{" "}
          <span className="text-primary underline">CONSULTING</span> PROJECTS.
        </div>

        <div className="w-52 h-52 hidden lg:block">
          <img
            className="w-full animate-moveUpDone"
            src="\assets\img\elements\elements8.png"
            alt=""
          />
        </div>
        <img
          className="absolute top-0 animate-slow_spin -z-10 w-10"
          src="\assets\img\elements\star1.png"
          alt=""
        />
        <img
          className="absolute bottom-0 right-0 animate-moveUpDown -z-10 w-10"
          src="\assets\img\elements\star1.png"
          alt=""
        />
      </div>
      <div className="mt-10 w-full gap-4 lg:gap-16 grid grid-cols-1  lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            variants={{
              init: { opacity: 0, y: 100 },
              show: { opacity: 1, y: 0 },
            }}
            initial="init"
            transition={{
              duration: 1,
              ease: "easeInOut",
              type: "spring",
              damping: 20,
              stiffness: 300,
              mass: 1,
              precision: 0.01,
              restDelta: 0.01,
              delay: 0.3 * i,
            }}
            whileInView={"show"}
            viewport={{ once: true }}
          >
            <div className=" bg-red-500 h-60 overflow-hidden rounded-lg w-full">
              <img
                className="object-cover w-full h-full"
                src={"/assets/img/all-images/testimonial-img10.png"}
                alt=""
              />
            </div>
            <div className="flex justify-between mt-4">
              <h1 className="text-2xl fony-bold">
                Business Process Optimiztion
              </h1>
              <a className="opacity-70 cursor-pointer text-xl -rotate-45">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
export default function Testimonials_Section() {
  return (
    <div className="container_1 w-full mt-10 lg:mt-28 relative space-y-8">
      <div className="text-3xl relative font-bold flex gap-10 justify-center ">
        <h1 className="w-full lg:w-1/2 text-center font-bold  leading-relaxed justify-self-center">
          OUR TRACK RECORD OF CPMLETED{" "}
          <span className="text-primary underline">CONSULTING</span> PROJECTS.
        </h1>

        <div className="w-52 h-52 absolute right-0 hidden lg:block">
          <img
            className="w-full animate-moveUpDone"
            src="\assets\img\elements\elements8.png"
            alt=""
          />
        </div>
        <img
          className="absolute top-0 left-0 animate-slow_spin -z-10 w-10"
          src="\assets\img\elements\star1.png"
          alt=""
        />
        <img
          className="absolute bottom-0 right-0 animate-moveUpDown -z-10 w-10"
          src="\assets\img\elements\star1.png"
          alt=""
        />
      </div>

      <div className="w-full gap-4 lg:gap-16 grid grid-cols-1  lg:grid-cols-3">
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
              stiffness: 120,
              mass: 1,
              delay: 0.2 * i,
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
              <h1 className="text-2xl fony-bold w-1/2">
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

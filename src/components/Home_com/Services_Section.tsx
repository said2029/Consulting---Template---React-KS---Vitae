import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function Services_Section() {
  const ref = useRef<HTMLDivElement|any>();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"],
  });
  const value = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      style={{
        scale: value,
        y: scrollYProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="w-full container_1 flex h-fit flex-col justify-center items-center mt-10 lg:mt-28  overflow-hidden"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">We Offer Consultancy Services</h1>
        <p className="opacity-70 mt-2">
          We help businesses grow through strategic consulting in various
          domains.
        </p>
      </div>
      <div className="flex justify-between w-full items-start gap-4 mt-16 overflow-y-hidden overflow-x-auto">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.section
            key={i+1}
            variants={{
              init: { opacity: 0, y: 100 },
              show: { opacity: 1, y: 0 },
            }}
            whileInView="show"
            initial="init"
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 * i }}
            className="flex flex-col w-[200px] items-center justify-center gap-3"
          >
            <div className="overflow-hidden rounded-full">
              <div className="bg-gray-600 w-44 h-44">
                <img
                  className="w-full h-full"
                  src="/assets/img/all-images/testimonial-img10.png"
                  alt=""
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-center">Agency Consulting</h3>
            <p className="text-sm opacity-70 text-center">
              Professional advice to help agencies succeed.
            </p>
            <div className="flex justify-center cursor-pointer transition-all hover:-rotate-12 items-center bg-primary rounded-full text-white p-3">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}

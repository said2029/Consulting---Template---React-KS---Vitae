import { motion } from "framer-motion";
import { MouseEffect } from "./Contact_Section";
import { useRef } from "react";
const variantsUp = {
  initial: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0 },
};
export default function About_Section_2() {
  const ref= useRef(null)
  return (
    <div className="sticky h-[100vh] top-0">
      <div ref={ref} className="relative overflow-hidden w-screen h-full text-black">
        <div className="w-full h-full bg-[#c63b1e] pt-[50px] ">
          <div className="w-full text-center lg:!text-start h-full font-sans font-semibold flex flex-col justify-evenly sm:justify-between px-3 lg:py-6 lg:px-7">
            <motion.p
              variants={variantsUp}
              initial="initial"
              whileInView="show"
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-3xl md:text-6xl font-[Rambla] max-w-7xl"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              facere aperiam eum molestiae, harum dolorem asperiores ea natus,
              quasi
            </motion.p>

            <p className="md:text-2xl max-w-5xl opacity-70">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              facere aperiam eum molestiae, harum dolorem asperiores ea natus,
              quasi illum tempore ratione quisquam, excepturi eos architecto
              fugiat. Maiores, quod expedita! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Id facere aperiam eum molestiae,
              harum dolorem asperiores ea natus, quasi illum tempore ratione
              quisquam, excepturi eos architecto fugiat. Maiores, quod expedita!
            </p>
          </div>
        </div>
        <div className="absolute h-fit top-1/2 bottom-1/2 right-1/2 left-1/2 md:right-24 m-auto">
          <MouseEffect Ref_perantEffect={ref}/>
        </div>
        <hr className="h-[2px] bg-white w-full border-none top-0 absolute" />
      </div>
    </div>
  );
}

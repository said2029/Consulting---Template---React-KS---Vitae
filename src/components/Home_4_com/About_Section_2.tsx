import { motion } from "framer-motion";
import { MouseEffect } from "./Contact_Section";
const variantsUp = {
  initial: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0 },
};
export default function About_Section_2() {
  return (
    <div className="sticky h-[100vh] top-0">
      <div className="flex flex-col items-center justify-between w-full h-full text-black ">
        <div className="w-full h-full bg-[#c63b1e] pt-[50px] ">
          <div className="w-full h-full font-sans font-semibold flex flex-col justify-between py-3 px-7">
            <motion.p
              variants={variantsUp}
              initial="initial"
              whileInView="show"
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-6xl font-[Rambla] max-w-7xl"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              facere aperiam eum molestiae, harum dolorem asperiores ea natus,
              quasi
            </motion.p>

            <p className="text-2xl max-w-5xl">
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
        <div className="w-full h-full absolute top-3 z-50 ">
          <MouseEffect />
        </div>
        <hr className="h-[2px] bg-white w-full border-none top-0 absolute" />
      </div>
    </div>
  );
}

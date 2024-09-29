import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Button_Hover from "../globle/Button_Hover";

export default function Contact_Section() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const moveUp = useTransform(scrollYProgress, [0, 1], [3000, -100]);
  const Rotate = useTransform(scrollYProgress, [0, 1], [-60, 30]);
  return (
    <div
      ref={ref}
      className="w-full h-[500vh] flex flex-col justify-center items-center relative"
    >
      <div className="flex flex-col bg-[#c63b1e] w-full h-[100vh] items-center justify-center sticky top-0 text-black pt-[50px]">
        <div className="w-full h-full grid grid-cols-2 text-[32px] ">
          <section className="h-ful flex flex-col relative justify-center w-full px-3 py-5">
            <div className="absolute top-6">
              <h1 className="text-white text-xl font-semibold opacity-30 ">
                . Contact
              </h1>
              <p className="lg:max-w-xs font-semibold mt-3">
                Brand strategy Brand identity Graphic design Art direction
                Copywriting
              </p>
            </div>

            <p className="text-2xl font-semibold max-w-2xl">
              We do the whole enchilada. Full brand experiences. Highly
              functional, killer design, clear messaging. So that users will
              know what to do. Just by looking. Intuitive design, that s what
              the cool kids call it. We just call it common sense though.
            </p>
          </section>
          <section className="h-full relative w-full flex justify-center items-center">
            <hr className="w-full border-none bg-white h-[2px]  absolute" />
            <hr className="h-full border-none top-0 bg-white w-[2px] absolute" />
          </section>
        </div>
        <hr className="h-[100vh] bg-white w-[2px] border-none top-0 absolute" />
        <hr className="h-[2px] bg-white w-full border-none top-0 absolute" />
        <motion.div
          style={{ y: moveUp, rotateZ: Rotate }}
          className="absolute right-1/2 left-1/2 -translate-x-1/4 w-fit mx-auto flex justify-center"
        >
          <Button_Hover href="/contact" text="contact" />
        </motion.div>
      </div>
    </div>
  );
}

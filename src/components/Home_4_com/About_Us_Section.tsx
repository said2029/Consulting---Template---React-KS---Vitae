import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Button_Hover from "../globle/Button_Hover";
import { useRef, useState } from "react";
const variantsUp = {
  initial: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0 },
};

const ShowText = ({ text }: { text: string }) => {
  return (
    <h1 className="text-3xl max-w-4xl items-center transition-all justify-center lg:text-4xl xl:text-5xl font-bold flex flex-wrap">
      {text.split("").map((c, index) => {
        if (c == " ") return <div className="w-4 pointer-events-none"></div>;
        return (
          <motion.span
            variants={{
              initial: { opacity: 0, top: 30 },
              show: { opacity: 1, top: 0 },
              exit: { opacity: 0, top: -30 },
            }}
            initial="initial"
            whileInView={"show"}
            exit={"exit"}
            viewport={{ once: true }}
            transition={{ duration: 0.1, delay: 0.03 * index }}
            key={index}
            className="pointer-events-none"
          >
            {c}
          </motion.span>
        );
      })}
    </h1>
  );
};

export default function About_Us_Section() {
  const [CardNumber, setNumber] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const showCardNumber = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const moveUp = useTransform(scrollYProgress, [0, 1], [1700, -1000]);
  const moveUpImages = useTransform(scrollYProgress, [0, 1], [270, -100]);
  const Rotate = useTransform(scrollYProgress, [0, 1], [-50, 60]);

  useMotionValueEvent(showCardNumber, "change", (value) => {
    setNumber(Math.floor(value));
  });

  return (
    <div ref={ref} className="w-full text-white h-[4000px] ">
      {/* sticky */}
      <div className="w-full h-[200px] lg:h-[500px] sticky top-0 pt-[60px]">
        <div className="flex flex-col text-center items-center relative h-full w-full">
          <motion.h2
            variants={variantsUp}
            initial="initial"
            whileInView={"show"}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h2 max-w-3xl"
          >
            Committed to Your Business Success
          </motion.h2>
          <motion.h2
            variants={variantsUp}
            initial="initial"
            whileInView={"show"}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[18px] lg:text-[24px] max-w-3xl"
          >
            Driven by innovation and experience, we provide the expertise to
            help your business thrive
          </motion.h2>

          <motion.div
            style={{ y: moveUp, rotateZ: Rotate }}
            className="absolute"
          >
            <Button_Hover href="/about" text="about" />
          </motion.div>

          <div className="absolute top-1/2 pointer-events-none bottom-1/2 my-auto translate-y-44">
            <AnimatePresence>
              {CardNumber == 1 && (
                <ShowText text="Proven track record of driving business growth" />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {CardNumber == 2 && (
                <ShowText text="Customized solutions designed for your business needs" />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {CardNumber == 3 && (
                <ShowText text="A team of experienced consultants committed to your success" />
              )}
            </AnimatePresence>
          </div>

          {/* images */}
          <motion.div className="w-full h-full pointer-events-none hidden md:block" style={{y:moveUpImages}}>
            <div className="w-40 bg-red-500 h-40 rounded-2xl absolute -top-40 right-4 shadow-md"><img className="w-full h-full object-cover" src="/assets/img/all-images/post-img1.png"/></div>
            <div className="w-40 bg-red-500 h-40 rounded-2xl absolute -bottom-28 left-4 shadow-md"><img className="w-full h-full object-cover" src="/assets/img/all-images/post-img2.png"/></div>
            <div className="w-28 opacity-70 bg-red-500 h-28 rounded-2xl absolute -top-32 left-40 shadow-md"><img className="w-full h-full object-cover" src="/assets/img/all-images/post-img3.png"/></div>
            <div className="w-20 bg-red-500 h-20 opacity-65 rounded-2xl absolute -bottom-16 right-40 shadow-md"><img className="w-full h-full object-cover" src="/assets/img/all-images/post-img4.png"/></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

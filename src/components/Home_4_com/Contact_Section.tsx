import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button_Hover from "../globle/Button_Hover";

export const MouseEffect = () => {
  // effect Mouse Move 3D
  const [mouseValue, setMouseValue] = useState({ x: 0, y: 0 });
  const Ref_perantEffect = useRef<HTMLElement>(null);
  const MouseMove = (e: MouseEvent) => {
    if (Ref_perantEffect.current)
      setMouseValue({
        x: e.clientX - Ref_perantEffect.current?.clientWidth,
        y: e.clientY - Ref_perantEffect.current?.clientHeight/2,
      });
  };
  const Mouseleave = () => {
    setMouseValue({ x: 0, y: 0 });
  };
  useEffect(() => {
    Ref_perantEffect?.current?.addEventListener("mousemove", MouseMove);
    Ref_perantEffect?.current?.addEventListener("mouseleave", Mouseleave);
    return () => {
      Ref_perantEffect?.current?.removeEventListener("mousemove", MouseMove);
      Ref_perantEffect?.current?.removeEventListener("mouseleave", Mouseleave);
    };
  }, []);

  return (
    <section
      ref={Ref_perantEffect}
      className="h-full relative w-full flex justify-center items-center"
    >
      <div className="relative flex items-center justify-center opacity-45 [&_div]:duration-700 [&_div]:transition-all [&_div]:ease-linear">
        <div
          className="border absolute border-white/40 w-[9vh] h-[9vh]"
          style={{
            willChange: "transform",
            transform: `translate3d(${mouseValue.x * 0.4}px, ${
              mouseValue.y * 0.4
            }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            opacity: 1,
          }}
        />
        <div
          className="border absolute border-white/40 w-[18vh] h-[18vh]"
          style={{
            willChange: "transform",
            transform: `translate3d(${mouseValue.x * 0.3}px, ${
              mouseValue.y * 0.3
            }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            opacity: 1,
          }}
        />
        <div
          className="border absolute w-[27vh] h-[27vh]"
          style={{
            willChange: "transform",
            transform: `translate3d(${mouseValue.x * 0.2}px, ${
              mouseValue.y * 0.2
            }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            opacity: 1,
          }}
        />
        <div
          className="border absolute border-blue-500 w-[36vh] h-[36vh]"
          style={{
            willChange: "transform",
            transform: `translate3d(${mouseValue.x * 0.1}px, ${
              mouseValue.y * 0.1
            }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
            opacity: 1,
          }}
        />
        <div
          className="border border-white/20 w-[45vh] h-[45vh] "
          style={{ opacity: 1 }}
        />
      </div>

      <hr className="w-full border-none bg-white h-[2px]  absolute" />
      <hr className="h-full border-none top-0 bg-white w-[2px] absolute" />
    </section>
  );
};

export default function Contact_Section() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const moveUp = useTransform(scrollYProgress, [0, 1], [1000, -500]);
  const Rotate = useTransform(scrollYProgress, [0, 1], [-60, 30]);
  return (
    <div
      ref={ref}
      className="w-full h-[500vh] flex flex-col justify-center items-center relative"
    >
      <div className="flex flex-col bg-[#c63b1e] w-full h-[100vh] items-center justify-center sticky top-0 text-black pt-[50px]">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 text-[30px] lg:text-[32px] ">
          <section className="h-ful flex flex-col relative justify-between w-full px-3 py-5">
            <div className="">
              <h1 className="text-white text-xl font-semibold opacity-30 ">
                . Contact
              </h1>
              <p className="lg:max-w-xs font-semibold mt-3">
                Brand strategy Brand identity Graphic design Art direction
                Copywriting
              </p>
            </div>

            <p className="text-xl lg:text-2xl font-semibold max-w-2xl">
              We do the whole enchilada. Full brand experiences. Highly
              functional, killer design, clear messaging. So that users will
              know what to do. Just by looking. Intuitive design, that s what
              the cool kids call it. We just call it common sense though.
            </p>
          </section>
          {/* Animation move mouse component is in top, hover and ctrl + enter to open */}
          <MouseEffect />
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

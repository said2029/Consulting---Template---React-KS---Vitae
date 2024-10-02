import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button_Hover from "../globle/Button_Hover";

export const MouseEffect = ({
  Ref_perantEffect,
  reduce = 1,
}: {
  Ref_perantEffect?: React.RefObject<HTMLElement>;
  reduce?: number;
}) => {
  // effect Mouse Move 3D
  const [mouseValue, setMouseValue] = useState({ x: 0, y: 0 });

  const MouseMove = (e: MouseEvent) => {
    if (Ref_perantEffect?.current) {
      const react = Ref_perantEffect.current.getBoundingClientRect();
      setMouseValue({
        x: e.clientX - (react.left + react.width / 2),
        y: e.clientY - (react.top + react.height / 2),
      });
    } else {
      setMouseValue({
        x: e.clientX - window.innerWidth,
        y: e.clientY - window.innerHeight,
      });
    }
  };
  const Mouseleave = () => {
    setMouseValue({ x: 0, y: 0 });
  };
  useEffect(() => {
    if (Ref_perantEffect) {
      Ref_perantEffect?.current?.addEventListener("mousemove", MouseMove);
      Ref_perantEffect?.current?.addEventListener("mouseleave", Mouseleave);
      return () => {
        Ref_perantEffect?.current?.removeEventListener("mousemove", MouseMove);
        Ref_perantEffect?.current?.removeEventListener(
          "mouseleave",
          Mouseleave
        );
      };
    } else {
      window.addEventListener("mousemove", MouseMove);
      window.addEventListener("mouseleave", Mouseleave);
      return () => {
        window.removeEventListener("mousemove", MouseMove);
        window.removeEventListener("mouseleave", Mouseleave);
      };
    }
  }, []);

  return (
    <div className="relative flex items-center justify-center opacity-45 [&_div]:duration-700 [&_div]:transition-all [&_div]:ease-linear">
      <div
        className="border rounded-full absolute border-white/40 w-[9vh] h-[9vh]"
        style={{
          willChange: "transform",
          transform: `translate3d(${mouseValue.x * 0.4}px, ${
            mouseValue.y * 0.4
          }px, 0px) scale3d(${1 * reduce}, ${1 * reduce}, ${
            1 * reduce
          }) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
          opacity: 1,
        }}
      />
      <div
        className="border rounded-full  absolute border-white/40 w-[18vh] h-[18vh]"
        style={{
          willChange: "transform",
          transform: `translate3d(${mouseValue.x * 0.3}px, ${
            mouseValue.y * 0.3
          }px, 0px) scale3d(${1 * reduce}, ${1 * reduce}, ${
            1 * reduce
          }) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
          opacity: 1,
        }}
      />
      <div
        className="border rounded-full  absolute w-[27vh] h-[27vh]"
        style={{
          willChange: "transform",
          transform: `translate3d(${mouseValue.x * 0.2}px, ${
            mouseValue.y * 0.2
          }px, 0px) scale3d(${1 * reduce}, ${1 * reduce}, ${
            1 * reduce
          }) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
          opacity: 1,
        }}
      />
      <div
        className="border rounded-full  absolute border-blue-500 w-[36vh] h-[36vh]"
        style={{
          willChange: "transform",
          transform: `translate3d(${mouseValue.x * 0.1}px, ${
            mouseValue.y * 0.1
          }px, 0px) scale3d(${1 * reduce}, ${1 * reduce}, ${
            1 * reduce
          }) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: "preserve-3d",
          opacity: 1,
        }}
      />
      <div
        className="border rounded-full  border-white/20 w-[42vh] h-[42vh] "
        style={{ opacity: 1, scale: 0.3 * reduce }}
      />
    </div>
  );
};

export default function Contact_Section() {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const moveUp = useTransform(scrollYProgress, [0, 1], [1000, -400]);
  const Rotate = useTransform(scrollYProgress, [0, 1], [-60, 30]);
  return (
    <div ref={ref}  className="w-screen h-[500vh]">
      <div ref={ref2} className="flex flex-col bg-[#c63b1e] sticky top-0 w-full h-[100vh] items-center justify-center text-black pt-[50px]">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 text-[30px] lg:text-[32px]">
          {/* Animation move mouse component is in top, hover and ctrl + enter to open */}
          <section className="h-full relative w-full flex justify-center items-center">
            <MouseEffect Ref_perantEffect={ref2} />
            <hr className="w-full border-none bg-white h-[2px]  absolute" />
            <hr className="h-full border-none top-0 bg-white w-[2px] absolute" />
          </section>
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
        </div>

        <hr className="h-[100vh] bg-white w-[2px] border-none top-0 absolute" />
        <hr className="h-[2px] bg-white w-full border-none top-0 absolute" />
        <motion.div
          style={{ y: moveUp, rotateZ: Rotate }}
          className="absolute w-fit mx-auto flex justify-center"
        >
          <Button_Hover href="/contact" text="contact" />
        </motion.div>
      </div>
    </div>
  );
}

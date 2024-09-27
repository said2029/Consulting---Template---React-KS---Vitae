import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import NavBar from "../Home_3_com/NavBar";
import HeroSection from "../Home_3_com/HeroSection";
import Services_Section from "../Home_3_com/Services_Section";
import About_Us_Section from "../Home_3_com/About_Us_Section";

function Home_3() {
  const [numberScrolle, SetNumberScrolle] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });
  const value = useTransform(scrollYProgress, [0, 1], [0, 8]);
  useMotionValueEvent(value, "change", (value) => {
    // console.log(Math.floor(value));
    SetNumberScrolle(Math.floor(value));
  });
  return (
    <div className="text-white">
      <NavBar />
      <div ref={ref} className="w-full h-[1600em]">
        {numberScrolle >= 0 && <HeroSection />}

        <Services_Section indexView={numberScrolle} />

        <About_Us_Section indexView={numberScrolle}/>


        {numberScrolle >= 3 && (
          <div className="w-full h-[100vh] bg-zinc-600 sticky top-0">
            {}
          </div>
        )}
        {numberScrolle >= 4 && (
          <div className="w-full h-[100vh] bg-purple-600 sticky top-0">
            {}
          </div>
        )}
        {numberScrolle >= 5 && (
          <div className="w-full h-[100vh] bg-orange-500 sticky top-0">
            {}
          </div>
        )}
        {numberScrolle >= 6 && (
          <div className="w-full h-[100vh] bg-pink-500 sticky top-0">
            {}
          </div>
        )}
        {numberScrolle >= 7 && (
          <div className="w-full h-[100vh] bg-teal-950 sticky top-0">
            {}
          </div>
        )}
        {/* {numberScrolle == 8 && (
          <div className="w-full h-[100vh] bg-blue-600 sticky top-0">
            {numberScrolle}
          </div>
        )} */}
      </div>

      <div className="fixed top-0">{numberScrolle}</div>
      {/* footer */}

      <div className="h-[100vh] bg-blue-400 w-full"></div>
    </div>
  );
}

export default Home_3;

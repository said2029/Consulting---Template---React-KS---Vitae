import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

function Home_3() {
  const [numberScrolle, SetNumberScrolle] = useState(0);
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });
  const value = useTransform(scrollYProgress, [0, 1], [1, 9]);
  useMotionValueEvent(value, "change", (value) => {
    console.log(Math.floor(value));
    SetNumberScrolle(Math.floor(value));
  });
  return (
    <div>
      <div ref={ref} className="w-full h-[600em] bg-red-600">
        {numberScrolle == 0 && (
          <div className="w-full h-[100vh] bg-orange-400 sticky top-0">
            {numberScrolle}
          </div>
        )}
        {numberScrolle == 1 && (
          <div className="w-full h-[100vh] bg-teal-400 sticky top-0">
            {numberScrolle}
          </div>
        )}
        {numberScrolle == 2 && (
          <div className="w-full h-[100vh] bg-teal-200 sticky top-0">
            {numberScrolle}
          </div>
        )}
        {numberScrolle == 3 && (
          <div className="w-full h-[100vh] bg-zinc-600 sticky top-0">
            {numberScrolle}
          </div>
        )}
        {numberScrolle == 4 && (
          <div className="w-full h-[100vh] bg-purple-600 sticky top-0">
            {numberScrolle}
          </div>
        )}
        {numberScrolle == 5 && (
          <div className="w-full h-[100vh] bg-orange-500 sticky top-0">
            {numberScrolle}
          </div>
        )}
        {numberScrolle == 6 && (
          <div className="w-full h-[100vh] bg-pink-500 sticky top-0">
            {numberScrolle}
          </div>
        )}
        {numberScrolle == 7 && (
          <div className="w-full h-[100vh] bg-teal-950 sticky top-0">
            {numberScrolle}
          </div>
        )}
        {numberScrolle == 8 && (
          <div className="w-full h-[100vh] bg-blue-600 sticky top-0">
            {numberScrolle}
          </div>
        )}


      </div>

      <div className="h-[100vh] bg-blue-400 w-full"></div>
    </div>
  );
}

export default Home_3;

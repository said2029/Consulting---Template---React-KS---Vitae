import { useState } from "react";
import { useAnimate } from "framer-motion";
import { Link } from "react-router-dom";

export default function Get_started() {
  const [step, setStep] = useState(0);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [scope, animate] = useAnimate();

  const steps = [
    {
      text: "Click here to grow!",
    },
    {
      text: "Not now, try again",
    },
    {
      text: "Nope, not yet! try to click here once again",
    },
    {
      text: "Try to click now",
    },
  ];

  const HandilClick = () => {
    if (step < steps.length - 1) setStep(step + 1);
    if (step < 2) {
      setPos(getRandomPosition());
      animate(scope.current, {
        top: pos.y + "%",
        left: pos.x + "%",
        transition: { duration: 0.4 },
      });
    } else {
      animate(scope.current, {
        top: "auto",
        left: "auto",
        transition: { duration: 0.4 },
      });
    }
  };

  return (
    <div className="w-screen overflow-hidden h-[100vh] bg-[#c63b1e] flex justify-center items-center text-center flex-col gap-2">
      <h1 className="h1 -translate-y-36 font-bold font-['Bungee'] text-white">
        Want to boost sales?
      </h1>

      <Link to={"/contact"}
        ref={scope}
        onMouseOver={HandilClick}
        className={`shadow_Button hidden md:block min-w-80 absolute h-fit text-white rounded-full py-4 px-16 shadow-inner m-auto`}
      >
        {steps[step].text}
      </Link>

      <a
        className={`shadow_Button block md:hidden min-w-80 absolute text-white rounded-full py-4 px-16 shadow-inner transform m-auto`}
      >
        Click here to grow!
      </a>
    </div>
  );
}
function getRandomPosition() {
  // Get random positions within the page dimensions
  const randomTop = Math.floor(Math.random() * 99); // Random value between 0 and H
  const randomLeft = Math.floor(Math.random() * 99); // Random value between 0 and W

  return { x: randomTop, y: randomLeft };
}

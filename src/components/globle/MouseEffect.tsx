import { useEffect, useRef } from "react";

export default function MouseEffect() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref_CoursePointer = useRef<HTMLElement | any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref_CoursePoint = useRef<HTMLElement | any>(null);

  const HandelMouseMove = (e: MouseEvent) => {
    const KeyFrame = {
      transform: `translate(${e.clientX - 20}px,${e.clientY - 20}px)`,
    };
    const KeyFramePoint = {
      transform: `translate(${e.clientX - 5}px,${e.clientY - 5}px)`,
    };

    ref_CoursePointer.current?.animate(KeyFrame, {
      duration: 1000,
      ease: "easeInOut",
      fill: "forwards",
    });
    ref_CoursePoint.current?.animate(KeyFramePoint, {
      duration: 2000,
      ease: "easeInOut",
      fill: "forwards",
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", HandelMouseMove);

    return () => {
      window.removeEventListener("mousemove", HandelMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={ref_CoursePointer}
        className="fixed pointer-events-none top-0 left-0 w-[40px] z-50 h-[40px] border border-primary rounded-full"
      ></div>
      <span
        className="fixed pointer-events-none top-0 left-0 w-[10px] z-50 h-[10px] border border-primary rounded-full"
        ref={ref_CoursePoint}
      ></span>
    </>
  );
}

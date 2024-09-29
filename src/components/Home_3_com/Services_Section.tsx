import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Button_Hover from "../globle/Button_Hover";
import { useRef } from "react";

const CardsContant = [
  {
    title: "Business Strategy & Planning",
    desc: "Develop a clear, actionable plan to achieve sustainable growth and long-term success.",
    img: "assets/img/all-images/case-img21.png",
  },
  {
    title: "Digital Transformation",
    desc: "Leverage cutting-edge technology to modernize operations and stay ahead of the competition.",
    img: "assets/img/all-images/case-img10.png",
  },
  {
    title: "Market Analysis & Research",
    desc: "Gain valuable insights with data-driven market research to make informed business decisions.",
    img: "assets/img/all-images/case-img12.png",
  },
];

const Card = ({
  scrollYProgress,
  card,
}: {
  scrollYProgress: any;
  card: any;
}) => {
  const randomeY = useRef(Math.floor(Math.random() * 50) + 50);
  const moveUp = useTransform(
    scrollYProgress,
    [0, 1],
    [randomeY.current, Math.floor(Math.random() * 20) - 700]
  );
  return (
    <motion.div
      style={{ y: moveUp }}
      variants={{
        initial: {
          opacity: 1,
          y: randomeY.current,
        },
        animate: { opacity: 1, y: 0 },
      }}
      initial="initial"
      exit="exit"
      transition={{ duration: 1, ease: "easeInOut" }}
      className="h-fit md:h-72 w-full md:w-[230px] bg-white rounded-xl text-black shadow-2xl px-2 py-9 lg:py-2 flex gap-3 md:gap-0 flex-col items-center text-center justify-between"
    >
      <div className="rounded-full hidden md:block w-32 h-32 overflow-hidden">
        <img className="w-full h-full object-cover" src={card.img} />
      </div>
      <h1 className="text-xl font-bold">{card.title}</h1>
      <hr className="border-primary border-2 w-full" />
      <p className="text-sm">{card.desc}</p>
    </motion.div>
  );
};

export default function Services_Section({ indexView }: { indexView: number }) {
  const { scrollYProgress } = useScroll();

  return (
    <AnimatePresence>
      {indexView >= 1 && (
        <motion.div
          variants={{
            initial: { scale: 0, rotate: 50 },
            animate: { scale: 1, rotate: 0 },
            exit: { scale: 0, y: [0, 100], rotate: -50 },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="md:w-full h-[100vh] bg-blue-400 backdrop-blur-xl bg-[url('/assets/img/all-images/case-img8.png')] bg-no-repeat bg-cover sticky top-0 flex justify-center items-center"
        >
          {/* content */}
          <div className="w-full h-full flex justify-center lg:justify-start items-center relative backdrop-blur-2xl">
            <div className="grid grid-cols-1 gap-11 px-3 md:grid-cols-3 md:gap-2 lg:px-4 xl:ml-10 xl:gap-7">
              {CardsContant.map((card, index) => {
                return <Card key={card.desc+index} card={card} scrollYProgress={scrollYProgress} />;
              })}
            </div>
            <Button_Hover href="/service" text="services" />

            {/* Main title */}
            <motion.h1
              variants={{
                initial: { opacity: 0, y: 50, scaleY: 1.4 },
                animate: { opacity: 1, y: 0, scaleY: 1 },
              }}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.9 }}
              className="text-4xl lg:text-7xl font-thin absolute bottom-4 left-4 uppercase"
            >
              Our Expertise, Your Growth
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

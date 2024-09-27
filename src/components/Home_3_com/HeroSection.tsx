import { useScroll, useTransform, motion } from "framer-motion";

const variantsPopUp = {
  initial: { opacity: 0, y: 200 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut", delay: 4 },
  },
};

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const sm = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -1500]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  return (
    <div className="bg-[url('/assets/img/all-images/heroImage.jpg')] w-full h-[100vh] bg-orange-400 sticky top-0">
      <div className="bg-opacity-75 backdrop-blur-xl bg-cover w-full h-full flex justify-center items-center">
        <motion.h1
        style={{scale:scale,y:sm}}
          variants={variantsPopUp}
          initial="initial"
          animate="animate"
          className="text-white z-40 text-6xl font-bold drop-shadow-xl shadow-black max-w-4xl leading-relaxed text-center"
        >
          Empowering{" "}
          <span className="text-primary font-extrabold">Businesses</span> to
          Thrive in a Digital Age
        </motion.h1>

        {/* images */}
        <div className="absolute [&_div]:shadow-2xl top-0 w-full h-full flex justify-center items-center">
          <motion.div
            variants={variantsPopUp}
            initial="initial"
            animate="animate"
            style={{ y: sm }}
            className="w-40 h-40 rounded-md absolute top-36 right-64 overflow-hidden bg-no-repeat bg-cover bg-[url('/assets/img/all-images/post-img2.png')] "
          ></motion.div>
          <motion.div
            variants={variantsPopUp}
            initial="initial"
            animate="animate"
            style={{ y: lg }}
            className=" w-36 h-36 rounded-md absolute bottom-44 right-28 overflow-hidden bg-no-repeat bg-cover bg-[url('/assets/img/all-images/post-img1.png')] "
          ></motion.div>
          <motion.div
            variants={variantsPopUp}
            initial="initial"
            animate="animate"
            style={{ y: md }}
            className=" w-32 h-32 rounded-md absolute bottom-44 left-28 overflow-hidden bg-no-repeat bg-cover bg-[url('/assets/img/all-images/post-img3.png')] "
          ></motion.div>
          <motion.div
            variants={variantsPopUp}
            initial="initial"
            animate="animate"
            style={{ y: sm }}
            className=" w-32 h-32 rounded-md absolute top-44 left-60 overflow-hidden bg-no-repeat bg-cover bg-[url('/assets/img/all-images/post-img4.png')] "
          ></motion.div>
          <motion.div
            variants={variantsPopUp}
            initial="initial"
            animate="animate"
            style={{ y: md }}
            className=" w-24 h-24 rounded-md absolute bottom-80 left-96 overflow-hidden bg-no-repeat bg-cover bg-[url('/assets/img/all-images/blog-img5.png')] "
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

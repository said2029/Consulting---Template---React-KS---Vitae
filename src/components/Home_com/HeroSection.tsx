import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="w-full text-center flex gap-8 items-center container_1 justify-center bg-cover relative flex-col pt-28 h-[400px] lg:h-[550px] bg-no-repeat bg-[url('/assets/img/bg/header-bg1.png')]">
      <h1 className="text-4xl lg:text-5xl font-extrabold">
        We Are a <span className="text-primary">Consulting</span> Agency
      </h1>
      <h3 className="font-semibold text-[20px]">
        Helping businesses achieve greater success.
      </h3>
      <Button
        size={"lg"}
        className="text-white h-[50px] bg-gradient-to-r from-primary to-primary-foreground font-semibold w-fit cursor-pointer z-20"
      >
        Get Started
      </Button>

      <motion.div
        variants={{
          ini: { opacity: 0, scale: 0 },
          anim: { opacity: 1, scale: 2 },
        }}
        initial="ini"
        animate="anim"
        transition={{ duration: 1, damping: 5, type: "spring", delay: 0.5 }}
        className="absolute h-[500px] w-[500px]"
      >
        <img
          className="w-full h-full"
          src="assets\img\bg\header-imgbg3.png"
          alt=""
        />
      </motion.div>
      <motion.div
        variants={{
          ini: { opacity: 0, scale: 0 },
          anim: { opacity: 1, scale: 1 },
        }}
        initial="ini"
        animate="anim"
        transition={{ duration: 1, damping: 5, type: "spring", delay: 0.6 }}
        className="absolute h-[500px] w-[500px]"
      >
        <img
          className="w-full h-full"
          src="assets\img\bg\header-imgbg.png"
          alt=""
        />
      </motion.div>

      {/* elemants */}
      <img
        className="absolute left-0 animate-moveUpDown"
        src="\assets\img\elements\elements1.png"
        alt=""
      />
      <motion.img
        variants={{
          initial: { top: "7rem" },
          animate: { top: "6rem" },
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          
        }}
        animate={"animate"}
        className="absolute w-40 -rotate-45 right-80 top-28  -scale-x-100"
        src="assets\img\elements\elements2.png"
        alt=""
      />

      <img className="absolute top-0 right-0 z-10 pointer-events-none" src="\assets\img\bg\cta-bg5.png" alt="" />
    </div>
  );
}

// bg-no-repeat bg-cover bg-[url('/assets/img/bg/header-bg1.png')]

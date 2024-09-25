import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="w-full flex gap-8 items-center container_1 justify-center bg-cover relative flex-col pt-28 h-[550px] bg-no-repeat bg-[url('/assets/img/bg/header-bg1.png')]">
      <h1 className="text-5xl font-extrabold">
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


    </div>
  );
}

// bg-no-repeat bg-cover bg-[url('/assets/img/bg/header-bg1.png')]

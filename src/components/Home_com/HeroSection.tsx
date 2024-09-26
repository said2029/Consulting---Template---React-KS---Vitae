import { motion } from "framer-motion";

const Text_Variants = {
  ini: { opacity: 0, scale: 10 },
  anim: { opacity: 1, scale: 1 },
};

export default function HeroSection() {
  return (
    <div className="w-screen overflow-hidden text-center flex gap-8 items-center container_1 justify-center bg-cover relative flex-col pt-28 h-[400px] lg:h-[700px] bg-no-repeat bg-[url('/assets/img/bg/header-bg1.png')]">
      <motion.h1
        variants={Text_Variants}
        initial="ini"
        animate="anim"
        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        className="text-4xl lg:text-8xl z-10 font-bold"
      >
        We Are a <span className="text-primary">Consulting</span> Agency
      </motion.h1>

      <motion.h3
        variants={{
          ini: { opacity: 0, scale: 0 },
          anim: { opacity: 1, scale: 1 },
        }}
        initial="ini"
        animate="anim"
        transition={{ type: "spring", delay: 0.5, ease: "easeInOut" }}
        className="font-semibold text-[20px]"
      >
        Helping businesses achieve greater success.
      </motion.h3>

      <motion.a
        variants={{
          ini: { opacity: 0, scale: 0 },
          anim: { opacity: 1, scale: 1 },
        }}
        initial="ini"
        animate="anim"
        transition={{ type: "spring", delay: 0.8, ease: "easeInOut" }}
        href="/contact"
        className="text-white h-[50px] bg-gradient-to-r from-primary to-primary-foreground w-fit flex items-center cursor-pointer z-30 px-8 rounded-full"
      >
        Get Started
      </motion.a>

      <motion.div
        variants={{
          ini: { opacity: 0, scale: 0 },
          anim: { opacity: 1, scale: 2 },
        }}
        initial="ini"
        animate="anim"
        transition={{ stiffness: 120, type: "spring", delay: 0.6 }}
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
        transition={{ stiffness: 120, type: "spring", delay: 0.7 }}
        className="absolute  h-[500px] w-[500px]"
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
        className="absolute w-40 -rotate-45 right-80 top-28  -scale-x-100 hidden lg:block"
        src="assets\img\elements\elements2.png"
        alt=""
      />

      <img
        className="absolute top-0 right-0 -z-10 pointer-events-none"
        src="\assets\img\bg\cta-bg5.png"
        alt=""
      />

    </div>
  );
}

// bg-no-repeat bg-cover bg-[url('/assets/img/bg/header-bg1.png')]

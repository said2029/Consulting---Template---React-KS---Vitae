import { motion } from "framer-motion";
const variantsPup = {
  initial: { opacity: 0, y: 45 },
  animate: { opacity: 1, y: 0 },
};
function Footer() {
  return (
    <div className="w-full relative rounded-b-[3em] bg-white h-[500px] flex flex-col justify-between items-center mt-16 overflow-hidden">
      <div className="absolute top-1/2 bottom-1/2 my-auto w-full flex flex-col items-center justify-center gap-7">
        <motion.h1
          variants={variantsPup}
          initial="initial"
          whileInView={"animate"}
          transition={{ duration: 1 }}
          className="text-8xl font-bold text-black "
        >
          LOGO
        </motion.h1>
        <motion.a

          variants={variantsPup}
          initial="initial"
          whileInView={"animate"}
          transition={{ duration: 1 }}
          className="shadow_Button hover:scale-150 cursor-pointer transition-all text-white rounded-full py-4 px-16 shadow-inner "
        >
          Get Started
        </motion.a>
      </div>
      <div className="w-full bg-black py-10 flex justify-between px-12">
        <motion.ul
          variants={{
            initial: { opacity: 0, x: -100},
            animate: { opacity: 1, x: 0 },
          }}
          initial="initial"
          whileInView={"animate"}
          transition={{ duration: 1 }}
          className="flex w-full gap-5"
        >
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </motion.ul>

        <motion.ul
          variants={{
            initial: { opacity: 0, x: 100 },
            animate: { opacity: 1, x: 0 },
          }}
          initial="initial"
          whileInView={"animate"}
          transition={{ duration: 1 }}
          className="flex gap-2 text-nowrap"
        >
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </motion.ul>
      </div>
    </div>
  );
}

export default Footer;

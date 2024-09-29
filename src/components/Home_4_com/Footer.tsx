import { motion } from "framer-motion";
const variantsPup = {
  initial: { opacity: 0, y: 45 },
  animate: { opacity: 1, y: 0 },
};
function Footer() {
  return (
    <div className="w-full relative h-[500px] flex flex-col justify-end items-center overflow-hidden bg-[#c63b1e]">
      <div className="absolute top-24 bottom-1/2 my-auto w-full flex flex-col items-center justify-center gap-7">
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
            initial: { opacity: 0, x: -100 },
            animate: { opacity: 1, x: 0 },
          }}
          initial="initial"
          whileInView={"animate"}
          transition={{ duration: 1 }}
          className="flex w-full flex-wrap gap-2 md:gap-5 text-white"
        >
          <li>
            <a className="text-white" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="text-white" href="/service">
              Services
            </a>
          </li>
          <li>
            <a className="text-white" href="/blog">
              Blog
            </a>
          </li>
          <li>
            <a className="text-white" href="/contact">
              Contact Us
            </a>
          </li>
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
      <hr className="absolute top-0 w-full border-white"/>
    </div>
  );
}

export default Footer;

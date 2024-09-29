import { motion } from "framer-motion";
const variantsPup = {
  initial: { opacity: 0, y: 45 },
  animate: { opacity: 1, y: 0 },
};
function Footer() {
  return (
    <div className="w-full relative h-[500px] grid grid-cols-3 overflow-hidden bg-[#c63b1e]">
      <div className="my-auto col-span-2 w-full hidden lg:flex flex-col items-center justify-center gap-7 ">
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
          href="/contact"
          variants={variantsPup}
          initial="initial"
          whileInView={"animate"}
          transition={{ duration: 1 }}
          className="shadow_Button hover:scale-150 cursor-pointer transition-all text-white rounded-full py-4 px-16 shadow-inner "
        >
          Get Started
        </motion.a>
      </div>

      <div className="w-full col-span-full lg:col-span-1 bg-black py-10 flex justify-between flex-col gap-6 px-2 md:!px-12">
        <div>
          <motion.ul
            variants={{
              initial: { opacity: 0, x: -100 },
              animate: { opacity: 1, x: 0 },
            }}
            initial="initial"
            whileInView={"animate"}
            transition={{ duration: 1 }}
            className="flex w-full gap-2 justify-between md:gap-5 text-white"
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
          <div className="w-full grid grid-cols-2 mt-10 md:mt-10">
            <ul className="flex flex-col gap-3">
              <li className="navItem">
                <a href="">Lorem_ipsum</a>
              </li>
              <li className="navItem">
                <a href="">Lorem_ipsum</a>
              </li>
              <li className="navItem">
                <a href="">Lorem_ipsum</a>
              </li>
              <li className="navItem">
                <a href="">Lorem_ipsum</a>
              </li>
              <li className="navItem">
                <a href="">Lorem_ipsum</a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="navItem">
                <a href="">Lorem_ipsum</a>
              </li>
              <li className="navItem">
                <a href="">Lorem_ipsum</a>
              </li>
              <li className="navItem">
                <a href="">Lorem_ipsum</a>
              </li>
              <li className="navItem">
                <a href="">Lorem_ipsum</a>
              </li>
              <li className="navItem">
                <a href="">Lorem_ipsum</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="opacity-70 flex flex-col justify-between gap-1">
          <h2 className="text-sm ">
            © 2023 Your_Company_Name. All rights reserved.
          </h2>
          <div>
            <a href="mailto:info@bemotion.i">info@bemotion.in</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="">Privacy Policy</a>
            <a href="">Fueled is carbon neutral</a>
          </div>
        </div>
      </div>
      <hr className="absolute top-0 w-full border-white" />
    </div>
  );
}

export default Footer;

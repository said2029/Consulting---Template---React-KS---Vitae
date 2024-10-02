import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const variantsPup = {
  initial: { opacity: 0, y: 45 },
  animate: { opacity: 1, y: 0 },
};
function Footer() {
  return (
    <div className="w-full relative bg-[#c63b1e]">
      <div className="w-full relative h-[500px] grid grid-cols-3 overflow-hidden !text-white bg-black">
        <div className="my-auto col-span-2 w-full h-full hidden relative lg:flex flex-col items-center justify-center gap-7 ">
          <div className="bg-black opacity-65 absolute top-0 w-full h-full ">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="./assets/video.mp4" type="video/mp4"></source>
            </video>
          </div>
          <motion.h1
            variants={variantsPup}
            initial="initial"
            whileInView={"animate"}
            transition={{ duration: 1 }}
            className="text-8xl z-50 font-bold text-black "
          >
            <img className="w-72" src="/assets/img/logo.png" />
          </motion.h1>
          <Link
            to="/get_started"
            className="shadow_Button z-50 hover:scale-105 cursor-pointer transition-all text-white rounded-full py-4 px-16 shadow-inner "
          >
            Get Started
          </Link>
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
                <Link className="text-white" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/service">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/contact">
                  Contact Us
                </Link>
              </li>
            </motion.ul>
            <div className="w-full grid grid-cols-2 mt-10 md:mt-10">
              <ul className="flex flex-col gap-3">
                <li className="navItem">
                  <Link to="">Lorem_ipsum</Link>
                </li>
                <li className="navItem">
                  <Link to="">Lorem_ipsum</Link>
                </li>
                <li className="navItem">
                  <Link to="">Lorem_ipsum</Link>
                </li>
                <li className="navItem">
                  <Link to="">Lorem_ipsum</Link>
                </li>
                <li className="navItem">
                  <Link to="">Lorem_ipsum</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li className="navItem">
                  <Link to="">Lorem_ipsum</Link>
                </li>
                <li className="navItem">
                  <Link to="">Lorem_ipsum</Link>
                </li>
                <li className="navItem">
                  <Link to="">Lorem_ipsum</Link>
                </li>
                <li className="navItem">
                  <Link to="">Lorem_ipsum</Link>
                </li>
                <li className="navItem">
                  <Link to="">Lorem_ipsum</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="opacity-70 flex flex-col justify-between gap-1">
            <h2 className="text-sm ">
              © 2023 Your_Company_Name. All rights reserved.
            </h2>
            <div className="mt-2">
              <a href="mailto:info@bemotion.i">info@bemotion.in</a>
              <div className="flex items-center gap-2">
                <Link to="">Privacy Policy</Link>
                <Link to="">Fueled is carbon neutral</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-20 flex flex-wrap justify-between items-center px-3">
        <motion.ul
          variants={{
            initial: { opacity: 0, x: -100 },
            animate: { opacity: 1, x: 0 },
          }}
          initial="initial"
          whileInView={"animate"}
          transition={{ duration: 1 }}
          className="flex gap-2 md:gap-5 text-white"
        >
          <li>
            <Link className="text-white" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/service">
              Services
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/contact">
              Contact Us
            </Link>
          </li>
        </motion.ul>
        <motion.ul
          variants={{
            initial: { opacity: 0, x: -100 },
            animate: { opacity: 1, x: 0 },
          }}
          initial="initial"
          whileInView={"animate"}
          transition={{ duration: 1 }}
          className="flex gap-2 md:gap-5 text-white"
        >
          <li>
            <Link className="text-white" to="/about">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className="text-white" to="/service">
              Privacy Policy
            </Link>
          </li>
        </motion.ul>
      </div>
      <hr className="absolute top-0 w-full border-white" />
    </div>
  );
}

export default Footer;

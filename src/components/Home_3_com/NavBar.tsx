import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { motion } from "framer-motion";

const variantMobileButtons = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0 },
};
export default function NavBar() {
  return (
    <div>
      <div className="fixed top-0 w-full hidden md:flex overflow-hidden z-40 justify-between items-center [&>a]:text-white py-3 font-bold px-10 text-white text-2xl [&_a]:drop-shadow-lg shadow-gray-800">
        <a className="navItems" href="/">
          Logo
        </a>
        <a className="navItems" href="/">
          Home
        </a>
        <a className="navItems" href="/about">
          About
        </a>
        <a className="navItems" href="/">
          Blog
        </a>
        <a className="navItems" href="/">
          Services
        </a>
        <a className="navItems" href="/">
          Contact
        </a>
      </div>
      {/* mobil */}
      <div className="fixed top-0  z-[100] w-full flex md:hidden justify-between items-center p-4">
        <h1 className="text-2xl font-bold drop-shadow-lg shadow-black text-white"><a href="/">LOGO</a> </h1>
        <Sheet>
          <SheetTrigger className="font-buld text-xl drop-shadow-lg">
            Menu
          </SheetTrigger>
          <SheetContent
            className="w-full z-[120] flex flex-col justify-between"
            side={"left"}
          >
            <h1 className="drop-shadow-md font-extrabold text-6xl">LOGO</h1>
            <div>
              <ul className="text-4xl space-y-3 ">
                <motion.li
                  variants={variantMobileButtons}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 1 }}
                >
                  <a href="/"> HOME</a>
                </motion.li>
                <motion.li
                  variants={variantMobileButtons}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 1, delay: 0.1 }}
                >
                  <a href="/about">ABOUT</a>
                </motion.li>
                <motion.li
                  variants={variantMobileButtons}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <a href="/blog">BLOG</a>
                </motion.li>
                <motion.li
                  variants={variantMobileButtons}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <a href="/">CONTACT</a>
                </motion.li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

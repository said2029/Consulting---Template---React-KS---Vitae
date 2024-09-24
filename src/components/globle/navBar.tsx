import { ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";

const Card_Home_Items = () => {
  const [HoverCard, setHover] = useState(false);
  return (
    <div
      onMouseLeave={() => {
        setHover(false);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      className="Card_home_element_nav relative overflow-hidden rounded-md shadow-md cursor-pointer"
    >
      <div className="pointer-events-none">
        <img src="assets/img/all-images/demo-img1.png" alt="" />
      </div>

      <motion.div
        variants={{
          normal: { opacity: 0, y: "-34px" },
          hover: { opacity: 1, y: 0 },
        }}
        initial="normal"
        animate={HoverCard ? "hover" : "normal"}
        transition={{ duration: 0.5, ease: "circInOut" }}
        className="text-nowrap w-full h-full flex flex-col justify-center items-center absolute top-0 mx-auto z-10"
      >
        <a className="header-btn1" href="index.html">
          Multi Page{" "}
          <span>
            <i className="fa-solid fa-arrow-right" />
          </span>
        </a>
        <div className="space16" />
        <a className="header-btn1" href="single-index1.html" target="_blank">
          One Page{" "}
          <span>
            <i className="fa-solid fa-arrow-right" />
          </span>
        </a>
      </motion.div>

      <motion.div
        variants={{
          normal: { opacity: 0, scale:"50%" },
          hover: { opacity: 1, scale:"100%" },
        }}
        initial="normal"
        animate={HoverCard ? "hover" : "normal"}
        transition={{ duration: 0.2, ease: "linear" }}
        className="bg-black/85 absolute w-full h-full top-0"
      ></motion.div>
    </div>
  );
};

export default function NavBar() {
  const { scrollY } = useScroll();
  const [ValueScroll, setValueScroll] = useState(0);
  useMotionValueEvent(scrollY, "change", (value) => {
    console.log(value);
    setValueScroll(value);
  });
  return (
    <>
      <header
        className={clsx("hidden w-screen lg:block z-10 py-3 fixed px-main", {
          "bg-white": ValueScroll > 50,
          navBar_animation: ValueScroll > 50,
        })}
      >
        <nav className="w-full items-center flex justify-between ">
          <div className="site-logo">
            <a href="/">
              <img src="assets/img/logo/logo1.png" alt="" />
            </a>
          </div>

          <ul className="flex font-semibold text-[18px] justify-center opacity-90 gap-6  items-center flex-grow">
            <li>
              <HoverCard closeDelay={0.6} openDelay={0}>
                <HoverCardTrigger className="flex cursor-pointer items-center justify-center gap-1">
                  Home <ChevronDown strokeWidth={1.25} />
                </HoverCardTrigger>
                <HoverCardContent className="w-[70em] bg-white overflow-y-scroll mx-8 gap-3 grid grid-cols-5 z-40">
                  {Array.from({ length: 10 }).map(() => (
                    <Card_Home_Items />
                  ))}
                </HoverCardContent>
              </HoverCard>
            </li>
            <li>
              <a href={"/about"}>About</a>
            </li>
            <li>
              <HoverCard openDelay={0}>
                <HoverCardTrigger className="flex cursor-pointer items-center justify-center gap-1">
                  Services <ChevronDown strokeWidth={1.25} />
                </HoverCardTrigger>
                <HoverCardContent>
                  <ul className=" flex flex-col gap-2">
                    <li className="hover:border-s-4 transition-all border-primary px-3">
                      <a href="/service1">Service One</a>
                    </li>
                    <li className="hover:border-s-4 transition-all border-primary px-3">
                      <a href="/service2">Service Two</a>
                    </li>
                    <li className="hover:border-s-4 transition-all border-primary px-3">
                      <a href="/service3">Service three</a>
                    </li>
                    <li className="hover:border-s-4 transition-all border-primary px-3">
                      <a href="/service4">Service Four</a>
                    </li>
                    <li className="hover:border-s-4 transition-all border-primary px-3">
                      <a href="/service5">Service Five</a>
                    </li>
                  </ul>
                </HoverCardContent>
              </HoverCard>
            </li>
            <li>
              <HoverCard openDelay={0}>
                <HoverCardTrigger className="flex cursor-pointer items-center justify-center gap-1">
                  Blogs <ChevronDown strokeWidth={1.25} />
                </HoverCardTrigger>
                <HoverCardContent>
                  <ul className=" flex flex-col gap-2">
                    <li className="hover:border-s-4 transition-all border-primary px-3">
                      <a href="/blog">Blog One</a>
                    </li>
                    <li className="hover:border-s-4 transition-all border-primary px-3">
                      <a href="/blog-left">Blog Left</a>
                    </li>
                    <li className="hover:border-s-4 transition-all border-primary px-3">
                      <a href="/blog-right">Blog Right</a>
                    </li>
                    <li className="hover:border-s-4 transition-all border-primary px-3">
                      <a href="/blog-single">Blog Single</a>
                    </li>
                  </ul>
                </HoverCardContent>
              </HoverCard>
            </li>
            <li>Pages</li>
            <li>
              <a href="/contact">Contact Us</a>{" "}
            </li>
          </ul>

          <div className="flex gap-3 items-center text-white">
            <Sheet>
              <SheetTrigger>
                <div className="pointer-events-auto">
                  <img src="assets/img/icons/search-icons1.svg" alt="" />
                </div>
              </SheetTrigger>
              <SheetContent
                className="h-[50%] flex justify-center items-center px-main"
                side={"top"}
              >
                <div className="w-full flex">
                  <form role="search" className="w-full flex">
                    <input
                      type="search"
                      className="w-full text-3xl font-semibold"
                      placeholder="Search …"
                      defaultValue=""
                      name="s"
                    />
                    <button type="submit" className="search-submit">
                      <img src="assets/img/icons/search-icons1.svg" alt="" />
                    </button>
                  </form>
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex text-wrap xl:flex-nowrap">
              <a href="/contact" className="header-btn1">
                Free Consultation
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </a>
            </div>
          </div>
        </nav>
      </header>
      {/* mobile */}

      <div className="py-3 fixed top-0 z-10 bg-white w-screen lg:hidden">
        <div className="container_1-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <a href="/">
                  <img src="assets/img/logo/logo1.png" alt="" />
                </a>
              </div>
              <div className="mobile-nav-icon dots-menu">
                <i className="fa-solid fa-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

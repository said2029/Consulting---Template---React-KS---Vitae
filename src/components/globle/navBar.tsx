import { ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

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
        <a className="header-btn1" href="/">
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
          normal: { opacity: 0, scale: "50%" },
          hover: { opacity: 1, scale: "100%" },
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

      <div className="py-3 w-full px-3 fixed top-0 z-10 bg-white lg:hidden">
        <div className="container_1-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <a href="/">
                  <img src="assets/img/logo/logo1.png" alt="" />
                </a>
              </div>
              <Sheet>
                <SheetTrigger>
                  <div className="mobile-nav-icon dots-menu">
                    <i className="fa-solid fa-bars" />
                  </div>
                </SheetTrigger>
                <SheetContent
                  side={"left"}
                  className="w-full overflow-y-scroll"
                >
                  <SheetHeader>
                    <div className="logosicon-area">
                      <div className="logos">
                        <img src="assets/img/logo/logo1.png" alt="" />
                      </div>
                    </div>
                  </SheetHeader>
                  <div>
                    <section>
                      <Accordion className="space-y-0" type="single">
                        <AccordionItem value="Home-1">
                          <AccordionTrigger className="font-medium text-xl">
                            Home
                          </AccordionTrigger>
                          <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                        </AccordionItem>
                        <a className="font-medium text-xl">About</a>
                        <AccordionItem value="service-1">
                          <AccordionTrigger className="font-medium text-xl">
                            Service
                          </AccordionTrigger>
                          <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="blogs-1">
                          <AccordionTrigger className="font-medium text-xl">
                            Blogs
                          </AccordionTrigger>
                          <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="pages-1">
                          <AccordionTrigger className="font-medium text-xl">
                            Pages
                          </AccordionTrigger>
                          <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                        </AccordionItem>
                        <a className="font-medium text-xl">Contact Us</a>
                      </Accordion>
                    </section>
                  </div>

                  <div className="p-2 flex flex-col justify-center mt-4">
                    <a
                      href="/contact"
                      className="header-btn1 w-full flex items-center justify-center"
                    >
                      Get Started
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </a>
                    {/* Contact Info */}
                    <div className="mt-3">
                      <h1 className="font-bold text-2xl">Contact Info</h1>
                      <div className="mt-2 flex flex-col gap-2 font-semibold">
                        <a href="" className="space-x-2">
                          <i className="fa-solid fa-phone-volume"></i>
                          <span>info@example.com</span>
                        </a>
                        <a href="" className="space-x-2">
                          <i className="fa-solid fa-envelope"></i>
                          <span>+3(924)4596512</span>
                        </a>
                        <a href="" className="space-x-2">
                          <i className="fa-solid fa-phone-volume"></i>
                          <span>+3(924)4596512</span>
                        </a>
                      </div>
                    </div>
                    {/* Our Location */}
                    <div className="mt-3">
                      <h1 className="font-bold  text-2xl">Our Location</h1>
                      <a className="mt-2 flex flex-col gap-2 font-semibold">
                        55 East Birchwood Ave.Brooklyn, New York 11201,United
                        States
                      </a>
                    </div>
                    {/* Social Links */}
                    <div className="mt-3">
                      <h1 className="font-bold  text-2xl">Social Links</h1>
                      <div className="mt-3">
                        <a
                          href="/contact"
                          className="header-btn1 text-primary hover:text-white h-[2.40em] bg-white outline-[2px] outline outline-primary w-fit flex items-center justify-center"
                        >
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

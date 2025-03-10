import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";
import { Button } from "../ui/button";

export default function NavBar() {
  const { scrollY } = useScroll();
  const [ValueScroll, setValueScroll] = useState(0);
  useMotionValueEvent(scrollY, "change", (value) => {
    setValueScroll(value);
  });
  return (
    <>
      <header
        className={clsx(
          "hidden w-screen container_1 lg:block z-40 py-3 fixed",
          {
            "bg-white": ValueScroll > 50,
            navBar_animation: ValueScroll > 50,
          }
        )}
      >
        <nav className="w-full items-center flex justify-between ">
          <div className="site-logo">
            <a href="/">
              <img src="assets/img/logo/logo1.png" alt="" />
            </a>
          </div>

          <ul className="flex font-semibold text-[18px] justify-center opacity-90 gap-6  items-center flex-grow">
            <li>
              <a href={"/"}>Home</a>
            </li>
            <li>
              <a href={"/about"}>About</a>
            </li>
            <li>
              <a href={"/service"}>Service</a>
            </li>
            <li>
              <a href={"/blog"}> Blog</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>{" "}
            </li>
          </ul>

          <div className="flex gap-3 items-center text-white">
            {/* search */}
            {/* <Sheet>
              <SheetTrigger>
                <div className="pointer-events-auto">
                  <img src="assets/img/icons/search-icons1.svg" alt="" />
                </div>
              </SheetTrigger>
              <SheetContent
                className=" flex justify-center items-center px-main"
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
            </Sheet> */}
            <Button className="bg-gradient-to-r [&>:nth-child(2)]:hover:translate-x-2 duration-500 from-primary space-x-3 to-primary-foreground rounded-full h-[50px] text-white">
              <span> Free Consultation</span>
             
              <span className="transition-all">
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Button>
          </div>
        </nav>
      </header>
      {/* mobile */}

      <div className={clsx(
          "w-screen container_1 z-40 py-3 px-3 fixed top-0 lg:hidden",
          {
            "bg-white": ValueScroll > 50,
            navBar_animation: ValueScroll > 50,
          }
        )}>
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

                  <div className="mt-5">
                    <ul className="flex flex-col font-semibold text-[18px] justify-center opacity-90 gap-6 flex-grow">
                      <li>
                        <a href={"/"}>Home</a>
                      </li>
                      <li>
                        <a href={"/about"}>About</a>
                      </li>
                      <li>
                        <a href={"/service"}>Service</a>
                      </li>
                      <li>
                        <a href={"/blog"}>Blog</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>{" "}
                      </li>
                    </ul>
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

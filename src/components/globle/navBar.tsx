import { ChevronDown, Search } from "lucide-react";
import Logo from "./Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";

export default function NavBar() {
  const { scrollY } = useScroll();
  const [ValueScroll, setValueScroll] = useState(0);
  useMotionValueEvent(scrollY, "change", (value) => {
    console.log(value);
    setValueScroll(value);
  });
  return (
    <header
      className={clsx("w-full z-10 fixed top-0 p-main py-[16px]", {
        "bg-white": ValueScroll > 100,
      })}
    >
      <nav className="w-full items-center flex justify-evenly gap-32">
        <div>
          <Logo />
        </div>
        <ul className="flex font-semibold text-[18px] justify-center opacity-90 gap-6  items-center w-full">
          <li>
            <HoverCard openDelay={0}>
              <HoverCardTrigger className="flex cursor-pointer items-center justify-center gap-1">
                Home <ChevronDown strokeWidth={1.25} />
              </HoverCardTrigger>
              <HoverCardContent>marodfsd</HoverCardContent>
            </HoverCard>
          </li>
          <li>
            <a href={"/about"}>About</a>
          </li>
          <li>
            <HoverCard openDelay={0}>
              <HoverCardTrigger className="flex cursor-pointer items-center justify-center gap-1">Services <ChevronDown strokeWidth={1.25} /></HoverCardTrigger>
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
              <HoverCardTrigger className="flex cursor-pointer items-center justify-center gap-1">Blogs <ChevronDown strokeWidth={1.25} /></HoverCardTrigger>
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
          <li><a href="/contact" >Contact Us</a> </li>
        </ul>
        <div className="flex gap-3 items-center text-white">
          <Sheet>
            <SheetTrigger>
              <Search className="text-primary" />
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

          <div className=" flex text-nowrap">
            <div className="search-icon header__search header-search-btn">
              <img src="assets/img/icons/search-icons1.svg" alt="" />
            </div>
            <a href="/contact" className="header-btn1">
              Free Consultation{" "}
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

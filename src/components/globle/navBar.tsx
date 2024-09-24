import { ChevronDown, Search } from "lucide-react";
import Logo from "./Logo";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="w-full z-10 fixed top-0 p-main py-[16px]">
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
            <Link to={"/about"}>About</Link>
          </li>
          <li>Services </li>
          <li>Blogs </li>
          <li>Pages</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex items-center text-white">
          <Button variant={"ghost"}>
            <Search className="text-primary" />
          </Button>
          <Button
            size={"lg"}
            className="rounded-full h-[4em] transition-all hover:-translate-y-2 hover:[&_img]:rotate-180 space-x-2 flex justify-between text-white bg-gradient-to-r from-primary to-primary-foreground"
          >
            <span className="text-[18px] font-bold">Free Consultation </span>
            <img
              className="w-8 bg-white rounded-full p-2"
              src="/assets/img/icons/arrow.svg"
            />
          </Button>
        </div>
      </nav>
    </header>
  );
}

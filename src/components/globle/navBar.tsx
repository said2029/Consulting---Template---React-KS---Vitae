import { ChevronDown, Search } from "lucide-react";
import Logo from "./Logo";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <header className="w-full px-[150px] py-[16px]">
      <nav className="w-full items-center flex justify-evenly gap-32">
        <div>
          <Logo />
        </div>
        <ul className="flex font-sans text-[18px] opacity-90 font-medium items-center justify-between w-full">
          <li>
            <HoverCard openDelay={0}>
              <HoverCardTrigger className="flex cursor-pointer items-center justify-center gap-1">
                Hover <ChevronDown strokeWidth={1.25} />
              </HoverCardTrigger>
              <HoverCardContent>
                marodfsd
              </HoverCardContent>
            </HoverCard>
          </li>
          <li>About</li>
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
            className="rounded-full h-[4em] transition-all hover:h-[3.5em] hover:[&_img]:rotate-180 space-x-2 flex justify-between text-white bg-gradient-to-r from-primary to-primary-foreground"
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

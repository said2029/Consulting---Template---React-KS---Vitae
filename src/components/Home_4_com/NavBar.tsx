import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="sticky w-screen overflow-hidden top-0 z-50 bg-[rgb(198,59,30)] !text-white">
      <div className="flex w-screen flex-wrap md:flex-nowrap justify-center sm:justify-between gap-1 py-2 items-center px-4 md:h-[50px]">
        <a href="/" className="text-xl text-black font-bold font-[Bungee]">
          LOGO
        </a>
        <div className="flex items-center justify-center sm:gap-3 text-black  h-full">
          <ul className="flex justify-center gap-3 flex-wrap  mg:gap-4 font-xl uppercase">
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "navItemActive" : "navItem"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "navItemActive" : "navItem"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "navItemActive" : "navItem"
                }
              >
                blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/service"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "navItemActive" : "navItem"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "navItemActive" : "navItem"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <hr className="h-full bg-white w-[2px]" />
          <a href="tel://+918734803034" className="hidden md:block navItem">
            +918734803034
          </a>
        </div>
      </div>
      <hr className="border-1 border-white" />
    </div>
  );
}

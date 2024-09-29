export default function NavBar() {
  return (
    <div className="sticky w-screen overflow-hidden top-0 z-[9999] bg-[rgb(198,59,30)] !text-white">
      <div className="flex w-screen flex-wrap md:flex-nowrap justify-center sm:justify-between gap-1 py-2 items-center px-4 md:h-[50px]">
        <a href="/" className="text-xl text-black font-bold font-[Bungee]">
          LOGO
        </a>
        <div className="flex items-center justify-center sm:gap-3 text-black  h-full">
          <ul className="flex justify-center gap-3 flex-wrap  mg:gap-4 font-xl uppercase">
            <li>
              <a className="navItem" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="navItem" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="navItem" href="/blog">
                blog
              </a>
            </li>
            <li>
              <a className="navItem" href="/service">
                Services
              </a>
            </li>
            <li>
              <a className="navItem" href="/contact">
                Contact
              </a>
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

export default function NavBar() {
  return (
    <div className="fixed top-0 z-[9999] bg-[rgb(198,59,30)] !text-white">
      <div className="flex w-screen flex-wrap md:flex-nowrap justify-center sm:justify-between items-center py-1 px-4 md:h-[50px]">
        <a href="/" className="text-xl text-black font-bold font-[Bungee]">
          LOGO
        </a>
        <div className="flex items-center justify-center gap-3 text-black  h-full">
          <ul className="flex justify-center gap-3 mg:gap-4 font-xl uppercase">
            <li className="navItem ">
              <a href="/">Home</a>
            </li>
            <li className="navItem">
              <a href="/about">About</a>
            </li>
            <li className="navItem">
              <a href="/blog">blog</a>
            </li>
            <li className="navItem">
              <a href="/service">Services</a>
            </li>
            <li className="navItem">
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <hr className="h-full bg-white w-[2px]" />
          <a href="tel://+918734803034" className="hidden md:block navItem">+918734803034</a>
        </div>
      </div>
      <hr className="border-1 border-white" />
    </div>
  );
}

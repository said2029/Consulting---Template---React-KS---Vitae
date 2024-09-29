export default function NavBar() {
  return (
    <div className="fixed top-0 z-[9999] bg-[#c63b1e] w-full">
      <div className="flex justify-between items-center px-4 h-[50px]">
        <h1 className="text-xl font-bold font-[Bungee]">LOGO</h1>
        <div className="flex items-center justify-center gap-3  h-full">
          <ul className="flex justify-center gap-4 text-white font-xl">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <hr className="h-full bg-white w-[2px]" />
          <h1 >Get Started</h1>
        </div>
      </div>
      <hr className="border-1 border-white"/>
    </div>
  );
}

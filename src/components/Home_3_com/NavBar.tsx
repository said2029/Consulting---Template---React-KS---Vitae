import React from "react";

export default function NavBar() {
  return (
    <div className="fixed top-0 w-full hidden md:flex overflow-hidden z-40 justify-between items-center [&>a]:text-white py-3 font-bold px-10 text-white text-2xl [&_a]:drop-shadow-lg shadow-gray-800">
      <a className="navItems" href="/" >Logo</a>
      <a className="navItems" href="/" >Home</a>
      <a className="navItems" href="/about" >About</a>
      <a className="navItems" href="/" >Blog</a>
      <a className="navItems" href="/" >Services</a>
      <a className="navItems" href="/" >Contact</a>
    </div>
  );
}

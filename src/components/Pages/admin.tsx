import clsx from "clsx";
import { useState } from "react";
import Blog_controlle from "../Admin/blog_controlle";
import Contact_controlle from "../Admin/Contact_controlle";


export default function Admin() {
  const [section, setSection] = useState("blog");
  const changeSection = (newSection: string) => {
    setSection(newSection);
  };
  return (
    <div className="flex flex-col sm:flex-row">
      <aside className="bg-[#c63b1e]  w-screen overflow-hidden sm:w-52 sm:h-[100vh] px-3 flex-shrink-0 py-2">
        <div>
          <img src="/assets/img/logo.png" />
        </div>
        <hr className="mt-3" />
        <div className="w-full mt-6 text-white font-medium text-xl">
          <ul className="flex  sm:flex-col  gap-3">
            <li
              className={clsx("py-2 px-6", {
                "bg-white rounded-2xl text-black": section == "blog",
              })}
              onClick={() => changeSection("blog")}
            >
              Blogs
            </li>
            <li
              className={clsx("  py-2 px-6", {
                "bg-white rounded-2xl text-black": section == "contact",
              })}
              onClick={() => changeSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </aside>
      <section className="w-full">
        {/* Admin Section */}
        {section == "blog" ? <Blog_controlle /> : <Contact_controlle />}
      </section>
    </div>
  );
}

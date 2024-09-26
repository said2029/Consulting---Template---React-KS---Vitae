import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import About from "./components/Pages/About.tsx";
import Contact from "./components/Pages/Contact.tsx";
import Service_page from "./components/Pages/service/Service_page.tsx";
import Blog from "./components/Pages/blogs/blog.tsx";
import Home_2 from "./components/Pages/home_2.tsx";
import WebFont from "webfontloader";
import MouseEffect from "./components/globle/MouseEffect.tsx";
import Lenis from "lenis";

export default function App() {
  const lenis = new Lenis();

  useEffect(() => {
    // font
    WebFont.load({
      google: {
        families: ["Ubuntu", "Kanit", "Roboto"],
      },
    });

    // smoth scrolle

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home_2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service_page />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/*  mouse Curser */}
      <MouseEffect />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

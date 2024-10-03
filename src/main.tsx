import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import About from "./components/Pages/About.tsx";
import Contact from "./components/Pages/Contact.tsx";
import Service_page from "./components/Pages/Service_page.tsx";
import Blog from "./components/Pages/blog.tsx";
import WebFont from "webfontloader";
import MouseEffect from "./components/globle/MouseEffect.tsx";
import Home from "./components/Pages/Home.tsx";
import Get_started from "./components/Pages/get_started.tsx";
import Reloader from "./components/Reloader.tsx";
import Blog_detals from "./components/Pages/blog_detals.tsx";
// import Lenis from "lenis";

export default function App() {
  // const lenis = new Lenis();

  useEffect(() => {
    // smoth scrolle
    // function raf(time: number) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);
    // font
    WebFont.load({
      google: {
        families: ["Roboto", "Outfit", "Bungee", "Rambla"],
      },
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service_page />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog_detals />} />
            <Route path="/get_started" element={<Get_started />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* loading */}
      <Reloader />

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

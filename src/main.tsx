import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import About from "./components/Pages/About.tsx";
import Contact from "./components/Pages/Contact.tsx";
import Service_page from "./components/Pages/service/Service_page.tsx";
import Blog from "./components/Pages/blogs/blog.tsx";
import WebFont from "webfontloader";
import MouseEffect from "./components/globle/MouseEffect.tsx";
import Home_4 from "./components/Pages/Home_4.tsx";
import Get_started from "./components/Pages/get_started.tsx";

export default function App() {
  // const lenis = new Lenis();

  useEffect(() => {
    // font
    WebFont.load({
      google: {
        families: ["Roboto","Outfit","Bungee","Rambla"],
      },
    });

    // smoth scrolle

    // function raf(time: number) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home_4 />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service_page />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Get_Start" element={<Get_started />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* loading */}
      {/* <Reloader /> */}

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

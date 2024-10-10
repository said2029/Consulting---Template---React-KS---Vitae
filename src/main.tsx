import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import About from "./components/Pages/About.tsx";
import Contact from "./components/Pages/Contact.tsx";
import Service_page from "./components/Pages/Service_page.tsx";
import Blog from "./components/Pages/blog.tsx";
import WebFont from "webfontloader";
import Get_started from "./components/Pages/get_started.tsx";
import Reloader from "./components/Reloader.tsx";
import Blog_detals from "./components/Pages/blog_detals.tsx";
import Admin from "./components/Pages/admin.tsx";
import "react-quill/dist/quill.snow.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CursourEffect from "./components/globle/CursourEffect.tsx";
import Home_4 from "./components/Pages/home.tsx";
// import Lenis from "lenis";


export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Outfit", "Bungee", "Rambla"],
      },
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home_4 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service_page />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog_detals />} />
        <Route path="/get_started" element={<Get_started />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {/* loading */}
      <Reloader />

      {/*  mouse Curser */}
      <CursourEffect />
      <ToastContainer />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </StrictMode>
);

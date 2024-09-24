import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Pages/home.tsx";
import About from "./components/Pages/About.tsx";
import Contact from "./components/Pages/Contact.tsx";
import Service_page_1 from "./components/Pages/service/Service_page_1.tsx";
import Service_page_3 from "./components/Pages/service/Service_page_3.tsx";
import Service_page_4 from "./components/Pages/service/Service_page_4.tsx";
import Service_page_5 from "./components/Pages/service/Service_page_5.tsx";
import Service_page_2 from "./components/Pages/service/Service_page_2.tsx";
import Blogs_1 from "./components/Pages/blogs/blog.tsx";
import Blogs_2 from "./components/Pages/blogs/blog-left.tsx";
import Blogs_3 from "./components/Pages/blogs/blog-right.tsx";
import Blogs_4 from "./components/Pages/blogs/blog-single.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service1" element={<Service_page_1 />} />
          <Route path="service2" element={<Service_page_2 />} />
          <Route path="service3" element={<Service_page_3 />} />
          <Route path="service4" element={<Service_page_4 />} />
          <Route path="service5" element={<Service_page_5 />} />

          <Route path="blog" element={<Blogs_1 />} />
          <Route path="blog-left" element={<Blogs_2 />} />
          <Route path="blog-right" element={<Blogs_3 />} />
          <Route path="blog-single" element={<Blogs_4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import About from "./components/Pages/About.tsx";
import Contact from "./components/Pages/Contact.tsx";
import Service_page from "./components/Pages/service/Service_page.tsx";
import Blog from "./components/Pages/blogs/blog.tsx";
import Home_2 from "./components/Pages/home_2.tsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home_2 />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service_page />} />
          <Route path="blog" element={<Blog />} />
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

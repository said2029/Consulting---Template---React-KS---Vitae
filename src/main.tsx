import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./components/globle/navBar.tsx";
import Footer from "./components/globle/footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <Footer />
  </StrictMode>
);

import About_Section_2 from "../Home_com/About_Section_2";
import About_Us_Section from "../Home_com/About_Us_Section";
import Blog_Section from "../Home_com/Blog_Section";
import Contact_Section from "../Home_com/Contact_section";
import Footer from "../Home_com/Footer";
import Hero_Section from "../Home_com/Hero_Section";
import NavBar from "../Home_com/NavBar";
import Services_Section from "../Home_com/Services_Section";

export default function Home_4() {
  return (
    <div className="text-white bg-[#c63b1e]">
      <div className="h-fit">
        <NavBar />
        <Hero_Section />
        <Services_Section />
        <About_Us_Section />
        <Blog_Section />
        <div className="w-full h-[600vh] relative">
          <About_Section_2 />
          <Contact_Section />
          {/* <Contact_Section /> */}
        </div>

        <Footer />
      </div>
    </div>
  );
}

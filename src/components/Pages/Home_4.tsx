import About_Section_2 from "../Home_4_com/About_Section_2";
import About_Us_Section from "../Home_4_com/About_Us_Section";
import Blog_Section from "../Home_4_com/Blog_Section";
import Contact_Section from "../Home_4_com/Contact_Section";
import Footer from "../Home_4_com/Footer";
import Hero_Section from "../Home_4_com/Hero_Section";
import NavBar from "../Home_4_com/NavBar";
import Services_Section from "../Home_4_com/Services_Section";

export default function Home_4() {
  return (
    <div className="text-white bg-[#c63b1e]">
      <div className="h-fit rounded-[3em]">
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

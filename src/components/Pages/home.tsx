import About_Section_2 from "../Home_com/About_Section_2";
import About_Us_Section from "../Home_com/About_Us_Section";
import Blog_Section from "../Home_com/Blog_Section";
import Contact_Section from "../Home_com/Contact_Section";
import Footer from "../Home_com/Footer";
import Hero_Section from "../Home_com/Hero_Section";
import NavBar from "../Home_com/NavBar";
import Services_Section from "../Home_com/Services_Section";

export default function Home_4() {
  return (
    <div className="text-white bg-[#c63b1e]">
      {/*===== PROGRESS STARTS=======*/}
      <div className="paginacontainer">
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </div>
      {/*===== PROGRESS ENDS=======*/}
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

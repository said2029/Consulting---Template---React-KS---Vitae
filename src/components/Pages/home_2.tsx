import Footer from "../globle/footer";
import NavBar from "../globle/navBar";
import HeroSection from "../Home_com/HeroSection";

import Reloader from "../Reloader";
import Services_Section from "../Home_com/Services_Section";
import About_Us_Section from "../Home_com/About_Us_Section";
import Meet_Our_Team_section from "../Home_com/Meet_Our_Team_section";
import Testimonials_Section from "../Home_com/Testimonials_Section";
import What_Our_Clients from "../Home_com/What_Our_Clients";
import Blogs_section from "../Home_com/blogs_section";
import Contact_section from "../Home_com/Contact_section";

export default function Home_2() {
  return (
    <main className="min-w-full w-screen">
      {/*===== PRELOADER STARTS =======*/}
      <Reloader />
      {/*===== PROGRESS STARTS=======*/}
      <div className="paginacontainer_1">
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

      {/* Header */}
      <NavBar />
      {/* Hero Section */}
      <HeroSection />
      <div className="bg-white sticky h-fit w-full pt-3 shadow-2xl">
        {/* Services Section */}

        <Services_Section />

        {/* About Us Section */}
        <About_Us_Section />

        {/*  Meet Our Team */}

        <Meet_Our_Team_section />

        {/* Testimonials Section */}

        <Testimonials_Section />

        {/* What Our Clients Say */}

        <What_Our_Clients />

        {/* blogs */}

        <Blogs_section />

        {/* Contact */}
        <Contact_section />


        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </main>
  );
}

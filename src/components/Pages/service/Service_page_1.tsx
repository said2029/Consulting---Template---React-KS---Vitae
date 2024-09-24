import Footer from "@/components/globle/footer";
import NavBar from "@/components/globle/navBar";
import React from "react";

export default function Service_page_1() {
  return (
    <>
      {/*===== PRELOADER STARTS =======*/}
      <div className="preloader">
        <div className="loading-container_1">
          <div className="loading" />
          <div id="loading-icon">
            <img src="assets/img/logo/preloader.png" alt="" />
          </div>
        </div>
      </div>
      {/*===== PRELOADER ENDS =======*/}
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
      {/*=====HEADER START=======*/}
      <NavBar />

      {/*=====HEADER END =======*/}

      {/*===== HERO AREA STARTS =======*/}
      <div
        className="about-header-area"
        style={{
          backgroundImage: "url(assets/img/bg/inner-header.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src="assets/img/elements/elements1.png"
          alt=""
          className="elements1 aniamtion-key-1"
        />
        <img
          src="assets/img/elements/star2.png"
          alt=""
          className="star2 keyframe5"
        />
        <div className="container_1">
          <div className="row">
            <div className="col-lg-5 m-auto">
              <div className="about-inner-header heading9 text-center">
                <h1>Our Best Services</h1>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right" />{" "}
                  <span>Services</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== HERO AREA ENDS =======*/}
      {/*===== SERVICE AREA STARTS =======*/}
      <div className="service1-section-area sp2">
        <div className="container_1">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-all-boxes-area1">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="service-boxarea flex justify-between flex-col items-center h-full">
                      <a href="/service1">Search Engine Optimization ( SEO)</a>
                      <img src="assets/img/icons/service-icon1.svg" alt="" />
                      <p>
                        Enhance your online visibility &amp; drive organic
                        traffic with our advanced SEO techniques. We optimize
                        your website to rank higher.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="service-boxarea flex justify-between flex-col items-center h-full">
                      <a href="/service1">Pay-Per-Click (PPC) Advertising</a>
                      <div className="space40 relative" />
                      <img src="assets/img/icons/service-icon2.svg" alt="" />
                      <div className="space40 relative" />
                      <p>
                        Reach your audience instantly and drive qualified leads
                        with targeted PPC campaigns. Our experts craft
                        compelling ad copy and optimize.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="service-boxarea flex justify-between flex-col items-center h-full">
                      <a href="/service1">Social Media Marketing</a>
                      <div className="space66" />
                      <img src="assets/img/icons/service-icon3.svg" alt="" />
                      <div className="space40 relative" />
                      <p>
                        Build a strong brand presence and engage with your
                        audience on social media platforms. We create strategic
                        social media campaigns{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="service-boxarea flex justify-between flex-col items-center h-full">
                      <a href="/service1">Website Design and Development</a>
                      <div className="space40 relative" />
                      <img src="assets/img/icons/service-icon4.svg" alt="" />
                      <div className="space40 relative" />
                      <p>
                        Make a lasting impression with a professionally designed
                        and user-friendly website. Our web design and
                        development services ensure.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="service-boxarea flex justify-between flex-col items-center h-full">
                      <a href="/service1">Content Marketing</a>
                      <div className="space40 relative" />
                      <img src="assets/img/icons/service-icon15.svg" alt="" />
                      <div className="space40 relative" />
                      <p>
                        We craft compelling content that educates, entertains,
                        and inspires your audience, driving engagement and
                        building brand loyalty.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="service-boxarea flex justify-between flex-col items-center h-full">
                      <a href="/service1">Email Marketing</a>
                      <div className="space40 relative" />
                      <img src="assets/img/icons/service-icon16.svg" alt="" />
                      <div className="space40 relative" />
                      <p>
                        We design and implement effective email marketing
                        campaigns to nurture leads, promote products or
                        services, and drive conversions.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="service-boxarea flex justify-between flex-col items-center h-full">
                      <a href="/service1">Analytics And Reporting</a>
                      <div className="space40 relative" />
                      <img src="assets/img/icons/service-icon17.svg" alt="" />
                      <div className="space40 relative" />
                      <p>
                        We track and measure the performance of your digital
                        marketing campaigns using advanced analytics tools.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="service-boxarea flex justify-between flex-col items-center h-full">
                      <a href="/service1">One Page SEO Optimization</a>
                      <div className="space40 relative" />
                      <img src="assets/img/icons/service-icon18.svg" alt="" />
                      <div className="space40 relative" />
                      <p>
                        We optimize key on-page elements of your website,
                        including title tags, meta descriptions, headers, and
                        content with your target keywords.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== SERVICE AREA ENDS =======*/}
      {/*===== WORK AREA STARTS =======*/}
      <div className="works-inner-section-area sp10">
        <div className="container_1">
          <div className="row">
            <div className="col-lg-6">
              <div className="works-header-area heading2">
                <h5>Why Choose Us</h5>
                <h2>Experience the Advantage Why We're the Right Choice</h2>
                <p>
                  At SEOC we understand that you have many options when it comes
                  to digital marketing services. So why should you choose us?
                  Here are a few reasons
                </p>
                <div className="space32" />
                <div className="works-content-box">
                  <div className="icons">
                    <img src="assets/img/icons/works-icons7.svg" alt="" />
                  </div>
                  <div className="content">
                    <a href="case-single.html">Proven Result</a>
                    <p>
                      We have a track record of delivering tangible results for
                      our clients. From increasing website traffic and improving
                      search.{" "}
                    </p>
                  </div>
                </div>
                <div className="space20" />
                <div className="works-content-box">
                  <div className="icons">
                    <img src="assets/img/icons/works-icons8.svg" alt="" />
                  </div>
                  <div className="content">
                    <a href="case-single.html">Customized Solutions</a>
                    <p>
                      We believe that one size does not fit all when it comes to
                      digital marketing. That's why we take the time to
                      understand your SEO.{" "}
                    </p>
                  </div>
                </div>
                <div className="space20" />
                <div className="works-content-box">
                  <div className="icons">
                    <img src="assets/img/icons/works-icons9.svg" alt="" />
                  </div>
                  <div className="content">
                    <a href="case-single.html">Dedicated Support</a>
                    <p>
                      Your success is our top priority. That's why provide
                      dedicated support and guidance every step of the way to
                      running seo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-all-images-area">
                <img
                  src="assets/img/elements/elements14.png"
                  alt=""
                  className="elements12 keyframe5"
                />
                <img
                  src="assets/img/elements/elements15.png"
                  alt=""
                  className="elements13 keyframe5"
                />
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="img1 image-anime">
                      <div className="space100" />
                      <img src="assets/img/all-images/about-img6.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="img2 image-anime">
                      <img src="assets/img/all-images/about-img5.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== WORK AREA ENDS =======*/}
      {/*===== SKILLS AREA STARTS =======*/}
      <div className="skills-section-area sp2">
        <img
          src="assets/img/bg/cta-bg1.png"
          alt=""
          className="cta-bg1 aniamtion-key-2"
        />
        <img
          src="assets/img/bg/cta-bg2.png"
          alt=""
          className="cta-bg2 aniamtion-key-1"
        />
        <div className="container_1">
          <div className="row">
            <div className="col-lg-3 m-auto">
              <div className="skills-header text-center heading2">
                <h5>Skills</h5>
                <h2>Our Skills</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-10 m-auto">
            <div className="circle-progress-area">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="progresbar">
                    <div className="progressbar">
                      <div className="circle" data-percent={82}>
                        <canvas />
                        <div>82%</div>
                      </div>
                    </div>
                    <p>S M M</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="progresbar">
                    <div className="progressbar">
                      <div className="circle two" data-percent={49}>
                        <canvas />
                        <div>49%</div>
                      </div>
                    </div>
                    <p>P P C</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="progresbar">
                    <div className="progressbar">
                      <div className="circle three" data-percent={99}>
                        <canvas />
                        <div>99%</div>
                      </div>
                    </div>
                    <p>SEO</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="progresbar">
                    <div className="progressbar">
                      <div className="circle four" data-percent={95}>
                        <canvas />
                        <div>95%</div>
                      </div>
                    </div>
                    <p>Digital Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== SKILLS AREA ENDS =======*/}
      {/*===== TEAM AREA STARTS =======*/}
      <div className="team-inner-section-area sp2">
        <div className="container_1">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="team2-header-area text-center heading2">
                <h5>Our Team</h5>
                <h2>Meet With Our Expert Team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/team-img1.png" alt="" />
                </div>
                <ul>
                  <li>
                    <a href="#">
                      <img src="assets/img/icons/facebook.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/icons/instagram.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/icons/linkedin.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="m-0">
                      <img src="assets/img/icons/youtube.svg" alt="" />
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <a href="/team">John Doe</a>
                  <p>CEO &amp; Founder</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/team-img2.png" alt="" />
                </div>
                <ul>
                  <li>
                    <a href="#">
                      <img src="assets/img/icons/facebook.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/icons/instagram.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/icons/linkedin.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="m-0">
                      <img src="assets/img/icons/youtube.svg" alt="" />
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <a href="/team">Jane Smith</a>
                  <p>Digital Marketing Officer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/team-img3.png" alt="" />
                </div>
                <ul>
                  <li>
                    <a href="#">
                      <img src="assets/img/icons/facebook.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/icons/instagram.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/icons/linkedin.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="m-0">
                      <img src="assets/img/icons/youtube.svg" alt="" />
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <a href="/team">Sarah Thompson </a>
                  <p>Web Designer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-boxarea m-0">
                <div className="img1">
                  <img src="assets/img/all-images/team-img4.png" alt="" />
                </div>
                <ul>
                  <li>
                    <a href="#">
                      <img src="assets/img/icons/facebook.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/icons/instagram.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/icons/linkedin.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="m-0">
                      <img src="assets/img/icons/youtube.svg" alt="" />
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <a href="/team">David Garcia</a>
                  <p>Content Writer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== TEAM AREA ENDS =======*/}
      {/*===== CTA AREA STARTS =======*/}
      <div className="cta-section-area">
        <img
          src="assets/img/bg/cta-bg1.png"
          alt=""
          className="cta-bg1 aniamtion-key-2"
        />
        <img
          src="assets/img/bg/cta-bg2.png"
          alt=""
          className="cta-bg2 aniamtion-key-1"
        />
        <div className="container_1">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="cta-header-area text-center sp4 heading2">
                <h2>
                  Ready To Take Your SEO To <br className="d-md-block d-none" />{" "}
                  The Next Level
                </h2>
                <p>
                  Effective SEO strategies not only elevate a website's
                  visibility but also drive <br className="d-md-block d-none" />{" "}
                  targeted traffic, enhance user experience,
                </p>
                <div className="btn-area text-center">
                  <a href="/contact" className="header-btn1">
                    Free Consultation{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== CTA AREA ENDS =======*/}
      {/*===== FOOTER AREA STARTS =======*/}
      <Footer />
      {/*===== FOOTER AREA ENDS =======*/}
      {/*===== JS SCRIPT LINK =======*/}
    </>
  );
}

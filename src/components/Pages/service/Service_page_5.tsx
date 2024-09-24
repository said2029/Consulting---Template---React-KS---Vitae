import Footer from "@/components/globle/footer";
import NavBar from "@/components/globle/navBar";
import React from "react";

export default function Service_page_5() {
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
            <div className="col-lg-8 m-auto">
              <div className="about-inner-header heading9 text-center">
                <h1>Social Media Marketing</h1>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right" /> Services{" "}
                  <i className="fa-solid fa-angle-right" />{" "}
                  <span>Social Media Marketing</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== HERO AREA ENDS =======*/}
      {/*===== ABOUT AREA STARTS =======*/}
      <div className="service-inner2-section-area sp8">
        <img
          src="assets/img/elements/instagram1.png"
          alt=""
          className="instagram1"
        />
        <img
          src="assets/img/elements/linkedin1.png"
          alt=""
          className="linkedin1"
        />
        <div className="container_1">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-images">
                <img
                  src="assets/img/elements/facebook1.png"
                  alt=""
                  className="facebook1"
                />
                <img
                  src="assets/img/elements/twitter1.png"
                  alt=""
                  className="twitter1"
                />
                <img src="assets/img/all-images/service-img11.png" alt="" />
                <img
                  src="assets/img/bg/inner-bg1.png"
                  alt=""
                  className="inner-bg1"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="service-content heading2">
                <h5>Social Media Marketing</h5>
                <h2>Social Media Marketing</h2>
                <p>
                  Welcome to SEOC’s Social Media Marketing Services. Our team
                  specializes in crafting and executing social media strategies
                  that elevate your brand, engage your audience, and drive
                  measurable results. Harness the power of social media to grow
                  your business and connect with customers on a deeper level.
                </p>
                <div className="space32" />
                <div className="btn-area1">
                  <a href="/service1" className="header-btn1">
                    View Our Services{" "}
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
      {/*===== ABOUT AREA ENDS =======*/}
      {/*===== TESTIMONIAL AREA STARTS =======*/}
      <div className="slider-section-area slider-inner sp5">
        <div className="container_1">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="sldier-head">
                <p>
                  Trusted by <br className="d-lg-block d-none" /> Top Companies
                </p>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="slider-images-area owl-carousel">
                <div className="img1">
                  <img src="assets/img/elements/brand-img1.png" alt="" />
                </div>
                <div className="img1">
                  <img src="assets/img/elements/brand-img2.png" alt="" />
                </div>
                <div className="img1">
                  <img src="assets/img/elements/brand-img3.png" alt="" />
                </div>
                <div className="img1">
                  <img src="assets/img/elements/brand-img4.png" alt="" />
                </div>
                <div className="img1">
                  <img src="assets/img/elements/brand-img5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== TESTIMONIAL AREA ENDS =======*/}
      {/*===== CASE AREA STARTS =======*/}
      <div className="case1-section-area sp1">
        <div className="container_1">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="case-header-area heading2 text-center">
                <h5>Case Study</h5>
                <h2 className="text-anime-style-3">SEOC Case Study</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_case_study_1_list">
                <div className="cs_case_study cs_style_1 cs_hover_active active">
                  <a
                    href="case-single.html"
                    className="cs_case_study_thumb cs_bg_filed"
                    data-src="assets/img/all-images/case-img1.png"
                  />
                  <div className="content-area1">
                    <a href="case-single.html">
                      Website Design &amp; Development
                    </a>
                  </div>
                  <div className="content-area">
                    <a href="case-single.html">
                      Website Design &amp; Development{" "}
                    </a>
                    <p>
                      We understand the critical role that a well-designed and
                      user-friendly website plays in shaping your online
                      presence driving.
                    </p>
                  </div>
                </div>
                <div className="cs_case_study cs_style_1 cs_hover_active">
                  <a
                    href="case-single.html"
                    className="cs_case_study_thumb cs_case_study_thumb2 cs_bg_filed"
                    data-src="assets/img/all-images/case-img2.png"
                  />
                  <div className="content-area1">
                    <a href="case-single.html">SEO</a>
                  </div>
                  <div className="content-area">
                    <a href="case-single.html">SEO</a>
                    <p>
                      We understand the critical role that a well-designed and
                      user-friendly website plays in shaping your online
                      presence driving.
                    </p>
                  </div>
                </div>
                <div className="cs_case_study cs_style_1 cs_hover_active">
                  <a
                    href="case-single.html"
                    className="cs_case_study_thumb cs_case_study_thumb3 cs_bg_filed"
                    data-src="assets/img/all-images/case-img3.png"
                  />
                  <div className="content-area1">
                    <a href="case-single.html">PPC Advertising</a>
                  </div>
                  <div className="content-area">
                    <a href="case-single.html">PPC Advertising</a>
                    <p>
                      We understand the critical role that a well-designed and
                      user-friendly website plays in shaping your online
                      presence driving.
                    </p>
                  </div>
                </div>
                <div className="cs_case_study cs_style_1 cs_hover_active">
                  <a
                    href="case-single.html"
                    className="cs_case_study_thumb cs_case_study_thumb4 cs_bg_filed"
                    data-src="assets/img/all-images/case-img4.png"
                  />
                  <div className="content-area1">
                    <a href="case-single.html">Social Media Marketing</a>
                  </div>
                  <div className="content-area">
                    <a href="case-single.html">Social Media Marketing</a>
                    <p>
                      We understand the critical role that a well-designed and
                      user-friendly website plays in shaping your online
                      presence driving.
                    </p>
                  </div>
                </div>
                <div className="cs_case_study cs_style_1 cs_hover_active">
                  <a
                    href="case-single.html"
                    className="cs_case_study_thumb cs_case_study_thumb5 cs_bg_filed"
                    data-src="assets/img/all-images/case-img5.png"
                  />
                  <div className="content-area1">
                    <a href="case-single.html">Content Marketing</a>
                  </div>
                  <div className="content-area">
                    <a href="case-single.html">Content Marketing</a>
                    <p>
                      We understand the critical role that a well-designed and
                      user-friendly website plays in shaping your online
                      presence driving.
                    </p>
                  </div>
                </div>
                <div className="cs_case_study cs_style_1 cs_hover_active">
                  <a
                    href="#"
                    className="cs_case_study_thumb cs_case_study_thumb6 cs_bg_filed"
                    data-src="assets/img/all-images/case-img6.png"
                  />
                  <div className="content-area1">
                    <a href="case-single.html">Email Marketing</a>
                  </div>
                  <div className="content-area">
                    <a href="case-single.html">Email Marketing</a>
                    <p>
                      We understand the critical role that a well-designed and
                      user-friendly website plays in shaping your online
                      presence driving.
                    </p>
                  </div>
                </div>
                <div
                  className="cs_case_study cs_style_1 cs_hover_active "
                  style={{ margin: "0 !important" }}
                >
                  <a
                    href="case-single.html"
                    className="cs_case_study_thumb cs_case_study_thumb7 cs_bg_filed"
                    data-src="assets/img/all-images/case-img7.png"
                  />
                  <div className="content-area1">
                    <a href="case-single.html">Analytics &amp; Reporting</a>
                  </div>
                  <div className="content-area">
                    <a href="case-single.html">Analytics &amp; Reporting</a>
                    <p>
                      We understand the critical role that a well-designed and
                      user-friendly website plays in shaping your online
                      presence driving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== CASE AREA ENDS =======*/}
      {/*===== SERVICE AREA STARTS =======*/}
      <div className="service1-section-area sp1 bg2">
        <div className="container_1">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="service-header-area heading2 text-center">
                <h5>Our Service</h5>
                <h2>Social Media Service</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="service-all-boxes-area">
                <div className="service-boxarea">
                  <a href="/service1">Search Engine Optimization ( SEO)</a>
                  <div className="space40" />
                  <img src="assets/img/icons/service-icon1.svg" alt="" />
                  <div className="space40" />
                  <p>
                    Enhance your online visibility &amp; drive organic traffic
                    with our advanced SEO techniques. We optimize your website
                    to rank higher.
                  </p>
                </div>
                <div className="service-boxarea box2">
                  <a href="/service1">Pay-Per-Click (PPC) Advertising</a>
                  <div className="space40" />
                  <img src="assets/img/icons/service-icon2.svg" alt="" />
                  <div className="space40" />
                  <p>
                    Reach your audience instantly and drive qualified leads with
                    targeted PPC campaigns. Our experts craft compelling ad copy
                    and optimize.
                  </p>
                </div>
                <div className="service-boxarea box3">
                  <a href="/service1">Social Media Marketing</a>
                  <div className="space66" />
                  <img src="assets/img/icons/service-icon3.svg" alt="" />
                  <div className="space40" />
                  <p>
                    Build a strong brand presence and engage with your audience
                    on social media platforms. We create strategic social media
                    campaigns to boost brand.
                  </p>
                </div>
                <div className="service-boxarea box4">
                  <a href="/service1">Website Design and Development</a>
                  <div className="space40" />
                  <img src="assets/img/icons/service-icon4.svg" alt="" />
                  <div className="space40" />
                  <p>
                    Make a lasting impression with a professionally designed and
                    user-friendly website. Our web design and development
                    services ensure website.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 m-auto">
              <div className="space50" />
              <div className="btn-area1 text-center">
                <a href="/service1" className="header-btn1">
                  View More Services{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== SERVICE AREA ENDS =======*/}
      {/*===== CHOOSE AREA STARTS =======*/}
      <div className="choose-section-area sp1">
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
            <div className="col-lg-6 m-auto">
              <div className="choose-header-area text-center heading2">
                <h5>Why Choose Us</h5>
                <h2>Why Choose SEOC For PPC?</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="accordian-tabs-area">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        1. Customized Strategies
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We believe in transparency and provide regular updates
                        and detailed reports on your campaign's progress.
                      </div>
                      <div className="space10" />
                      <div className="accordion-body body2">
                        Ready to boost your online presence and drive more
                        organic traffic to your website.
                      </div>
                    </div>
                  </div>
                  <div className="space24" />
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        2.Transparent Reporting
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We believe in transparency and provide regular updates
                        and detailed reports on your campaign's progress.
                      </div>
                      <div className="space10" />
                      <div className="accordion-body body2">
                        Ready to boost your online presence and drive more
                        organic traffic to your website.
                      </div>
                    </div>
                  </div>
                  <div className="space24" />
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        3.Proven Results
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We believe in transparency and provide regular updates
                        and detailed reports on your campaign's progress.
                      </div>
                      <div className="space10" />
                      <div className="accordion-body body2">
                        Ready to boost your online presence and drive more
                        organic traffic to your website.
                      </div>
                    </div>
                  </div>
                  <div className="space24" />
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        4.Expert Team
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We believe in transparency and provide regular updates
                        and detailed reports on your campaign's progress.
                      </div>
                      <div className="space10" />
                      <div className="accordion-body body2">
                        Ready to boost your online presence and drive more
                        organic traffic to your website.
                      </div>
                    </div>
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
                    <div className="img1">
                      <div className="space100" />
                      <img
                        src="assets/img/all-images/service-img5.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="img2">
                      <img
                        src="assets/img/all-images/service-img9.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== CHOOSE AREA ENDS =======*/}
      {/*===== TEAM AREA STARTS =======*/}
      <div className="team-inner-section-area sp1">
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
                  <a href="team.html">John Doe</a>
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
                  <a href="team.html">Jane Smith</a>
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
                  <a href="team.html">Sarah Thompson </a>
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
                  <a href="team.html">David Garcia</a>
                  <p>Content Writer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== TEAM AREA ENDS =======*/}
      {/*===== BLOG AREA STARTS =======*/}
      <div className="blog1-scetion-area sp1 bg2">
        <div className="container_1">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="blog-hedaer-area heading2 text-center">
                <h5>Our Blog</h5>
                <h2>Our Latest Blog &amp; News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img1.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="/blog-single">
                    10 Essential SEO Tips to Boost Your Website's Ranking
                  </a>
                  <p>
                    Are you looking to improve your website's visibility and
                    attract more organic traffic?{" "}
                  </p>
                  <a href="/blog-single" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="space30 d-lg-none d-block" />
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img2.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="/blog-single">
                    The Power of PPC Advertising: How to Maximize Your ROI
                  </a>
                  <p>
                    Unlock the full potential of your digital marketing strategy
                    with the power of PPC.
                  </p>
                  <a href="/blog-single" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="space30 d-lg-none d-block" />
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img3.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="/blog-single">
                    The Importance of Responsive Web Design in the Mobile Age
                  </a>
                  <p>
                    Where mobile devices dominate internet usage, responsive web
                    design more crucial.
                  </p>
                  <a href="/blog-single" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== BLOG AREA ENDS =======*/}
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
                  <a href="contact.html" className="header-btn1">
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

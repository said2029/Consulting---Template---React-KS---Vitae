import Footer from "@/components/globle/footer";
import NavBar from "@/components/globle/navBar";

export default function Service_page_3() {
  return (
    <>
      {/*===== PRELOADER STARTS =======*/}
      <div className="preloader">
        <div className="loading-container">
          <div className="loading" />
          <div id="loading-icon">
            <img src="assets/img/logo/preloader.png" alt="" />
          </div>
        </div>
      </div>
      {/*===== PRELOADER ENDS =======*/}
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
      {/*=====HEADER START=======*/}
      <NavBar />

      {/*===== MOBILE HEADER STARTS =======*/}
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
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-inner-header heading9 text-center">
                <h1>Pay Per Click Service</h1>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right" /> Services{" "}
                  <i className="fa-solid fa-angle-right" /> <span>PPC</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== HERO AREA ENDS =======*/}
      {/*===== HISTORY AREA STARTS =======*/}
      <div className="history-inner-section-area  history3 sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="history-header-area text-center heading2">
                <img
                  src="assets/img/elements/star7.png"
                  alt=""
                  className="star2 keyframe5"
                />
                <img
                  src="assets/img/elements/star7.png"
                  alt=""
                  className="star3 keyframe5"
                />
                <h5>Our History</h5>
                <h2>
                  Our Journey: Charting the <br className="d-lg-block d-none" />{" "}
                  Evolution of SEOC
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
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
                    <div className="img">
                      <div className="space100" />
                      <img
                        src="assets/img/all-images/history-img1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="img2">
                      <img
                        src="assets/img/all-images/history-img2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="history-content-area">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="history-box-content">
                      <h5>2015</h5>
                      <a href="case-single.html">Inception and Founding</a>
                      <p>
                        SEOC was founded with a vision to revolutionize the
                        digital marketing industry and provide innovation.
                      </p>
                      <a href="case-single.html" className="readmore">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="history-box-content">
                      <h5>2016</h5>
                      <a href="case-single.html">Expansion and Growth</a>
                      <p>
                        The team expanded to include additional members with
                        diverse skill sets and expertise allowing us.
                      </p>
                      <a href="case-single.html" className="readmore">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="history-box-content">
                      <h5>2017</h5>
                      <a href="case-single.html">Recognition and Awards</a>
                      <p>
                        We were honored to recognized as a leader in the digital
                        marketing space and received accolades customer.
                      </p>
                      <a href="case-single.html" className="readmore">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="history-box-content">
                      <h5>2018</h5>
                      <a href="case-single.html">Launch of New Services</a>
                      <p>
                        Building on our success, SEOC expanded our service
                        offerings to better meet the evolving needs.{" "}
                      </p>
                      <a href="case-single.html" className="readmore">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="history-box-content">
                      <h5>2019</h5>
                      <a href="case-single.html">Strategic Partnerships </a>
                      <p>
                        SEOC formed strategic partnerships and collaborations
                        with industry leaders and technology providers.{" "}
                      </p>
                      <a href="case-single.html" className="readmore">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="history-box-content">
                      <h5>2020</h5>
                      <a href="case-single.html">Continued Growth Success</a>
                      <p>
                        2020 continued to experience steady growth and success,
                        despite ongoing challenges in external environment.
                      </p>
                      <a href="case-single.html" className="readmore">
                        Read More <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== HISTORY AREA ENDS =======*/}
      {/*===== TESTIMONIAL AREA STARTS =======*/}
      <div className="slider-section-area slider-inner sp5">
        <div className="container">
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
        <div className="container">
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
                    href="case-single.html"
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
      {/*===== PRICING AREA STARTS =======*/}
      <div className="pricing-inner-section-area sp1 bg2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className="pricing-header heading2 text-center">
                <h5>Pricing</h5>
                <h2>SEOC Pricing Plan</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-boxarea bg-white">
                <h4>Basic Plan - Starter</h4>
                <p>
                  Our SEO and Digital Marketing agency{" "}
                  <br className="d-lg-block d-none" /> offers a range of pricing
                  plans tailored
                </p>
                <h1>
                  $999 <span>/monthly</span>
                </h1>
                <div className="space32" />
                <div className="list-area">
                  <h5>Service Include:</h5>
                  <ul>
                    <li>
                      <img
                        src="assets/img/icons/check4.svg"
                        alt=""
                        className="check2"
                      />
                      <img
                        src="assets/img/icons/check5.svg"
                        alt=""
                        className="check3"
                      />
                      Keyword Research
                    </li>
                    <li>
                      <img
                        src="assets/img/icons/check4.svg"
                        alt=""
                        className="check2"
                      />
                      <img
                        src="assets/img/icons/check5.svg"
                        alt=""
                        className="check3"
                      />
                      One Page Optimization
                    </li>
                    <li>
                      <img
                        src="assets/img/icons/check4.svg"
                        alt=""
                        className="check2"
                      />
                      <img
                        src="assets/img/icons/check5.svg"
                        alt=""
                        className="check3"
                      />
                      Basic Analytics Reporting
                    </li>
                  </ul>
                </div>
                <div className="space24" />
                <p className="pera">
                  Small businesses or startups looking to{" "}
                  <br className="d-lg-block d-none" /> establish their online
                  presence.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-boxarea active">
                <h4>Standard Plan - Growth</h4>
                <p>
                  Our SEO and Digital Marketing agency{" "}
                  <br className="d-lg-block d-none" /> offers a range of pricing
                  plans tailored
                </p>
                <h1>
                  $1999 <span>/monthly</span>
                </h1>
                <div className="space32" />
                <div className="list-area">
                  <h5>Service Include:</h5>
                  <ul>
                    <li>
                      <img
                        src="assets/img/icons/check4.svg"
                        alt=""
                        className="check2"
                      />
                      <img
                        src="assets/img/icons/check5.svg"
                        alt=""
                        className="check3"
                      />
                      Keyword Research
                    </li>
                    <li>
                      <img
                        src="assets/img/icons/check4.svg"
                        alt=""
                        className="check2"
                      />
                      <img
                        src="assets/img/icons/check5.svg"
                        alt=""
                        className="check3"
                      />
                      One Page Optimization
                    </li>
                    <li>
                      <img
                        src="assets/img/icons/check4.svg"
                        alt=""
                        className="check2"
                      />
                      <img
                        src="assets/img/icons/check5.svg"
                        alt=""
                        className="check3"
                      />
                      Basic Analytics Reporting
                    </li>
                  </ul>
                </div>
                <div className="space24" />
                <p className="pera">
                  Small businesses or startups looking to{" "}
                  <br className="d-lg-block d-none" /> establish their online
                  presence.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-boxarea bg-white">
                <h4>Premium Plan - Pro</h4>
                <p>
                  Our SEO and Digital Marketing agency{" "}
                  <br className="d-lg-block d-none" /> offers a range of pricing
                  plans tailored
                </p>
                <h1>
                  $2999 <span>/monthly</span>
                </h1>
                <div className="space32" />
                <div className="list-area">
                  <h5>Service Include:</h5>
                  <ul>
                    <li>
                      <img
                        src="assets/img/icons/check4.svg"
                        alt=""
                        className="check2"
                      />
                      <img
                        src="assets/img/icons/check5.svg"
                        alt=""
                        className="check3"
                      />
                      Keyword Research
                    </li>
                    <li>
                      <img
                        src="assets/img/icons/check4.svg"
                        alt=""
                        className="check2"
                      />
                      <img
                        src="assets/img/icons/check5.svg"
                        alt=""
                        className="check3"
                      />
                      One Page Optimization
                    </li>
                    <li>
                      <img
                        src="assets/img/icons/check4.svg"
                        alt=""
                        className="check2"
                      />
                      <img
                        src="assets/img/icons/check5.svg"
                        alt=""
                        className="check3"
                      />
                      Basic Analytics Reporting
                    </li>
                  </ul>
                </div>
                <div className="space24" />
                <p className="pera">
                  Small businesses or startups looking to{" "}
                  <br className="d-lg-block d-none" /> establish their online
                  presence.
                </p>
              </div>
            </div>
            <div className="col-lg-12 m-auto">
              <div className="space20" />
              <div className="btn-area1 text-center">
                <a href="pricing.html" className="header-btn1">
                  View Compare Plan{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== PRICING AREA ENDS =======*/}
      {/*===== CTA AREA STARTS =======*/}
      <div className="cta-section-area others-cta">
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
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="cta-header-area text-center sp4 heading2">
                <h2>Competitor Analysis</h2>
                <p>
                  Find the keywords your competitors rank for and analyze their{" "}
                  <br className="d-lg-block d-none" /> data insights to uncover
                  their SEO strategy in one click
                </p>
                <div className="space32" />
                <div className="form-area">
                  <form>
                    <div className="input-area">
                      <span>
                        <i className="fa-solid fa-link" />
                      </span>
                      <input type="text" placeholder="https:// yoursite.com" />
                    </div>
                    <div className="input-area">
                      <span>
                        <i className="fa-regular fa-envelope" />
                      </span>
                      <input type="text" placeholder="youremail@domain.com" />
                    </div>
                    <div className="btn-area">
                      <a href="#" className="header-btn1">
                        Analyze Now{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </a>
                    </div>
                  </form>
                </div>
                <ul>
                  <li>Try:</li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Laptop</a>
                  </li>
                  <li>
                    <a href="#">iPhone</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== CTA AREA ENDS =======*/}
      {/* analysis-area-start */}
      <section className="analysis-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="analysis-inner-section text-center heading2">
                <h5>Website Analysis</h5>
                <h2>
                  Conduct Website Audience Analysis{" "}
                  <br className="d-lg-block d-none" /> And Explore Its Geography
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="services-seo">
                <div className="services-seo-scroll">
                  <div className="services-seo-head">
                    <div className="row">
                      <div className="col-xl-4 col-lg-5 col-5">
                        <div className="services-seo-heading">
                          <h4 className="services-seo-heading-title">
                            <input id="remeber" type="checkbox" />
                            <label htmlFor="remeber">Blanking</label>
                          </h4>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-7 col-7">
                        <div className="services-seo-catagory">
                          <div className="row">
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-heading-item services-seo-catagory-one">
                                <span>Score</span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-heading-item services-seo-catagory-two">
                                <span>Keyword</span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-heading-item services-seo-catagory-three">
                                <span>Domain</span>
                              </div>
                            </div>
                            <div className="col-lg-3 col-3">
                              <div className="services-seo-heading-item services-seo-catagory-four">
                                <div className="rank">
                                  <span>
                                    Rank
                                    <i className="fa-light fa-angle-up" />
                                    <svg
                                      width={14}
                                      height={14}
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.33239 1.14917H5.14742C2.18498 1.14917 1 2.33415 1 5.29659V8.85152C1 11.814 2.18498 12.9989 5.14742 12.9989H8.70235C11.6648 12.9989 12.8498 11.814 12.8498 8.85152V7.66654"
                                        stroke="white"
                                        strokeOpacity="0.7"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9.31928 1.75319L4.65047 6.42199C4.47273 6.59974 4.29498 6.94931 4.25943 7.20408L4.00466 8.98747C3.90986 9.63328 4.36608 10.0836 5.01189 9.9947L6.79528 9.73993C7.04412 9.70438 7.39369 9.52663 7.57736 9.34889L12.2462 4.68008C13.052 3.8743 13.4311 2.93816 12.2462 1.75319C11.0612 0.568212 10.1251 0.947404 9.31928 1.75319Z"
                                        stroke="white"
                                        strokeOpacity="0.7"
                                        strokeWidth="1.5"
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8.64844 2.42236C9.0454 3.83841 10.1534 4.94636 11.5753 5.34925"
                                        stroke="white"
                                        strokeOpacity="0.7"
                                        strokeWidth="1.5"
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="services-seo-info">
                    <div className="services-seo-item">
                      <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-5 col-5">
                          <div className="services-seo-link d-flex">
                            <div className="services-seo-link-check">
                              <input id="seo-link-check" type="checkbox" />
                              <label htmlFor="seo-link-check">
                                WOG PRIDE on the app store
                              </label>
                              <span>
                                <a href="#">
                                  https://www.daraz.com/gameing-laptops/
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 col-7">
                          <div className="services-seo-catagory">
                            <div className="row">
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-one">
                                  <span>86</span>
                                </div>
                              </div>
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-two">
                                  <span>Laptop</span>
                                </div>
                              </div>
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-three">
                                  <span>
                                    <a href="#">daraz.com</a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-four d-flex align-items-center">
                                  <div className="stable-rank">
                                    <span>4</span>
                                  </div>
                                  <div className="incridable-rank">
                                    <i className="fa-solid fa-angle-up" />
                                    <span>1</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="services-seo-item">
                      <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-5 col-5">
                          <div className="services-seo-link d-flex">
                            <div className="services-seo-link-check">
                              <input id="seo-link-check-2" type="checkbox" />
                              <label htmlFor="seo-link-check-2">
                                SEO PRIDE on the app store
                              </label>
                              <span>
                                <a href="#">
                                  https://www.daraz.com/gameing-laptops/
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 col-7">
                          <div className="services-seo-catagory">
                            <div className="row">
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-one">
                                  <span>105</span>
                                </div>
                              </div>
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-two">
                                  <span>Laptop</span>
                                </div>
                              </div>
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-three">
                                  <span>
                                    <a href="#">daraz.com</a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-four d-flex align-items-center">
                                  <div className="stable-rank">
                                    <span>0</span>
                                  </div>
                                  <div className="incridable-rank"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="services-seo-item">
                      <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-5 col-5">
                          <div className="services-seo-link d-flex">
                            <div className="services-seo-link-check">
                              <input id="seo-link-check-3" type="checkbox" />
                              <label htmlFor="seo-link-check-3">
                                PRIDE on the app store
                              </label>
                              <span>
                                <a href="#">
                                  https://www.daraz.com/gameing-laptops/
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 col-7">
                          <div className="services-seo-catagory">
                            <div className="row">
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-one">
                                  <span>42</span>
                                </div>
                              </div>
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-two">
                                  <span>Laptop</span>
                                </div>
                              </div>
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-three">
                                  <span>
                                    <a href="#">daraz.com</a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-four d-flex align-items-center">
                                  <div className="stable-rank">
                                    <span>3</span>
                                  </div>
                                  <div className="incridable-rank incridable-rank-y">
                                    <i className="fa-solid fa-angle-up" />
                                    <span>2</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="services-seo-item">
                      <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-5 col-5">
                          <div className="services-seo-link d-flex">
                            <div className="services-seo-link-check">
                              <input id="seo-link-check-4" type="checkbox" />
                              <label htmlFor="seo-link-check-4">
                                WOG on the Online store
                              </label>
                              <span>
                                <a href="#">
                                  https://www.daraz.com/gameing-laptops/
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 col-7">
                          <div className="services-seo-catagory">
                            <div className="row">
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-one">
                                  <span>06</span>
                                </div>
                              </div>
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-two">
                                  <span>Laptop</span>
                                </div>
                              </div>
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-three">
                                  <span>
                                    <a href="#">daraz.com</a>
                                  </span>
                                </div>
                              </div>
                              <div className="col-lg-3 col-3">
                                <div className="services-seo-catagory-item services-seo-catagory-four d-flex align-items-center">
                                  <div className="stable-rank">
                                    <span>5</span>
                                  </div>
                                  <div className="incridable-rank">
                                    <i className="fa-solid fa-angle-up" />
                                    <span>1</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* analysis-area-end */}
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
        <div className="container">
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
        <div className="container">
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
        <div className="container">
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
        <div className="container">
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

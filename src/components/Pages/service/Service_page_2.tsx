import Footer from "@/components/globle/footer";
import NavBar from "@/components/globle/navBar";


export default function Service_page_2() {
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
        <div className="container_1">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-inner-header heading9 text-center">
                <h1>Search Engine Optimization</h1>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right" /> Services{" "}
                  <i className="fa-solid fa-angle-right" /> <span>SEO</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== HERO AREA ENDS =======*/}
      {/*===== ABOUT AREA STARTS =======*/}
      <div className="about1-section-area sp6">
        <div className="container_1">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="about-images">
                <figure className="">
                  <img src="assets/img/all-images/about-img1.png" alt="" />
                </figure>
                <img
                  src="assets/img/elements/star1.png"
                  alt=""
                  className="star1 keyframe5"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-content-area heading2">
                <div className="arrow-circle">
                  <a href="#">
                    <img
                      src="assets/img/elements/elements4.png"
                      alt=""
                      className="elements4 keyframe5"
                    />
                    <img
                      src="assets/img/icons/arrow.svg"
                      alt=""
                      className="arrow"
                    />
                  </a>
                </div>
                <h2 className="text-anime-style-3">
                  Comprehensive SEO &amp; Digital Marketing Solutions.
                </h2>
                <p>
                  Welcome to SEOC your trusted partner for comprehensive SEO and
                  digital marketing solutions. With our proven expertise and
                  innovative strategies the digital landscape.
                </p>
                <div className="btn-area">
                  <a href="/about" className="header-btn1">
                    Learn More
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="about-auhtor-images">
                <img
                  src="assets/img/elements/elements5.png"
                  alt=""
                  className="elements5 keyframe5"
                />
                <figure className="">
                  <img src="assets/img/all-images/about-img2.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== ABOUT AREA ENDS =======*/}
      <div className="space60" />
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
      {/*===== WORK AREA STARTS =======*/}
      <div className="works-inner-section-area sp1">
        <div className="container_1">
          <div className="row align-items-center">
            <div className="col-lg-1" />
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
                    <div className="img1 ">
                      <div className="space100" />
                      <img src="assets/img/all-images/about-img6.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="img2 ">
                      <img
                        src="assets/img/all-images/service-img5.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="works-header-area heading2 specing2">
                <h5>SEO Service</h5>
                <h2>Keyword Research &amp; Strategy</h2>
                <p>
                  We conduct thorough keyword research to identify the terms
                  your target audience is searching for. We develop a keyword
                  strategy that aligns with your business goals, ensuring high
                  relevance and search.
                </p>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
          <div className="space100 d-lg-block d-none" />
          <div className="space30 d-lg-none d-block" />
          <div className="row align-items-center">
            <div className="col-lg-1" />
            <div className="col-lg-4">
              <div className="works-header-area heading2">
                <h5>SEO Service</h5>
                <h2>Technical SEO</h2>
                <p>
                  We optimize your website's content, ensuring it is relevant,
                  engaging, and includes targeted keywords. We craft compelling
                  meta titles and descriptions to improve click-through rates
                  from search engine.
                </p>
                <div className="space16" />
                <p>
                  We enhance your website's internal linking structure to
                  improve navigation and distribute page authority.
                </p>
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
                    <div className="img1 ">
                      <div className="space100" />
                      <img
                        src="assets/img/all-images/service-img6.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="img2 ">
                      <img
                        src="assets/img/all-images/service-img7.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
          <div className="space100 d-lg-block d-none" />
          <div className="space30 d-lg-none d-block" />
          <div className="row align-items-center">
            <div className="col-lg-1" />
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
                    <div className="img1 ">
                      <div className="space100" />
                      <img
                        src="assets/img/all-images/service-img8.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="img2 ">
                      <img
                        src="assets/img/all-images/service-img9.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="works-header-area heading2 specing2">
                <h5>SEO Service</h5>
                <h2>Content Creation &amp; Optimization</h2>
                <p>
                  We regularly publish blog posts and articles to keep your
                  website fresh and relevant. We perform content audits to
                  identify gaps and opportunities for optimization.
                </p>
                <div className="space16" />
                <p>
                  We create engaging, informative content that resonates with
                  your audience and is optimized for search engines.
                </p>
              </div>
            </div>
            <div className="col-lg-1" />
          </div>
        </div>
      </div>
      {/*===== WORK AREA ENDS =======*/}
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
        <div className="container_1">
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
        <div className="container_1">
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
        <div className="container_1">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="choose-header-area text-center heading2">
                <h5>Why Choose Us</h5>
                <h2>Why Choose SEOC For SEO?</h2>
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

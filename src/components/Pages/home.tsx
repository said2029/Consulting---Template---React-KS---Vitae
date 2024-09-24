import Footer from "../globle/footer";
import NavBar from "../globle/navBar";
import AutoPlay from "embla-carousel-autoplay";
import HeroSection from "../Home_com/HeroSection";
import Reloader from "../Reloader";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function Home() {
  return (
    <>
      {/*===== PRELOADER STARTS =======*/}
      <Reloader />
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

      {/*=====HEADER END =======*/}

      {/*===== HERO AREA STARTS =======*/}
      <HeroSection />
      {/*===== HERO AREA ENDS =======*/}
      {/*===== TESTIMONIAL AREA STARTS =======*/}
      <div className="slider-section-area sp5">
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
      <div
        className="all-section-bg"
        style={{
          backgroundImage: "url(assets/img/bg/pages-bg1.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/*===== ABOUT AREA STARTS =======*/}
        <div className="about1-section-area sp6 bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="about-images">
                  <figure className="image-anime">
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
                    <a href="/about">
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
                  <h2>Comprehensive SEO &amp; Digital Marketing Solutions.</h2>
                  <p>
                    Welcome to SEOC your trusted partner for comprehensive SEO
                    and digital marketing solutions. With our proven expertise
                    and innovative strategies the digital landscape.
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
                  <figure className="image-anime">
                    <img src="assets/img/all-images/about-img2.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===== ABOUT AREA ENDS =======*/}
        {/*===== SERVICE AREA STARTS =======*/}
        <div className="service1-section-area sp9">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 m-auto">
                <div className="service-header-area heading2 text-center">
                  <img
                    src="assets/img/elements/star2.png"
                    alt=""
                    className="star2 keyframe5"
                  />
                  <img
                    src="assets/img/elements/star2.png"
                    alt=""
                    className="star3 keyframe5"
                  />
                  <h2 className="text-anime-style-3">
                    Popular Digital Marketing Services{" "}
                    <br className="d-md-block d-none" /> To Build Your Business
                  </h2>
                  <p data-aos="fade-up" data-aos-duration={1000}>
                    Our expert team specializes in delivering tailored solutions
                    designed to elevate <br className="d-md-block d-none" />{" "}
                    your brand and drive measurable results.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="service-all-boxes-area">
                  <div
                    className="service-boxarea flex flex-col items-center justify-between"
                    data-aos="zoom-in"
                    data-aos-duration={800}
                  >
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
                  <div
                    className="service-boxarea box2  flex flex-col items-center justify-between"
                    data-aos="zoom-in"
                    data-aos-duration={1000}
                  >
                    <a href="/service1">Pay-Per-Click (PPC) Advertising</a>
                    <div className="space40" />
                    <img src="assets/img/icons/service-icon2.svg" alt="" />
                    <div className="space40" />
                    <p>
                      Reach your audience instantly and drive qualified leads
                      with targeted PPC campaigns. Our experts craft compelling
                      ad copy and optimize.
                    </p>
                  </div>
                  <div
                    className="service-boxarea box3  flex flex-col items-center justify-between"
                    data-aos="zoom-in"
                    data-aos-duration={1200}
                  >
                    <a href="/service1">Social Media Marketing</a>
                    <div className="space66" />
                    <img src="assets/img/icons/service-icon3.svg" alt="" />
                    <div className="space40" />
                    <p>
                      Build a strong brand presence and engage with your
                      audience on social media platforms. We create strategic
                      social media campaigns to boost brand.
                    </p>
                  </div>
                  <div
                    className="service-boxarea box4  flex flex-col items-center justify-between"
                    data-aos="zoom-in"
                    data-aos-duration={1400}
                  >
                    <a href="/service1">Website Design and Development</a>
                    <div className="space40" />
                    <img src="assets/img/icons/service-icon4.svg" alt="" />
                    <div className="space40" />
                    <p>
                      Make a lasting impression with a professionally designed
                      and user-friendly website. Our web design and development
                      services ensure website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===== SERVICE AREA ENDS =======*/}
        {/*===== SERVICE AREA STARTS =======*/}
        <div className="service2-section-area sp6">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 m-auto">
                <div className="service2-header heading2 text-center">
                  <img
                    src="assets/img/elements/star2.png"
                    alt=""
                    className="star2 keyframe5"
                  />
                  <img
                    src="assets/img/elements/star2.png"
                    alt=""
                    className="star3 keyframe5"
                  />
                  <h2 className="text-anime-style-3">
                    Tailored Solutions, Proven Results,{" "}
                    <br className="d-md-block d-none" /> And Exceptional Service
                  </h2>
                  <p data-aos="fade-up" data-aos-duration={1000}>
                    We pride ourselves on delivering a value proposition that
                    goes beyond expectations. Our{" "}
                    <br className="d-md-block d-none" /> approach is centered on
                    understanding your business inside
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <div
                  className="images-content-area"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                >
                  <div className="img1">
                    <img src="assets/img/all-images/service-img1.png" alt="" />
                  </div>
                  <div className="content-area">
                    <h5>Our Value</h5>
                    <a href="/service1" className="text text-anime-style-3">
                      Explore Our Unique Value Proposition &amp; How We Drive
                      Business Growth
                    </a>
                    <p data-aos="fade-up" data-aos-duration={1000}>
                      we're committed to delivering exceptional value to our
                      clients. We understand that every business is unique,
                      personalized approach to every project we undertake.
                    </p>
                    <div
                      className="btn-area"
                      data-aos="fade-up"
                      data-aos-duration={1200}
                    >
                      <a href="/service1" className="header-btn1">
                        Learn More{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="arrow-area">
                    <a href="/service1">
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="service-all-boxes">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div
                        className="service2-auhtor-boxarea"
                        data-aos="zoom-out"
                        data-aos-duration={1000}
                      >
                        <div className="arrow">
                          <a href="/service1">
                            <i className="fa-solid fa-arrow-right" />
                          </a>
                        </div>
                        <div className="content-area">
                          <h5>Our Mission</h5>
                          <a href="/service1">
                            We strive to be more than just a service provider;
                            we aim to be trusted SEOC{" "}
                          </a>
                          <p>
                            By staying true to our mission and values, we are
                            committed to helping businesses of all sizes achieve
                            their goals, realize their potential shape.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div
                        className="service2-auhtor2-boxarea"
                        data-aos="zoom-out"
                        data-aos-duration={1200}
                      >
                        <div className="arrow">
                          <a href="/service1">
                            <i className="fa-solid fa-arrow-right" />
                          </a>
                        </div>
                        <div className="content-area">
                          <h5>Our Vision</h5>
                          <a href="/service1">
                            We aspire to create a world where every business
                            owner feels empowered
                          </a>
                          <p>
                            By staying true to our vision and values, we are
                            committed to driving positive change and shaping a
                            brighter future for businesses and communities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===== SERVICE AREA ENDS =======*/}
        {/*===== CASE AREA STARTS =======*/}
        <div className="case1-section-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 m-auto">
                <div className="case-header-area heading2 text-center">
                  <img
                    src="assets/img/elements/star2.png"
                    alt=""
                    className="star2 keyframe5"
                  />
                  <img
                    src="assets/img/elements/star2.png"
                    alt=""
                    className="star3 keyframe5"
                  />
                  <h2 className="text-anime-style-3">
                    Benefits of SEO &amp; Digital Marketing
                  </h2>
                  <p data-aos="fade-up" data-aos-duration={1000}>
                    By investing in strategic SEO and digital marketing
                    initiatives, businesses can{" "}
                    <br className="d-md-block d-none" /> unlock a myriad of
                    benefits.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-12"
                data-aos="zoom-out"
                data-aos-duration={1200}
              >
                <div className="cs_case_study_1_list">
                  <div
                    className="cs_case_study cs_style_1 cs_hover_active active"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
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
                  <div
                    className="cs_case_study cs_style_1 cs_hover_active"
                    data-aos="fade-up"
                    data-aos-duration={900}
                  >
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
                  <div
                    className="cs_case_study cs_style_1 cs_hover_active"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
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
                  <div
                    className="cs_case_study cs_style_1 cs_hover_active"
                    data-aos="fade-up"
                    data-aos-duration={1100}
                  >
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
                  <div
                    className="cs_case_study cs_style_1 cs_hover_active"
                    data-aos="fade-up"
                    data-aos-duration={1200}
                  >
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
                  <div
                    className="cs_case_study cs_style_1 cs_hover_active"
                    data-aos="fade-up"
                    data-aos-duration={1300}
                  >
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
                    data-aos="fade-up"
                    data-aos-duration={1400}
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

        {/*===== TESTIMONIAL AREA STARTS =======*/}
        <div className="testimonial1-section-area sp6">
          <div className="">
            <div className="">
              <div className="col-lg-12 m-auto">
                <div className="testimonial-header heading2 text-center">
                  <img
                    src="/assets/img/elements/star2.png"
                    alt=""
                    className="star2 keyframe5"
                  />
                  <img
                    src="/assets/img/elements/star2.png"
                    alt=""
                    className="star3 keyframe5"
                  />

                  <h2 className="text-anime-style-3">
                    What Our Client Say <br className="d-md-block d-none" /> On
                    Google Reviews
                  </h2>
                  <p data-aos="fade-up" data-aos-duration={1000}>
                    Don't just take our word for it. Hear what our satisfied
                    clients <br className="d-md-block d-none" /> have to say
                    about their experience partnering with SEOC
                  </p>
                </div>
              </div>
            </div>
            <Carousel
              plugins={[
                AutoPlay({
                  delay: 2000,
                  
                }),
              ]}
              opts={{
                loop: true,

              }}
            >
              <CarouselContent className="space-x-11">
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 overflow-hidden border border-primary rounded-xl">
                  <div className="flex flex-col-reverse lg:flex-row h-fit gap-3">
                    <div className="w-full h-full flex flex-col justify-between py-[12px]">
                      <div className="flex flex-col justify-between h-full">
                        <p>
                          "Working with SEOC has been a game-changer for our
                          business. Their expertise in SEO and digital marketing
                          has helped us achieve remarkable results and
                          significantly increase our online visibility.
                        </p>

                        <div className="flex w-fit justify-between px-0 ">
                          <div className="flex flex-col">
                            <ul className="flex text-primary">
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                            </ul>
                            <a href="/team" className="font-semibold">
                              John Doe
                            </a>
                          </div>
                          <img src="assets/img/icons/google.svg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 h-full object-cover">
                      <div className="w-full">
                        <img
                        className="w-full h-full object-cover"
                          src="assets/img/all-images/testimonial-img1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 overflow-hidden border border-primary rounded-xl">
                  <div className="flex flex-col-reverse lg:flex-row h-fit gap-3">
                    <div className="w-full h-full flex flex-col justify-between py-[12px]">
                      <div className="flex flex-col justify-between h-full">
                        <p>
                          "Working with SEOC has been a game-changer for our
                          business. Their expertise in SEO and digital marketing
                          has helped us achieve remarkable results and
                          significantly increase our online visibility.
                        </p>

                        <div className="flex w-fit justify-between px-0 ">
                          <div className="flex flex-col">
                            <ul className="flex text-primary">
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                              <li>
                                <i className="fa-solid fa-star" />
                              </li>
                            </ul>
                            <a href="/team" className="font-semibold">
                              John Doe
                            </a>
                          </div>
                          <img src="assets/img/icons/google.svg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 h-full object-cover">
                      <div className="w-full">
                        <img
                        className="w-full h-full object-cover"
                          src="assets/img/all-images/testimonial-img1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>

              </CarouselContent>
            </Carousel>
          </div>
        </div>
        {/*===== TESTIMONIAL AREA ENDS =======*/}

        {/*===== BLOG AREA STARTS =======*/}
        <div className="blog1-scetion-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 m-auto">
                <div className="blog-hedaer-area heading2 text-center">
                  <img
                    src="assets/img/elements/star2.png"
                    alt=""
                    className="star2 keyframe5"
                  />
                  <img
                    src="assets/img/elements/star2.png"
                    alt=""
                    className="star3 keyframe5"
                  />
                  <h2 className="text-anime-style-3">
                    Insights &amp; Innovations:{" "}
                    <br className="d-md-block d-none" /> Our Latest Blog Posts
                  </h2>
                  <p data-aos="fade-up" data-aos-duration={1000}>
                    Explore our blog to discover actionable insights, success
                    stories, and <br className="d-md-block d-none" /> expert
                    advice that can help drive growth for your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="blog-author-boxarea"
                  data-aos="fade-right"
                  data-aos-duration={800}
                >
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
                <div
                  className="blog-author-boxarea"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
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
                      Unlock the full potential of your digital marketing
                      strategy with the power of PPC.
                    </p>
                    <a href="/blog-single" className="readmore">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="space30 d-lg-none d-block" />
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="blog-author-boxarea"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                >
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
                      Where mobile devices dominate internet usage, responsive
                      web design more crucial.
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
        {/*===== CONTACT AREA STARTS =======*/}
        <div className="contact1-section-area sp6">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 m-auto">
                <div className="contact-header-area text-center heading2">
                  <img
                    src="assets/img/elements/star2.png"
                    alt=""
                    className="star2 keyframe5"
                  />
                  <img
                    src="assets/img/elements/star2.png"
                    alt=""
                    className="star3 keyframe5"
                  />
                  <h2 className="text-anime-style-3">
                    Get In Touch With Us Today
                  </h2>
                  <p>
                    We're here to help! If you have any questions or would like
                    to discuss <br className="d-md-block d-none" /> how our SEO
                    and digital marketing services can benefit your business,
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-5"
                data-aos="zoom-out"
                data-aos-duration={1000}
              >
                <div className="contact-info-area">
                  <h3>Contact Info</h3>
                  <p>
                    We're here to help! If you have any questions or would like
                    to discuss how our SEO and digital marketing services can
                    benefit your business,
                  </p>
                  <div className="space32" />
                  <div className="contact-auhtor-box">
                    <div className="icons relative">
                      <img
                        className="absolute -translate-x-1/2 bottom-1/2 top-1/2 m-auto left-1/2 right-1/2"
                        src="assets/img/icons/location2.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h4>Our Location</h4>
                      <a href="#">
                        8708 Technology Forest Pl Suite{" "}
                        <br className="d-lg-block d-none" /> 125 -G, The
                        Woodlands, TX 773
                      </a>
                    </div>
                  </div>
                  <div className="space40" />
                  <div className="contact-auhtor-box">
                    <div className="icons relative">
                      <img
                        className="absolute -translate-x-1/2 bottom-1/2 top-1/2 m-auto left-1/2 right-1/2"
                        src="assets/img/icons/phone2.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h4>Phone Number</h4>
                      <a href="tel:123-456-7890">
                        123-456-7890 <br />
                        123-456-7890
                      </a>
                    </div>
                  </div>

                  <div className="space40" />
                  <div className="contact-auhtor-box">
                    <div className="icons relative">
                      <img
                        className="absolute -translate-x-1/2 bottom-1/2 top-1/2 m-auto left-1/2 right-1/2"
                        src="assets/img/icons/email2.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h4>Email Address</h4>
                      <a href="mailto:infoseoc@.gmail.com">
                        infoseoc@.gmail.com <br />
                        infoseoc@.gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-7"
                data-aos="zoom-out"
                data-aos-duration={1200}
              >
                <div className="contact-boxarea">
                  <h3>Get In Touch</h3>
                  <p>
                    We're here to help! If you have any questions or would like
                    to discuss <br className="d-lg-block d-none" /> how our SEO
                    and digital marketing services can benefit your business,
                  </p>
                  <form action="https://api.web3forms.com/submit" method="POST">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-area">
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-area">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-area">
                          <input type="email" placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-area">
                          <input type="number" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-area">
                          <select
                            name="country"
                            id="country"
                            className="country-area nice-select6"
                          >
                            <option value={1} data-display="Service Type">
                              Service Type
                            </option>
                            <option value="">Belgium</option>
                            <option value="">Brezil</option>
                            <option value="">Argentina</option>
                            <option value="">Bangladesh</option>
                            <option value="">Germany</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-area">
                          <textarea
                            placeholder="Your Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-area">
                          <button className="header-btn1">
                            Free Consultation{" "}
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===== CONTACT AREA ENDS =======*/}
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
                  <h2 className="text-anime-style-3">
                    Ready To Take Your SEO To{" "}
                    <br className="d-md-block d-none" /> The Next Level
                  </h2>
                  <p data-aos="fade-up" data-aos-duration={1000}>
                    Effective SEO strategies not only elevate a website's
                    visibility but also drive{" "}
                    <br className="d-md-block d-none" /> targeted traffic,
                    enhance user experience,
                  </p>
                  <div
                    className="btn-area text-center"
                    data-aos="fade-up"
                    data-aos-duration={1200}
                  >
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
      </div>
    </>
  );
}

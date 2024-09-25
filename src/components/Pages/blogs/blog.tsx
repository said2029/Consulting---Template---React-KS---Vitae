import Footer from "@/components/globle/footer";
import NavBar from "@/components/globle/navBar";


export default function Blog() {
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
                <h1>Our Blog</h1>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right" />{" "}
                  <span>Our Blog</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== HERO AREA ENDS =======*/}
      {/*===== BLOG AREA STARTS =======*/}
      <div className="blog-top-area sp1">
        <div className="container_1">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-top-boxarea">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="content-area heading2">
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
                              <img
                                src="assets/img/icons/calender1.svg"
                                alt=""
                              />
                              16 August 2023
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h2>
                        The Power of PPC Advertising: How to Maximize Your ROI
                      </h2>
                      <div className="space8" />
                      <div className="btn-area">
                        <a href="blog.html" className="header-btn1">
                          Read Full Story{" "}
                          <span>
                            <i className="fa-solid fa-arrow-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2" />
                  <div className="col-lg-5">
                    <div className="images image-anime">
                      <img src="assets/img/all-images/blog-img19.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog1-scetion-area sp1 bg2">
        <div className="container_1">
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
              <div className="space30" />
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
              <div className="space30" />
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
              <div className="space30" />
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img15.png" alt="" />
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
                    The Power of Content Marketing: How to Drive Engagement...
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
              <div className="space30" />
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img16.png" alt="" />
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
                    The Importance of SEO in Digital Marketing:A Comprehensive
                    Guide
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
              <div className="space30" />
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
                    The Power of Social Media Marketing: How to Build Your...
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
              <div className="space30" />
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img15.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="/blog-single">
                    Social Media Marketing Strategies to Drive Engagement
                    Conversions
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
              <div className="space30" />
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img18.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a href="/blog-single">
                    Content Marketing 101: How to Create Compelling Converts..
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
              <div className="space30" />
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-author-boxarea">
                <div className="img1">
                  <img src="assets/img/all-images/blog-img17.png" alt="" />
                </div>
                <div className="content-area">
                  <div className="tags-area">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="assets/img/icons/calender1.svg" alt="" />
                          16 August 2023
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="assets/img/icons/contact1.svg" alt="" />
                          Ben Stokes
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
              <div className="space30" />
            </div>
            <div className="col-lg-12">
              <div className="pagination-area">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fa-solid fa-angle-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fa-solid fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
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

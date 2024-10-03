import { Link, useParams } from "react-router-dom";
import Footer from "../Home_com/Footer";
import NavBar from "../Home_com/NavBar";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useGetBlogs } from "@/hooks/Get_blogs";

export default function Blog_detals() {
  const { id } = useParams();
  const { blog } = useGetBlogs({ limit_value: 3 });

  const [_blog, setBlogs] = useState({
    id: "",
    image: "",
    title: "",
    content: "",
  });

  const Get_blogs = async () => {
    try {
      const docShot = await getDoc(doc(db, "blogs", id));
      console.log(docShot.data());
      setBlogs(docShot.data());
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    Get_blogs();
  }, []);
  return (
    <>
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
      {/*===== MOBILE HEADER STARTS =======*/}
      <div className="mobile-header mobile-haeder1 d-block d-lg-none">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo1.png" alt="" />
                </a>
              </div>
              <div className="mobile-nav-icon dots-menu">
                <i className="fa-solid fa-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-sidebar mobile-sidebar1">
        <div className="logosicon-area">
          <div className="logos">
            <img src="assets/img/logo/logo1.png" alt="" />
          </div>
          <div className="menu-close">
            <i className="fa-solid fa-xmark" />
          </div>
        </div>
        <div className="mobile-nav mobile-nav1">
          <ul className="mobile-nav-list nav-list1">
            <li>
              <a href="#">Home </a>
              <ul className="sub-menu">
                <li>
                  <a href="#">Multiple Page</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">Home One</a>
                    </li>
                    <li>
                      <a href="index2.html">Home Two</a>
                    </li>
                    <li>
                      <a href="index3.html">Home Three</a>
                    </li>
                    <li>
                      <a href="index4.html">Home Four</a>
                    </li>
                    <li>
                      <a href="index5.html">Home Five</a>
                    </li>
                    <li>
                      <a href="index6.html">Home Six</a>
                    </li>
                    <li>
                      <a href="index7.html">Home Seven</a>
                    </li>
                    <li>
                      <a href="index8.html">Home Eight</a>
                    </li>
                    <li>
                      <a href="index9.html">Home Nine</a>
                    </li>
                    <li>
                      <a href="index10.html">Home Ten</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Landing Page</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="single-index1.html" target="_blank">
                        Home One
                      </a>
                    </li>
                    <li>
                      <a href="single-index2.html" target="_blank">
                        Home Two
                      </a>
                    </li>
                    <li>
                      <a href="single-index3.html" target="_blank">
                        Home Three
                      </a>
                    </li>
                    <li>
                      <a href="single-index4.html" target="_blank">
                        Home Four
                      </a>
                    </li>
                    <li>
                      <a href="single-index5.html" target="_blank">
                        Home Five
                      </a>
                    </li>
                    <li>
                      <a href="single-index6.html" target="_blank">
                        Home Six
                      </a>
                    </li>
                    <li>
                      <a href="single-index7.html" target="_blank">
                        Home Seven
                      </a>
                    </li>
                    <li>
                      <a href="single-index8.html" target="_blank">
                        Home Eight
                      </a>
                    </li>
                    <li>
                      <a href="single-index9.html" target="_blank">
                        Home Nine
                      </a>
                    </li>
                    <li>
                      <a href="single-index10.html" target="_blank">
                        Home Ten
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="features.html">Services</a>
              <ul className="sub-menu">
                <li>
                  <a href="service1.html">Service One</a>
                </li>
                <li>
                  <a href="service2.html">Service Two</a>
                </li>
                <li>
                  <a href="service3.html">Service Three</a>
                </li>
                <li>
                  <a href="service4.html">Service Four</a>
                </li>
                <li>
                  <a href="service5.html">Service Five</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Blogs</a>
              <ul className="sub-menu">
                <li>
                  <a href="blog.html">Blog One</a>
                </li>
                <li>
                  <a href="blog-left.html">Blog Left</a>
                </li>
                <li>
                  <a href="blog-right.html">Blog Right</a>
                </li>
                <li>
                  <a href="blog-single.html">Blog Single</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className="sub-menu">
                <li>
                  <a href="case.html">Case Study One</a>
                </li>
                <li>
                  <a href="case-single.html">Case Study Single</a>
                </li>
                <li>
                  <a href="team.html">Our Team</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing Plan</a>
                </li>
                <li>
                  <a href="testimonials.html">Testimonials</a>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a href="404.html">404</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
          </ul>
          <div className="allmobilesection">
            <a href="contact.html" className="header-btn1">
              Get Started{" "}
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
            </a>
            <div className="single-footer">
              <h3>Contact Info</h3>
              <div className="footer1-contact-info">
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <i className="fa-solid fa-phone-volume" />
                  </div>
                  <div className="contact-info-text">
                    <a href="tel:+3(924)4596512">+3(924)4596512</a>
                  </div>
                </div>
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <a href="mailto:info@example.com">info@example.com</a>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>Our Location</h3>
                  <div className="contact-info-single">
                    <div className="contact-info-icon">
                      <i className="fa-solid fa-location-dot" />
                    </div>
                    <div className="contact-info-text">
                      <a href="mailto:info@example.com">
                        55 East Birchwood Ave.Brooklyn, <br /> New York
                        11201,United States
                      </a>
                    </div>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>Social Links</h3>
                  <div className="social-links-mobile-menu">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== MOBILE HEADER STARTS =======*/}
      {/*===== HERO AREA STARTS =======*/}
      <div
        className="about-header-area !text-white bg-[#c63b1e]"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage:`url(${_blog.image})`,
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
              <div className="about-inner-header heading9 text-center ">
                <h1 className="!text-white drop-shadow-2xl shadow-black" >{_blog?.title}</h1>
                <a className="!text-white" href="index.html">
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
      <div className="blog-auhtor-section-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="blog-auhtor-sidebar-area heading2">
                <h2>{_blog?.title}</h2>
                <div className="space34" />
                <div dangerouslySetInnerHTML={{ __html: _blog?.content }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== BLOG AREA ENDS =======*/}
      {/*===== BLOG AREA STARTS =======*/}
      <div className="blog1-scetion-area sp1 bg2">
        <div className="container_1">
          <div className="row">
            {/* blogs */}
            {blog?.map((blog: any, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="blog-author-boxarea">
                  <div className="img1">
                    <img src={blog.image} alt="" />
                  </div>
                  <div className="content-area">
                    {/* <div className="tags-area">
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
                  </div> */}
                    <Link to={`/blog/${blog?.id}`}>{blog?.title}</Link>
                    <p className="line-clamp-3">{blog?.short_des}</p>
                    <Link to={`/blog/${blog?.id}`} className="readmore">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div className="space30" />
              </div>
            ))}
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
    </>
  );
}

import React from "react";
import NavBar from "../globle/navBar";
import Footer from "../globle/footer";

export default function Contact() {
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
                <h1>Contact Us</h1>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right" />{" "}
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== HERO AREA ENDS =======*/}
      {/*===== CONTACT AREA STARTS =======*/}
      <div className="contact-main-inner-area sp1">
        <div className="container_1">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading2 contact-header">
                <h5>Contact Us</h5>
                <h2>Get in Touch with SEOC We Value Your Connection</h2>
                <p>
                  Our dedicated team is committed to providing prompt and
                  effective support to ensure your needs are met. We believe in
                  open communication and are always ready to listen. Reach out
                  to us via phone, email, or live chat, or visit our office
                  during business hours.
                </p>
                <div className="space32" />
                <div className="number-address-area">
                  <div className="phone-number">
                    <div className="img1">
                      <img src="assets/img/icons/phone3.svg" alt="" />
                    </div>
                    <div className="content">
                      <p>Phone Number</p>
                      <a href="tel:123-456-7890">123-456-7890</a>
                    </div>
                  </div>
                  <div className="phone-number m-0">
                    <div className="img1">
                      <img src="assets/img/icons/email3.svg" alt="" />
                    </div>
                    <div className="content">
                      <p>Email Address</p>
                      <a href="mailto:Infoseoc@gmail.com">Infoseoc@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="space50" />
                <div className="number-address-area2">
                  <div className="phone-number">
                    <div className="img1">
                      <img src="assets/img/icons/location3.svg" alt="" />
                    </div>
                    <div className="content">
                      <a href="#">
                        8708 Technology Forest Pl Suite{" "}
                        <br className="d-lg-block d-none" /> 125 -G, The
                        Woodlands, TX 773
                      </a>
                    </div>
                  </div>
                  <div className="phone-number">
                    <a
                      href="https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu"
                      className="map"
                      target="_blank"
                    >
                      View Our Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-5">
              <div className="contact-form-area">
                <h4>Get In Touch</h4>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="input-area">
                      <input type="text" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <input type="number" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <textarea placeholder="Your Message" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <button type="submit" className="header-btn1">
                        Get In Touch{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="location-section-area sp2 bg2">
        <div className="container_1">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className="location-header text-center heading2">
                <h5>Location</h5>
                <h2>Our Location</h2>
              </div>
            </div>
          </div>
          <div className="space60 d-lg-block d-none" />
          <div className="space30 d-lg-none d-block" />
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="location-boxes">
                <div className="img1">
                  <img src="assets/img/icons/location3.svg" alt="" />
                </div>
                <div className="space32" />
                <a href="#">
                  San Francisco <br className="d-lg-block d-none" />
                  1446 Vorwuw Parkway
                </a>
                <div className="space24" />
                <p>Phone Number</p>
                <a href="tel:123-456-7890">123-456-7890</a>
                <div className="space32" />
                <a
                  href="https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu"
                  className="map"
                  target="_blank"
                >
                  View Our Map
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-boxes">
                <div className="img1">
                  <img src="assets/img/icons/location3.svg" alt="" />
                </div>
                <div className="space32" />
                <a href="#">
                  Chicago <br className="d-lg-block d-none" />
                  1849 Usavom View
                </a>
                <div className="space24" />
                <p>Phone Number</p>
                <a href="tel:123-456-7890">123-456-7890</a>
                <div className="space32" />
                <a
                  href="https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu"
                  className="map"
                  target="_blank"
                >
                  View Our Map
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-boxes">
                <div className="img1">
                  <img src="assets/img/icons/location3.svg" alt="" />
                </div>
                <div className="space32" />
                <a href="#">
                  Boston <br className="d-lg-block d-none" />
                  1660 Dodgig Place
                </a>
                <div className="space24" />
                <p>Phone Number</p>
                <a href="tel:123-456-7890">123-456-7890</a>
                <div className="space32" />
                <a
                  href="https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu"
                  className="map"
                  target="_blank"
                >
                  View Our Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd"
            width={600}
            height={450}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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

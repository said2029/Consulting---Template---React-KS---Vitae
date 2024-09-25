export default function Contact_section() {
  return (
    <div className="container_1 mt-10 lg:mt-28 w-full flex flex-col items-center justify-between">
      <div className="text-center ;gw-1/2 space-y-4">
        <h1 className="text-4xl font-bold">Get In Touch With Us Today</h1>
        <p className="font-semibold opacity-70">
          If you have any questions, need assistance, or want to discuss your
          project, please don't hesitate to reach out.
        </p>
      </div>
      <div className="">
        <div className="contact1-section-area sp6 pt-0">
          <div className="">
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
                      <img className="absolute top-1/2 bottom-1/2 right-1/2 left-1/2 m-auto -translate-x-1/2" src="assets/img/icons/location2.svg" alt="" />
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
                      <img className="absolute top-1/2 bottom-1/2 right-1/2 left-1/2 m-auto -translate-x-1/2" src="assets/img/icons/phone2.svg" alt="" />
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
                  <div className="contact-auhtor-box relative ">
                    <div className="icons relative">
                      <img className="absolute top-1/2 bottom-1/2 right-1/2 left-1/2 m-auto -translate-x-1/2" src="assets/img/icons/email2.svg" alt="" />
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
      </div>
    </div>
  );
}

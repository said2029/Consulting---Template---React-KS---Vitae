import { FormEvent, useRef, useState } from "react";
import Footer from "../Home_com/Footer";
import NavBar from "../Home_com/NavBar";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { toast } from "react-toastify";
export default function Contact() {
  const ref = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sumbit = async (data: FormEvent) => {
    data.preventDefault();
    await addDoc(collection(db, "contact"), {
      ...formData,
      createAt: Date.now(),
    });
    ref.current?.reset();
    // see thanks to cleant message
    toast.success(`Thank you ${formData?.first_name+" "+formData?.last_Name},We’ll get back to you shortly.`,{
      position:"top-center",
      autoClose:5000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:false,
      draggable:false,
      progressStyle:{backgroundColor:"red"}
    });
  };
  // show popup
  return (
    <div className="bg-[#c63b1e]">
      {/*===== PRELOADER STARTS =======*/}
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
              <div className="about-inner-header heading9 text-center text-white">
                <h1 className="text-white">Contact Us</h1>
                <a className="text-white" href="/">
                  Home <i className="fa-solid fa-angle-right" />{" "}
                  <span>Contact Us</span>
                </a>
                <h1 className="text-white !text-4xl mt-4 font-extralight">
                  Getting sales is much more difficult then clicking this button
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== HERO AREA ENDS =======*/}
      {/* ===== CONTACT AREA STARTS =======*/}
      <div className="contact-main-inner-area sp1 px-2">
        <div className="container_1">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading2 contact-header">
                <h5>Contact Us</h5>
                <h2 className="text-white">
                  Get in Touch with SEOC We Value Your Connection
                </h2>
                <p>
                  Our dedicated team is committed to providing prompt and
                  effective support to ensure your needs are met. We believe in
                  open communication and are always ready to listen. Reach out
                  to us via phone, email, or live chat, or visit our office
                  during business hours.
                </p>
                <div className="space32" />
                <div className="number-address-area !bg-transparent py-2 ">
                  <div className="phone-number">
                    <div className="img1 !flex !items-center !justify-center">
                      <img src="assets/img/icons/phone3.svg" alt="" />
                    </div>
                    <div className="content">
                      <p className="!text-white">Phone Number</p>
                      <a className="!text-white" href="tel:123-456-7890">
                        123-456-7890
                      </a>
                    </div>
                  </div>
                  <div className="phone-number   m-0">
                    <div className="img1 flex items-center justify-center">
                      <img src="assets/img/icons/email3.svg" alt="" />
                    </div>
                    <div className="content">
                      <p className="!text-white">Email Address</p>
                      <a
                        className="!text-white"
                        href="mailto:Infoseoc@gmail.com"
                      >
                        Infoseoc@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space50" />

                <div className="number-address-area2 bg-transparent py-2">
                  <div className="phone-number">
                    <div className="img1 flex items-center justify-center">
                      <img src="assets/img/icons/location3.svg" alt="" />
                    </div>
                    <div className="content">
                      <a className="!text-white" href="#">
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
                <form
                  ref={ref}
                  onSubmit={sumbit}
                  className="row"
                  encType="multipart/form-data"
                >
                  <div className="col-lg-12">
                    <div className="input-area">
                      <input
                        onChange={handleChange}
                        required
                        name="first_name"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <input
                        onChange={handleChange}
                        required
                        name="last_Name"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <input
                        onChange={handleChange}
                        required
                        name="Email"
                        type="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <input
                        onChange={handleChange}
                        required
                        type="number"
                        name="number"
                        placeholder="Phone Number"
                        maxLength={10}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <textarea
                        name="message"
                        onChange={handleChange}
                        required
                        placeholder="Your Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-area">
                      <button type="submit" className="header-btn1 ">
                        Get In Touch{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="location-section-area sp2 bg2">
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
                <div className="img1 flex items-center justify-center">
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
                <div className="img1 flex items-center justify-center">
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
                <div className="img1 flex items-center justify-center">
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
      </div> */}

      {/*===== CONTACT AREA ENDS ======= */}

      {/*===== FOOTER AREA STARTS =======*/}
      <Footer />

    </div>
  );
}

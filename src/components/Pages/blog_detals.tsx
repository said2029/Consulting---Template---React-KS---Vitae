import { useParams } from "react-router-dom";
import Footer from "../Home_com/Footer";
import NavBar from "../Home_com/NavBar";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default function Blog_detals() {
  const { id } = useParams();

  const [blog, setBlogs] = useState({
    id: "",
    image: "",
    title: "",
    content: "",
  });

  const Get_blogs = async () => {
    try {
      const docShot = await getDoc(doc(db, "blogs", "1"));
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
                <h1 className="!text-white">Blog Details</h1>
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
                <h2>{blog?.title}</h2>
                <div className="space34" />
                <div className="img1">
                  <img src="assets/img/all-images/blog-img23.png" alt="" />
                </div>
                <div className="space24" />
                <p>
                  Pay-per-click (PPC) advertising is a powerful tool for driving
                  targeted traffic to your website, generating leads, and
                  increasing sales. When implemented effectively, PPC campaigns
                  can deliver a high return on investment (ROI) and help you
                  achieve your business goals.This guide, we'll explore the key
                  components of successful PPC advertising and share strategies
                  for maximizing your ROI.
                </p>
                <div className="space50" />
                <h3>Understanding PPC Advertising</h3>
                <div className="space24" />
                <p>
                  PPC advertising is a digital marketing strategy in which
                  advertisers pay a fee each time their ad is clicked. These ads
                  are displayed on search engine results pages (such as Google
                  or Bing) or on websites and social media platforms (such as
                  Facebook or LinkedIn). The goal of PPC advertising is to
                  attract qualified traffic to your website and convert them
                  into customers or leads.
                </p>
                <div className="space50" />
                <h3>Key Components of Successful PPC Campaign</h3>
                <div className="right-area">
                  <div className="check1">
                    <img src="assets/img/icons/check4.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>
                      <span>Keyword Research:</span> Conduct thorough keyword
                      research to identify relevant search terms and phrases
                      that your target audience is using. Choose keywords with
                      high search volume, low competition, and strong buyer
                      intent to maximize your chances of success.
                    </p>
                  </div>
                </div>
                <div className="right-area">
                  <div className="check1">
                    <img src="assets/img/icons/check4.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>
                      <span>Ad Copywriting:</span> Write compelling ad copy that
                      grabs attention, highlights your unique selling
                      proposition (USP), and encourages users to click. Use
                      relevant keywords in your ad copy to improve ad relevance
                      and quality score.
                    </p>
                  </div>
                </div>
                <div className="right-area">
                  <div className="check1">
                    <img src="assets/img/icons/check4.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>
                      <span>Ad Targeting:</span> Use advanced targeting options
                      to reach your ideal audience. Target users based on
                      demographics, interests, location, device, and more to
                      ensure that your ads are shown to the right people at the
                      right time.
                    </p>
                  </div>
                </div>
                <div className="right-area">
                  <div className="check1">
                    <img src="assets/img/icons/check4.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>
                      <span>Ad Extension:</span> Take advantage of ad extensions
                      to provide additional information and increase ad
                      visibility. Use extensions such as sitelinks, callouts,
                      and structured snippets to enhance your ads and drive more
                      clicks.
                    </p>
                  </div>
                </div>
                <div className="right-area">
                  <div className="check1">
                    <img src="assets/img/icons/check4.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>
                      <span>Landing Page Optimization:</span> Create dedicated
                      landing pages that are tailored to your PPC campaigns.
                      Optimize your landing pages for relevance, usability, and
                      conversion to ensure a seamless user experience and
                      maximize your ROI.
                    </p>
                  </div>
                </div>
                <div className="space50" />
                <div className="img1">
                  <img src="assets/img/all-images/blog-img20.png" alt="" />
                </div>
                <div className="space50" />
                <h3>Strategies for Maximizing PPC ROI</h3>
                <div className="right-area">
                  <div className="check1">
                    <img src="assets/img/icons/check4.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>
                      <span>Set Clear Goals:</span> Define clear objectives for
                      your PPC campaigns, whether it's increasing website
                      traffic, generating leads, or driving sales. Align your
                      campaign strategy with your business goals to ensure that
                      you're focusing on the metrics that matter most.
                    </p>
                  </div>
                </div>
                <div className="right-area">
                  <div className="check1">
                    <img src="assets/img/icons/check4.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>
                      <span>Monitor Performance Metrics:</span> Track key
                      performance metrics such as click-through rate (CTR),
                      conversion rate, cost per acquisition (CPA), and ROI. Use
                      analytics tools like Google Analytics and Google Ads to
                      monitor campaign performance and identify areas for
                      improvement
                    </p>
                  </div>
                </div>
                <div className="right-area">
                  <div className="check1">
                    <img src="assets/img/icons/check4.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>
                      <span>Optimize Ad Copy &amp; keywords:</span> Continuously
                      test and optimize your ad copy and keywords to improve ad
                      relevance and click-through rates. Experiment with
                      different messaging, offers, and calls to action to see
                      what resonates best with your audience.
                    </p>
                  </div>
                </div>
                <div className="right-area">
                  <div className="check1">
                    <img src="assets/img/icons/check4.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>
                      <span>Refine Targeting Options:</span> Refine your
                      targeting options based on performance data and audience
                      insights. Adjust your targeting parameters to focus on
                      high-value segments and exclude irrelevant audiences to
                      improve campaign efficiency.
                    </p>
                  </div>
                </div>
                <div className="right-area">
                  <div className="check1">
                    <img src="assets/img/icons/check4.svg" alt="" />
                  </div>
                  <div className="content">
                    <p>
                      <span>Implement Bid Strategies:</span> Create dedicated
                      landing pages that are tailored to your PPC campaigns.
                      Optimize your landing pages for relevance, usability, and
                      conversion to ensure a seamless user experience and
                      maximize your ROI.
                    </p>
                  </div>
                </div>
                <div className="space50" />
                {/* <div className="pera-box">
                  <p>
                    "PPC advertising is like a well-tuned engine: with the right
                    fuel, maintenance, and strategy, it can propel your business
                    forward at unprecedented speeds."
                  </p>
                  <div className="space16" />
                  <a href="#">
                    <img src="assets/img/icons/instagram.svg" alt="" />
                  </a>
                </div> */}
                {/* <div className="space50" />
                <h3>
                  Hire a Team of Expert Marketers to Handle the Research and
                  Video Creation Process For You
                </h3>
                <div className="space24" /> */}
                {/* <p className="pera1">
                  Just because something worked for one type of video doesn’t
                  mean it will always work. Your video marketing strategy needs
                  to be flexible and adjust to people’s viewing behaviors for
                  maximum impact.
                </p>
                <div className="social-tags">
                  <div className="tags">
                    <h4>Tags:</h4>
                    <ul>
                      <li>
                        <a href="#">PPC Advertising</a>
                      </li>
                      <li>
                        <a href="#">SEO</a>
                      </li>
                      <li>
                        <a href="#" className="m-0">
                          Digital Marketing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="social">
                    <h4>Social:</h4>
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
                    </ul>
                  </div>
                </div>
                <div className="space50" /> */}
                {/* <h3>Blog Comments (2)</h3>
                <div className="space32" />
                <div className="comments-boxarea">
                  <div className="comments-boxes">
                    <div className="comments-auhtor-box">
                      <div className="img3">
                        <img
                          src="assets/img/all-images/comments-img1.png"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <a href="#" className="name">
                          Mr. Ana Ritchie
                        </a>
                        <a href="#" className="date">
                          12 May 2024
                        </a>
                      </div>
                    </div>
                    <a href="#" className="reply">
                      Reply
                    </a>
                  </div>
                  <div className="space16" />
                  <p>
                    "This is a fantastic guide on PPC advertising! I've been
                    struggling to good ROI with my campaigns, but your tips on
                    keyword research ad copywriting have given me some great
                    ideas to try. Thanks for sharing such valuable information!"
                  </p>
                </div>
                <div className="space30" />
                <div className="comments-boxarea box2">
                  <div className="comments-boxes">
                    <div className="comments-auhtor-box">
                      <div className="img3">
                        <img
                          src="assets/img/all-images/comments-img2.png"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <a href="#" className="name">
                          Matthew Kuhnemann
                        </a>
                        <a href="#" className="date">
                          12 May 2024
                        </a>
                      </div>
                    </div>
                    <a href="#" className="reply">
                      Reply
                    </a>
                  </div>
                  <div className="space16" />
                  <p>
                    "Great article! I especially appreciate the section on ad
                    extensions. I've been neglecting them in my campaigns, but
                    now I see how they can really enhance the visibility and
                    effectiveness of my ads. Time to make some changes!"{" "}
                  </p>
                </div>
                <div className="space50" />
                <div className="contact-form-area">
                  <h4>Leave a Reply</h4>
                  <div className="space16" />
                  <p>
                    Provide clear contact information, including phone number,
                    email, and address.
                  </p>
                  <div className="space12" />
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
                        <input type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input type="number" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-area">
                        <input type="text" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-area">
                        <textarea placeholder="Message" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="space24" />
                      <div className="input-area">
                        <button type="submit" className="header-btn1">
                          Submit{" "}
                          <span>
                            <i className="fa-solid fa-arrow-right" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== BLOG AREA ENDS =======*/}
      {/*===== BLOG AREA STARTS =======*/}
      <div className="blog1-scetion-area sp2 bg2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="blog-hedaer-area heading2 text-center">
                <h2>More Blogs &amp; News</h2>
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
                  <a href="blog-single.html">
                    10 Essential SEO Tips to Boost Your Website's Ranking
                  </a>
                  <p>
                    Are you looking to improve your website's visibility and
                    attract more organic traffic?{" "}
                  </p>
                  <a href="blog-single.html" className="readmore">
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
                  <a href="blog-single.html">
                    The Power of PPC Advertising: How to Maximize Your ROI
                  </a>
                  <p>
                    Unlock the full potential of your digital marketing strategy
                    with the power of PPC.
                  </p>
                  <a href="blog-single.html" className="readmore">
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
                  <a href="blog-single.html">
                    The Importance of Responsive Web Design in the Mobile Age
                  </a>
                  <p>
                    Where mobile devices dominate internet usage, responsive web
                    design more crucial.
                  </p>
                  <a href="blog-single.html" className="readmore">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="space30" />
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
    </>
  );
}

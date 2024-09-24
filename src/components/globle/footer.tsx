export default function Footer() {
  return (
    <div className="footer1-section-area">
      <div className="container_1">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-logo-area">
              <img src="assets/img/logo/logo1.png" alt="" />
              <p>
                By optimizing content, leveraging relevant keywords, and
                adhering to best practices, businesses can secure prominent
                position (SEO)
              </p>
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
                  <a href="#">
                    <img src="assets/img/icons/youtube.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-logo-area1">
              <h3>About Link</h3>
              <ul>
                <li>
                  <a href="blog.html">Our Blog</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/service1">Services</a>
                </li>
                <li>
                  <a href="case.html">Marketing</a>
                </li>
                <li>
                  <a href="testimonials.html">Testimonials</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-logo-area2">
              <h3>Get in touch</h3>
              <ul>
                <li>
                  <a href="mailto.html">
                    <img src="assets/img/icons/email.svg" alt="" />
                    <span>Infoseoc@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/icons/location.svg" alt="" />
                    <span>
                      8708 Technology Forest{" "}
                      <br className="d-lg-block d-none" /> Pl Suite 125 -G, The{" "}
                      <br className="d-lg-block d-none" /> Woodlands, TX 773
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:123-456-7890">
                    <img src="assets/img/icons/phone.svg" alt="" />
                    <span>123-456-7890</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo-area3">
              <h3>Subscribe Our Newsletter</h3>
              <form action="#">
                <input type="text" placeholder="Enter Your email" />
                <button className="header-btn1">
                  {" "}
                  Subscribe{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="space80 d-lg-block d-none" />
        <div className="space40 d-lg-none d-block" />
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-area">
              <div className="pera">
                <p>ⓒCopyright 2024 SEOC . All rights reserved</p>
              </div>
              <ul>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#" className="m-0">
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

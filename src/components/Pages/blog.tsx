import Footer from "@/components/Home_com/Footer";
import NavBar from "@/components/Home_com/NavBar";
import { useGetBlogs } from "@/hooks/Get_blogs";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Blog() {
  const { blog, loadNextPage } = useGetBlogs({ limit_value: 10 });

  return (
    <div className="[&_*]:!bg-none bg-[#C63B1E]">
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
        className="about-header-area bg-[#C63B1E]"
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
              <div className="about-inner-header heading9 text-center">
                <h1 className="text-white">Our Blog</h1>
                <Link to="/" className="text-white">
                  Home <i className="fa-solid fa-angle-right" />{" "}
                  <span>Our Blog</span>
                </Link>
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
                              <img
                                src="assets/img/icons/calender1.svg"
                                alt=""
                              />
                              16 August 2023
                            </a>
                          </li>
                        </ul>
                      </div> */}

                      <h2 className="text-white">{blog[0]?.title}</h2>
                      <div className="space8" />
                      <div className="btn-area">
                        <Link
                          to={`/blog/${blog[0]?.slug}`}
                          className="header-btn1"
                        >
                          Learn More
                          <span>
                            <i className="fa-solid fa-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2" />
                  <div className="col-lg-5">
                    <div className="images image-anime">
                      <img src={blog[0]?.image} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog1-scetion-area sp1 bg2 bg-[#C63B1E]">
        <div className="container_1">
          <div className="row">
            {/* blogs */}
            {blog?.map((blog: any, index: number) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="blog-author-boxarea  !h-[450px]">
                  <div className="img1 h-[300px] after:!bg-[#C63B1E]">
                    <img
                      className="w-full h-full object-cover"
                      src={blog?.image}
                      alt=""
                    />
                  </div>
                  <div className="content-area">
                    <div className="flex w-full justify-between">
                      <a
                        className="!line-clamp-1"
                        href={`/blog/${blog?.slug}`}
                      >
                        {blog?.title}
                      </a>
                      <span className="bg-[#C63B1E] rounded-full text-white h-fit px-2">{blog?.category}</span>
                    </div>
                    <p className="!line-clamp-2">{blog?.short_des}</p>
                    <a href={`/blog/${blog?.slug}`} className="readmore">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-12 transition-all opacity-70 hover:opacity-100">
          <Button
            className="text-white font-bold rounded-full text-xl py-4 bg-[#C63B1E]"
            onClick={() => {
              loadNextPage();
            }}
            size={"sm"}
          >
            Show More
          </Button>
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
    </div>
  );
}

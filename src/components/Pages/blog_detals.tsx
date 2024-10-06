import { Link, useParams } from "react-router-dom";
import NavBar from "../Home_com/NavBar";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useGetBlogs } from "@/hooks/Get_blogs";
import Footer from "../Home_com/Footer";

export default function Blog_detals() {
  const { slug = "null" } = useParams<{ slug: string }>();
  const { blog } = useGetBlogs({ limit_value: 3 });

  const [_blog, setBlogs] = useState<any>({
    id: "",
    image: "",
    title: "",
    content: "",
  });

  const Get_blogs = async () => {
    try {
      const q = query(collection(db, "blogs"), where("slug", "==", slug));
      const docShot = await getDocs(q);
      setBlogs({ ...docShot?.docs[0]?.data() });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    Get_blogs();
  }, [slug]);

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

      {/*===== HERO AREA STARTS =======*/}
      <div
        className="about-header-area !text-white bg-[#c63b1e]"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${_blog.image})`,
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
                <h1 className="!text-white drop-shadow-2xl shadow-black">
                  {_blog?.title}
                </h1>
                <Link className="!text-white" to="/">
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
      <div className="blog-auhtor-section-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="blog-auhtor-sidebar-area heading2">
                <h2>{_blog?.title}</h2>
                <div className="space34" />
                <div>
                  <div
                    className="w-full"
                    dangerouslySetInnerHTML={{ __html: _blog?.content }}
                  />
                </div>
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
            {/* blogs */}
            {blog?.map((blog: any, index: number) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="blog-author-boxarea  !h-[450px]">
                  <div className="img1 h-[300px]">
                    <img
                      className="w-full h-full object-cover"
                      src={blog.image}
                      alt=""
                    />
                  </div>
                  <div className="content-area">
                    <Link className="!line-clamp-1" to={`/blog/${blog?.slug}`}>
                      {blog?.title}
                    </Link>
                    <p className="!line-clamp-2">{blog?.short_des}</p>
                    <Link to={`/blog/${blog?.slug}`} className="readmore">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
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

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BlogContant = [
  {
    title: "The Future of Web Development",
    desc: "Discover how the future of web development is shaping the way we build websites.",
    img: "assets/img/all-images/blog-img8.png",
    link: "/blog",
  },
  {
    title: "The Future of Web Development",
    desc: "Discover how the future of web development is shaping the way we build websites.",
    img: "assets/img/all-images/case-img7.png",
    link: "/blog",
  },
  {
    title: "The Future of Web Development",
    desc: "Discover how the future of web development is shaping the way we build websites.",
    img: "assets/img/all-images/blog-img15.png",
    link: "/blog",
  },
  {
    title: "The Future of Web Development",
    desc: "Discover how the future of web development is shaping the way we build websites.",
    img: "assets/img/all-images/header-img12.png",
    link: "/blog",
  },
  {
    title: "The Future of Web Development",
    desc: "Discover how the future of web development is shaping the way we build websites.",
    img: "assets/img/all-images/header-img12.png",
    link: "/blog",
  },
  {
    title: "The Future of Web Development",
    desc: "Discover how the future of web development is shaping the way we build websites.",
    img: "assets/img/all-images/header-img12.png",
    link: "/blog",
  },
  {
    title: "The Future of Web Development",
    desc: "Discover how the future of web development is shaping the way we build websites.",
    img: "assets/img/all-images/header-img12.png",
    link: "/blog",
  },
  {
    title: "The Future of Web Development",
    desc: "Discover how the future of web development is shaping the way we build websites.",
    img: "assets/img/all-images/header-img12.png",
    link: "/blog",
  },
  {
    title: "The Future of Web Development",
    desc: "Discover how the future of web development is shaping the way we build websites.",
    img: "assets/img/all-images/header-img12.png",
    link: "/blog",
  },
  {
    title: "The Future of Web Development",
    desc: "Discover how the future of web development is shaping the way we build websites.",
    img: "assets/img/all-images/header-img12.png",
    link: "/blog",
  },
];

const variantsUp = {
  initial: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0 },
};
export default function Blog_Section() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const to_right = useTransform(scrollYProgress, [0, 1], [-2500, 80]);
  const to_left = useTransform(scrollYProgress, [0, 1], [300, -2300]);
  return (
    <div
      ref={ref}
      className="w-full text-white h-[7000px] flex text-center items-center flex-col z-[999] "
    >
      <div className="sticky top-0 w-full flex flex-col items-center pt-4">
        <motion.h2
          variants={variantsUp}
          initial="initial"
          whileInView={"show"}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h2 max-w-3xl"
        >
          Stay Informed with Expert Insights
        </motion.h2>
        <motion.h2
          variants={variantsUp}
          initial="initial"
          whileInView={"show"}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[18px] lg:text-[24px] max-w-3xl"
        >
          Explore the latest trends, strategies, and tips to stay ahead in your
          industry
        </motion.h2>

        <div className="bg-red-400 h-[400px] lg:h-[500px] w-full mt-10 lg:mt-20 grid grid-row-2 overflow-hidden">
          <motion.div
            style={{ x: to_right }}
            className="bg-white w-full py-3 flex gap-2"
          >
            {BlogContant.map((item) => (
              <div
                className={`w-[300px] md:w-[500px] h-full bg-red-500 rounded-lg bg-[url(${item.img})] flex text-start relative overflow-hidden`}
              >
                <div
                  className={`absolute w-full h-full bg-gradient-to-t from-black to-transparent flex items-end p-3`}
                >
                  <h1 className="text-2xl">{item.title}</h1>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            style={{ x: to_left }}
            className="bg-white w-full py-3 flex gap-2 "
          >
            {BlogContant.map((item) => (
              <div
                className={`w-[300px] md:w-[500px] h-full bg-red-500 rounded-lg bg-[url(${item.img})] flex text-start relative overflow-hidden`}
              >
                <div
                  className={`absolute w-full h-full bg-gradient-to-t from-black to-transparent flex items-end p-3`}
                >
                  <h1 className="text-2xl">{item.title}</h1>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

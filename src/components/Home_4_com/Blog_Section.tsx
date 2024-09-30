import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button_Hover from "../globle/Button_Hover";

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
  const to_left = useTransform(scrollYProgress, [0, 1], [200, -3200]);

  const moveUp = useTransform(scrollYProgress, [0, 1], [1700, -1000]);
  const Rotate = useTransform(scrollYProgress, [0, 1], [-50, 30]);

  return (
    <div ref={ref} className="w-full h-[4000px]">
      <div
        className="sticky top-0 w-full overflow-hidden h-[100vh] flex flex-col items-center pt-[130px] sm:pt-[60px] text-center"
      >
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
      
        <div className="h-[400px] lg:h-[500px] absolute top-1/2 bottom-1/2 md:bottom-44 my-auto w-full grid grid-row-2 overflow-hidden">
          <motion.div
            style={{ x: to_right }}
            className="w-full py-3 flex gap-2 px-10"
          >
            {BlogContant.map((item,i) => (
              <a
                key={item.link+i}
                href={item.link}
                className={`w-[300px] md:w-[500px] text-white h-full bg-red-500 rounded-lg bg-[url(${item.img})] bg-no-repeat bg-cover flex text-start relative overflow-hidden`}
              >
                <div
                  className={`absolute w-full h-full bg-gradient-to-t from-black to-transparent flex items-end p-3`}
                >
                  <h1 className="text-2xl">{item.title}</h1>
                </div>
              </a>
            ))}
          </motion.div>
          <motion.div
            style={{ x: to_left }}
            className="w-full py-3 flex gap-2 px-10"
          >
            {BlogContant.map((item, i) => (
              <a
                key={item.link + i}
                href={item.link}
                className={`w-[300px] text-white md:w-[500px] h-full rounded-lg bg-[url(${item.img})] bg-no-repeat bg-cover flex text-start relative overflow-hidden`}
              >
                <div
                  className={`absolute w-full h-full bg-gradient-to-t from-black to-transparent flex items-end p-3`}
                >
                  <h1 className="text-2xl">{item.title}</h1>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      
        <motion.div
          style={{ x: moveUp, rotateZ: Rotate }}
          className="absolute top-1/3 bottom-1/2 mt-auto"
        >
          <Button_Hover href="/blog" text="blog" />
        </motion.div>
      </div>
    </div>
  );
}

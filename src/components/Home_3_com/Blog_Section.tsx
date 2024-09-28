import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
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
];

export default function Blog_Section({ indexView }: { indexView: number }) {
  const { scrollYProgress } = useScroll();
  const moveUpMd = useTransform(scrollYProgress, [0, 1], [700, -555]);

  return (
    <AnimatePresence>
      {indexView >= 3 && (
        <motion.div
          variants={{
            initial: { scale: 0, y: "100vh" },
            animate: { scale: 1, y: 0 },
            exit: { scale: 0, y: [0, 100], rotate: 50 },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-full h-[100vh] bg-blue-400 backdrop-blur-xl bg-[url('/assets/img/all-images/blog-img19.png')] bg-no-repeat bg-cover sticky top-0 flex justify-center items-center"
        >
          {/* content */}
          <div className="w-full h-full flex justify-center lg:justify-start items-center relative backdrop-blur-2xl">
            <div className="grid gap-3 px-2 grid-cols-2 lg:grid-cols-2 lg:ml-10 xl:ml-28 lg:gap-12 md:w-full lg:w-[60%]">
              {BlogContant.map((blog,index) => (
                <motion.a
                  href={blog.link}
                  style={{ y: moveUpMd }}
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: "-100vh" },
                    animate: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                  className={`backdrop-blur-3xl text-white cursor-pointer bg-[url('${blog.img}')] bg-no-repeat bg-cover h-[160px] md:h-[250px] w-full rounded-md overflow-hidden`}
                >
                  <div className="w-full h-full bg-gradient-to-t from-black to-transparent p-3 flex flex-col justify-end items-end">
                    <h1 className=" sm:text-xl flex justify-between w-full items-center">
                      <span>{blog.title}</span>{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </h1>
                    <p className="text-sm opacity-70 hidden sm:block">
                      {blog.desc}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <Button_Hover href="/blog" text="blog" />

            {/* Main title */}
            <motion.h1
              variants={{
                initial: { opacity: 0, y: 50, scaleY: 1.4 },
                animate: { opacity: 1, y: 0, scaleY: 1 },
              }}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.9 }}
              className="text-4xl lg:text-7xl font-thin absolute bottom-4 left-4 uppercase"
            >
              Expert Insights to Help Your Business Innovate and Grow
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

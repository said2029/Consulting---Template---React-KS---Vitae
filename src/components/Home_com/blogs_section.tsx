import { motion } from "framer-motion";

export default function Blogs_section() {
  return (
    <div className="container_1 mt-10 lg:mt-28 w-full flex flex-col items-center justify-between">
      <div className="text-center lg:w-1/2 space-y-4">
        <motion.h1
          variants={{
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
          }}
          initial="initial"
          transition={{ duration: 1, ease: "easeInOut" }}
          whileInView={"animate"}
          viewport={{ once: true }}
          className=" text-3xl lg:text-4xl font-bold"
        >
          Insights & Innovations: Our Latest Blog Posts
        </motion.h1>
        <motion.p
          variants={{
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
          }}
          initial="initial"
          transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
          whileInView={"animate"}
          viewport={{ once: true }}
          className="font-semibold opacity-70"
        >
          Explore our blog to discover actionable insights, success stories, and
          expert advice that can help drive growth for your business.
        </motion.p>
      </div>

      <div className="mt-10 gap-9 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.article
            variants={{
              initial: { opacity: 0, y: 200 },
              show: { opacity: 1, y: 0 },
            }}
            initial="initial"
            whileInView={"show"}
            transition={{
              duration: 2,
              delay: 0.4 * i,
              damping: 10,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="w-full h-[240px] cursor-pointer [&>img]:hover:rotate-3 [&>img]:hover:scale-125 transition-all overflow-hidden relative rounded-t-md">
              <img
                className="w-full h-full transition-all duration-700 object-cover"
                src="\assets\img\all-images\blog-img23.png"
                alt=""
              />
              <div className="bg-primary opacity-70 absolute top-0 w-full h-full"></div>
            </div>
            <div className="mt-6 space-y-2">
              <h2 className="font-semibold text-xl">
                10 Essential SEO Tips to Boost Your Website's Ranking
              </h2>
              <p className="">
                Are you looking to improve your website's visibility and attract
                more organic traffic?
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

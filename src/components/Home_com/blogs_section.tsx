import { motion } from "framer-motion";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

export default function Blogs_section() {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="assets\img\all-images\blog-img25.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="assets\img\all-images\blog-img23.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <a className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <img
            src="assets\img\all-images\blog-img7.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </a>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src="assets\img\all-images\blog-img8.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="container_1 mt-10 lg:mt-28 w-full flex flex-col items-center justify-between sticky">
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
      <div className="mt-10 w-full">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}

// <div className="container_1 mt-10 lg:mt-28 w-full flex flex-col items-center justify-between">
//   <div className="text-center lg:w-1/2 space-y-4">
//     <motion.h1
//       variants={{
//         initial: { opacity: 0, y: 30 },
//         animate: { opacity: 1, y: 0 },
//       }}
//       initial="initial"
//       transition={{ duration: 1, ease: "easeInOut" }}
//       whileInView={"animate"}
//       viewport={{ once: true }}
//       className=" text-3xl lg:text-4xl font-bold"
//     >
//       Insights & Innovations: Our Latest Blog Posts
//     </motion.h1>
//     <motion.p
//       variants={{
//         initial: { opacity: 0, y: 30 },
//         animate: { opacity: 1, y: 0 },
//       }}
//       initial="initial"
//       transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
//       whileInView={"animate"}
//       viewport={{ once: true }}
//       className="font-semibold opacity-70"
//     >
//       Explore our blog to discover actionable insights, success stories, and
//       expert advice that can help drive growth for your business.
//     </motion.p>
//   </div>

//   <div className="mt-10 gap-9 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
//     {Array.from({ length: 3 }).map((_, i) => (
//       <motion.article
//         variants={{
//           initial: { opacity: 0, y: 200 },
//           show: { opacity: 1, y: 0 },
//         }}
//         initial="initial"
//         whileInView={"show"}
//         transition={{
//           duration: 2,
//           delay: 0.4 * i,
//           damping: 10,
//           type: "spring",
//         }}
//         viewport={{ once: true }}
//         className="w-full"
//       >
//         <div className="w-full h-[240px] cursor-pointer [&>img]:hover:rotate-3 [&>img]:hover:scale-125 transition-all overflow-hidden relative rounded-t-md">
//           <img
//             className="w-full h-full transition-all duration-700 object-cover"
//             src="\assets\img\all-images\blog-img23.png"
//             alt=""
//           />
//           <div className="bg-primary opacity-70 absolute top-0 w-full h-full"></div>
//         </div>
//         <div className="mt-6 space-y-2">
//           <h2 className="font-semibold text-xl">
//             10 Essential SEO Tips to Boost Your Website's Ranking
//           </h2>
//           <p className="">
//             Are you looking to improve your website's visibility and attract
//             more organic traffic?
//           </p>
//         </div>
//       </motion.article>
//     ))}
//   </div>
// </div>

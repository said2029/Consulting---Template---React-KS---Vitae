import { motion } from "framer-motion";
import { useState } from "react";
const variantsUp = {
  initial: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0 },
};

const CoreValuesComponent = ({ images }: { images: Array<string> }) => {
  const [hover, setHover] = useState(false);
  const angleStep = 360 / images.length;
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={`w-28 h-28 rounded-full bg-red-500 ${
        hover && "bg-red-500/75"
      } flex justify-center items-center relative`}
    >
      {images.map((_, index) => (
        <motion.div
          variants={{
            initial: {
              opacity: 0,
              transform: `rotate(${index * angleStep}deg) translate(0, 0px)`,
            },
            animate: {
              opacity: 1,
              transform: `rotate(${index * angleStep}deg) translate(0, -110px)`,
            },
          }}
          initial="initial"
          animate={hover ? "animate" : "initial"}
          key={index}
          className="absolute w-20 h-20 bg-red-500 rounded-full flex items-center justify-center transform overflow-hidden"
          style={{
            transform: `rotate(${index * angleStep}deg) translate(0, 0px)`,
          }}
        >
          <img
            src={images[index]}
            alt="service"
            className="w-full h-full object-cover overflow-hidden"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default function Services_Section() {
  return (
    <div className="flex justify-center w-screen overflow-hidden text-center items-center flex-col py-7 mt-10 px-6 lg:px-20 xl:px-48">
      <motion.h2
        variants={variantsUp}
        initial="initial"
        whileInView={"show"}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h2 max-w-3xl"
      >
        Our Expertise, Your Competitive Edge
      </motion.h2>
      <motion.h2
        variants={variantsUp}
        initial="initial"
        whileInView={"show"}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[24px] max-w-3xl"
      >
        From business strategy to digital transformation, we offer solutions
        tailored to your needs
      </motion.h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 place-content-center lg:grid-cols-3 mt-8 lg:gap-28">
        <motion.div
          variants={variantsUp}
          initial="initial"
          whileInView={"show"}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col gap-3 items-center"
        >
          <CoreValuesComponent
            images={[
              "/assets/img/all-images/case-img14.png",
              "/assets/img/all-images/case-img21.png",
              "/assets/img/all-images/case-img20.png",
              "/assets/img/all-images/post-img1.png",
              "/assets/img/all-images/post-img2.png",
              "/assets/img/all-images/blog-img10.png",
              "/assets/img/all-images/blog-img5.png",
            ]}
          />
          <p className="font-thin text-xl">
            Business strategy and planning for scalable growth
          </p>
        </motion.div>

        <motion.div
          variants={variantsUp}
          initial="initial"
          whileInView={"show"}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col gap-3 items-center"
        >
          <CoreValuesComponent
            images={[
              "/assets/img/all-images/case-img14.png",
              "/assets/img/all-images/blog-img10.png",
              "/assets/img/all-images/case-img20.png",
              "/assets/img/all-images/case-img21.png",
              "/assets/img/all-images/post-img2.png",
              "/assets/img/all-images/blog-img5.png",
              "/assets/img/all-images/post-img1.png",
            ]}
          />
          <p className="font-thin text-xl">
            Transform digitally to keep your brand visible and engaging
          </p>
        </motion.div>
        <motion.div
          variants={variantsUp}
          initial="initial"
          whileInView={"show"}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col gap-3 items-center"
        >
          <CoreValuesComponent
            images={[
              "/assets/img/all-images/case-img21.png",
              "/assets/img/all-images/case-img14.png",
              "/assets/img/all-images/post-img2.png",
              "/assets/img/all-images/case-img20.png",
              "/assets/img/all-images/post-img1.png",
              "/assets/img/all-images/blog-img5.png",
              "/assets/img/all-images/blog-img10.png",
            ]}
          />

          <p className="font-thin text-xl">
            Online and Offline sales and Revenue management solution
          </p>
        </motion.div>
      </div>
    </div>
  );
}

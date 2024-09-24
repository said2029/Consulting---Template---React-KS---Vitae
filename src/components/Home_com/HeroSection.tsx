import { Button } from "../ui/button";
import FlyImage from "../animation/fly_Images";
import { motion } from "framer-motion";

export default function HeroSection() {
  const HeroTitle = "Elevate Your Brand With Expert SEO & Digital Marketing";
  return (
    <div className="w-full relative pt-36 bg-no-repeat bg-cover bg-[url('/assets/img/bg/header-bg1.png')]">
      <div className="px-main grid place-items-center grid-cols-2  place-content-start ">
        <section className="flex flex-col gap-5">
          <div className="bg-[#4e2fda27] px-3 font-medium text-[16px] py-1 bg-opacity-50 backdrop-blur-lg  w-fit gap-1 items-center flex  justify-center text-primary rounded-md ">
            <img src="/assets/img/icons/logo-icons.svg" alt="" />
            <h3>Top #1 SEO & Marketing Agency</h3>
          </div>
          <h1 className="font-bold font-figtree-medium text-[60px] leading-[70px]">
            {HeroTitle.split("").map((chart, index) => (
              <motion.span
                variants={{
                  start: { opacity: 0, x: 30 },
                  end: { opacity: 1, x: 0 },
                }}
                initial="start"
                animate="end"
                transition={{
                  duration: 0.1 * index,
                  ease: "backInOut",
                }}
              >
                {chart}
              </motion.span>
            ))}
          </h1>
          <span className="font-thin opacity-65  mt-2 text-[16px]">
            Welcome to SEOC where we specialize in revolutionizing your online
            presence through expert SEO and digital marketing solutions.
          </span>
          <div className="flex items-center gap-2">
            <Button
              size={"lg"}
              className="rounded-full h-[4em] transition-all hover:h-[3.5em] hover:[&_img]:rotate-180 space-x-2 flex justify-between text-white bg-gradient-to-r from-primary to-primary-foreground"
            >
              <span className="text-[18px] font-bold">Start Ranking Now</span>
              <img
                className="w-8 bg-white rounded-full p-2"
                src="/assets/img/icons/arrow.svg"
              />
            </Button>

            <Button
              size={"lg"}
              variant={"outline"}
              className="rounded-full h-[4em] hover:bg-primary hover:[&_img]:bg-white hover:text-white transition-all hover:h-[3.5em] hover:[&_img]:rotate-180 space-x-2 flex outline outline-1 outline-primary justify-between text-primary"
            >
              <span className="text-[18px] font-bold">Contact Now </span>
              <img
                className="w-8 bg-primary rounded-full p-2"
                src="/assets/img/icons/arrow.svg"
              />
            </Button>
          </div>
        </section>
        <section className="place-self-end relative bg-center bg-[url('/assets/img/bg/service-bg1.png')]">
          <div>
            <img
              className="h-[672.01px] w-[486.95px]"
              src="/assets/img/all-images/header-img1.png"
            />
          </div>
          <FlyImage
            image="assets/img/icons/sound-icons1.svg"
            variants={{
              start: { top: "0%" },
              end: { top: "6%" },
            }}
          />
        </section>
      </div>
      <FlyImage
        image="/assets/img/elements/elements1.png"
        variants={{
          start: { top: "20%" },
          end: { top: "26%" },
        }}
      />
      <FlyImage
        image="assets/img/all-images/header-author-img2.png"
        variants={{
          start: { top: "20%", right: "0%" },
          end: { right: "5%" },
        }}
      />
      <FlyImage
        image="assets/img/icons/lite-icons1.svg"
        variants={{
          start: { top: "60%", right: "3%" },
          end: { top: "57%" },
        }}
        transition={{
          duration: 10,
          ease: "circOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}

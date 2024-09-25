import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function About_Us_Section() {
  return (
    <div className="container_1 w-full h-fit place-content-center lg:h-[500px] flex flex-col lg:flex-row gap-10 lg:gap-36 mt-28">
      <section className="grid grid-cols-2 gap-2 w-fit flex-shrink-0">
        <div className="w-64 h-[500px] gap-2 flex flex-col">
          <div className="w-full h-[12em] flex gap-2 justify-between">
            <div>
              <img
                className="animate-slow_spin"
                src="assets\img\elements\elements15.png"
                alt=""
              />
            </div>
            <motion.div
              variants={{
                initial: { opacity: 0, y: 200 },
                animate: { opacity: 1, y: 0 },
              }}
              whileInView={"animate"}
              initial="initial"
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="min-w-[9em] h-full flex gap-1 overflow-hidden rounded-md"
            >
              <img
                className="w-full h-full object-cover"
                src="/assets/img/all-images/testimonial-img10.png"
                alt=""
              />
            </motion.div>
          </div>

          <motion.div
            variants={{
              initial: { opacity: 0, y: 200 },
              animate: { opacity: 1, y: 0 },
            }}
            whileInView={"animate"}
            initial="initial"
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-red-50 h-full w-full overflow-hidden rounded-md"
          >
            <img
              className="w-full h-full object-cover"
              src="\assets\img\all-images\case-img3.png"
              alt=""
            />
          </motion.div>
        </div>

        <div className="w-full h-full">
          <div className="w-fit">
            <img
              className="animate-slow_spin"
              src="assets/img/elements/elements5.png"
              alt=""
            />
          </div>
          <motion.div
            variants={{
              initial: { opacity: 0, y: 200 },
              animate: { opacity: 1, y: 0 },
            }}
            whileInView={"animate"}
            initial="initial"
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-56 w-full overflow-hidden rounded-md"
          >
            <img
              className="w-full object-cover"
              src="/assets/img/all-images/case-img12.png"
            />
          </motion.div>
        </div>
      </section>

      <section className="w-fit h-full flex-shrink space-y-6 text-center lg:text-start">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold">
            We Provide All Kinds of Consulting Services
          </h1>
          <p className="opacity-70 font-semibold">
            Our mission is to deliver high-quality consulting services across
            multiple industries.
          </p>
        </div>

        <div className="mt-6">
          <h1 className="text-3xl font-bold ">Our Mission & Vision</h1>
          <div className="space-y-2 opacity-70 font-semibold">
            <p className="mt-3">
              We have over 20 years of experience helping businesses grow.
            </p>
            <p>
              Our team of experts provides solutions tailored to your needs.
            </p>
          </div>
        </div>

        <Button className="bg-gradient-to-r from-primary h-[50px] w-fit to-primary-foreground text-white">
          Learn More About
        </Button>
      </section>
    </div>
  );
}

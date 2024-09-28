import { motion,} from "framer-motion";

export default function Contact_Section() {


  return (
    <div
      className="w-full flex flex-col text-center items-center pt-24"
    >
      <motion.h2
        initial="initial"
        whileInView={"show"}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h2 max-w-3xl"
      >
        Get in Touch with Us Toda
      </motion.h2>
      <motion.h2
        initial="initial"
        whileInView={"show"}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[18px] lg:text-[24px] max-w-3xl"
      >
        We’re here to help you with tailored solutions to transform your
        business
      </motion.h2>
    </div>
  );
}

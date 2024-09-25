import { motion } from "framer-motion";
export default function Text_up({ text, duration=0, delay=0 }: { text: string,duration?:number, delay?:number }) {
  return (
    <>
      {text.split("").map((chart, index) => (

        <motion.span
          key={index}
          variants={{
            start: { opacity: 0, y: 30 },
            end: { opacity: 1, y: 0 },
          }}
          initial="start"
          whileInView={"end"}
          viewport={{ once: true }}
          transition={{
            duration: duration * index,
            ease: "backInOut",
            delay: delay,
          }}
        >
          {chart}
        </motion.span>

      ))}
    </>
  );
}

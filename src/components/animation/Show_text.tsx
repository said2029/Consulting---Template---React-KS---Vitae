import { motion } from "framer-motion";
export default function Show_text({
  text,
  duration = 0.1,
  delay = 0,
}: {
  text: string;
  duration?: number;
  delay?: number;
}) {
  return (
    <>
      {text.split("").map((chart, index) => (
        <motion.span
          key={index}
          variants={{
            start: { opacity: 0, x: 30 },
            end: { opacity: 1, x: 0 },
          }}
          initial="start"
          whileInView={"end"}
          viewport={{ once: true }}
          transition={{
            duration: duration * index,
            ease: "backInOut",
            delay:delay
          }}
        >
          {chart}
        </motion.span>
      ))}
    </>
  );
}

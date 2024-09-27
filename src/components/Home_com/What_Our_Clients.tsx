import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useRef } from "react";
import { useScroll, useTransform,motion } from "framer-motion";
export default function What_Our_Clients() {
  const ref = useRef<HTMLDivElement|any>();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"],
  });
  const MoveUp = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const Scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const Opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  return (
    <motion.div  style={{y:MoveUp,opacity:Opacity,scale:Scale}} ref={ref} className="container_1 mt-24 overflow-hidden flex flex-col justify-center items-center w-full">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">What Our Clients Say</h1>
        <p className="font-semibold opacity-70">
          This agency provided us with exceptional consulting services and
          helped grow our business exponentially
        </p>
      </div>

      <div className="mt-10">
        {/*===== TESTIMONIAL AREA STARTS =======*/}
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            skipSnaps: true,
            loop: true,
          }}
        >
          <CarouselContent className="space-x-11">
            {Array.from({ length: 10 }).map((_,i) => (
              <CarouselItem key={i} className="basis-64 px-0 md:basis-1/2 lg:basis-1/2 lg:h-[300px] overflow-hidden border border-primary rounded-xl">
                <div className="flex !w-full h-full  flex-col-reverse lg:flex-row gap-3">
                  <div className="w-full h-full flex flex-col justify-between lg:py-[12px] ps-3 md:ps-3">
                    <div className="flex flex-col justify-between h-full">
                      <p>
                        Working with SEOC has been a game-changer for our
                        business. Their expertise in SEO and digital marketing
                        has helped us achieve remarkable results and
                        significantly increase our online visibility.
                      </p>

                      <div className="flex w-fit justify-between px-0 ">
                        <div className="flex flex-col">
                          <ul className="flex text-primary">
                            <li>
                              <i className="fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star" />
                            </li>
                            <li>
                              <i className="fa-solid fa-star" />
                            </li>
                          </ul>
                          <a href="/team" className="font-semibold">
                            John Doe
                          </a>
                        </div>
                        <img src="assets/img/icons/google.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 place-self-center h-full object-cover">
                    <div className="w-full">
                      <img
                        className="w-full h-full object-cover"
                        src="assets/img/all-images/testimonial-img1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/*===== TESTIMONIAL AREA ENDS =======*/}
      </div>
    </motion.div>
  );
}

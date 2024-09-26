import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function Brand_Scroll() {
  return (
    <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-center w-full h-fit container_1">
      <div className="text-[20px] font-semibold">Trusted by Top Companies</div>
      <div className="w-full">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            loop: true,
            skipSnaps: true,
            duration: 100,
          }}
          className="w-full"
        >
          <CarouselContent className="flex items-center gap-2">
            {Array.from({ length: 10 }).map(() => {
              return Array.from({ length: 5 }).map((_, index) => {
                return (
                  <CarouselItem key={index} className="basis-[35%] lg:basis-32">
                    <img
                      className="pointer-events-none w-full"
                      alt={`brand-img${index}`}
                      key={index}
                      src={`/assets/img/elements/brand-img${index + 1}.png`}
                    />
                  </CarouselItem>
                );
              });
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

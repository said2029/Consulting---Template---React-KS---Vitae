import Autoplay from "embla-carousel-autoplay";
import Footer from "../globle/footer";
import NavBar from "../globle/navBar";
import HeroSection from "../Home_com/HeroSection";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { motion } from "framer-motion";
import Element_up from "../animation/Element_up";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Reloader from "../Reloader";

export default function Home_2() {
  return (
    <main className="min-w-full w-screen">
      <Reloader />
      {/* Header */}
      <NavBar />
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}

      <div className="w-full container_1 flex flex-col justify-center items-center mt-28 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold">We Offer Consultancy Services</h1>
          <p className="opacity-70 mt-2">
            We help businesses grow through strategic consulting in various
            domains.
          </p>
        </div>
        <div className="flex justify-between w-full items-start gap-4 mt-16">
          {Array.from({ length: 4 }).map(() => (
            <section className="flex flex-col w-[200px] items-center justify-center gap-3">
              <div className="overflow-hidden rounded-full">
                <div className="bg-gray-600 w-44 h-44">
                  <img
                    className="w-full h-full"
                    src="/assets/img/all-images/testimonial-img10.png"
                    alt=""
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-center">
                Agency Consulting
              </h3>
              <p className="text-sm opacity-70 text-center">
                Professional advice to help agencies succeed.
              </p>
              <div className="flex justify-center cursor-pointer transition-all hover:-rotate-12 items-center bg-primary rounded-full text-white p-3">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* About Us Section */}

      <div className="container_1 w-full h-[500px] place-content-center flex gap-36 mt-28">
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
              <div className="min-w-[9em] h-full flex gap-1 overflow-hidden rounded-md">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/img/all-images/testimonial-img10.png"
                  alt=""
                />
              </div>
            </div>

            <div className="bg-red-50 h-full w-full overflow-hidden rounded-md">
              <img
                className="w-full h-full object-cover"
                src="\assets\img\all-images\case-img3.png"
                alt=""
              />
            </div>
          </div>

          <div className="w-full h-full">
            <div className="w-fit">
              <img
                className="animate-slow_spin"
                src="assets/img/elements/elements5.png"
                alt=""
              />
            </div>
            <div className="h-56 w-full overflow-hidden rounded-md">
              <img
                className="w-full object-cover"
                src="/assets/img/all-images/case-img12.png"
              />
            </div>
          </div>
        </section>

        <section className="w-fit h-full flex-shrink space-y-6">
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

      {/*  Meet Our Team */}

      <div className="mt-28 flex w-full text-white bg bg-[url('/assets/img/bg/header-img9.png')] h-[500px]">
        <div className="flex gap-4 flex-col justify-center items-center h-full w-[600px] bg-primary bg-[url('\assets\img\bg\header-bg7.png')] text-white p-4">
          <h1 className="text-5xl font-bold">
            CONTUATIN EXPERTISE! YOU CAN TRUST.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            sequi iusto recusandae sint at libero sapiente provident, quidem
            facere perspiciatis aspernatur? Aliquam a vel mollitia quisquam et
          </p>
        </div>
        <div className="w-full h-full  flex justify-evenly items-center ">
          {Array.from({ length: 4 }).map(() => (
            <CardContainer className="inter-var">
              <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 ">
                <CardItem translateZ="70">
                  <div className="flex flex-col items-start gap-3 w-fit h-fit rounded-md ">
                    <div className="w-36 h-36 bg-red-500 overflow-hidden rounded-md">
                      <img
                        className="object-cover w-full h-full"
                        src={"/assets/img/all-images/team-img8.png"}
                        alt=""
                      />
                    </div>
                    <div className="w-full space-y-2">
                      <h1 className="font-extrabold text-lg underline">
                        {" "}
                        Jane Smith
                      </h1>
                      <p className="font-bold opacity-70">CEO & Founder</p>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}

      <div className="container_1 w-full mt-28 relative">
        <div className="text-4xl font-bold flex gap-10 justify-between">
          <div className="w-1/3 font-bold leading-normal">
            OUR TRACK RECORD OF CPMLETED{" "}
            <span className="text-primary underline">CONSULTING</span> PROJECTS.
          </div>

          <div className="w-52 h-52">
            <img
              className="w-full animate-moveUpDone"
              src="\assets\img\elements\elements8.png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 w-full gap-16 grid grid-cols-3">
          {Array.from({ length: 3 }).map(() => (
            <div>
              <div className=" bg-red-500 h-60 overflow-hidden rounded-lg w-full">
                <img
                  className="object-cover w-full h-full"
                  src={"/assets/img/all-images/testimonial-img10.png"}
                  alt=""
                />
              </div>
              <div className="flex justify-between mt-4">
                <h1 className="text-2xl fony-bold">
                  Business Process Optimiztion
                </h1>
                <a className="opacity-70 cursor-pointer text-xl -rotate-45">
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* 
        <div className="mt-20 flex items-center justify-between gap-40">
          <Button
            size={"lg"}
            className="bg-gradient-to-r from-primary to-primary-foreground text-white h-[50px]"
          >
            Other Projects
          </Button>
          <div className="w-52">
            <img
              className="rotate-45 w-full"
              src="\assets\img\elements\elements2.png"
              alt=""
            />
          </div>
          <p className="flex-shrink">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde libero
            commodi quisquam eos sit nam, sequi officia non odio error
            voluptatum alias in deserunt eum fuga nesciunt magnam, dolores
            quibusdam dolorum voluptas ullam! Fuga labore nihil quod, quasi
            dicta rem.
          </p>
        </div> */}
      </div>

      {/* What Our Clients Say */}
      <div className="container_1 mt-24 flex flex-col justify-center items-center w-full">
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
              {Array.from({ length: 10 }).map(() => (
                <CarouselItem className="md:basis-1/2 lg:basis-1/2 lg:h-[300px] overflow-hidden border border-primary rounded-xl">
                  <div className="flex flex-col-reverse lg:flex-row h-full gap-3">
                    <div className="w-full h-full flex flex-col justify-between py-[12px]">
                      <div className="flex flex-col justify-between h-full">
                        <p>
                          "Working with SEOC has been a game-changer for our
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
      </div>

      {/* blogs */}

      <div className="container_1 mt-28 w-full flex flex-col items-center justify-between">
        <div className="text-center w-1/2 space-y-4">
          <Element_up transition={{ duration: 1 }}>
            <h1 className="text-4xl font-bold">
              Insights & Innovations: Our Latest Blog Posts
            </h1>
          </Element_up>
          <p className="font-semibold opacity-70">
            Explore our blog to discover actionable insights, success stories,
            and expert advice that can help drive growth for your business.
          </p>
        </div>

        <div className="mt-10 gap-9 grid grid-cols-3 w-full">
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
                  Are you looking to improve your website's visibility and
                  attract more organic traffic?
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="container_1 mt-28 w-full flex flex-col items-center justify-between">
        <div className="text-center w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="font-semibold opacity-70">
            If you have any questions, need assistance, or want to discuss your
            project, please don't hesitate to reach out.
          </p>
        </div>
        <div className="mt-10"></div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}

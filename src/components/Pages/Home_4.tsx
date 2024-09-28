import About_Us_Section from "../Home_4_com/About_Us_Section";
import Blog_Section from "../Home_4_com/Blog_Section";
import Hero_Section from "../Home_4_com/Hero_Section";
import Services_Section from "../Home_4_com/Services_Section";

export default function Home_4() {
  return (
    <div className="container_1 text-white">
      <div className="w-full flex justify-center items-center font-bold mt-3 text-2xl">
        <span>logo</span>{" "}
      </div>
      <div className="bg-[#f4a261] h-fit rounded-[3em] lg:mt-3 pb-[10000px]">
        <Hero_Section />
        <Services_Section />
        <About_Us_Section />
        <Blog_Section />
      </div>
    </div>
  );
}

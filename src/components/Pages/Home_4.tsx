import Hero_Section from "../Home_4_com/Hero_Section";
import Services_Section from "../Home_4_com/Services_Section";

export default function Home_4() {
  return (
    <div className="h-[500px] container_1">
      <div className="w-full flex justify-center items-center font-bold mt-3 text-2xl">
        <span>logo</span>{" "}
      </div>
      <div className="bg-blue-50 h-fit rounded-[3em] mt-3 pb-96">
        <Hero_Section />
        <Services_Section/>
      </div>
    </div>
  );
}

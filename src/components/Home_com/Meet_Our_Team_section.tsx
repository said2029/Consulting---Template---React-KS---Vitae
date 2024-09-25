import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function Meet_Our_Team_section() {
  return (
    <div className="mt-10 lg:mt-28 flex flex-col lg:flex-row text-white bg bg-[url('/assets/img/bg/header-img9.png')] lg:h-[500px]">
      <div className="flex gap-4 flex-col justify-center items-center h-full w-full lg:w-[600px] text-center bg-primary bg-[url('\assets\img\bg\header-bg7.png')] text-white py-4 lg:px-4">
        <h1 className="text-4xl lg:text-5xl font-bold">
          CONTUATIN EXPERTISE! YOU CAN TRUST.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi
          iusto recusandae sint at libero sapiente provident, quidem facere
          perspiciatis aspernatur? Aliquam a vel mollitia quisquam et
        </p>
      </div>
      <div className="w-full h-full  flex justify-evenly items-center  overflow-x-auto">
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
  );
}

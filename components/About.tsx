import Image from "next/image";
import React from "react";

const About = () => {
  const cards = [
    {
      image: "/about1.png",
      icon: "/aboutIcon1.png",
      title: "Lightning fast creation",
      subTitle:
        "Create new lists and add items in seconds with our streamlined interface",
    },
    {
      image: "/about2.png",
      icon: "/aboutIcon2.png",
      title: "Intuitive organization",
      subTitle:
        "Drag, drop, and rearrange items effortlessly to keep your lists perfectly ordered",
    },
    {
      image: "/about3.png",
      icon: "/aboutIcon3.png",
      title: "Cross-device sync",
      subTitle:
        "Access your lists anywhere, anytime - seamlessly synced across all your devices",
    },
  ];
  return (
    <section
      className="flex flex-col gap-[112px] justify-center items-center"
      id="About"
    >
      <div className="img relative grid place-items-center shadow-[inset_0px_0px_20px_20px_rgba(248,248,248,0.06)] lg:size-[112px] rounded-full p-8">
        <Image src="/correct.svg" alt="" width={48} height={48} />
        <div className="absolute bg-[url('/About-bg.png')] w-[260px] top-[-181px] bg-no-repeat bg-center bg-contain h-[728px]"></div>
      </div>
      <div className="content grid place-items-center w-[min(737px,100%)] gap-10 ">
        <h1 className="font-bold text-5xl leading-[56px] tracking-[-0.02em]   bg-[linear-gradient(122deg,_rgba(248,248,248,0.9),_#f8f8f87a)]  bg-clip-text text-transparent text-center pt-4">
          “Finally, a to-do app that doesn't overcomplicate things!”
        </h1>

        <p className="text-[#f8f8f8f4] font-medium leading-6 text-[20px]">
          Kohaku – Dribbble
        </p>
      </div>

      <div className="cards flex flex-col gap-5">
        {cards.map((item, index) => (
          <div
            key={item.title}
            className={`w-full flex ${
              index % 2 == 0 ? "lg:flex-row-reverse  flex-col-reverse" : "lg:flex-row flex-col-reverse"
            } justify-between items-center lg:p-[60px] p-4 pt-[60px] lg:gap-0 gap-4 rounded-[80px] lg:rounded-[108px] shadow-[0px_-1px_1px_0px_#ffffff4d] bg-[linear-gradient(180deg,_rgb(248_248_248/12%)_0%,_#00000000_101%)]`}
          >
            <div className="img relative">
              {item.title == "Lightning fast creation" && (
                <div className="lg:block hidden">
                  <div className="p-3 pr-8 rounded-[68px] bg-[#ffffff14] backdrop-blur-lg absolute top-[98px] left-[-91px] flex flex-row items-center gap-3">
                    <div className="img size-[44px] grid place-items-center rounded-full bg-[#28282861] ">
                      <Image src="/xo.svg" alt="" width={24} height={24} />
                    </div>
                    <p className="text-base font-medium text-[#f8f8f8f1]">
                      Lightning fast creation
                    </p>
                  </div>
                  <div className="p-3 pr-8 rounded-[68px] bg-[#ffffff14] backdrop-blur-lg absolute top-[58px] right-[-119px] flex flex-row items-center gap-3">
                    <div className="img size-[44px] grid place-items-center rounded-full bg-[#28282861] ">
                      <Image src="/paint.svg" alt="" width={24} height={24} />
                    </div>
                    <p className="text-base font-medium text-[#f8f8f8f1]">
                      Brand your list
                    </p>
                  </div>
                  <div className="p-3 pr-8 rounded-[68px] bg-[#ffffff14] backdrop-blur-lg absolute top-[220px] right-[0] flex flex-row items-center gap-3">
                    <div className="img size-[44px] grid place-items-center rounded-full bg-[#28282861] ">
                      <Image src="/Num.svg" alt="" width={24} height={24} />
                    </div>
                    <p className="text-base font-medium text-[#f8f8f8f1]">
                      Unlimited list creation
                    </p>
                  </div>
                </div>
              )}
              <Image src={item.image} alt="" width={512} height={528} />
            </div>
            <div className="content w-[min(360px,100%)] flex flex-col">
              <div className="mb-12 backdrop-blur-[25px] py-4 px-6 lg:rounded-[16px] rounded-full grid place-items-center bg-[#f8f8f81b] shadow-[1px_10px_20px_0px_#0000002e,_0px_-1px_0px_0px_#ffffff70] size-16">
                <Image src={item.icon} alt="" width={24} height={24} />
              </div>

              <p className="pb-6 font-bold text-[40px] leading-[48px] tracking-[-0.02em]   bg-[linear-gradient(122deg,_rgba(248,248,248,0.9),_#f8f8f87a)]  bg-clip-text text-transparent">
                {item.title}
              </p>
              <p className="text-[#f8f8f883] font-thin leading-8 text-[20px]">
                {item.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

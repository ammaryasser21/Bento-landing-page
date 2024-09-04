import Image from "next/image";
import React from "react";

const How = () => {
  const cards = [
    {
      img: "/how1.png",
      title: "Install SimpleList",
      subTitle: "Create, manage, and conquer your to-do lists with ease",
    },
    {
      img: "/how2.png",
      title: "Create your first list",
      subTitle: "Tap the '+' button and start adding items to your list",
    },
    {
      img: "/how3.png",
      title: "Stay organized effortlessly",
      subTitle: "Manage, update, and complete tasks with ease",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center pb-[160px]" id="How">
      <div className="rounded-2xl relative p-[2px] bg-[radial-gradient(42px_at_52%_-74%,#ffffff,#f8f8f812)]">
        <p className="rounded-2xl py-1 px-4 relative z-10 text-[#F8F8F8] font-semibold text-[12px] leading-5 bg-[#202020] text-[rgba(248,248,248,0.5)]">
          how it work
        </p>
      </div>

      <h1 className="w-[min(493px,100%)] font-bold text-5xl leading-[56px] tracking-[-0.02em]   bg-[linear-gradient(122deg,_rgba(248,248,248,0.9),_#f8f8f87a)]  bg-clip-text text-transparent text-center pt-4">
        Three simple steps to organized bliss
      </h1>

      <Image
        src="/how-bg.png"
        width={760}
        height={48}
        alt=""
        className="pt-16"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((item, index) => (
          <div key={item.title} className="card relative pt-8 pb-12 px-3 rounded-[40px] shadow-[inset_2px_4px_16px_0_rgba(248,248,248,0.06),_1px_10px_20px_0px_#0000002e]">
            <div className="absolute top-[-21px] left-1/2 transform -translate-x-1/2 backdrop-blur-[25px] py-4 px-6 rounded-[32px] w-[68px] h-[52px] grid place-items-center font-medium text-sm text-[#f8f8f8f1] bg-[#f8f8f81b] shadow-[1px_10px_20px_0px_#0000002e,_0px_-1px_0px_0px_#ffffff70]">
              {index + 1}
            </div>
            <div className="img">
              <Image
                src={item.img}
                width={336}
                height={328}
                alt=""
                className="h-[revert-layer]"
              />
            </div>
            <div className="content px-5 pt-8">
              <p className="font-medium text-[20px] leading-6 text-[rgba(248,248,248,0.95)] pb-3">
                {item.title}
              </p>
              <p className="text-base text-[rgba(248,248,248,0.5)]">
                {item.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default How;

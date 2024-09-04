import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const cards = [
    {
      img: "/test1.png",
      title: "Moyo",
      subTitle: "@moyoshiro",
    },
    {
      img: "/test2.png",
      title: "Moyo",
      subTitle: "@moyoshiro",
    },
    {
      img: "/test3.png",
      title: "Kohaku",
      subTitle: "@moyoshiro",
    },
  ];
  return (
    <section className="flex flex-col w-full " id="Testimonials">
      <div className="contain flex flex-col justify-center items-center">
        <Image src="/test-bg.png" width={232} height={232} alt="" />

        <div className="rounded-2xl relative p-[2px] bg-[radial-gradient(42px_at_52%_-74%,#ffffff,#f8f8f812)] mt-[1rem]">
          <p className="rounded-2xl py-1 px-4 relative z-10 text-[#F8F8F8] font-semibold text-[12px] leading-5 bg-[#202020] text-[rgba(248,248,248,0.5)]">
            testimonial
          </p>
        </div>

        <h1 className="w-[min(554px,100%)] font-bold text-5xl leading-[56px] tracking-[-0.02em]   bg-[linear-gradient(122deg,_rgba(248,248,248,0.9),_#f8f8f87a)]  bg-clip-text text-transparent text-center pt-4">
          List. Organize. Conquer.
        </h1>

        <p className="pt-4 text-[#f8f8f884] text-[20px] leading-8 font-thin">
          Used by seriously productive people.
        </p>
      </div>

      <div className="bottom bg-[url('/stars.png')]  lg:h-[397px] w-full  bg-cover pb-center py-10 mt-10">
        <div className="test bg-[url('/test-bg-2.png')] bg-cover pb-center w-full p-6 rounded-[32px] h-full">
          <div className="inner w-full bg-[#282828b8] backdrop-blur-[12px] p-3 rounded-[32px] h-full">
            <div className="cards grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-center px-[40px]">
              {cards.map((item, index) => (
                 <div
                 className={`${
                   index != 1 ? "bg-[#f8f8f80c]" : "bg-[#f8f8f81c]"
                 } rounded-[20px] p-3 flex flex-row items-center gap-4 shadow-[0px_-1px_0px_0.3px_#ffffff40] ${
                   index > 0 ? "hidden sm:flex" : "flex"
                 }`}
                 key={item.title}
               >
                  <Image src={item.img} width={44} height={44} alt="" />
                  <div className="content flex flex-col gap-[2px] ">
                    <p className="text-[14px] text-[#f8f8f8f5] font-medium leading-5">
                      {item.title}
                    </p>
                    <p className="text-[12px] text-[#f8f8f881]  leading-4">
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid place-items-center py-16 px-12">
              <p className="text-[20px] text-[#f8f8f8f5] font-medium leading-6  text-center pb-[2px]">
                SimpleList revolutionized my daily routine.
              </p>
              <p className="text-[20px] text-[#f8f8f881] font-medium leading-6  text-center">
                I've never been more organized!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

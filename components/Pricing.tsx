import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });
const Pricing = () => {
  const cards = [
    {
      logo: "/price1.png",
      title: "SimpleStart",
      price: "$15 per member / month",
      type: "billed monthly",
      List: {
        title: "A free account with:",
        items: [
          "Up to 10 lists",
          "100 items per list",
          "Basic categorization",
          "Mobile app access",
          "Cross-device sync (2 devices max)",
        ],
      },
    },
    {
      logo: "/price2.png",
      title: "SimplePro",
      price: "$4.99 per member / month",
      type: "billed annually",
      List: {
        title: "All SimpleStart features, plus:",
        items: [
          "Unlimited lists",
          "Unlimited items per list",
          "Advanced categorization and tagging",
          "Mobile and desktop app access",
          "Dedicated account manager",
        ],
      },
    },
    {
      logo: "/price3.png",
      title: "SimpleTeam",
      price: "$9.99 per member / month",
      type: "billed annually",
      List: {
        title: "All SimplePro features, plus:",
        items: [
          "Team collaboration tools",
          "Admin controls and user management",
          "Advanced security features",
          "API access for integrations",
          "Dedicated account manager",
        ],
      },
    },
  ];
  return (
    <section
      className="flex flex-col gap-16 justify-center items-center w-full  pb-[160px]"
      id="Pricing"
    >
      <div className="contain flex flex-col justify-center items-center">
        <div className="rounded-2xl relative p-[2px] bg-[radial-gradient(42px_at_52%_-74%,#ffffff,#f8f8f812)] mt-[10rem]">
          <p className="rounded-2xl py-1 px-4 relative z-10 text-[#F8F8F8] font-semibold text-[12px] leading-5 bg-[#202020] text-[rgba(248,248,248,0.5)]">
            pricing
          </p>
        </div>

        <h1 className="w-full font-bold text-5xl leading-[56px] tracking-[-0.02em]   bg-[linear-gradient(122deg,_rgba(248,248,248,0.9),_#f8f8f87a)]  bg-clip-text text-transparent text-center pt-4">
          Choose your simplicity level
        </h1>

        <p className="pt-4 text-[#f8f8f884] w-[min(599px,100%)] text-center text-[20px] leading-8 font-thin">
          Every journey begins with a list. Choose your SimpleList plan and
          watch your efficiency soar!
        </p>
      </div>

      <div className="tag bg-[#12121268] p-1 rounded-full flex items-center mb-12">
        <p className="py-[8px] px-[17.5px] rounded-full bg-[#f8f8f810] text-[#f8f8f8ea] text-[14px] leading-[20px] font-semibold shadow-[inset_0_1px_1px_1px_#ffffff45,_0px_1px_2px_1px_#0000004a]">
          Billed annually
        </p>
        <p className="py-[8px] px-[18.5px] text-[#f8f8f897] text-[14px] leading-[20px] font-semibold">
          Billed monthly
        </p>
      </div>

      <div className="pricing-cards grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-4">
        {cards.map((item, index) => (
          <div
            key={item.title}
            className={`${
              index == 1 ? "lg:bg-[url('/middel-pricing-bg.png')]" : ""
            } bg-cover bg-center lg:p-4 rounded-[48px]`}
          >
            {" "}
            <div className="inner w-full h-full bg-[#282828d9] rounded-[32px] p-3 pt-8 flex flex-col gap-8 shadow-[0px_-1px_0px_0px_#ffffff61,_inset_0px_0px_12px_2px_#ffffff33]">
              <div className="top  flex flex-col gap-8  px-5">
                <Image src={item.logo} width={128} height={128} alt="" />
                <div className="content flex flex-col gap-8">
                  <h5 className="font-bold text-[24px] leading-[28px] text-[#f8f8f8f4]">
                    {item.title}
                  </h5>
                  <p className="font-medium text-[14px] leading-[20px] text-[#f8f8f8cd]">
                    {item.price}
                    <span className="block text-[#f8f8f88b] pt-[2px]">
                      {item.type}
                    </span>
                  </p>
                </div>
                <Link
                  href="/"
                  className="relative p-[2px] rounded-[32px]  bg-[radial-gradient(129px_at_44%_-54%,#4f4f4f,#0000000d)] w-fit"
                >
                  <div
                    className={`${rubik.className} relative rounded-[32px] bg-[#282828a0] py-3 px-6 font-semibold text-sm shadow-[circle_93px_at_48%_-37%,#cecece,#333] text-[#F8F8F8]`}
                  >
                    Get Started{" "}
                  </div>
                </Link>
              </div>
              <div className="list  px-5 py-4 flex flex-col gap-1">
                <h2 className="py-1 text-[#f8f8f8ed] text-sm">
                  {item.List.title}
                </h2>
                <ul className="flex flex-col gap-1">
                  {item.List.items.map((listItem, index) => (
                    <li
                      key={index}
                      className="py-1 text-[#f8f8f86e] text-sm pl-6 relative before:absolute before:content-[''] before:size-[8px] before:rounded-full before:bg-[#f8f8f8e2] before:top-1/2 before:left-0 before:-translate-y-1/2 before:shadow-[inset_-1px_-2px_5px_0px_#000000d4]"
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="stars flex items-center justify-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="star grid place-items-center shadow-[inset_2px_4px_16px_0_rgba(248,248,248,0.06),inset_1px_1px_0px_0px_#e2dddd29] rounded-full size-[44px]"
            >
              <Image
                src="/star.svg"
                width={21}
                height={21}
                alt={`Star ${i + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="text-base text-[#f8f8f87f]">
            <span className=" text-[#f8f8f8ef]">50K reviews </span>on Appstore
          </p>{" "}
          <Image src="/appleStore.png" width={24} height={24} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

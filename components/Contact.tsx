import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col  justify-center items-center w-full  pb-[160px]" id="Contact">
      <div className="w-full gap-[46px] bg-[#282828d9] rounded-[108px]  pt-[80px] flex flex-col items-center shadow-[0px_-0.5px_1px_0px_#ffffff61,_inset_0px_6px_35px_7px_#5b5b5b45,_0px_28px_45px_-40px_#000000bf] overflow-hidden">
        <div className="content text-center flex flex-col items-center w-[min(626px,100%)] lg:px-[0] px-4">
          <h1 className="text-[#f8f8f8f3] font-bold lg:text-[64px] text-[32px] lg:leading-[64px] leading-[32px]">
            Where simplicity meets productivity
          </h1>
          <p className="text-[#f8f8f8be] pb-[40px] text-lg lg:text-xl font-extralight leading-[28px] pt-[20px] ">
            Create, manage, and conquer your to-do lists with ease
          </p>
          <Link
            href="/"
            className="relative p-[2px] rounded-[32px]  bg-[radial-gradient(129px_at_44%_-54%,#4f4f4f,#0000000d)] w-fit"
          >
            <div
              className={`relative rounded-[32px] bg-[#282828a0] py-4 px-8 font-semibold text-sm shadow-[circle_93px_at_48%_-37%,#cecece,#333] text-[#F8F8F8]`}
            >
              Get started for free
            </div>
          </Link>

          <p className={`text-[#f8f8f881] text-[10px] leading-[12px] pt-3`}>
            v1.0.1 – macOS 12+
          </p>
        </div>
        <div className="img bg-[url('/stars.png')]  grid place-items-center relative bg-center bg-cover  w-[min(776px,100%)]">
          <Image src="/contact.png" width={717} height={400} alt="" />
          <Image
            src="/blueCursor.png"
            width={103}
            height={57.21}
            alt=""
            className="absolute top-[-47px] lg:block hidden right-[53px]"
          />
          <Image
            src="/orangeCursor.png"
            width={98}
            height={56.94}
            alt=""
            className="absolute top-[-92px] lg:block hidden left-[44px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

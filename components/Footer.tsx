import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full grid place-items-center gap-8">
      <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 items-center justify-between w-full">
        <div className="flex items-center sm:flex-row flex-col gap-6">
          <div className="img grid place-items-center shadow-[0_0_0_2px_rgba(18,18,18,0.6),inset_2px_4px_16px_0_rgba(248,248,248,0.06)] rounded-full size-[56px]">
            <Image src="/correct.svg" alt="" width={24} height={18.35} />
          </div>
          <p className="text-[#f8f8f87e] w-[min(329px,100%)] font-thin text-[20px] sm:text-start text-center leading-8">
            Create, manage, and conquer your to-do lists with ease
          </p>
        </div>
        <div className="bg-[#1B1B1B] rounded-[32px] p-1 pl-[22px] flex flex-row items-center">
          <Image src="/email.svg" alt="" width={19} height={15} />
          <input
            type="email"
            name=""
            id=""
            title="k"
            placeholder="Your email address"
            className="outline-none bg-transparent ml-[14px] sm:w-auto w-[154px] caret-[#f8f8f87e] text-[#f8f8f87e]"
          />
          <Link
            href="/"
            className="relative p-[2px] rounded-[32px]  bg-[radial-gradient(129px_at_44%_-54%,#4f4f4f,#0000000d)] w-fit"
          >
            <div
              className={`relative rounded-[32px] bg-[#282828a0] py-4 px-8 font-semibold text-sm shadow-[circle_93px_at_48%_-37%,#cecece,#333] text-[#F8F8F8]`}
            >
              Subscribe
            </div>
          </Link>
        </div>
      </div>
      <Image src="/footerFrame.png" alt="" width={1120} height={230} />
    </footer>
  );
};

export default Footer;

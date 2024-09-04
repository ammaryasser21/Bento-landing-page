import Image from "next/image";
import Link from "next/link";
import React from "react";
import simplelist from "@/public/simplelist.svg";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <section className="Hero-section flex flex-col w-full bg-gradient-radial pb-[160px]">
      <nav className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <div className="img grid place-items-center shadow-[0_0_0_2px_rgba(18,18,18,0.6),inset_2px_4px_16px_0_rgba(248,248,248,0.06)] rounded-full size-[56px]">
            <Image src="/correct.svg" alt="correct" width={24} height={18.35} />
          </div>
          <Image src={simplelist} alt="simpleList" width={111} height={25} />
        </div>
        <Link href="/" className="relative p-[2px] rounded-[32px]  bg-[radial-gradient(129px_at_44%_-54%,#4f4f4f,#0000000d)]">
          <div className={`${rubik.className} relative rounded-[32px] bg-[#282828a0] py-4 px-8 font-semibold text-sm shadow-[circle_93px_at_48%_-37%,#cecece,#333] text-[#F8F8F8]`}>
            Download
          </div>
        </Link>
      </nav>

      <main className="flex flex-col justify-center gap-1 items-center pt-12">
        <h1 className="text-[#f8f8f8f3] font-bold text-[64px] leading-[64px] text-center">
          Your tasks, simplified
        </h1>
        <p className="text-[#f8f8f8be] pb-[40px] text-xl leading-[32px] text-center">
          Create, manage, and conquer your to-do lists with ease
        </p>
        <Link href="/" className="relative p-[2px] rounded-[32px]  bg-[radial-gradient(129px_at_44%_-54%,#4f4f4f,#0000000d)] w-fit">
          <div className={`${rubik.className} relative rounded-[32px] bg-[#282828a0] py-4 px-8 font-semibold text-sm shadow-[circle_93px_at_48%_-37%,#cecece,#333] text-[#F8F8F8]`}>
            Get started for free
          </div>
        </Link>

        <p className={`text-[#f8f8f881] text-[10px] leading-[12px] ${rubik.className} pt-3`}>
          v1.0.1 – macOS 12+
        </p>

        <div className="bg-[url('/stars.png')]  grid place-items-center relative bg-center bg-cover w-full h-[640px]">
          <Image
            src="/hero1.png"
            alt=""
            width={446}
            height={504}
            className="absolute z-10"
          />
          <Image
            src="/hero2.png"
            alt=""
            width={414}
            height={376}
            className="absolute sm:right-[33.5%] md:right-[50.5%] sm:block hidden transition-all duration-200"
          />
          <Image
            src="/hero3.png"
            alt=""
            width={414}
            height={376}
            className="absolute sm:left-[33.5%] md:left-[50.5%] sm:block hidden  transition-all duration-200"
          />
        </div>
        <p className="text-base text-[#f8f8f87b] text-center">
          Trusted by over <span className="text-[#f8f8f8f3]">50,000</span>
          designers and developers
        </p>
        <div className="imgs relative w-[170px] top-5">
          <div className="rounded-full left-0 absolute top-0 border-4 border-[#202020] bg-[url('/img1.png')] bg-center bg-cover size-[40px] z-10"></div>
          <div className="rounded-full left-6  absolute top-0 border-4 border-[#202020] bg-[url('/img2.png')] bg-center bg-cover size-[40px] z-20"></div>
          <div className="rounded-full left-12  absolute top-0 border-4 border-[#202020] bg-[url('/img3.png')] bg-center bg-cover size-[40px] z-30"></div>
          <div className="rounded-full left-[72px] absolute top-0 border-4 border-[#202020] bg-[url('/img4.png')] bg-center bg-cover size-[40px] z-40"></div>
          <div className="rounded-full left-24  absolute top-0 border-4 border-[#202020] bg-[url('/img5.png')] bg-center bg-cover size-[40px] z-50"></div>
          <div className="rounded-full left-[120px] absolute top-0 border-4 border-[#202020] bg-[url('/img6.png')] bg-center bg-cover size-[40px] z-[60]"></div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;

"use client";
import React, { useState } from "react";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get started with your product?",
      answer:
        "Sign up on our website, explore features, customize your profile, and start using our product. We're here to help!",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and bank transfers.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features.",
    },
    {
      question: "Is technical support available?",
      answer:
        "Absolutely! Our support team is available 24/7 to assist you with any issues.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings.",
    },
    {
      question: "Is my data secure with your product?",
      answer:
        "We use advanced security measures to ensure your data is safe and secure at all times.",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex lg:flex-row flex-col gap-16 lg:justify-between lg:items-start items-center justify-center lg:flex-nowrap flex-wrap  pb-[160px]" id="FAQs">
      <div className="content flex flex-col lg:items-start items-center gap-10 w-[min(380px,100%)]">
        <h1 className="w-full font-bold text-5xl leading-[56px] tracking-[-0.02em] lg:text-start text-center  bg-[linear-gradient(122deg,_rgba(248,248,248,0.9),_#f8f8f87a)]  bg-clip-text text-transparent">
        Frequently asked questions
        </h1>

        <p className=" text-[#f8f8f884] w-[min(599px,100%)]  text-[20px]  lg:text-start text-center leading-8 font-thin">
        Contact us via support if you have any more questions.
        </p>
        <div className="relative p-[2px] rounded-[32px]  bg-[radial-gradient(129px_at_44%_-54%,#4f4f4f,#0000000d)] w-fit">
          <div
            className={`${rubik.className} relative rounded-[32px] bg-[#282828a0] py-3 px-6 font-semibold text-sm shadow-[circle_93px_at_48%_-37%,#cecece,#333] text-[#F8F8F8]`}
          >
            Contact us
          </div>
        </div>
      </div>
      <div className="faqs flex flex-col gap-4 w-[min(560px,100%)]">
        {faqs.map((faq, index) => (
          <div key={index} className={`p-8 cursor-pointer  transition-all duration-200 ${activeIndex===index?"shadow-[inset_1px_1px_0px_200px_#f8f8f821,inset_0px_1px_1px_1px_#f8f8f83d]":"shadow-[inset_0px_0px_34px_5px_rgba(248,248,248,0.06)]"} rounded-[32px]`}>
            <div
              className="flex justify-between items-center"
              onClick={() => handleToggle(index)}
            >
              <h3 className="sm:w-full  font-medium text-[#f8f8f8f3] text-[20px] leading-[24px] py-[10px]">
                {faq.question}
              </h3>
              <span className="text-xl">
                {activeIndex === index ? (
                  <div className="star grid place-items-center shadow-[inset_2px_4px_20px_12px_rgb(249_249_249/23%),_inset_1px_1px_0px_0px_#fafafa29] rounded-full size-[44px]">
                    <svg
                      width="16"
                      height="2"
                      viewBox="0 0 16 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 1.00002L1 1"
                        stroke="#F8F8F8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="star grid place-items-center  shadow-[inset_2px_4px_20px_12px_rgb(249_249_249/23%),_inset_1px_1px_0px_0px_#fafafa29]  rounded-full size-[44px]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99998 15L7.99998 1.00002M15 8.00003L1.00002 8.00001"
                        stroke="#F8F8F8"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="text-[#f8f8f87e] text-base w-[90%] text-[16px] leading-[24px]">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;

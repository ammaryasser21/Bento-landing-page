"use client"
import Hero from "@/components/Hero";
import How from "@/components/How";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useScrollReveal from "@/components/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <div className="flex xl:w-full flex-col items-center bg-[#202020]">
      <div className="flex xl:w-[1120px] xl:p-0 p-4 flex-col items-center">
        <div className="reveal">
          <Hero />
        </div>
        <div className="reveal">
          <How />
        </div>
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <Testimonials />
        </div>
        <div className="reveal">
          <Pricing />
        </div>
        <div className="reveal">
          <FAQs />
        </div>
        <div className="reveal">
          <Contact />
        </div>
        <div className="reveal">
          <Footer />
        </div>
      </div>
    </div>
  );
}

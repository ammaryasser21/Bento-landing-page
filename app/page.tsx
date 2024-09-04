import Hero from "@/components/Hero";
import How from "@/components/How";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex xl:w-full flex-col items-center bg-[#202020]">
      <div className="flex xl:w-[1120px] xl:p-0 p-4 flex-col items-center">
        <Hero />
        <How />
        <About />
        <Testimonials />
        <Pricing />
        <FAQs />
        <Contact/>
        <Footer /> 
       
      </div>
    </div>
  );
}

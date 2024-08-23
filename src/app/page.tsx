import AboutDOER from "@/components/AboutDOER/AboutDOER";
import Contact from "@/components/Contact/Contact";
import Gallery from "@/components/Gallery/Gallery";
import OurServices from "@/components/OurServices/OurServices";
import SpecialWorks from "@/components/SpecialWorks/SpecialWorks";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero/Hero"), { ssr: false });

export default function Home() {
  return (
    <main className="">
      <div id="home" className="min-h-screen">
        <Hero />
      </div>
      <AboutDOER />
      <OurServices />
      <Gallery />
      <SpecialWorks />
      <Contact />
    </main>
  );
}

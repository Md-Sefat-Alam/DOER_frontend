import AboutDOER from "@/components/AboutDOER/AboutDOER";
import OurServices from "@/components/OurServices/OurServices";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero/Hero"), { ssr: false });

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="container mx-auto">
        <AboutDOER />
        <OurServices />
      </div>
    </main>
  );
}

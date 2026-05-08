import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Leadership from "@/components/Leadership";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RecentProjects />
        <About />
        <VisionMission />
        <Services />
        <Capabilities />
        <Leadership />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

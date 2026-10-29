import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceTicker from "@/components/ServiceTicker";
import About from "@/components/About";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import Process from "@/components/Process";
import Leadership from "@/components/Leadership";
import VisionMission from "@/components/VisionMission";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceTicker />
        <About />
        <Services />
        <RecentProjects />
        <Process />
        <Leadership />
        <VisionMission />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

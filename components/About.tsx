import { Building } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="brand-gradient w-20 h-20 rounded-full flex items-center justify-center text-white">
              <Building size={32} aria-hidden="true" />
            </div>
          </div>
          <p className="text-[#FF8C42] font-semibold tracking-widest uppercase text-sm mb-3">
            Who We Are
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-[#FF8C42] to-[#E6731A] bg-clip-text text-transparent">
              Vaggex Group
            </span>
          </h2>
        </FadeIn>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-6">
          <FadeIn delay={0.1}>
            <p className="text-xl leading-loose text-gray-600">
              Vaggex Group is a proudly citizen-owned construction, civil works, and
              infrastructure solutions company based in Botswana. Established with a
              vision to{" "}
              <strong className="text-gray-800">rebuild, maintain, and advance</strong>{" "}
              the nation&apos;s infrastructure, Vaggex Group combines technical experience,
              business leadership, and a commitment to excellence in delivering
              world-class construction and maintenance solutions.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg leading-loose text-gray-600">
              Though newly registered, Vaggex Group is built on decades of
              professional experience through its founding team. Our directors and
              partners bring proven expertise in{" "}
              <strong className="text-gray-800">
                civil engineering projects, water transfer schemes, rehabilitation
                works, public facilities, and project management
              </strong>
              , alongside strong financial, business, and entrepreneurial skills.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg leading-loose text-gray-600">
              Vaggex Group is not just a contractor – we are a{" "}
              <strong className="text-gray-800">strategic partner for development</strong>
              , offering solutions that improve communities, enhance economic growth,
              and deliver long-term value.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import { Target, Eye, Compass, Heart } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

export default function VisionMission() {
  return (
    <section
      id="vision"
      className="py-20 relative parallax-bg"
      style={{ backgroundImage: "url('/vision-background.jpg')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-white/75" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div className="brand-gradient w-20 h-20 rounded-full flex items-center justify-center text-white">
              <Target size={32} aria-hidden="true" />
            </div>
          </div>
          <p className="text-[#FF8C42] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Foundation
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Vision, Mission &amp;{" "}
            <span className="bg-gradient-to-r from-[#FF8C42] to-[#E6731A] bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>
        </FadeIn>

        {/* Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <StaggerItem>
            <article className="bg-white rounded-2xl shadow-lg p-8 text-center h-full">
              <div className="brand-gradient w-[60px] h-[60px] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Eye size={28} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Botswana&apos;s most{" "}
                <strong className="text-gray-800">
                  trusted and innovative construction partner
                </strong>
                , transforming communities through sustainable, high-quality
                infrastructure and building solutions.
              </p>
            </article>
          </StaggerItem>

          {/* Mission */}
          <StaggerItem>
            <article className="bg-white rounded-2xl shadow-lg p-8 text-center h-full">
              <div className="brand-gradient w-[60px] h-[60px] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Compass size={28} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver{" "}
                <strong className="text-gray-800">
                  comprehensive construction, rehabilitation, and maintenance services
                </strong>{" "}
                that meet international standards, empower citizens, and align with
                Botswana&apos;s national development agenda.
              </p>
            </article>
          </StaggerItem>

          {/* Values */}
          <StaggerItem className="md:col-span-2">
            <article className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col items-center mb-6">
                <div className="brand-gradient w-[60px] h-[60px] rounded-full flex items-center justify-center text-white mb-4">
                  <Heart size={28} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
              </div>
              <ul className="values-list list-none p-0 max-w-2xl mx-auto">
                {[
                  { title: "Integrity", desc: "Conducting all business with honesty, transparency, and accountability." },
                  { title: "Excellence", desc: "Consistently delivering projects that exceed client expectations." },
                  { title: "Innovation", desc: "Leveraging modern methods and technologies to improve outcomes." },
                  { title: "Sustainability", desc: "Promoting eco-friendly, cost-efficient, and durable infrastructure." },
                  { title: "Safety First", desc: "Protecting lives and assets across every project." },
                  { title: "Client-Centricity", desc: "Listening, adapting, and delivering tailored solutions." },
                ].map((val) => (
                  <li key={val.title} className="py-3 text-gray-600">
                    <strong className="text-gray-800">{val.title}</strong> – {val.desc}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

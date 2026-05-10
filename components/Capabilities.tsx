import { Zap } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

const capabilities = [
  {
    title: "Experience-Backed Leadership",
    description:
      "Mr. Vehonga Kangotui has served as a General Foreman on multi-million-pula projects across Botswana, working with companies such as China State Construction, Sharps Construction, Bulongo Projects, Agnoat Construction and China Harbour Engineering JV. His extensive knowledge of pipelines, pump stations, reservoirs, treatment plants, and building projects forms the backbone of our technical expertise.",
  },
  {
    title: "Business & Financial Expertise",
    description:
      "Mr. Albin Mashabe, a Bachelor of Commerce (Entrepreneurship) graduate, strengthens the group with skills in business development, financial management, and strategic planning. His background ensures the company operates with efficiency, sustainability, and growth in mind.",
  },
  {
    title: "Compliance & Resources",
    description:
      "Vaggex Group is structured to meet CIPA and PPADB requirements, with capacity to scale resources, workforce, and partnerships for projects of varying size and complexity.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-20 relative parallax-bg"
      style={{ backgroundImage: "url('/capabilities-background.jpg')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-white/75" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div className="brand-gradient w-20 h-20 rounded-full flex items-center justify-center text-white">
              <Zap size={32} aria-hidden="true" />
            </div>
          </div>
          <p className="text-[#FF8C42] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Strength
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-[#FF8C42] to-[#E6731A] bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            Our directors bring over{" "}
            <strong className="text-gray-800">30 years of combined industry experience</strong>{" "}
            spanning large-scale water transfer projects, educational institutions,
            public facilities, rehabilitation works, and infrastructure upgrades.
          </p>
        </FadeIn>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {capabilities.map((cap) => (
            <StaggerItem key={cap.title}>
              <article className="bg-white rounded-2xl shadow-lg p-6 h-full border-t-4 border-[#FF8C42]">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{cap.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{cap.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Summary */}
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              This blend of field-tested technical know-how and business leadership
              uniquely positions Vaggex Group as a{" "}
              <strong className="text-gray-800">
                competent, reliable, and growth-oriented construction partner
              </strong>
              .
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

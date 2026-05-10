import { MessageSquare, FileText, Construction, BadgeCheck } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

const steps = [
  {
    number: "01",
    icon: <MessageSquare size={32} aria-hidden="true" />,
    title: "Consultation",
    desc: "We meet with you to understand your project goals, site conditions, timeline, and budget. Every great build starts with listening.",
    color: "from-orange-400 to-orange-600",
  },
  {
    number: "02",
    icon: <FileText size={32} aria-hidden="true" />,
    title: "Planning & Design",
    desc: "Our team develops detailed plans, engineering drawings, and cost estimates — fully aligned with your vision and regulatory requirements.",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "03",
    icon: <Construction size={32} aria-hidden="true" />,
    title: "Construction",
    desc: "We execute with precision — managing materials, workforce, quality control, and safety protocols at every stage of the build.",
    color: "from-orange-400 to-orange-600",
  },
  {
    number: "04",
    icon: <BadgeCheck size={32} aria-hidden="true" />,
    title: "Quality Handover",
    desc: "Final inspection, documentation, and a seamless handover so you can take ownership with full confidence in what was delivered.",
    color: "from-orange-500 to-red-500",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-[#FF8C42] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Approach
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            How We{" "}
            <span className="bg-gradient-to-r from-[#FF8C42] to-[#FFB366] bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            A proven four-step process that takes your project from concept to
            completion — on time, on budget, and to the highest standard.
          </p>
        </FadeIn>

        {/* Steps */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#FF8C42]/40 to-transparent"
          />

          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="relative bg-gray-800 rounded-2xl p-7 h-full border border-gray-700 hover:border-[#FF8C42]/50 transition-colors duration-300">
                {/* Step number badge */}
                <span className="absolute -top-3 -right-3 brand-gradient text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                  {i + 1}
                </span>

                {/* Icon */}
                <div className="brand-gradient w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn className="text-center mt-14" delay={0.3}>
          <a
            href="#contact"
            className="brand-gradient inline-block px-10 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ boxShadow: "0 4px 20px rgba(255,140,66,0.4)" }}
          >
            Start Your Project
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

import {
  Star,
  CheckCircle,
  Globe,
  Layers,
  Handshake,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

const reasons = [
  {
    icon: <CheckCircle size={28} aria-hidden="true" />,
    title: "Proven Leadership",
    desc: "Experienced professionals with hands-on knowledge of Botswana's infrastructure needs.",
  },
  {
    icon: <Globe size={28} aria-hidden="true" />,
    title: "Local Insight, Global Standards",
    desc: "Citizen-owned company that blends local context with international best practices.",
  },
  {
    icon: <Layers size={28} aria-hidden="true" />,
    title: "Comprehensive Services",
    desc: "From building to civil works, maintenance to project management.",
  },
  {
    icon: <Handshake size={28} aria-hidden="true" />,
    title: "Client Commitment",
    desc: "Delivering projects safely, on time, and within budget.",
  },
  {
    icon: <TrendingUp size={28} aria-hidden="true" />,
    title: "Future-Ready",
    desc: "Positioned to embrace new technologies and sustainable practices.",
  },
  {
    icon: <ShieldCheck size={28} aria-hidden="true" />,
    title: "Quality Assurance",
    desc: "Rigorous quality control processes ensuring every project meets the highest standards.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-20 relative parallax-bg"
      style={{ backgroundImage: "url('/why-us-background.jpg')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-white/75" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div className="brand-gradient w-20 h-20 rounded-full flex items-center justify-center text-white">
              <Star size={32} aria-hidden="true" />
            </div>
          </div>
          <p className="text-[#FF8C42] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Advantage
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-[#FF8C42] to-[#E6731A] bg-clip-text text-transparent">
              Vaggex Group?
            </span>
          </h2>
        </FadeIn>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <article className="bg-white rounded-2xl shadow-lg p-6 text-center h-full focus-within:ring-2 focus-within:ring-[#FF8C42] focus-within:ring-offset-2">
                <div className="brand-gradient w-[60px] h-[60px] rounded-full flex items-center justify-center text-white mx-auto mb-5">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{reason.desc}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Promise */}
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Promise</h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Vaggex Group is more than a construction company – we are{" "}
              <strong className="text-gray-800">
                builders of trust, communities, and progress
              </strong>
              . Every project we undertake reflects our commitment to Botswana&apos;s
              development agenda, ensuring that infrastructure today will empower
              generations tomorrow.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

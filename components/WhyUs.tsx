import {
  Star,
  CheckCircle,
  Globe,
  Layers,
  Handshake,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

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
      className="py-12 relative parallax-bg"
      style={{ backgroundImage: "url('/why-us-background.jpg')" }}
    >
      {/* Overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-white/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="brand-gradient w-20 h-20 rounded-full flex items-center justify-center text-white">
              <Star size={32} aria-hidden="true" />
            </div>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            WHY
            <br />
            VAGGEX
            <br />
            GROUP
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#FF8C42] focus-within:ring-offset-2"
            >
              <div className="brand-gradient w-[60px] h-[60px] rounded-full flex items-center justify-center text-white mx-auto mb-5">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
            </article>
          ))}
        </div>

        {/* Promise */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">OUR PROMISE</h3>
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
      </div>
    </section>
  );
}

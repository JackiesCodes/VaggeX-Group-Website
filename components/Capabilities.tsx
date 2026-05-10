import { Zap } from "lucide-react";

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
      className="py-12 relative parallax-bg"
      style={{ backgroundImage: "url('/capabilities-background.jpg')" }}
    >
      {/* Overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-white/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="brand-gradient w-20 h-20 rounded-full flex items-center justify-center text-white">
              <Zap size={32} aria-hidden="true" />
            </div>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            OUR
            <br />
            CAPABILITIES
          </h2>
        </div>

        <p className="text-center text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          Although Vaggex Group is a new entity, our{" "}
          <strong className="text-gray-800">
            capability lies in the strength of our leadership team
          </strong>
          . Collectively, our directors bring over{" "}
          <strong className="text-gray-800">30 years of industry experience</strong>,
          spanning large-scale water transfer projects, educational institutions,
          public facilities, rehabilitation works, and infrastructure upgrades.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {capabilities.map((cap) => (
            <article key={cap.title} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{cap.title}</h3>
              <p className="text-gray-600 leading-relaxed">{cap.description}</p>
            </article>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            This blend of field-tested technical know-how and business leadership
            uniquely positions Vaggex Group as a{" "}
            <strong className="text-gray-800">
              competent, reliable, and growth-oriented construction partner
            </strong>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

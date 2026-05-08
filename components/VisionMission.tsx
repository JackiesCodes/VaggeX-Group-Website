import { Target, Eye, Compass, Heart } from "lucide-react";

export default function VisionMission() {
  return (
    <section
      id="vision"
      className="py-12 relative parallax-bg"
      style={{ backgroundImage: "url('/vision-background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-white"
              style={{
                background: "linear-gradient(135deg, #FF8C42 0%, #E6731A 100%)",
              }}
            >
              <Target size={32} />
            </div>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            VISION, MISSION
            <br />
            &amp; CORE VALUES
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Vision */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div
              className="w-15 h-15 rounded-full flex items-center justify-center text-white mx-auto mb-6"
              style={{
                width: "60px",
                height: "60px",
                background: "linear-gradient(135deg, #FF8C42 0%, #E6731A 100%)",
              }}
            >
              <Eye size={28} />
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
          </div>

          {/* Mission */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div
              className="rounded-full flex items-center justify-center text-white mx-auto mb-6"
              style={{
                width: "60px",
                height: "60px",
                background: "linear-gradient(135deg, #FF8C42 0%, #E6731A 100%)",
              }}
            >
              <Compass size={28} />
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
          </div>

          {/* Values — spans full width */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col items-center mb-6">
              <div
                className="rounded-full flex items-center justify-center text-white mb-4"
                style={{
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, #FF8C42 0%, #E6731A 100%)",
                }}
              >
                <Heart size={28} />
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
          </div>
        </div>
      </div>
    </section>
  );
}

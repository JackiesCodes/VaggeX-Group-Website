import { Building } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-white"
              style={{
                background: "linear-gradient(135deg, #FF8C42 0%, #E6731A 100%)",
              }}
            >
              <Building size={32} />
            </div>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            ABOUT
            <br />
            COMPANY
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <p className="text-xl leading-loose mb-8 text-gray-600">
            Vaggex Group is a proudly citizen-owned construction, civil works, and
            infrastructure solutions company based in Botswana. Established with a
            vision to{" "}
            <strong className="text-gray-800">
              rebuild, maintain, and advance
            </strong>{" "}
            the nation&apos;s infrastructure, Vaggex Group combines technical experience,
            business leadership, and a commitment to excellence in delivering
            world-class construction and maintenance solutions.
          </p>

          <p className="text-lg leading-loose mb-6 text-gray-600">
            Though newly registered, Vaggex Group is built on decades of
            professional experience through its founding team. Our directors and
            partners bring proven expertise in{" "}
            <strong className="text-gray-800">
              civil engineering projects, water transfer schemes, rehabilitation
              works, public facilities, and project management
            </strong>
            , alongside strong financial, business, and entrepreneurial skills.
          </p>

          <p className="text-lg leading-loose text-gray-600">
            Vaggex Group is not just a contractor – we are a{" "}
            <strong className="text-gray-800">
              strategic partner for development
            </strong>
            , offering solutions that improve communities, enhance economic growth,
            and deliver long-term value.
          </p>
        </div>
      </div>
    </section>
  );
}

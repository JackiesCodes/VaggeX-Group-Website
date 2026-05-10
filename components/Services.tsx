import Image from "next/image";
import { Wrench, Construction, Building2, Settings, ClipboardCheck } from "lucide-react";

const services = [
  {
    id: "civil-infrastructure",
    image: "/civil-infrastructure.jpg",
    icon: <Construction size={24} aria-hidden="true" />,
    number: "1.",
    title: "Civil & Infrastructure Construction",
    description:
      "We specialize in developing durable infrastructure projects that meet growing demands for modernization:",
    items: [
      "Roads, bridges, and drainage systems",
      "Pipelines, water reticulation, and wastewater solutions",
      "Civil structures and public facilities",
    ],
  },
  {
    id: "building-construction",
    image: "/building-construction.jpg",
    icon: <Building2 size={24} aria-hidden="true" />,
    number: "2.",
    title: "Building Construction",
    description:
      "Delivering high-quality, safe, and functional structures across residential, commercial, and industrial sectors:",
    items: [
      "Housing developments and offices",
      "Schools, clinics, and institutional facilities",
      "Fit-outs, renovations, and expansions",
    ],
  },
  {
    id: "rehabilitation-maintenance",
    image: "/rehab-maintenance.jpg",
    icon: <Settings size={24} aria-hidden="true" />,
    number: "3.",
    title: "Rehabilitation & Maintenance",
    description:
      "Extending the lifespan of infrastructure through professional care and refurbishment:",
    items: [
      "Preventive and corrective maintenance",
      "Structural rehabilitation and facility upgrades",
      "Plumbing, electrical, and general maintenance services",
    ],
  },
  {
    id: "project-management",
    image: "/project-management.jpg",
    icon: <ClipboardCheck size={24} aria-hidden="true" />,
    number: "4.",
    title: "Project Management & Consultancy",
    description:
      "Offering trusted expertise to ensure successful project execution:",
    items: [
      "Site supervision and quality control",
      "Cost estimation, budgeting, and reporting",
      "Design coordination and feasibility studies",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="brand-gradient w-20 h-20 rounded-full flex items-center justify-center text-white">
              <Wrench size={32} aria-hidden="true" />
            </div>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            OUR
            <br />
            SERVICES
          </h2>
        </div>

        <p className="text-center text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          At Vaggex Group, we deliver end-to-end construction and maintenance
          solutions designed to exceed expectations. Our expertise spans
          residential, commercial, and industrial projects—covering everything
          from new builds and renovations to long-term facility upkeep.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-[#FF8C42] focus-within:ring-offset-2"
            >
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="brand-gradient w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <span className="text-[#FF8C42] font-bold mr-1">{service.number}</span>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="service-list list-none p-0 space-y-1">
                  {service.items.map((item) => (
                    <li key={item} className="text-gray-600 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

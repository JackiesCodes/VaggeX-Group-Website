import Image from "next/image";
import { Wrench, Construction, Building2, Settings, ClipboardCheck } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

const services = [
  {
    id: "civil-infrastructure",
    image: "/civil-infrastructure.jpg",
    icon: <Construction size={24} aria-hidden="true" />,
    number: "01",
    title: "Civil & Infrastructure Construction",
    description: "Durable infrastructure projects that meet growing demands for modernization:",
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
    number: "02",
    title: "Building Construction",
    description: "High-quality structures across residential, commercial, and industrial sectors:",
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
    number: "03",
    title: "Rehabilitation & Maintenance",
    description: "Extending the lifespan of infrastructure through professional care:",
    items: [
      "Preventive and corrective maintenance",
      "Structural rehabilitation and facility upgrades",
      "Plumbing, electrical, and general maintenance",
    ],
  },
  {
    id: "project-management",
    image: "/project-management.jpg",
    icon: <ClipboardCheck size={24} aria-hidden="true" />,
    number: "04",
    title: "Project Management & Consultancy",
    description: "Trusted expertise to ensure successful project execution:",
    items: [
      "Site supervision and quality control",
      "Cost estimation, budgeting, and reporting",
      "Design coordination and feasibility studies",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div className="brand-gradient w-20 h-20 rounded-full flex items-center justify-center text-white">
              <Wrench size={32} aria-hidden="true" />
            </div>
          </div>
          <p className="text-[#FF8C42] font-semibold tracking-widest uppercase text-sm mb-3">
            What We Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-[#FF8C42] to-[#E6731A] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            End-to-end construction and maintenance solutions — from new builds
            and renovations to long-term facility upkeep.
          </p>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full focus-within:ring-2 focus-within:ring-[#FF8C42] focus-within:ring-offset-2">
                {/* Image */}
                <div className="relative h-52">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 brand-gradient text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {service.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="brand-gradient w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-500 mb-4 leading-relaxed text-sm">{service.description}</p>
                  <ul className="service-list list-none p-0 space-y-1.5">
                    {service.items.map((item) => (
                      <li key={item} className="text-gray-600 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

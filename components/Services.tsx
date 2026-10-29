import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

const services = [
  {
    id: "civil-infrastructure",
    image: "/civil-infrastructure.jpg",
    number: "01",
    title: "Civil & Infrastructure",
    description: "Durable infrastructure that meets growing demands for modernisation.",
    items: [
      "Roads, bridges and drainage systems",
      "Pipelines, water reticulation and wastewater solutions",
      "Civil structures and public facilities",
    ],
  },
  {
    id: "building-construction",
    image: "/building-construction.jpg",
    number: "02",
    title: "Building Construction",
    description: "Quality structures across residential, commercial and institutional sectors.",
    items: [
      "Housing developments and offices",
      "Schools, clinics and institutional facilities",
      "Fit-outs, renovations and expansions",
    ],
  },
  {
    id: "rehabilitation-maintenance",
    image: "/rehab-maintenance.jpg",
    number: "03",
    title: "Rehabilitation & Maintenance",
    description: "Extending the working life of existing infrastructure and facilities.",
    items: [
      "Preventive and corrective maintenance",
      "Structural rehabilitation and facility upgrades",
      "Plumbing, electrical and general maintenance",
    ],
  },
  {
    id: "project-management",
    image: "/project-management.jpg",
    number: "04",
    title: "Project Management & Consultancy",
    description: "Hands-on oversight to keep projects controlled from start to finish.",
    items: [
      "Site supervision and quality control",
      "Cost estimation, budgeting and reporting",
      "Design coordination and feasibility studies",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="What We Do"
          title={
            <>
              Our <span className="text-brand">Services</span>
            </>
          }
          intro={
            <p>
              End-to-end construction and maintenance solutions — from new builds and
              civil works to renovations and long-term facility upkeep.
            </p>
          }
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-px bg-ink/10 md:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.id} className="bg-white">
              <article className="group flex h-full flex-col">
                <div className="relative h-64 overflow-hidden lg:h-72">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
                  />
                  <span className="display absolute bottom-4 left-6 text-7xl text-white/90">
                    {service.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-0 flex h-14 w-14 items-center justify-center bg-brand text-ink transition-transform duration-300 group-hover:rotate-45"
                  >
                    <ArrowUpRight size={22} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="display mb-3 text-4xl text-ink">{service.title}</h3>
                  <p className="mb-6 text-ink/65">{service.description}</p>
                  <ul className="mt-auto space-y-3 border-t border-ink/10 pt-6" role="list">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-3 shrink-0 bg-brand" />
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

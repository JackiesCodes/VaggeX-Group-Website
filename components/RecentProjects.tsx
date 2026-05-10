import Image from "next/image";
import { Award } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

const projects = [
  {
    id: "lobatse-wastewater",
    image: "/lobatse-goodhope.jpg",
    title: "Lobatse & Goodhope Wastewater Infrastructure",
    company: "Agnoat Construction",
    period: "2024–2025",
  },
  {
    id: "palapye-water",
    image: "/palapye-mmamashia.jpg",
    title: "Palapye-Mmamashia Water Transfer Project",
    company: "China Harbour Engineering",
    period: "2023–2024",
  },
  {
    id: "selebi-water",
    image: "/selebi-phikwe-serule.jpg",
    title: "Selebi Phikwe-Serule Water Transfer Scheme",
    company: "Sharps Construction",
    period: "2021–2023",
  },
  {
    id: "mogonono-pump",
    image: "/mogonono-pump.jpg",
    title: "Mogonono Booster Pump Station",
    company: "Bulongo Projects",
    period: "2019–2021",
  },
  {
    id: "kagiso-school",
    image: "/kagiso-school.jpg",
    title: "Kagiso Senior Secondary School",
    company: "China State Construction",
    period: "1999–2006",
  },
  {
    id: "high-court",
    image: "/high-court-lobatse-new.jpg",
    title: "High Court Lobatse",
    company: "Euro Construction",
    period: "1991–1993",
  },
];

export default function RecentProjects() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <div className="flex justify-center mb-6">
            <div className="brand-gradient w-20 h-20 rounded-full flex items-center justify-center text-white">
              <Award size={32} aria-hidden="true" />
            </div>
          </div>
          <p className="text-[#FF8C42] font-semibold tracking-widest uppercase text-sm mb-3">
            Track Record
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Directors&apos;{" "}
            <span className="bg-gradient-to-r from-[#FF8C42] to-[#E6731A] bg-clip-text text-transparent">
              Project Portfolio
            </span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Major projects delivered by our founding directors — a track record
            that speaks for itself.
          </p>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <article className="relative rounded-2xl overflow-hidden shadow-lg focus-within:ring-2 focus-within:ring-[#FF8C42] focus-within:ring-offset-2 h-60 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
                />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-base font-bold mb-1 leading-snug">{project.title}</h3>
                  <p className="text-xs opacity-80">
                    {project.company} · {project.period}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

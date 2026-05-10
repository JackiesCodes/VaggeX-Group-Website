import Image from "next/image";
import { Award } from "lucide-react";

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
    <section id="gallery" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="brand-gradient w-20 h-20 rounded-full flex items-center justify-center text-white">
              <Award size={32} aria-hidden="true" />
            </div>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            OUR DIRECTORS RECENT
            <br />
            PROJECTS
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#FF8C42] focus-within:ring-offset-2"
            >
              <div className="relative h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* Overlay */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 p-5 text-white"
                style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.8))" }}
              />
              {/* Text — outside overlay div so it's accessible */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm opacity-90">
                  {project.company} · {project.period}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Info } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

// These projects were worked on by our directors while employed by the
// contractors listed — they are personal experience, not Vaggex Group contracts.
const projects = [
  {
    id: "lobatse-wastewater",
    image: "/lobatse-goodhope.jpg",
    title: "Lobatse & Goodhope Wastewater Infrastructure",
    sector: "Wastewater",
    company: "Agnoat Construction",
    period: "2024–2025",
  },
  {
    id: "palapye-water",
    image: "/palapye-mmamashia.jpg",
    title: "Palapye–Mmamashia Water Transfer Project",
    sector: "Water transfer",
    company: "China Harbour Engineering",
    period: "2023–2024",
  },
  {
    id: "selebi-water",
    image: "/selebi-phikwe-serule.jpg",
    title: "Selebi Phikwe–Serule Water Transfer Scheme",
    sector: "Water transfer",
    company: "Sharps Construction",
    period: "2021–2023",
  },
  {
    id: "mogonono-pump",
    image: "/mogonono-pump.jpg",
    title: "Mogonono Booster Pump Station",
    sector: "Pump station",
    company: "Bulongo Projects",
    period: "2019–2021",
  },
  {
    id: "kagiso-school",
    image: "/kagiso-school.jpg",
    title: "Kagiso Senior Secondary School",
    sector: "Education building",
    company: "China State Construction",
    period: "1999–2006",
  },
  {
    id: "high-court",
    image: "/high-court-lobatse-new.jpg",
    title: "High Court Lobatse",
    sector: "Public building",
    company: "Euro Construction",
    period: "1991–1993",
  },
];

export default function RecentProjects() {
  const [featured, ...rest] = projects;

  return (
    <section id="gallery" className="bg-ink py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tone="dark"
          index="03"
          eyebrow="Directors' Track Record"
          title={
            <>
              Experience
              <br />
              <span className="text-brand">in the field</span>
            </>
          }
          intro={
            <p>
              Major projects our founding directors have worked on across Botswana
              over three decades, while employed by the contractors named below.
            </p>
          }
        />

        <FadeIn className="mt-10">
          <p className="flex items-start gap-3 border-l-2 border-brand bg-white/5 px-5 py-4 text-sm text-white/70">
            <Info size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
            <span>
              Transparency note: these are the personal experience of our directors,
              not contracts awarded to Vaggex Group. Each card names the company
              our director was working with at the time.
            </span>
          </p>
        </FadeIn>

        {/* Featured + grid */}
        <StaggerContainer className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StaggerItem className="md:col-span-2 lg:row-span-2">
            <ProjectCard project={featured} large />
          </StaggerItem>
          {rest.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof projects)[number];
  large?: boolean;
}) {
  return (
    <article
      className={`group relative h-full overflow-hidden bg-ink-800 ${
        large ? "min-h-[420px] lg:min-h-full" : "min-h-[280px]"
      }`}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
        sizes={large ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"
      />
      <span className="absolute left-0 top-0 bg-brand px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-ink">
        {project.period}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand">
          {project.sector}
        </p>
        <h3 className={`display text-white ${large ? "text-4xl lg:text-6xl" : "text-2xl"}`}>
          {project.title}
        </h3>
        <p className="mt-3 text-xs text-white/60">With {project.company}</p>
      </div>
    </article>
  );
}

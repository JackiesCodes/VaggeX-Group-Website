import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

const leaders = [
  {
    name: "Vehonga Kangotui",
    initials: "VK",
    title: "Director",
    focus: "Technical & Site Operations",
    bio: "An accomplished construction professional with over 30 years of experience in civil works, water infrastructure and building projects. He has served as General Foreman and Foreman on major projects including the Palapye–Mmamashia Water Transfer Project and the Selebi Phikwe–Serule Water Transfer Scheme, and on multiple rehabilitation and infrastructure upgrades across Botswana.",
    highlights: ["Pipelines & pump stations", "Reservoirs & treatment plants", "Public buildings"],
  },
  {
    name: "Albin Mashabe",
    initials: "AM",
    title: "Head of Management",
    focus: "Business, Finance & Strategy",
    bio: "Holds a Bachelor of Commerce (BCom) in Entrepreneurship, with a strong foundation in business development, financial management and strategic planning. His entrepreneurial drive, combined with administrative and project management skills, complements the technical leadership of the group.",
    highlights: ["Business development", "Financial management", "Strategic planning"],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Leadership"
          title={
            <>
              The people
              <br />
              <span className="text-brand">behind the work</span>
            </>
          }
          intro={
            <p>
              Our directors combine field-tested technical know-how with business
              leadership. As a young company, every client works directly with them.
            </p>
          }
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {leaders.map((leader) => (
            <StaggerItem key={leader.name}>
              <article className="flex h-full flex-col border border-ink/10 bg-concrete">
                {/* Monogram panel — no stock photos standing in for real people */}
                <div className="relative flex h-56 items-end justify-between overflow-hidden bg-ink p-8">
                  <div aria-hidden="true" className="blueprint absolute inset-0" />
                  <span aria-hidden="true" className="display relative text-[9rem] leading-[0.75] text-brand">
                    {leader.initials}
                  </span>
                  <Image
                    src="/vaggex-mark-light.png"
                    alt=""
                    width={72}
                    height={61}
                    className="relative h-auto w-16 opacity-30"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
                    {leader.title} · {leader.focus}
                  </p>
                  <h3 className="display mb-5 text-5xl text-ink">{leader.name}</h3>
                  <p className="mb-8 leading-relaxed text-ink/70">{leader.bio}</p>
                  <ul className="mt-auto flex flex-wrap gap-2" role="list">
                    {leader.highlights.map((h) => (
                      <li
                        key={h}
                        className="border border-ink/15 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink/70"
                      >
                        {h}
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

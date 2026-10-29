import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const pillars = [
  {
    title: "Field-tested leadership",
    desc: "Our technical director has worked as General Foreman on pipelines, pump stations, reservoirs, treatment plants and public buildings.",
  },
  {
    title: "Business discipline",
    desc: "Financial management, business development and strategic planning built in from day one, not bolted on later.",
  },
  {
    title: "Structured for compliance",
    desc: "Set up to meet CIPA and PPADB requirements, with the capacity to scale workforce and partnerships to the size of each project.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-concrete py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="The Company"
          title={
            <>
              A new company.
              <br />
              <span className="text-brand">Decades</span> of know-how.
            </>
          }
          intro={
            <p>
              Vaggex Group is a citizen-owned construction, civil works and
              infrastructure solutions company based in Botswana, established to{" "}
              <strong className="text-ink">rebuild, maintain and advance</strong>{" "}
              the nation&apos;s infrastructure.
            </p>
          }
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Image composition */}
          <FadeIn direction="left" className="lg:col-span-6">
            <div className="relative mb-8 lg:mb-0">
              <div className="chamfer relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/vision-background.jpg"
                  alt="Construction site in progress"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 right-6 flex items-center gap-4 bg-ink p-5 text-white shadow-xl sm:right-10">
                <Image src="/vaggex-logo.png" alt="" width={64} height={64} className="h-16 w-16" />
                <div>
                  <p className="display text-3xl text-brand">30+ Years</p>
                  <p className="text-xs uppercase tracking-widest text-white/60">Founding team experience</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Copy */}
          <div className="space-y-6 text-lg leading-relaxed text-ink/75 lg:col-span-6">
            <FadeIn delay={0.1}>
              <p>
                We are newly registered, and we say so plainly. What we bring is the
                experience of our founding team: directors who have spent their
                careers on{" "}
                <strong className="text-ink">
                  civil engineering projects, water transfer schemes, rehabilitation
                  works, public facilities and project management
                </strong>
                , alongside strong financial and entrepreneurial skills.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                We aim to be more than a contractor — a{" "}
                <strong className="text-ink">strategic partner for development</strong>{" "}
                that improves communities, supports economic growth and delivers
                long-term value.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10" role="list">
                {pillars.map((p, i) => (
                  <li key={p.title} className="grid grid-cols-[3rem_1fr] gap-4 py-5">
                    <span className="font-display text-2xl font-bold text-brand">0{i + 1}</span>
                    <div>
                      <h3 className="mb-1 font-display text-2xl font-bold uppercase text-ink">
                        {p.title}
                      </h3>
                      <p className="text-base text-ink/65">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Eye, Compass } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

const values = [
  { title: "Integrity", desc: "Conducting all business with honesty, transparency and accountability." },
  { title: "Excellence", desc: "Aiming to exceed client expectations on every project." },
  { title: "Innovation", desc: "Using modern methods and technologies to improve outcomes." },
  { title: "Sustainability", desc: "Promoting eco-friendly, cost-efficient and durable infrastructure." },
  { title: "Safety First", desc: "Protecting lives and assets across every project." },
  { title: "Client-Centricity", desc: "Listening, adapting and delivering tailored solutions." },
];

export default function VisionMission() {
  return (
    <section
      id="vision"
      className="relative isolate overflow-hidden bg-ink-800 py-24 text-white lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[url('/why-us-background.jpg')] bg-cover bg-center opacity-15"
      />
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tone="dark"
          index="06"
          eyebrow="Our Purpose"
          title={
            <>
              Vision, mission
              <br />& <span className="text-brand">values</span>
            </>
          }
        />

        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">
          <FadeIn className="bg-ink-800 p-8 lg:p-12">
            <Eye size={28} aria-hidden="true" className="mb-6 text-brand" />
            <h3 className="display mb-4 text-4xl">Vision</h3>
            <p className="text-lg leading-relaxed text-white/70">
              To become Botswana&apos;s most{" "}
              <strong className="text-white">trusted and innovative construction partner</strong>
              , transforming communities through sustainable, high-quality
              infrastructure and building solutions.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="bg-ink-800 p-8 lg:p-12">
            <Compass size={28} aria-hidden="true" className="mb-6 text-brand" />
            <h3 className="display mb-4 text-4xl">Mission</h3>
            <p className="text-lg leading-relaxed text-white/70">
              To deliver{" "}
              <strong className="text-white">
                comprehensive construction, rehabilitation and maintenance services
              </strong>{" "}
              that meet international standards, empower citizens and align with
              Botswana&apos;s national development agenda.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-px grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((val, i) => (
            <StaggerItem key={val.title} className="bg-ink-800">
              <div className="group h-full p-8 transition-colors hover:bg-ink-700">
                <span className="font-display text-sm font-bold text-brand">V/0{i + 1}</span>
                <h4 className="display mb-2 mt-3 text-3xl">{val.title}</h4>
                <p className="text-sm leading-relaxed text-white/60">{val.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

import Image from "next/image";
import { MessageSquare, FileText, HardHat, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    desc: "We meet you to understand project goals, site conditions, timeline and budget. Every good build starts with listening.",
  },
  {
    icon: FileText,
    title: "Planning & Costing",
    desc: "Detailed planning, programme and cost estimates, coordinated with your designers and aligned to regulatory requirements.",
  },
  {
    icon: HardHat,
    title: "Construction",
    desc: "Disciplined execution — managing materials, workforce, quality control and safety at every stage of the works.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Handover",
    desc: "Final inspection, documentation and a clean handover so you take ownership with confidence in what was delivered.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-concrete py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Our Approach"
          title={
            <>
              How we <span className="text-brand">work</span>
            </>
          }
          intro={
            <p>
              A clear four-stage method that takes your project from first
              conversation to handover — built on how our directors have seen large
              projects run well.
            </p>
          }
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-px border-t-2 border-ink bg-ink/15 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title} className="bg-concrete">
                <div className="group h-full px-2 py-10 sm:px-8">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="display text-6xl text-ink/15 transition-colors group-hover:text-brand">
                      0{i + 1}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center bg-ink text-brand">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="display mb-3 text-3xl text-ink">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/65">{step.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Safety band */}
        <FadeIn className="mt-16">
          <div className="relative grid overflow-hidden bg-ink text-white lg:grid-cols-12">
            <div className="hazard absolute inset-x-0 top-0 h-2" aria-hidden="true" />
            <div className="relative min-h-[240px] lg:col-span-5">
              <Image
                src="/capabilities-background.jpg"
                alt="Workers on a construction site"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="p-8 lg:col-span-7 lg:p-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                Safety first
              </p>
              <h3 className="display mb-4 text-4xl lg:text-5xl">
                Everyone goes home safe.
              </h3>
              <p className="max-w-xl leading-relaxed text-white/70">
                Protecting lives and assets is a core value, not a slogan. Safety
                planning is part of every stage of our method — from the first site
                visit to the final handover.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

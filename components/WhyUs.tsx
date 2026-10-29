import Image from "next/image";
import {
  CheckCircle,
  Globe,
  Layers,
  Handshake,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/StaggerChildren";

const reasons = [
  {
    icon: CheckCircle,
    title: "Experienced Leadership",
    desc: "Directors with hands-on knowledge of Botswana's infrastructure needs.",
  },
  {
    icon: Globe,
    title: "Local Insight, Global Standards",
    desc: "A citizen-owned company blending local context with international best practice.",
  },
  {
    icon: Layers,
    title: "Comprehensive Services",
    desc: "From building to civil works, maintenance to project management.",
  },
  {
    icon: Handshake,
    title: "Direct Director Involvement",
    desc: "As a young company, our directors are personally involved in every project we take on.",
  },
  {
    icon: TrendingUp,
    title: "Future-Ready",
    desc: "Starting fresh means modern methods, new technology and sustainable practices from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Compliance",
    desc: "Quality control built into our method, and structured to meet CIPA and PPADB requirements.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-concrete py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow="Why Vaggex"
          title={
            <>
              Why work
              <br />
              <span className="text-brand">with us</span>
            </>
          }
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <StaggerItem key={reason.title} className="bg-white">
                <article className="group relative h-full p-8 transition-colors hover:bg-ink">
                  <Icon
                    size={30}
                    aria-hidden="true"
                    className="mb-6 text-brand-600 transition-colors group-hover:text-brand"
                  />
                  <h3 className="display mb-3 text-3xl text-ink transition-colors group-hover:text-white">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/65 transition-colors group-hover:text-white/70">
                    {reason.desc}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Promise / CTA */}
        <FadeIn className="mt-16">
          <div className="chamfer relative overflow-hidden bg-brand p-10 text-ink lg:p-16">
            <Image
              src="/vaggex-mark-dark.png"
              alt=""
              width={420}
              height={358}
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-10 h-auto w-80 opacity-10 lg:w-[420px]"
            />
            <div className="relative max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]">Our promise</p>
              <p className="display text-4xl lg:text-6xl">
                Builders of trust, communities and progress.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
                Every project we undertake reflects our commitment to Botswana&apos;s
                development — infrastructure built today to serve generations
                tomorrow.
              </p>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-3 bg-ink px-8 py-4 font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink"
              >
                Start a Conversation
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

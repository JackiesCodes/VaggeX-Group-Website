import { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

// Numbered section header: "01 / Who we are" over a large condensed title
export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <FadeIn className={`grid gap-6 lg:grid-cols-12 lg:items-end ${className}`}>
      <div className="lg:col-span-7">
        <p
          className={`mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] ${
            dark ? "text-white/60" : "text-ink/60"
          }`}
        >
          <span className="font-display text-base tracking-normal text-brand">{index}</span>
          <span aria-hidden="true" className="h-px w-10 bg-brand" />
          {eyebrow}
        </p>
        <h2
          className={`display text-5xl sm:text-6xl lg:text-7xl ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {intro && (
        <div
          className={`text-lg leading-relaxed lg:col-span-5 ${
            dark ? "text-white/70" : "text-ink/70"
          }`}
        >
          {intro}
        </div>
      )}
    </FadeIn>
  );
}

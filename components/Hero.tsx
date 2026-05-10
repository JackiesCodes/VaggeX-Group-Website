"use client";

import { useRef, useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { useInView } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

function AnimatedCounter({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = 60;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.floor((frame / totalFrames) * end));
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      }
    }, 1500 / totalFrames);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center text-white">
      <p className="text-4xl lg:text-5xl font-extrabold mb-2 tabular-nums">
        {count}
        {suffix}
      </p>
      <p className="text-sm opacity-80 leading-snug">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/capabilities-background.jpg"
          aria-hidden="true"
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(255,140,66,0.25) 100%)",
        }}
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-5 w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-center py-28">
        {/* Text */}
        <div className="text-white">
          {/* Eyebrow */}
          <p className="text-[#FF8C42] font-semibold tracking-widest uppercase text-sm mb-5">
            Botswana&apos;s Trusted Construction Partner
          </p>

          <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] mb-6">
            Building{" "}
            <span className="bg-gradient-to-r from-[#FF8C42] to-[#FFD580] bg-clip-text text-transparent">
              Africa&apos;s
            </span>
            <br />
            Future
          </h1>

          <p className="text-xl leading-relaxed mb-8 text-gray-300 max-w-xl">
            World-class construction, rehabilitation, and infrastructure
            solutions that transform communities and drive sustainable
            development across Botswana.
          </p>

          {/* Contact Info Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
            <p className="font-semibold text-sm uppercase tracking-wide mb-4 text-gray-300">
              Contact Us Directly
            </p>
            <a
              href="mailto:vaggexgroup@gmail.com"
              className="flex items-center gap-3 mb-3 text-sm text-white/90 hover:text-[#FF8C42] transition-colors"
            >
              <Mail size={16} aria-hidden="true" className="shrink-0 text-[#FF8C42]" />
              vaggexgroup@gmail.com
            </a>
            <a
              href="tel:+26776449256"
              className="flex items-center gap-3 text-sm text-white/90 hover:text-[#FF8C42] transition-colors"
            >
              <Phone size={16} aria-hidden="true" className="shrink-0 text-[#FF8C42]" />
              +267 76 449 256 / 77814198
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("#contact")}
              className="brand-gradient px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ boxShadow: "0 4px 20px rgba(255,140,66,0.45)" }}
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => scrollToSection("#gallery")}
              className="px-8 py-4 rounded-full font-semibold text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Animated Stats */}
        <div className="flex flex-row lg:flex-col gap-6 justify-center lg:justify-start">
          {[
            { end: 30, suffix: "+", label: "Years Combined\nExperience" },
            { end: 100, suffix: "+", label: "Projects\nCompleted" },
            { end: 100, suffix: "%", label: "Client\nSatisfaction" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-5 flex-1 lg:flex-none"
            >
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label.replace("\\n", " ")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs"
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}

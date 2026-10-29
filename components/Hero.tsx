"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

// Every figure here is verifiable: founder experience, the directors' listed
// projects, the company's service lines, and its ownership.
const facts = [
  { value: "30+", label: "Years of hands-on field experience in our founding team" },
  { value: "6", label: "Major projects in our directors' personal track record" },
  { value: "4", label: "Core service lines, from civil works to project management" },
  { value: "100%", label: "Citizen-owned and based in Botswana" },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/capabilities-background.jpg"
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
      />
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />

      <div className="mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-72 pt-32 lg:grid-cols-12 lg:px-8 lg:pb-56 lg:pt-36">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-8"
        >
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            <span aria-hidden="true" className="h-px w-12 bg-brand" />
            Construction · Civil Works · Infrastructure
          </p>

          <h1 className="display text-[3.6rem] sm:text-8xl lg:text-[8.5rem]">
            Built on
            <br />
            experience.
            <br />
            <span className="text-brand">Ready to build.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Vaggex Group is a newly established, citizen-owned construction company
            in Botswana — founded by professionals who have spent more than three
            decades on the country&apos;s water, civil and building projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("#contact")}
              className="group flex items-center gap-3 bg-brand px-8 py-4 font-bold uppercase tracking-wider text-ink transition-colors hover:bg-white"
            >
              Discuss Your Project
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => scrollToSection("#services")}
              className="border border-white/30 px-8 py-4 font-bold uppercase tracking-wider text-white transition-colors hover:border-brand hover:text-brand"
            >
              Our Services
            </button>
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="hidden justify-end lg:col-span-4 lg:flex"
        >
          <div className="relative">
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full border-2 border-brand" />
            <Image
              src="/vaggex-logo.png"
              alt="Vaggex Group logo"
              width={340}
              height={340}
              priority
              className="relative h-auto w-[340px] shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Facts band */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-ink/80 backdrop-blur-md">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-4 lg:px-8">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`py-5 pr-4 lg:py-7 ${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""} ${
                i % 2 === 1 ? "border-l border-white/10 pl-4 lg:pl-8" : ""
              } ${i < 2 ? "border-b border-white/10 lg:border-b-0" : ""}`}
            >
              <dt className="sr-only">{fact.label}</dt>
              <dd className="flex flex-col gap-1">
                <span className="display text-4xl text-brand lg:text-5xl">{fact.value}</span>
                <span className="text-xs leading-snug text-white/60 lg:text-sm">{fact.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <button
        onClick={() => scrollToSection("#about")}
        aria-label="Scroll to company overview"
        className="absolute bottom-40 right-8 hidden h-12 w-12 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-brand hover:text-brand lg:bottom-48 lg:flex"
      >
        <ArrowDown size={18} aria-hidden="true" />
      </button>
    </section>
  );
}

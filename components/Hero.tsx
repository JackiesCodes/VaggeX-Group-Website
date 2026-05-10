"use client";

import { Mail, Phone } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video — poster shows while video loads */}
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
            "linear-gradient(135deg, rgba(31,41,55,0.85) 0%, rgba(255,140,66,0.3) 100%)",
        }}
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-5 w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-center py-24">
        {/* Text */}
        <div className="text-white">
          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
            Building Africa&apos;s Future
          </h1>
          <p className="text-xl leading-relaxed mb-8 opacity-90">
            We deliver world-class construction, rehabilitation, and infrastructure
            solutions that transform communities and drive sustainable development
            across Botswana.
          </p>

          {/* Contact Info Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <p className="font-semibold text-lg mb-4">Contact Information</p>
            <p className="flex items-center gap-2 mb-3 text-sm">
              <Mail size={16} aria-hidden="true" className="shrink-0" />
              vaggexgroup@gmail.com
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Phone size={16} aria-hidden="true" className="shrink-0" />
              +267 76 449 256 / 77814198
            </p>
          </div>

          <button
            onClick={() => scrollToSection("#contact")}
            className="brand-gradient inline-block px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ boxShadow: "0 4px 15px rgba(255,140,66,0.4)" }}
          >
            Get In Touch
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-row lg:flex-col gap-8 justify-center lg:justify-start">
          {[
            { value: "30+", label: "Years Combined Experience" },
            { value: "100+", label: "Projects Completed" },
            { value: "5/5", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <p className="text-4xl font-extrabold mb-2">{stat.value}</p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

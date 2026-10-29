import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { company } from "@/lib/company";

const quickLinks = [
  { label: "The Company", href: "#about" },
  { label: "Directors' Track Record", href: "#gallery" },
  { label: "Our Approach", href: "#process" },
  { label: "Leadership", href: "#leadership" },
  { label: "Vision & Values", href: "#vision" },
  { label: "Why Vaggex", href: "#why-us" },
];

const serviceLinks = [
  "Civil & Infrastructure",
  "Building Construction",
  "Rehabilitation & Maintenance",
  "Project Management & Consultancy",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="hazard h-2" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-4">
              <Image
                src="/vaggex-logo.png"
                alt="Vaggex Group logo"
                width={72}
                height={72}
                className="h-[72px] w-[72px]"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-4xl font-bold uppercase">Vaggex</span>
                <span className="text-xs font-semibold uppercase tracking-[0.5em] text-brand">
                  Group
                </span>
              </span>
            </div>
            <p className="mb-8 max-w-sm leading-relaxed text-white/60">
              A citizen-owned construction, civil works and infrastructure solutions
              company based in Botswana.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-white"
            >
              Request a Quote
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-brand">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-brand">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#services" className="text-sm text-white/60 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-brand">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/60" role="list">
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Mail size={16} aria-hidden="true" className="shrink-0 text-brand" />
                  {company.email}
                </a>
              </li>
              {company.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="flex items-center gap-3 transition-colors hover:text-white">
                    <Phone size={16} aria-hidden="true" className="shrink-0 text-brand" />
                    {p.display}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <MapPin size={16} aria-hidden="true" className="shrink-0 text-brand" />
                {company.location}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <p
        aria-hidden="true"
        className="display pointer-events-none select-none whitespace-nowrap px-5 text-center text-[21vw] leading-[0.8] text-white/[0.04] lg:text-[17rem]"
      >
        Vaggex Group
      </p>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Vaggex Group. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-widest text-white/40">
            Construction · Civil Works · Infrastructure · Project Management
          </p>
        </div>
      </div>
    </footer>
  );
}

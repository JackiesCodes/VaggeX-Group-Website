import Image from "next/image";
import { Mail, Phone, Linkedin, Facebook, Instagram, MapPin } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Purpose", href: "#vision" },
  { label: "How We Work", href: "#process" },
  { label: "Leadership Team", href: "#leadership" },
  { label: "Why Vaggex", href: "#why-us" },
];

const serviceLinks = [
  { label: "Civil & Infrastructure", href: "#services" },
  { label: "Building Construction", href: "#services" },
  { label: "Rehabilitation & Maintenance", href: "#services" },
  { label: "Project Management", href: "#services" },
];

const socialLinks = [
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/vaggex-logo.png"
                alt="Vaggex Group Logo"
                width={48}
                height={48}
                className="object-contain rounded-lg"
              />
              <span className="font-bold text-xl tracking-wide">VAGGEX GROUP</span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              A proudly citizen-owned construction and infrastructure solutions
              company based in Botswana — building Africa&apos;s future, one project
              at a time.
            </p>

            {/* Contact details */}
            <div className="space-y-3 mb-7">
              <a
                href="mailto:vaggexgroup@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
              >
                <Mail size={16} aria-hidden="true" className="shrink-0 text-[#FF8C42]" />
                vaggexgroup@gmail.com
              </a>
              <a
                href="tel:+26776449256"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
              >
                <Phone size={16} aria-hidden="true" className="shrink-0 text-[#FF8C42]" />
                +267 76 449 256 / 77 814 198
              </a>
              <p className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} aria-hidden="true" className="shrink-0 text-[#FF8C42] mt-0.5" />
                Gaborone, Botswana
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF8C42] hover:bg-[#FF8C42]/10 transition-all duration-300"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-300 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-300 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-[#FF8C42] transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="brand-gradient inline-block mt-8 px-5 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Vaggex Group. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Construction · Civil Works · Infrastructure · Project Management
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, Mail, Phone, ArrowUpRight } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { company } from "@/lib/company";

const navLinks = [
  { href: "#about", label: "Company" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Experience" },
  { href: "#process", label: "Approach" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // rAF-throttled scroll handler — avoids firing on every pixel
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(href);
        },
        { threshold: 0.15, rootMargin: "-100px 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Focus trap + Escape key for mobile menu
  useEffect(() => {
    if (!isOpen) return;
    const menu = menuRef.current;
    if (!menu) return;
    const focusable = menu.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", trap);
    first?.focus();
    return () => document.removeEventListener("keydown", trap);
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href);
    scrollToSection(href);
  };

  const solid = scrolled || isOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div
        className={`hidden border-b border-white/10 bg-ink text-white/70 transition-all duration-300 md:block ${
          scrolled ? "h-0 overflow-hidden border-transparent" : "h-10"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-5 text-xs lg:px-8">
          <p className="uppercase tracking-[0.2em]">
            Citizen-owned · Construction · Civil Works · Infrastructure
          </p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-brand">
              <Mail size={14} aria-hidden="true" className="text-brand" />
              {company.email}
            </a>
            <a href={`tel:${company.phones[0].tel}`} className="flex items-center gap-2 hover:text-brand">
              <Phone size={14} aria-hidden="true" className="text-brand" />
              {company.phones[0].display}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          solid
            ? "bg-ink/95 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
            : "bg-gradient-to-b from-ink/70 to-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 lg:px-8 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3"
            aria-label="Vaggex Group — back to top"
          >
            <Image
              src="/vaggex-logo.png"
              alt=""
              width={44}
              height={44}
              priority
              className="h-11 w-11"
            />
            <span className="flex flex-col text-left leading-none">
              <span className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                Vaggex
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-brand">
                Group
              </span>
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 lg:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  aria-current={activeSection === link.href ? "true" : undefined}
                  className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                    activeSection === link.href
                      ? "text-brand"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 bg-brand transition-transform duration-300 ${
                      activeSection === link.href ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden items-center gap-2 bg-brand px-5 py-3 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-white lg:flex"
          >
            Request a Quote
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>

          {/* Mobile Toggle */}
          <button
            ref={toggleRef}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="p-2 text-white lg:hidden"
          >
            {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          hidden={!isOpen}
          className="border-t border-white/10 bg-ink lg:hidden"
        >
          <ul className="px-5 py-4" role="list">
            {navLinks.map((link, i) => (
              <li key={link.href} className="border-b border-white/10 last:border-none">
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="flex w-full items-baseline gap-4 py-4 text-left"
                >
                  <span className="font-display text-sm text-brand">0{i + 1}</span>
                  <span className="display text-3xl text-white">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-6">
            <button
              onClick={() => handleNavClick("#contact")}
              className="w-full bg-brand py-4 font-bold uppercase tracking-wider text-ink"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#vision", label: "Purpose" },
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#leadership", label: "Team" },
  { href: "#gallery", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // rAF-throttled scroll handler — avoids firing on every pixel
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ href }) => {
      const id = href.slice(1);
      const el = document.getElementById(id);
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
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
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

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/15 backdrop-blur-2xl shadow-lg py-2"
          : "bg-white/10 backdrop-blur-xl border-b border-white/20 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/vaggex-logo.png"
            alt="Vaggex Group Logo"
            width={40}
            height={40}
            priority
            className="object-contain rounded-lg"
          />
          <span className="font-bold text-xl text-gray-800">VAGGEX GROUP</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex list-none gap-2" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                aria-current={activeSection === link.href ? "page" : undefined}
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-orange-50 hover:-translate-y-0.5 ${
                  activeSection === link.href
                    ? "text-[#FF8C42] bg-orange-50"
                    : "text-gray-800 hover:text-[#FF8C42]"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          ref={toggleRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="lg:hidden p-2 rounded-md text-gray-800 hover:bg-black/5 transition-colors"
        >
          {isOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        aria-hidden={!isOpen}
        className={`lg:hidden bg-white/98 backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="list-none py-4" role="list">
          {navLinks.map((link) => (
            <li key={link.href} className="mx-4 my-1">
              <button
                onClick={() => handleNavClick(link.href)}
                aria-current={activeSection === link.href ? "page" : undefined}
                className={`w-full text-left font-medium px-4 py-3 rounded-lg text-lg transition-all duration-300 hover:bg-orange-50 hover:translate-x-2 ${
                  activeSection === link.href
                    ? "text-[#FF8C42] bg-orange-50"
                    : "text-gray-800 hover:text-[#FF8C42]"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

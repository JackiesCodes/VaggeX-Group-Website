"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
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
            className="object-contain rounded-lg"
          />
          <span className="font-bold text-xl text-gray-800">VAGGEX GROUP</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex list-none gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-gray-800 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#FF8C42] hover:bg-orange-50 hover:-translate-y-0.5"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md text-gray-800 hover:bg-black/5 transition-colors"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white/98 backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="list-none py-4">
          {navLinks.map((link) => (
            <li key={link.href} className="mx-4 my-1">
              <button
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left text-gray-800 font-medium px-4 py-3 rounded-lg text-lg transition-all duration-300 hover:text-[#FF8C42] hover:bg-orange-50 hover:translate-x-2"
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

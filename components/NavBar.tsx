"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "Donate", href: "/donate" },
    { name: "Consultation", href: "/consultation" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-luxury py-8 ${
        isScrolled ? "glass !py-4" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-4">
          <div className="w-12 h-12 border border-brand-accent/30 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-luxury group-hover:border-brand-accent">
            <span className="text-xl font-serif -rotate-45 group-hover:rotate-0 transition-luxury text-foreground">J</span>
          </div>
          <h1 className="text-xl font-serif tracking-[0.2em] uppercase transition-luxury group-hover:text-brand-accent text-foreground">
            Jasmine Ama
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.4em] font-bold hover:text-brand-accent transition-luxury text-foreground"
            >
              {link.name}
            </Link>
          ))}

        </div>
        
        {/* Mobile menu toggle would go here - simplified for now */}
      </div>
    </nav>
  );
}

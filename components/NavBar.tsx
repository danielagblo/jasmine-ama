"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "Donate", href: "/donate" },
    { name: "Consultation", href: "/consultation" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-luxury py-8 ${
          isScrolled || isMenuOpen ? "glass py-4!" : "bg-transparent"
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
          
          {/* Mobile menu toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-brand-accent transition-luxury"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-110 bg-brand-obsidian transition-all duration-700 ease-in-out transform ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header in mobile menu for consistency */}
          <div className="p-8 flex justify-between items-center border-b border-foreground/5">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4">
              <div className="w-10 h-10 border border-brand-accent/30 flex items-center justify-center rotate-45">
                <span className="text-lg font-serif -rotate-45 text-foreground">J</span>
              </div>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:text-brand-accent transition-luxury"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-8 text-center">
            {navLinks.map((link, index) => (
              <div key={link.name} className="w-full flex flex-col items-center">
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl md:text-4xl font-serif italic text-brand-gold hover:text-brand-accent transition-luxury py-2"
                >
                  {link.name}
                </Link>
                {index < navLinks.length - 1 && (
                  <div className="w-8 h-px bg-brand-accent/20 mt-4"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Bottom Connectivity Info */}
          <div className="p-12 border-t border-foreground/5 bg-brand-slate/30">
             <div className="flex flex-col items-center gap-6">
                <p className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold">Stay Connected</p>
                <div className="flex gap-10 text-brand-gold">
                  <a href="https://www.instagram.com/jasmineeama" className="hover:text-brand-accent transition-luxury">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@JasmineAmaa" className="hover:text-brand-accent transition-luxury">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                  <a href="https://x.com/jjasminesw" className="hover:text-brand-accent transition-luxury">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}

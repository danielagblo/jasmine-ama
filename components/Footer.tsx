export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="py-12 bg-background text-foreground border-t border-foreground/5 font-sans">
      <div className="container mx-auto px-6">
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] tracking-wide">
          {/* Left: Copyright */}
          <div className="opacity-50">
            © {year} Jasmine Ama. All rights reserved.
          </div>

          {/* Center: Brand Credit (Absolute on desktop for perfect centering) */}
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 opacity-50">
            Designed by <a href="https://skytechghana.com" target="_blank" className="text-brand-gold font-bold hover:underline">SkyTech</a>
          </div>

          {/* Right: Socials */}
          <div className="flex items-center gap-6">
            <span className="opacity-50">Follow us:</span>
            <div className="flex gap-4 font-bold">
              <a href="https://www.instagram.com/jasmineeama" className="hover:text-brand-accent transition-luxury">Instagram</a>
              <a href="https://www.youtube.com/@JasmineAmaa" className="hover:text-brand-accent transition-luxury">YouTube</a>
              <a href="https://x.com/jjasminesw" className="hover:text-brand-accent transition-luxury">X</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

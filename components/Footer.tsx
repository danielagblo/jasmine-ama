export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer id="contact" className="py-20 bg-brand-obsidian text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
             <h2 className="text-4xl font-serif mb-6 italic">
               Let's bridge the <span className="text-brand-accent">gap.</span>
             </h2>
             <p className="text-sm font-light text-white/60 max-w-sm mb-8 leading-relaxed">
               Facilitating your journey to Africa with authenticity and local expertise.
             </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-brand-accent mb-6 font-bold">Menu</h4>
            <ul className="space-y-4 text-[12px] font-light uppercase tracking-widest text-white/50">
              <li><a href="/about" className="hover:text-white transition-luxury">About</a></li>
              <li><a href="/services" className="hover:text-white transition-luxury">Services</a></li>
              <li><a href="/real-estate" className="hover:text-white transition-luxury">Real Estate</a></li>
              <li><a href="/relocation" className="hover:text-white transition-luxury">Relocation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-brand-accent mb-6 font-bold">Connect</h4>
            <ul className="space-y-4 text-[12px] font-light uppercase tracking-widest text-white/50">
              <li>hello@jasmineama.com</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex justify-between items-center">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">
            © {year} JASMINE AMA.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.5em] font-bold opacity-30">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

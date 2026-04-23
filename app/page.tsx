import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";

import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-brand-rose selection:text-white">
      <NavBar />
      <main className="flex-1 overflow-x-hidden">
        <HeroSection />
        
        {/* Refined Mission Section */}
        <section className="py-24 bg-brand-rose/5 text-foreground relative overflow-hidden border-y border-foreground/5">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <h3 className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold mb-4">The Mission</h3>
                <div className="h-px w-12 bg-brand-accent/30"></div>
              </div>
              
              <div className="lg:col-span-8 space-y-8">
                <p className="text-2xl md:text-3xl font-serif leading-relaxed text-foreground/90">
                  Jasmine Ama creates compelling stories about Africa through video to give a voice to local people, 
                  especially in Ghana, and help them tell their powerful stories of daily living, culture, and business.
                </p>
                <div className="flex items-center gap-6">
                  <a href="/about" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent transition-luxury">
                    Read the Full Story 
                    <span className="w-8 h-px bg-brand-accent/30 group-hover:w-12 transition-all"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        
        <ContentSection />
        
        {/* Consultation CTA Section - Visual & Compact */}
        <section className="py-24 bg-brand-rose/5 relative overflow-hidden border-t border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              {/* Image Side */}
              <div className="relative aspect-[4/3] overflow-hidden shadow-luxury border border-foreground/5">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional Consultation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-obsidian/20"></div>
              </div>

              {/* Content Side */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold">Personal Advisory</h3>
                  <h2 className="text-4xl md:text-5xl font-serif">
                    Ready to begin your <br /> 
                    <span className="italic text-brand-gold">Ghanaian story?</span>
                  </h2>
                  <p className="text-sm font-light text-foreground/60 max-w-md leading-relaxed">
                    Book a private session to discuss relocation, real estate, or 
                    business opportunities in Ghana with Jasmine Ama.
                  </p>
                </div>
                
                <div>
                  <a 
                    href="/consultation" 
                    className="group relative inline-block px-12 py-5 border border-brand-accent text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] overflow-hidden hover:text-white transition-luxury"
                  >
                    <span className="relative z-10">Book a Consultation</span>
                    <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

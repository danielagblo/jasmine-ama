import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="flex-1 pt-40">
        {/* Side-by-Side Hero Section */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold">Support the Mission</h3>
                  <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                    Empower the <br />
                    <span className="italic text-brand-gold">Narrative.</span>
                  </h1>
                </div>
                <div className="space-y-6 text-lg font-light leading-relaxed opacity-70 max-w-lg">
                  <p>
                    Your support helps us continue telling authentic stories about Africa, 
                    creating high-quality content, and bridging the gap between the diaspora and the continent.
                  </p>
                </div>
              </div>

              {/* Video Promotion */}
              <div className="relative aspect-video w-full border border-foreground/5 shadow-luxury overflow-hidden bg-brand-slate">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/6zALFp3tPkA" 
                  title="Support Jasmine Ama"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Give Section - Cocoa Background */}
        <section className="py-32 bg-brand-slate border-y border-foreground/5">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <h2 className="text-4xl font-serif italic text-brand-gold">Invest in Global <br />Storytelling</h2>
                  <p className="text-lg font-light leading-relaxed opacity-80">
                    Whether it's for equipment, travel, or research, every donation makes a significant difference 
                    in our ability to give a voice to local communities across Ghana and beyond.
                  </p>
               </div>

               <div className="bg-brand-obsidian p-12 border border-brand-accent/20 shadow-luxury space-y-8">
                  <h3 className="text-[10px] uppercase tracking-widest font-bold opacity-40">Payment Options</h3>
                  <div className="space-y-4">
                     <a 
                       href="#" 
                       className="block w-full py-4 bg-brand-accent text-white text-center text-[10px] uppercase tracking-widest font-bold hover:bg-brand-gold transition-luxury"
                     >
                       PayPal
                     </a>
                     <a 
                       href="#" 
                       className="block w-full py-4 border border-brand-accent text-brand-accent text-center text-[10px] uppercase tracking-widest font-bold hover:bg-brand-accent hover:text-white transition-luxury"
                     >
                       Stripe / Credit Card
                     </a>
                     <a 
                       href="#" 
                       className="block w-full py-4 border border-brand-accent text-brand-accent text-center text-[10px] uppercase tracking-widest font-bold hover:bg-brand-accent hover:text-white transition-luxury"
                     >
                       Mobile Money (MTN/Airtel)
                     </a>
                  </div>
                  <p className="text-[9px] text-center opacity-30 uppercase tracking-[0.3em]">
                    SECURE TRANSACTION • WORLDWIDE SUPPORT
                  </p>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

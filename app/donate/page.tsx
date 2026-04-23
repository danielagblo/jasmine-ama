import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="flex-1 pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold">Support the Mission</h3>
              <h1 className="text-6xl md:text-8xl font-serif leading-tight">
                Empower the <br />
                <span className="italic text-brand-gold">Narrative.</span>
              </h1>
            </div>

            {/* Video Promotion */}
            <div className="aspect-video w-full border border-foreground/5 shadow-luxury overflow-hidden">
               <iframe 
                 className="w-full h-full"
                 src="https://www.youtube.com/embed/6zALFp3tPkA" 
                 title="Support Jasmine Ama"
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
               ></iframe>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-12">
               <div className="space-y-6 text-lg font-light leading-relaxed opacity-80">
                  <p>
                    Your support helps us continue telling authentic stories about Africa, 
                    creating high-quality content, and bridging the gap between the diaspora and the continent.
                  </p>
                  <p>
                    Whether it's for equipment, travel, or research, every donation makes a significant difference 
                    in our ability to give a voice to local communities.
                  </p>
               </div>

               <div className="bg-brand-rose/10 p-12 border border-brand-accent/20 space-y-8">
                  <h3 className="text-2xl font-serif italic text-brand-gold">Ways to Donate</h3>
                  <div className="space-y-4">
                     <a 
                       href="#" 
                       className="block w-full py-4 bg-brand-accent text-white text-center text-xs uppercase tracking-widest font-bold hover:bg-brand-gold transition-luxury"
                     >
                       PayPal
                     </a>
                     <a 
                       href="#" 
                       className="block w-full py-4 border border-brand-accent text-brand-accent text-center text-xs uppercase tracking-widest font-bold hover:bg-brand-accent hover:text-white transition-luxury"
                     >
                       Stripe / Card
                     </a>
                     <a 
                       href="#" 
                       className="block w-full py-4 border border-brand-accent text-brand-accent text-center text-xs uppercase tracking-widest font-bold hover:bg-brand-accent hover:text-white transition-luxury"
                     >
                       Mobile Money (GHS)
                     </a>
                  </div>
                  <p className="text-[10px] text-center opacity-40 uppercase tracking-widest">
                    Thank you for being part of this journey.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

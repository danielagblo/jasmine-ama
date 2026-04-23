import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-brand-rose selection:text-white">
      <NavBar />
      <main className="flex-1 overflow-x-hidden">
        <HeroSection />
        
        {/* Bold Brand Statement Section */}
        <section className="py-40 bg-brand-obsidian text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-[0.03] pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-12">
               <h3 className="text-[12px] uppercase tracking-[0.5em] text-brand-accent font-bold">The Mission</h3>
               <p className="text-2xl md:text-3xl font-serif leading-relaxed text-white/80">
                Jasmine Ama creates compelling stories about Africa through video to give a voice to the local people in Africa, 
                especially Ghana and people who have moved from the diaspora to Africa to help them tell their powerful stories. 
                Jasmine Ama shares stories around daily living in Africa, culture, business and then real estate in Africa.
               </p>
               <div className="pt-4">
                  <a href="/about" className="text-xs uppercase tracking-[0.4em] font-bold text-brand-accent border-b border-brand-accent/20 pb-2 hover:border-brand-accent transition-luxury">
                    Read more
                  </a>
               </div>
               <div className="w-px h-24 bg-brand-accent/20 mx-auto mt-12"></div>
            </div>
          </div>
        </section>

        <ServiceSection />
        
        <ContentSection />
        
        {/* Connect / CTA Section - Very clean and powerful */}
        <section className="py-40 bg-brand-slate relative overflow-hidden">
          <div className="container mx-auto px-6 text-center space-y-16">
            <h2 className="text-5xl md:text-8xl font-serif">
              Begin your <span className="italic">Ghanaian</span> <br /> 
              story today.
            </h2>
            <div className="flex justify-center">
              <a 
                href="mailto:hello@jasmineama.com" 
                className="group relative px-20 py-8 bg-brand-obsidian text-white text-sm font-bold uppercase tracking-[0.3em] overflow-hidden"
              >
                <span className="relative z-10">Start a Conversation</span>
                <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </a>
            </div>
          </div>
          
          {/* Subtle Rotating Pattern Decorative */}
          <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-pattern opacity-10 animate-spin-slow pointer-events-none"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

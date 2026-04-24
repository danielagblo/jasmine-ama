export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Decorative Brand Text Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif opacity-[0.06] select-none pointer-events-none whitespace-nowrap uppercase tracking-tighter">
        Storyteller • Explorer • Entrepreneur
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <p className="text-[12px] uppercase tracking-[0.5em] text-brand-accent mb-6 font-bold animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Accra, Ghana
          </p>
          
          <h2 className="text-5xl md:text-8xl lg:text-[110px] font-serif mb-8 md:mb-12 leading-[1] md:leading-[0.9] text-balance animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            Elevate the <br />
            <span className="italic text-brand-accent">African Narrative.</span>
          </h2>

          {/* Featured Image for Mobile/Tablet */}
          <div className="lg:hidden w-full max-w-sm aspect-[4/5] mb-12 animate-fade-in opacity-0 shadow-luxury overflow-hidden border border-foreground/5" style={{ animationDelay: '0.5s' }}>
            <img 
              src="/jasmine_ama.jpg" 
              alt="Jasmine Ama" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="/consultation" 
                className="px-12 py-6 bg-brand-accent text-white rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-gold transition-luxury group"
              >
                Book Advisory <span className="inline-block group-hover:translate-x-1 transition-transform ml-2">→</span>
              </a>
            </div>
            
            <div className="max-w-lg text-center md:text-left">
              <p className="text-sm text-foreground/80 leading-relaxed font-light">
                Jasmine Ama creates compelling stories about Africa to give a voice to local people, 
                especially in Ghana, and those who have moved from the diaspora to help them tell their powerful stories.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Accents - Desktop Only Floating Look */}
      <div className="absolute -left-20 bottom-10 w-72 h-96 transition-luxury hidden lg:block rotate-[-5deg] shadow-luxury border border-foreground/5">
        <img 
          src="/jasmine-ama3.jpg" 
          alt="Jasmine Ama" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute -right-20 top-20 w-80 h-96 transition-luxury hidden lg:block rotate-[5deg] shadow-luxury border border-foreground/5">
        <img 
          src="/jasmine_ama.jpg" 
          alt="Jasmine Ama" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-brand-accent to-transparent"></div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent/50">Explore</span>
      </div>
    </section>
  );
}

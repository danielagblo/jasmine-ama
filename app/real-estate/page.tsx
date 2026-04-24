import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const videos = [
  { id: "ZI6iXJErHoc", title: "Real Estate Reality", thumbnail: "https://img.youtube.com/vi/ZI6iXJErHoc/maxresdefault.jpg" },
  { id: "-RTx89yhWPw", title: "Accra Property Tour", thumbnail: "https://img.youtube.com/vi/-RTx89yhWPw/maxresdefault.jpg" },
  { id: "BXtmU6zDW-g", title: "Investing in Ghana", thumbnail: "https://img.youtube.com/vi/BXtmU6zDW-g/maxresdefault.jpg" },
  { id: "7kgs4kwxUEk", title: "Ghana Home Buying", thumbnail: "https://img.youtube.com/vi/7kgs4kwxUEk/maxresdefault.jpg" }
];

export default function RealEstatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="flex-1 pt-40">
        {/* Header & Intro */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-24">
              <div className="space-y-8 text-center md:text-left">
                <h3 className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold">Investments</h3>
                <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                  Real Estate <br />
                  <span className="italic text-brand-gold">Ghana.</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-light leading-relaxed opacity-80">
                <div className="space-y-6">
                  <p>
                    Real estate can be an excellent avenue for long-term investment in Ghana. 
                    The demand for housing and land has increased steadily over the past few years, 
                    particularly since the Year of Return.
                  </p>
                </div>
                <div className="space-y-6">
                  <p>
                    The Jasmine Ama Brand has expanded into the real estate sector due to popular demand. 
                    I have gained substantial experience in the industry by collaborating with realtors to 
                    promote their brands and by assisting subscribers in finding their ideal homes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Redesigned Editorial Layout */}
        <section className="py-40 bg-brand-slate border-y border-foreground/5 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-40">
              <div className="text-center space-y-4 mb-24">
                <h3 className="text-[10px] uppercase tracking-[0.6em] text-brand-accent font-bold">Comprehensive Expertise</h3>
                <h2 className="text-5xl md:text-7xl font-serif italic text-brand-gold">Our Services</h2>
              </div>

              {[
                { 
                  title: "Buy a home in Ghana", 
                  img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
                  desc: "Navigating the Ghanaian property market requires local expertise and a trusted network. We guide you through the entire process—from initial search to final handover—ensuring you find a residence that perfectly matches your lifestyle and investment goals.",
                  tag: "Acquisition"
                },
                { 
                  title: "Sell your property", 
                  img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
                  desc: "Maximize the value of your asset with our strategic marketing approach. We showcase your property to a global audience, leveraging the Jasmine Ama platform to connect with high-net-worth individuals and members of the diaspora looking for premium investments.",
                  tag: "Disposition"
                },
                { 
                  title: "Rentals & Short stays", 
                  img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200",
                  desc: "Whether you're visiting for business or relocating, we curate the finest selection of luxury apartments and villas in Accra's most sought-after neighborhoods. Experience the comfort of a home with the exclusivity of a boutique hotel.",
                  tag: "Hospitality"
                }
              ].map((service, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24 relative`}>
                  {/* Image Container */}
                  <div className="w-full md:w-3/5 relative">
                    <div className="aspect-[16/10] overflow-hidden shadow-2xl border border-white/5">
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                      />
                    </div>
                    {/* Decorative element behind image */}
                    <div className={`absolute -z-10 w-full h-full border border-brand-accent/20 top-8 ${index % 2 === 0 ? '-left-8' : '-right-8'}`}></div>
                  </div>

                  {/* Text Container */}
                  <div className={`w-full md:w-2/5 space-y-8 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-bold block">{service.tag}</span>
                      <h4 className="text-4xl md:text-5xl font-serif text-white leading-tight">{service.title}</h4>
                    </div>
                    <p className="text-lg font-light leading-relaxed opacity-60 text-balance">
                      {service.desc}
                    </p>
                    <div className={`flex ${index % 2 === 0 ? 'justify-center md:justify-start' : 'justify-center md:justify-end'}`}>
                      <div className="h-px w-24 bg-brand-gold/30"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Videos Section */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-16">
              <h2 className="text-4xl font-serif italic text-brand-gold">Related Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((video) => (
                  <a 
                    key={video.id} 
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    className="group block space-y-4"
                  >
                    <div className="relative aspect-video overflow-hidden border border-foreground/5 shadow-luxury">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover transition-luxury group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-luxury"></div>
                    </div>
                    <h4 className="text-sm uppercase tracking-widest font-bold opacity-60 group-hover:opacity-100 transition-luxury">
                      {video.title} →
                    </h4>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Milk Chocolate Background */}
        <section className="py-32 bg-brand-rose border-t border-foreground/5">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-12">
              <h2 className="text-4xl md:text-6xl font-serif italic text-brand-gold">Ready to secure your piece of Ghana?</h2>
              <p className="text-lg font-light opacity-70">Our team is available across multiple channels to assist with your inquiry.</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a 
                  href="mailto:jasmine@jasmineama.com" 
                  className="w-full sm:w-auto px-12 py-6 border border-brand-accent text-brand-accent text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-brand-accent hover:text-white transition-luxury bg-brand-obsidian/20 flex items-center justify-center gap-3"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  Email Inquire
                </a>
                <a 
                  href="https://wa.me/233000000000" 
                  target="_blank"
                  className="w-full sm:w-auto px-12 py-6 border border-brand-accent text-brand-accent text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-brand-gold hover:border-brand-gold hover:text-white transition-luxury bg-brand-obsidian/20 flex items-center justify-center gap-3"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.5 8.5 0 0 1 7.6 7.9z"></path><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  WhatsApp Inquire
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

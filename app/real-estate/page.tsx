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
      
      <main className="flex-1 pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-24">
            {/* Header */}
            <div className="space-y-8">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold">Investments</h3>
              <h1 className="text-6xl md:text-8xl font-serif leading-tight">
                Real Estate <br />
                <span className="italic text-brand-gold">Ghana.</span>
              </h1>
            </div>

            {/* Intro Content */}
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

            {/* Services */}
            <div className="py-24 border-y border-foreground/10 space-y-12">
               <h2 className="text-3xl font-serif italic text-brand-gold">Our Services</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    "Buy a home in Ghana",
                    "Sell your property",
                    "Rentals & Short stays"
                  ].map((service, index) => (
                    <div key={index} className="space-y-6 group">
                      <span className="text-[10px] uppercase tracking-widest opacity-30 font-bold">0{index + 1}</span>
                      <h4 className="text-xl font-serif group-hover:text-brand-accent transition-luxury">{service}</h4>
                      <div className="h-px w-0 bg-brand-accent group-hover:w-full transition-all duration-700"></div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Videos */}
            <div className="space-y-12">
               <h2 className="text-3xl font-serif italic text-brand-gold">Related Videos</h2>
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

            {/* CTA */}
            <div className="text-center py-24">
              <a 
                href="mailto:jasmine@jasmineama.com" 
                className="inline-block px-12 py-6 border border-brand-accent text-brand-accent text-xs uppercase tracking-[0.4em] font-bold hover:bg-brand-accent hover:text-white transition-luxury"
              >
                Inquire About Property
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

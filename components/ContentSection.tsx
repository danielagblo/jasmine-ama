const videos = [
  {
    id: "RkPBep4-jgg",
    title: "The Reality of Ghana",
    thumbnail: "https://img.youtube.com/vi/RkPBep4-jgg/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=RkPBep4-jgg"
  },
  {
    id: "ZkJaqlQ70Zg",
    title: "Moving to Accra",
    thumbnail: "https://img.youtube.com/vi/ZkJaqlQ70Zg/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=ZkJaqlQ70Zg"
  },
  {
    id: "UhjzQRXyrbk",
    title: "Ghanaian Heritage",
    thumbnail: "https://img.youtube.com/vi/UhjzQRXyrbk/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=UhjzQRXyrbk"
  },
  {
    id: "4BWKnA-to40",
    title: "Digital Nomad Life",
    thumbnail: "https://img.youtube.com/vi/4BWKnA-to40/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=4BWKnA-to40"
  }
];

export default function ContentSection() {
  return (
    <section id="youtube" className="py-24 bg-background text-foreground relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold">The Journal</h3>
            <h2 className="text-4xl md:text-5xl font-serif">Original <span className="italic text-brand-accent">Stories.</span></h2>
          </div>
          <p className="text-sm font-light text-foreground/50 max-w-sm leading-relaxed">
            Join 100,000+ viewers as we document the authentic, 
            unfiltered reality of life and business in Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video) => (
            <a 
              key={video.id} 
              href={video.url} 
              target="_blank" 
              className="group block space-y-5"
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-foreground/5 shadow-luxury">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-luxury group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-luxury flex items-center justify-center">
                   <div className="w-12 h-12 bg-brand-accent/90 rounded-full flex items-center justify-center pl-1 text-white scale-0 group-hover:scale-100 transition-all duration-500">
                      <span className="text-sm">▶</span>
                   </div>
                </div>
              </div>
              <div className="space-y-2 border-l border-brand-accent/20 pl-4 group-hover:border-brand-accent transition-luxury">
                <h4 className="text-lg font-serif italic text-foreground/80">{video.title}</h4>
                <p className="text-[9px] uppercase tracking-widest font-bold opacity-30">YouTube Video — Watch Now</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-foreground/5 text-center">
           <a 
             href="https://www.youtube.com/@jasmineama" 
             target="_blank"
             className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent hover:text-brand-gold transition-luxury"
           >
             Explore Full Channel →
           </a>
        </div>
      </div>
    </section>
  );
}

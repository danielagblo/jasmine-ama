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
    <section id="youtube" className="py-40 bg-brand-obsidian text-white relative">
      <div className="absolute inset-0 bg-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32 space-y-8">
           <h3 className="text-[12px] uppercase tracking-[0.5em] text-brand-accent font-bold">The Journal</h3>
           <h2 className="text-5xl md:text-7xl font-serif">Original <span className="italic text-brand-accent">Stories</span> from the Continent.</h2>
           <p className="text-xl font-light text-white/50 max-w-2xl mx-auto leading-relaxed">
             Go beyond the headlines. Join 100,000+ viewers as we document the authentic, 
             unfiltered reality of life and business in Ghana.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {videos.map((video) => (
            <a 
              key={video.id} 
              href={video.url} 
              target="_blank" 
              className="group block space-y-6"
            >
              <div className="relative aspect-video overflow-hidden shadow-luxury border border-white/5">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-luxury group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-luxury">
                   <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center pl-1 shadow-2xl text-white">
                      <span className="text-2xl">▶</span>
                   </div>
                </div>
                <div className="absolute top-6 right-6 px-4 py-1 bg-brand-obsidian/60 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold border border-white/10">
                   YouTube
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-6 group-hover:border-brand-accent transition-luxury">
                <h4 className="text-2xl font-serif italic text-white/80 group-hover:text-brand-accent transition-luxury">{video.title}</h4>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 group-hover:opacity-100 transition-luxury">Watch Video →</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-40 text-center">
           <a 
             href="https://www.youtube.com/@jasmineama" 
             target="_blank"
             className="inline-flex flex-col items-center gap-6 group"
           >
             <div className="w-24 h-24 rounded-full border border-brand-accent flex items-center justify-center group-hover:bg-brand-accent transition-luxury shadow-rose">
                <span className="text-2xl text-brand-accent group-hover:text-white transition-luxury font-serif">YT</span>
             </div>
             <div>
                <p className="text-xs uppercase tracking-[0.5em] font-bold mb-2">Explore the Channel</p>
                <div className="h-px w-20 bg-brand-accent mx-auto group-hover:w-40 transition-luxury"></div>
             </div>
           </a>
        </div>
      </div>
    </section>
  );
}

"use client";

const partners = [
  { name: "Seso", logo: "/Seso_1.png" },
  { name: "Royal Olive Court", logo: "/royal-olive-court.webp" },
  { name: "Migrating Cultures", logo: "/Migrating-cultures.webp" },
  { name: "Golden Cherry", logo: "/Golden-Cherry-LOGO-23.png" },
  { name: "Devtracco Plus", logo: "/devtracco-plus.png" },
  { name: "Daimler", logo: "/Daimler-Logo-2.png" },
  { name: "Baobab", logo: "/baobab-1536x659.jpg" },
];

export default function Partners() {
  return (
    <section className="py-12 bg-brand-obsidian/5 border-y border-foreground/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold opacity-60">Strategic Partners & Collaborations</p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4 items-center">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="mx-12 md:mx-20 flex items-center justify-center transition-luxury hover:scale-110"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-8 md:h-12 w-auto object-contain max-w-[150px]"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays for smooth fading */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10"></div>
      </div>
    </section>
  );
}

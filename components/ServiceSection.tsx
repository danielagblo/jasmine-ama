import Link from "next/link";
const services = [
  {
    id: "real-estate",
    title: "Real Estate Ghana",
    number: "01",
    description: "Curated investment opportunities and modern living spaces in Accra and beyond. We bridge the gap between dream and ownership.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "relocation",
    title: "Relocation Services",
    number: "02",
    description: "Seamless transitions to West Africa. From administrative logisitics to lifestyle integration, we are your boots on the ground.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "business",
    title: "Business Ventures",
    number: "03",
    description: "Navigating the Ghanaian market with local expertise. We facilitate cross-border partnerships and local market entry.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function ServiceSection() {
  return (
    <section id="services" className="py-40 bg-brand-slate relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-32">
          <h3 className="text-[12px] uppercase tracking-[0.4em] text-brand-accent mb-8 font-bold italic">Curated Services</h3>
          <h2 className="text-5xl md:text-7xl font-serif text-balance">
            Expertise built on <span className="text-brand-accent italic">authenticity</span> & local knowledge.
          </h2>
        </div>

        <div className="space-y-40">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24 group`}
            >
              {/* Image Container with high-end feel */}
              <div className="flex-1 relative w-full aspect-[4/3] overflow-hidden shadow-luxury">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-luxury group-hover:scale-105 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-obsidian/20 group-hover:bg-transparent transition-luxury"></div>
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-8">
                <span className="text-5xl font-serif text-brand-accent/30 block tracking-tighter">{service.number}</span>
                <Link href={`/${service.id}`}>
                  <h4 className="text-4xl md:text-5xl font-serif group-hover:text-brand-accent transition-luxury cursor-pointer">{service.title}</h4>
                </Link>
                <p className="text-lg text-brand-obsidian/70 max-w-md font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-8">
                  <Link 
                    href={`/${service.id}`}
                    className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.4em] font-bold group-hover:gap-6 transition-luxury"
                  >
                    View Details <span className="h-px w-10 bg-brand-obsidian group-hover:w-20 transition-luxury"></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

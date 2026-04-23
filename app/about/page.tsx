import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="flex-1 pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h1 className="text-6xl md:text-8xl font-serif mb-12">
              The <span className="italic text-brand-accent">Story</span> <br /> 
              Behind the Brand.
            </h1>
            
            <div className="aspect-[16/9] bg-foreground/5 overflow-hidden shadow-luxury">
               <img 
                 src="/jasmine-ama3.jpg" 
                 alt="Jasmine Ama" 
                 className="w-full h-full object-cover transition-luxury"
               />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-light leading-relaxed">
              <p>
                Jasmine Ama is a storyteller, explorer, and entrepreneur dedicated to elevating the African narrative. 
                With a focus on Ghana, she bridges the gap between the diaspora and the continent through compelling 
                digital content and curated services.
              </p>
              <p>
                From real estate consultancy to relocation logistics, her mission is to provide authenticity and 
                local expertise to those looking to invest, move, or simply understand the modern African landscape.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

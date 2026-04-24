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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-xl font-light leading-relaxed">
              <div className="space-y-10">
                <div className="space-y-6">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold">The Journey</h3>
                  <p>
                    I am an entrepreneur and YouTuber originally from Ghana, born and raised in Australia. 
                    Growing up in the diaspora gave me a unique perspective on identity and heritage, but it was my return to Ghana 
                    that truly defined my purpose. I now call Ghana home, living and working in the heart of the community I love.
                  </p>
                  <p>
                    My career background is in social work, and the values from this field drive everything I do today. 
                    I don't just see myself as a content creator; I am an advocate for a deeper, more nuanced understanding 
                    of life in Africa. My goal is to dismantle stereotypes and provide those in the West with an authentic 
                    lens into the modern Ghanaian experience.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold">Impact & Advocacy</h3>
                  <p>
                    Through my channel, I bridge the gap between continents, serving as a trusted guide for those looking to 
                    navigate the complexities of relocation and investment. I offer deep insights into Ghanaian life by conducting 
                    in-depth interviews with both members of the diaspora who have successfully relocated and native Ghanaians 
                    who are building the future of the nation.
                  </p>
                  <p>
                    By exploring the local real estate market, uncovering hidden entrepreneurial gems, and highlighting 
                    Ghanaian-owned businesses, I provide the practical, on-the-ground knowledge needed to turn the dream of 
                    African connection into a tangible reality. My advocacy is rooted in the belief that shared knowledge 
                    is the most powerful tool for collective growth.
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                <div className="space-y-6">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold">Community & Legacy</h3>
                  <p>
                    My work extends far beyond digital storytelling. I am deeply committed to the growth of local communities. 
                    My platform has facilitated significant donations to numerous small businesses by providing essential funds, 
                    housing, and most recently, a water borehole to ensure clean access for a whole neighborhood.
                  </p>
                  <p>
                    We’ve also celebrated the richness of our culture through local recipes and traditions, ensuring that 
                    while we look toward the future, we remain rooted in our heritage. I have been privileged to highlight 
                    both the immense opportunities and the real challenges that local entrepreneurs face every day.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-sm uppercase tracking-[0.3em] text-brand-accent font-bold">Core Values</h3>
                  <p>
                    Integrity, respect, responsibility, and fairness guide every interview I conduct and every project I undertake. 
                    These aren't just words; they are the foundation of the Jasmine Ama brand and the promise I make to every 
                    viewer and client. I am dedicated to continuing this work, inspiring others to discover the true heart 
                    of Africa and empowering the next generation of Ghanaian leaders and storytellers.
                  </p>
                  <p>
                    Whether you are here to learn, to invest, or to find your own way home, I invite you to join me in 
                    rewriting the story of our continent, one that is defined by excellence, innovation, and an 
                    unwavering pride in our shared heritage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

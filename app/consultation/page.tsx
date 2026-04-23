"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    topic: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", date: "", topic: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="flex-1 pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Info */}
            <div className="space-y-12">
               <div className="space-y-6">
                  <h3 className="text-[10px] uppercase tracking-[0.5em] text-brand-accent font-bold">Personal Advisory</h3>
                  <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                    Expert <br />
                    <span className="italic text-brand-gold">Consultation.</span>
                  </h1>
               </div>

               <div className="space-y-8 text-lg font-light leading-relaxed opacity-80">
                  <p>
                    Book a private session with Jasmine Ama to discuss your move to Ghana, 
                    real estate investment strategies, or content creation journey.
                  </p>
                  
                  <div className="py-8 border-y border-foreground/10">
                     <p className="text-4xl font-serif text-brand-gold">$180.00 <span className="text-sm uppercase tracking-widest text-foreground/50 ml-2">per hour</span></p>
                  </div>

                  <ul className="space-y-4 text-sm uppercase tracking-widest font-bold text-brand-accent">
                    <li>• Moving & Relocation Advice</li>
                    <li>• Real Estate Strategy</li>
                    <li>• Business Networking</li>
                    <li>• Digital Storytelling</li>
                  </ul>
               </div>
            </div>

            {/* Booking Form */}
            <div className="bg-brand-rose/5 p-10 border border-foreground/5 relative">
               {status === "success" ? (
                 <div className="text-center py-20 space-y-6">
                    <h3 className="text-3xl font-serif text-brand-gold italic">Booking Received.</h3>
                    <p className="text-sm opacity-60">We will contact you shortly to confirm payment and schedule.</p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="text-xs uppercase tracking-widest font-bold border-b border-brand-accent pb-1"
                    >
                      Book Another
                    </button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Full Name</label>
                       <input 
                         required
                         type="text" 
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                         className="w-full bg-transparent border-b border-foreground/20 py-3 focus:border-brand-accent outline-none transition-luxury"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Email Address</label>
                       <input 
                         required
                         type="email" 
                         value={formData.email}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                         className="w-full bg-transparent border-b border-foreground/20 py-3 focus:border-brand-accent outline-none transition-luxury"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Preferred Date</label>
                       <input 
                         required
                         type="date" 
                         value={formData.date}
                         onChange={(e) => setFormData({...formData, date: e.target.value})}
                         className="w-full bg-transparent border-b border-foreground/20 py-3 focus:border-brand-accent outline-none transition-luxury"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Consultation Topic</label>
                       <textarea 
                         required
                         value={formData.topic}
                         onChange={(e) => setFormData({...formData, topic: e.target.value})}
                         className="w-full bg-transparent border-b border-foreground/20 py-3 focus:border-brand-accent outline-none transition-luxury min-h-[100px]"
                       />
                    </div>

                    <button 
                      disabled={status === "loading"}
                      className="w-full py-6 bg-brand-accent text-white text-xs uppercase tracking-[0.4em] font-bold hover:bg-brand-gold transition-luxury disabled:opacity-50"
                    >
                      {status === "loading" ? "Processing..." : "Confirm Booking — $180"}
                    </button>
                    
                    <p className="text-[10px] text-center opacity-40 uppercase tracking-widest">
                      Secure checkout via Stripe follows.
                    </p>
                 </form>
               )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

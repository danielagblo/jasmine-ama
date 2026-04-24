"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Dynamically import BookingForm with SSR disabled to avoid 'window is not defined' error
const BookingForm = dynamic(() => import("@/components/BookingForm"), {
  ssr: false,
  loading: () => <div className="py-20 text-center opacity-40 uppercase tracking-widest text-[10px]">Loading Secure Form...</div>
});

export default function ConsultationPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleBookingSuccess = async (reference: string) => {
    setStatus("success");
    // You can also perform additional server-side verification here if needed
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
                 <BookingForm onSuccess={handleBookingSuccess} />
               )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

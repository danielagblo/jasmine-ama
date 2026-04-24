"use client";

import { useState } from "react";
import { usePaystackPayment } from "react-paystack";

interface BookingFormProps {
  onSuccess: (reference: string) => void;
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    topic: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const minDate = (() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  })();

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";

  const config = {
    reference: (new Date()).getTime().toString(),
    email: formData.email,
    amount: 180 * 100 * 15, // $180 in GHS
    publicKey: publicKey,
    currency: "GHS",
  };

  const initializePayment = usePaystackPayment(config);

  if (!publicKey) {
    return (
      <div className="p-8 border border-brand-accent/20 bg-brand-accent/5 text-center space-y-4">
        <p className="text-xs uppercase tracking-widest font-bold text-brand-accent">Payment Gateway Offline</p>
        <p className="text-[10px] opacity-60">The Paystack public key is missing. Please check your environment variables.</p>
      </div>
    );
  }

  const handlePaystackSuccess = (reference: any) => {
    onSuccess(reference.reference);
  };

  const handlePaystackClose = () => {
    setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    initializePayment({ onSuccess: handlePaystackSuccess, onClose: handlePaystackClose });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <label className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-gold opacity-90">Full Name</label>
        <input 
          required
          type="text" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full bg-transparent border-b border-foreground/30 py-3 focus:border-brand-accent outline-none transition-luxury text-white text-base"
        />
      </div>
      <div className="space-y-2">
        <label className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-gold opacity-90">Email Address</label>
        <input 
          required
          type="email" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full bg-transparent border-b border-foreground/30 py-3 focus:border-brand-accent outline-none transition-luxury text-white text-base"
        />
      </div>
      <div className="space-y-2">
        <label className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-gold opacity-90">Preferred Date</label>
        <input 
          required
          type="date" 
          min={minDate}
          value={formData.date}
          onChange={(e) => setFormData({...formData, date: e.target.value})}
          className="w-full bg-transparent border-b border-foreground/30 py-3 focus:border-brand-accent outline-none transition-luxury text-white text-base [color-scheme:dark]"
        />
      </div>
      <div className="space-y-2">
        <label className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-gold opacity-90">Consultation Topic</label>
        <textarea 
          required
          value={formData.topic}
          onChange={(e) => setFormData({...formData, topic: e.target.value})}
          className="w-full bg-transparent border-b border-foreground/30 py-3 focus:border-brand-accent outline-none transition-luxury min-h-[100px] text-white text-base"
        />
      </div>

      <button 
        disabled={status === "loading"}
        className="w-full py-6 bg-brand-accent text-white text-xs uppercase tracking-[0.4em] font-bold hover:bg-brand-gold transition-luxury disabled:opacity-50"
      >
        {status === "loading" ? "Processing..." : "Confirm Booking — $180"}
      </button>
      
      <p className="text-[11px] text-center opacity-70 uppercase tracking-[0.3em] text-white">
        Secure checkout via Paystack follows.
      </p>
    </form>
  );
}

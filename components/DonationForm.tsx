"use client";

import { useState } from "react";
import { usePaystackPayment } from "react-paystack";

interface DonationFormProps {
  onSuccess: () => void;
}

export default function DonationForm({ onSuccess }: DonationFormProps) {
  const [amount, setAmount] = useState<string>("20");
  const [email, setEmail] = useState<string>("");

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";

  const config = {
    reference: (new Date()).getTime().toString(),
    email: email || "donor@jasmineama.com",
    amount: parseFloat(amount) * 100 * 15, // GHS
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
    onSuccess();
    console.log(reference);
  };

  const handlePaystackClose = () => {
    console.log("Payment closed");
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) return;
    initializePayment({ onSuccess: handlePaystackSuccess, onClose: handlePaystackClose });
  };

  return (
    <form onSubmit={handleDonate} className="space-y-6">
      <div className="space-y-2">
        <label className="text-[9px] uppercase tracking-widest opacity-50">Amount (USD)</label>
        <div className="relative">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-gold">$</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-transparent border-b border-foreground/20 py-3 pl-5 focus:border-brand-accent outline-none transition-luxury text-2xl font-serif"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[9px] uppercase tracking-widest opacity-50">Email Address (Optional)</label>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border-b border-foreground/20 py-3 focus:border-brand-accent outline-none transition-luxury text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full py-5 bg-brand-accent text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-luxury"
      >
        Donate via Paystack
      </button>
      <div className="flex justify-center gap-4 opacity-30 grayscale scale-75">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_logo%2C_revised_2016.svg" alt="Stripe" className="h-4" />
      </div>
    </form>
  );
}

"use client";

import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [bookings, setBookings] = useState<any[]>([]);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be a server-side check. 
    // For now, we'll use a simple client-side check for demonstration, 
    // but the API GET request is the real protector.
    if (password === "jasmine2026") { // Default password requested or implied
      setIsAuthenticated(true);
      fetchBookings();
    } else {
      setError("Invalid Access Key");
    }
  };

  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/bookings");
      const data = await res.json();
      if (data.success) {
        setBookings(data.bookings);
      }
    } catch (err) {
      setError("Failed to fetch data");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <NavBar />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="max-w-md w-full p-12 bg-brand-rose/5 border border-foreground/5 space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-serif italic text-brand-gold">Secure Portal</h1>
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Authorized Access Only</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <input 
                type="password" 
                placeholder="Enter Access Key"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-foreground/20 py-3 focus:border-brand-accent outline-none text-center tracking-widest"
              />
              {error && <p className="text-xs text-red-500 text-center">{error}</p>}
              <button className="w-full py-4 bg-brand-accent text-white text-[10px] uppercase tracking-[0.3em] font-bold">
                Unlock
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="flex-1 pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="flex justify-between items-end border-b border-foreground/10 pb-8">
               <h1 className="text-4xl font-serif italic text-brand-gold">Consultation Bookings</h1>
               <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">{bookings.length} Total</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 border-b border-foreground/5">
                    <th className="py-6">Date Requested</th>
                    <th className="py-6">Client</th>
                    <th className="py-6">Preferred Date</th>
                    <th className="py-6">Topic</th>
                    <th className="py-6">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-light">
                  {bookings.map((booking) => (
                    <tr key={booking._id} className="border-b border-foreground/5 hover:bg-foreground/5 transition-colors">
                      <td className="py-6 opacity-60">{new Date(booking.createdAt).toLocaleDateString()}</td>
                      <td className="py-6">
                         <p className="font-bold">{booking.name}</p>
                         <p className="text-[10px] opacity-40 uppercase tracking-widest mt-1">{booking.email}</p>
                      </td>
                      <td className="py-6">{booking.date}</td>
                      <td className="py-6 max-w-xs truncate">{booking.topic}</td>
                      <td className="py-6">
                        <span className="px-3 py-1 bg-brand-accent/20 text-brand-accent text-[9px] uppercase tracking-widest font-bold rounded-full">
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

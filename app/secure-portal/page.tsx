"use client";

import { useState, useEffect } from "react";

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bookings, setBookings] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setIsAuthenticated(true);
        fetchBookings();
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred during login");
    } finally {
      setIsLoading(false);
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

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full p-12 bg-brand-rose/5 border border-foreground/5 space-y-8 shadow-luxury">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-serif italic text-brand-gold">Secure Portal</h1>
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Authorized Access Only</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40">Username</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-transparent border-b border-foreground/20 py-2 focus:border-brand-accent outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-foreground/20 py-2 focus:border-brand-accent outline-none"
                />
              </div>
              {error && <p className="text-xs text-red-500 text-center">{error}</p>}
              <button 
                disabled={isLoading}
                className="w-full py-4 bg-brand-accent text-white text-[10px] uppercase tracking-[0.3em] font-bold disabled:opacity-50"
              >
                {isLoading ? "Verifying..." : "Unlock"}
              </button>
            </form>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="flex justify-between items-end border-b border-foreground/10 pb-8">
               <div className="space-y-1">
                 <h1 className="text-4xl font-serif italic text-brand-gold">Consultation Bookings</h1>
                 <button 
                   onClick={handleLogout}
                   className="text-[10px] uppercase tracking-widest text-brand-accent font-bold hover:text-brand-gold transition-luxury"
                 >
                   Logout Securely
                 </button>
               </div>
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
    </div>
  );
}

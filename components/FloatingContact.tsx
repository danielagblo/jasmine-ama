"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Mail, MessageCircle, X } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Hide on secure portal
  if (pathname === "/secure-portal") return null;

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Main Container */}
      <div className="relative">
        
        {/* Email Button (Top) */}
        <div 
          className={`absolute bottom-full right-0 mb-3 transition-all duration-500 ease-out transform ${
            isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-50 pointer-events-none"
          }`}
        >
          <a 
            href="mailto:jasmine@jasmineama.com"
            className="w-14 h-14 bg-white flex items-center justify-center rounded-full shadow-2xl border border-foreground/5 hover:scale-110 transition-luxury text-brand-obsidian"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* WhatsApp Button (Left) */}
        <div 
          className={`absolute right-full bottom-0 mr-3 transition-all duration-500 ease-out transform ${
            isOpen ? "translate-x-0 opacity-100 scale-100" : "translate-x-10 opacity-0 scale-50 pointer-events-none"
          }`}
        >
          <a 
            href="https://wa.me/233593865963"
            target="_blank"
            className="w-14 h-14 bg-[#25D366] flex items-center justify-center rounded-full shadow-2xl hover:scale-110 transition-luxury text-white"
          >
            <svg 
              viewBox="0 0 24 24" 
              width="28" 
              height="28" 
              stroke="currentColor" 
              fill="currentColor" 
              strokeWidth="0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03a11.782 11.782 0 001.579 5.925L0 24l6.135-1.61a11.786 11.786 0 005.912 1.586h.005c6.632 0 12.032-5.392 12.037-12.028a11.796 11.796 0 00-3.484-8.53z" />
            </svg>
          </a>
        </div>

        {/* Main Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 flex items-center justify-center rounded-full transition-all duration-500 shadow-2xl z-20 ${
            isOpen ? "bg-brand-obsidian text-white rotate-90" : "bg-brand-accent text-white hover:scale-105"
          }`}
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <MessageCircle size={32} />
          )}
        </button>
      </div>

      {/* Transparent backdrop for closing on click-outside */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[-1]"
        />
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Search, User } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-outline-variant/30 py-4" : "bg-transparent py-6"
    }`}>
      <div className="flex justify-between items-center px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className={`text-xl md:text-2xl font-serif font-light tracking-[0.2em] transition-colors duration-500 ${
          isScrolled ? "text-on-surface" : "text-white"
        }`}>
          DREAM DECORS
        </div>
        
        <nav className="hidden lg:flex items-center space-x-10">
          {["HOME", "EXPERIENCES", "DESTINATIONS", "WEDDINGS", "OFFERS", "CONTACT"].map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs font-bold tracking-widest transition-colors duration-500 relative group ${
                isScrolled ? "text-on-surface/70 hover:text-on-surface" : "text-white/80 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-container transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <div className={`flex items-center space-x-6 transition-colors duration-500 ${
          isScrolled ? "text-on-surface" : "text-white"
        }`}>
          <button className="hover:text-primary-container transition-colors">
            <Search size={20} />
          </button>
          <button className="hover:text-primary-container transition-colors">
            <User size={20} />
          </button>
          <button className="hidden sm:block bg-primary-container text-on-primary px-6 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
            Inquire
          </button>
        </div>
      </div>
    </header>
  );
}

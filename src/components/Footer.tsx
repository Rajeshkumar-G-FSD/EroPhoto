import React from "react";
import { motion } from "motion/react";
import { MessageCircle, Instagram, Facebook } from "lucide-react";
import { Page } from "../types";

interface FooterProps {
  onPageChange?: (page: Page) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onPageChange && (page === "CONTACT" || page === "EXPERIENCES" || page === "DESTINATIONS" || page === "WEDDINGS" || page === "OFFERS")) {
      onPageChange(page as Page);
    }
  };

  return (
    <footer className="bg-surface border-t border-outline-variant/20 pt-24 pb-12 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="text-2xl font-serif tracking-[0.2em] text-on-surface mb-6 uppercase">
              E MEDIA EVENTS
            </div>
            <p className="text-on-surface-variant font-light leading-relaxed mb-8">
              Elevating the art of celebration and media experiences through meticulous design and unparalleled global service.
            </p>
            <div className="flex space-x-5">
              <a 
                href="https://www.instagram.com/emediaerode/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-on-surface uppercase mb-8">Discover</h4>
            <ul className="space-y-4">
              {["Experiences", "Destinations", "Weddings", "Offers"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    onClick={(e) => handleNavClick(e, item.toUpperCase())}
                    className="text-on-surface-variant hover:text-primary transition-all duration-300 text-sm font-light hover:pl-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-on-surface uppercase mb-8">Connect</h4>
            <ul className="space-y-4">
              {["Atelier", "Careers", "Contact", "Instagram"].map((item) => (
                <li key={item}>
                  <a 
                    href={item === "Instagram" ? "https://www.instagram.com/emediaerode/" : "#"} 
                    target={item === "Instagram" ? "_blank" : undefined}
                    rel={item === "Instagram" ? "noopener noreferrer" : undefined}
                    onClick={(e) => item !== "Instagram" && handleNavClick(e, item.toUpperCase())}
                    className="text-on-surface-variant hover:text-primary transition-all duration-300 text-sm font-light hover:pl-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] text-on-surface uppercase mb-8">Instagram</h4>
            <a 
              href="https://www.instagram.com/emediaerode/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-on-surface-variant hover:text-primary transition-all duration-300 text-sm font-light hover:pl-2"
            >
              Follow @emediaerode
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">
            © 2026 DataZync Corp
          </p>
          <p className="font-serif italic text-primary text-sm">
            Crafting Extraordinary Legacies
          </p>
        </div>
      </div>

      {/* Floating WhatsApp / Chat */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onPageChange?.("CONTACT")}
        className="fixed bottom-10 right-10 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-primary-container border border-primary-container/10 z-[100]"
      >
        <MessageCircle size={28} />
      </motion.button>
    </footer>
  );
}

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Version */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col items-center group cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="flex flex-col items-center">
               <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold tracking-[0.4em] text-on-surface-variant uppercase mb-6 group-hover:text-primary transition-colors">
                Scroll To Top
              </span>
              <div className="w-[1px] h-24 bg-gradient-to-b from-primary/50 to-transparent relative">
                <div className="absolute top-0 left-0 w-full h-0 bg-primary group-hover:h-full transition-all duration-700" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant mt-4 group-hover:bg-primary transition-colors" />
            </div>
          </motion.div>

          {/* Mobile Version */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed left-6 bottom-24 lg:hidden z-[60] w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-on-surface transition-all active:bg-primary/20 shadow-lg"
            onClick={scrollToTop}
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
}

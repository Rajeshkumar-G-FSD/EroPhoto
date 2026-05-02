import React from "react";
import { motion } from "motion/react";

interface HeroProps {
  onBookNow?: () => void;
}

export default function Hero({ onBookNow }: HeroProps) {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop"
        alt="Luxury Wedding Setting"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Sophisticated Overlays */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/10 to-background" />

      {/* Centered Glass Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 glass-panel p-8 md:p-16 rounded-[2.5rem] max-w-4xl text-center mx-4"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[10px] font-bold tracking-[0.4em] text-primary mb-6 uppercase"
        >
          Established 1994
        </motion.p>
        <h1 className="text-4xl md:text-7xl font-serif text-on-surface mb-8 leading-tight">
          Crafting Unforgettable <br className="hidden md:block" /> Wedding Moments
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Experience the epitome of luxury and elegance for your special day with our award-winning global planning team.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookNow}
            className="bg-primary-container text-on-primary px-12 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase shadow-lg border-none cursor-pointer"
          >
            Book Now
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-outline text-on-surface px-12 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-md hover:bg-white/10"
          >
            View Portfolio
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30"
      >
        <span className="text-[10px] font-bold tracking-[0.4em] mb-2 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-on-surface" />
      </motion.div>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

interface SectionCarouselProps {
  items: CarouselItem[];
  title: string;
  subtitle: string;
}

export default function SectionCarousel({ items, title, subtitle }: SectionCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="py-24 bg-background overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 mb-16">
        <h2 className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-4">{subtitle}</h2>
        <h3 className="text-4xl md:text-6xl font-serif text-on-surface">{title}</h3>
      </div>

      <div className="relative flex items-center">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 70}%)` }}>
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              className={`min-w-[70%] md:min-w-[45%] h-[500px] md:h-[600px] px-4 transition-opacity duration-500 ${current === idx ? "opacity-100" : "opacity-40"}`}
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden group shadow-2xl">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 flex flex-col justify-end">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-primary-container uppercase mb-3">{item.subtitle}</span>
                  <h4 className="text-3xl md:text-4xl font-serif text-white mb-4">{item.title}</h4>
                  <p className="text-white/70 text-sm font-light max-w-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="absolute bottom-10 right-16 flex space-x-4 z-10">
          <button onClick={prev} className="p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

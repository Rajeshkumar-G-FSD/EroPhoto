import React from "react";
import SectionCarousel from "./SectionCarousel";

const OFFERS_DATA = [
  {
    id: "o1",
    title: "Summer in Santorini",
    subtitle: "LIMITED TIME",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop",
    description: "Book 7 nights and receive a private yacht sunset dinner and complimentary spa treatments."
  },
  {
    id: "o2",
    title: "Tuscan Harvest",
    subtitle: "SEASONAL",
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?q=80&w=2670&auto=format&fit=crop",
    description: "Exclusive access to the truffle hunting season with a resident expert and Michelin-starred dinner."
  },
  {
    id: "o3",
    title: "Kyoto Serenity",
    subtitle: "WELLNESS",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2670&auto=format&fit=crop",
    description: "Complimentary meditation sessions and a traditional kaiseki meal included in your 5-night stay."
  },
  {
    id: "o4",
    title: "Eco Maldives",
    subtitle: "SUSTAINABLE",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2665&auto=format&fit=crop",
    description: "Support our coral reef restoration project and enjoy 20% off all marine adventures."
  }
];

export default function Offers() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-stone-900 flex items-center justify-center">
           <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 uppercase tracking-[0.2em]">Exclusive Privileges</h1>
            <p className="text-white/60 font-light tracking-widest uppercase text-xs">Curated Offers for our most discerning guests</p>
           </div>
        </div>
      </section>

      <SectionCarousel 
        items={OFFERS_DATA}
        title="Bespoke Opportunities"
        subtitle="Current Offers"
      />

      <section className="py-24 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { 
                tag: "Membership", 
                title: "The Circle", 
                desc: "Join our exclusive membership program for early access to all new experiences and hidden inventory.",
                img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop"
              },
              { 
                tag: "Newsletter", 
                title: "The Dossier", 
                desc: "Receive our quarterly publication detailing the world's most exciting travel and lifestyle news.",
                img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1587&auto=format&fit=crop"
              },
              { 
                tag: "Concierge", 
                title: "Priority Access", 
                desc: "Enjoy 24/7 dedicated service from our award-winning travel and design consultants.",
                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop"
              }
            ].map((card, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-96 rounded-3xl overflow-hidden mb-6">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full">
                    <span className="text-[10px] font-bold tracking-widest text-white uppercase">{card.tag}</span>
                  </div>
                </div>
                <h4 className="text-2xl font-serif text-on-surface mb-3">{card.title}</h4>
                <p className="text-on-surface-variant font-light text-sm mb-6 leading-relaxed">{card.desc}</p>
                <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all">Sign Up Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

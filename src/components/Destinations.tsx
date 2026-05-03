import React from "react";
import SectionCarousel from "./SectionCarousel";

const DESTINATIONS_DATA = [
  {
    id: "1",
    title: "The Amalfi Coast",
    subtitle: "ITALY",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2574&auto=format&fit=crop",
    description: "Cliffside villages, azure waters, and timeless Mediterranean elegance."
  },
  {
    id: "2",
    title: "Kyoto Gardens",
    subtitle: "JAPAN",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2670&auto=format&fit=crop",
    description: "Serene temples and the delicate beauty of cherry blossoms in the cultural heart of Japan."
  },
  {
    id: "3",
    title: "Santorini Sunsets",
    subtitle: "GREECE",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2574&auto=format&fit=crop",
    description: "Iconic white-washed architecture overlooking the endless blue of the Aegean Sea."
  },
  {
    id: "4",
    title: "Bora Bora Lagoon",
    subtitle: "FRENCH POLYNESIA",
    image: "https://images.unsplash.com/photo-1505881502353-a1986add3762?q=80&w=2162&auto=format&fit=crop",
    description: "The ultimate overwater paradise with turquoise lagoons and lush volcanic peaks."
  }
];

export default function Destinations() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2670&auto=format&fit=crop" 
            alt="Destinations Hero"
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>
        <div className="relative text-center z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 uppercase tracking-wider">World Icons</h1>
          <p className="text-white/80 font-light max-w-2xl mx-auto text-lg leading-relaxed">
            From the bustling streets of Tokyo to the serene islands of the Mediterranean, we curate journeys to the most extraordinary corners of our planet.
          </p>
        </div>
      </section>
      
      <SectionCarousel 
        items={DESTINATIONS_DATA}
        title="Extraordinary Locales"
        subtitle="Global Portfolio"
      />

      <section className="py-24 bg-surface-container">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-6">Our Selection Process</h2>
            <h3 className="text-4xl font-serif text-on-surface mb-8">Curated with Passion</h3>
            <p className="text-on-surface-variant font-light text-lg mb-8 leading-relaxed">
              Every destination in our portfolio is personally vetted by our consultants. We look for the unique, the authentic, and the exceptional, ensuring that your experience transcends the ordinary.
            </p>
            <button className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-primary pb-2 text-primary hover:text-black hover:border-black transition-all">
              Learn More About Our Standards
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2642&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover shadow-xl" alt="" />
            <img src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=2564&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover shadow-xl mt-12" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import SectionCarousel from "./SectionCarousel";

const WEDDINGS_DATA = [
  {
    id: "w1",
    title: "Château Elegance",
    subtitle: "LOIRE VALLEY, FRANCE",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2698&auto=format&fit=crop",
    description: "A fairy-tale celebration in a historic French castle surrounded by manicured gardens."
  },
  {
    id: "w2",
    title: "Tuscan Vineyard",
    subtitle: "CHIANTI, ITALY",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop",
    description: "Rustic romance under the golden sun with world-class wine and authentic Italian charm."
  },
  {
    id: "w3",
    title: "Ocean Whisper",
    subtitle: "AMALFI COAST, ITALY",
    image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1470&auto=format&fit=crop",
    description: "An intimate terrace ceremony with panoramic views of the Mediterranean Sea."
  },
  {
    id: "w4",
    title: "Imperial Palace",
    subtitle: "JAIPUR, INDIA",
    image: "https://images.unsplash.com/photo-1595062584113-9781bdd52f8e?q=80&w=1543&auto=format&fit=crop",
    description: "Grand scale opulence in a royal palace setting with traditional Indian rituals."
  }
];

export default function Weddings() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop" 
            alt="Weddings Hero"
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>
        <div className="relative text-center z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 uppercase tracking-wider">Dream Weddings</h1>
          <p className="text-white/80 font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Crafting bespoke celebrations that reflect your unique story. From intimate elopements to grand gala weddings across the globe.
          </p>
        </div>
      </section>
      
      <SectionCarousel 
        items={WEDDINGS_DATA}
        title="Love Without Borders"
        subtitle="Signature Celebrations"
      />

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-6">Our Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-on-surface mb-8">E Media Events Design Studio</h3>
          <p className="text-on-surface-variant font-light text-lg mb-12 leading-relaxed">
            We believe that a wedding is more than just an event; it's the beginning of a new legacy. Our design team works meticulously to ensure every detail—from the initial concept to the final farewell—is executed with precision and elegance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Planning", desc: "Full-service logistical management from start to finish." },
              { title: "Design", desc: "Aesthetic curation and custom decor development." },
              { title: "Execution", desc: "On-site management to ensure perfection in every moment." }
            ].map((service, i) => (
              <div key={i} className="space-y-4">
                <div className="text-primary-container font-serif text-2xl">{i + 1}.</div>
                <h4 className="text-[10px] font-bold tracking-widest uppercase">{service.title}</h4>
                <p className="text-sm text-on-surface-variant font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

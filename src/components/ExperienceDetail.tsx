import React from "react";
import { motion } from "motion/react";
import { ChevronLeft, Check } from "lucide-react";

interface Experience {
  id: string;
  location: string;
  title: string;
  image: string;
  price: string;
  description: string;
  fullDescription: string;
  highlights: string[];
}

interface ExperienceDetailProps {
  experience: Experience;
  onBack: () => void;
}

export default function ExperienceDetail({ experience, onBack }: ExperienceDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section of Detail */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="absolute top-32 lg:top-40 left-6 lg:left-16 flex items-center space-x-3 text-white/70 hover:text-white transition-colors group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Return Home</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-xs font-bold tracking-[0.4em] text-primary-container mb-6 block uppercase drop-shadow-lg">
              {experience.location}
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-4 drop-shadow-2xl">
              {experience.title}
            </h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto font-light italic">
              {experience.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-32">
          {/* Main Story */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">The Journey</h2>
              <div className="h-[1px] w-20 bg-primary-container" />
              <p className="text-on-surface-variant text-xl leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                {experience.fullDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src={experience.image} alt="" className="rounded-2xl h-80 w-full object-cover shadow-xl" />
              <div className="bg-surface-container p-10 rounded-2xl flex flex-col justify-center">
                <h3 className="font-serif text-2xl text-on-surface mb-4">Unparalleled Service</h3>
                <p className="text-on-surface-variant font-light">Every Dream Decors itinerary includes a dedicated 24/7 concierge, private transportation, and all-access passes to the most exclusive venues at your destination.</p>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-6 pt-12">
              <h2 className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">Location Discovery</h2>
              <div className="h-[1px] w-20 bg-primary-container" />
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${encodeURIComponent(experience.location)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Sidebar / Booking Info */}
          <div className="lg:col-span-1">
            <div className="glass-panel p-10 rounded-[2rem] sticky top-32">
              <div className="mb-10 pb-10 border-b border-outline-variant/30">
                <p className="text-[10px] font-bold tracking-[0.3em] text-on-surface-variant uppercase mb-2">Package Investment</p>
                <p className="text-5xl font-serif text-primary-container">{experience.price}</p>
                <p className="text-xs text-on-surface-variant mt-2">Per person, all-inclusive luxury.</p>
              </div>

              <div className="space-y-8 mb-12">
                <h4 className="text-[10px] font-bold tracking-[0.3em] text-on-surface uppercase">Highlights Included</h4>
                <ul className="space-y-4">
                  {experience.highlights.map((h) => (
                    <li key={h} className="flex items-start space-x-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-on-surface/80">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full py-5 bg-primary-container text-on-primary rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:shadow-2xl transition-all mb-4">
                Inquire Now
              </button>
              <p className="text-[10px] text-center text-on-surface-variant uppercase tracking-widest">Limited Capacity Available</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

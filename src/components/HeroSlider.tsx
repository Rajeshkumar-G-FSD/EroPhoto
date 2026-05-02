import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export const SLIDES: Experience[] = [
  {
    id: "01",
    location: "Maldives Luxury",
    title: "COUPLES RETREAT",
    image: "https://ik.imagekit.io/datazync/one.jpeg",
    price: "₹3,75,000",
    description: "An intimate escape to the world's most beautiful coral reefs and crystal clear lagoons.",
    fullDescription: "Experience unparalleled luxury in your private overwater villa. Our Couples Retreat is designed to foster connection and create lasting memories through curated romantic experiences, from candlelit dinners on a private sandbank to traditional Maldivian treatments at our award-winning spa.",
    highlights: ["Private Overwater Villa", "Candlelit Sandbank Dinner", "Traditional Healing Massage", "Coral Reef Snorkeling"]
  },
  {
    id: "02",
    location: "Tuscan Sun",
    title: "VILLA ELEGANCE",
    image: "https://ik.imagekit.io/datazync/two.jpeg",
    price: "₹2,65,000",
    description: "Savor the slow life among rolling hills, ancient vineyards, and historic stone villas of Tuscany.",
    fullDescription: "Nestled in the heart of the Chianti region, this vintage villa offers a perfect blend of historic charm and modern luxury. Spend your days exploring local vineyards and your evenings enjoying farm-to-table cuisine prepared by our resident Michelin-starred chef.",
    highlights: ["Private Vineyard Tour", "Michelin-Starred Private Chef", "Historical Estate Access", "Truffle Hunting Session"]
  },
  {
    id: "03",
    location: "Swiss Heights",
    title: "ALPS ADVENTURE",
    image: "https://ik.imagekit.io/datazync/three.jpeg",
    price: "₹2,30,000",
    description: "Breathtaking views and alpine luxury in the world's most prestigious mountain ranges.",
    fullDescription: "For those who seek the peak of luxury and adrenaline. Our Alps Adventure combines high-altitude sports with world-class relaxation. Heli-ski in the winter or hike the emerald trails in the summer, returning to the comfort of your five-star chalet.",
    highlights: ["Helicopter Glacier Tour", "Luxury Chalet Lodging", "Alpine Spa Facilities", "Guided Peak Expeditions"]
  },
  {
    id: "04",
    location: "Bali Serenity",
    title: "FOREST SANCTUARY",
    image: "https://ik.imagekit.io/datazync/four.jpeg",
    price: "₹1,60,000",
    description: "Rejuvenate your soul in the lush tropical jungles and spiritual heart of Ubud.",
    fullDescription: "A sanctuary dedicated to mindfulness and natural harmony. Our Bali experience invites you to disconnect from the digital world and reconnect with yourself through traditional Balinese yoga, meditation sessions, and healing rituals in our secluded jungle forest location.",
    highlights: ["Sunrise Yoga Sessions", "Traditional Melukat Cleaning", "Jungle Infinity Pool", "Organic Garden Dining"]
  },
  {
    id: "05",
    location: "Paris Romance",
    title: "CITY OF LIGHTS",
    image: "https://ik.imagekit.io/datazync/five.jpeg",
    price: "₹3,15,000",
    description: "The ultimate romantic journey through the most elegant streets and hidden gems of Paris.",
    fullDescription: "Paris like you've never seen it before. From private Louvre tours after hours to vintage car rides along the Seine, our Paris Romance package is the gold standard for luxury travel in the French capital. Stay in a suite with direct views of the Eiffel Tower.",
    highlights: ["Private Louvre After-Hours", "Eiffel Tower View Suite", "Seine River Yacht Dinner", "Vintage Rolls Royce Tour"]
  },
  {
    id: "06",
    location: "Desert Mirage",
    title: "SAHARA NIGHTS",
    image: "https://ik.imagekit.io/datazync/zix.jpg.jpeg",
    price: "₹1,95,000",
    description: "A magical journey across shifting sands to a hidden oasis under a canopy of stars.",
    fullDescription: "Experience the timeless beauty of the Sahara in absolute comfort. Our luxury nomad camp features silk-lined tents, traditional Moroccan feasts, and night-sky viewing with expert astronomers in the heart of the Merzouga dunes.",
    highlights: ["Luxury Glamping Tents", "Starlit Astronomy Tours", "Berber Drumming Rituals", "Camel Trek at Sunset"]
  },
  {
    id: "07",
    location: "Coastal Bliss",
    title: "AZURE WATERS",
    image: "https://ik.imagekit.io/datazync/seven.jpg.jpeg",
    price: "₹4,30,000",
    description: "Sailing the iconic coastlines and hidden coves of the world's most beautiful islands.",
    fullDescription: "Set sail on a private yacht and discover the azure beauty of the Mediterranean. This experience offers complete freedom to explore secluded caves, dine on fresh seafood on deck, and wake up in a new stunning harbor every morning of your journey.",
    highlights: ["Private Yacht Charter", "Full Staff & Crew", "Water Sports Equipment", "Hidden Cove Access"]
  },
  {
    id: "08",
    location: "Nordic Charm",
    title: "AURORA TRAILS",
    image: "https://ik.imagekit.io/datazync/eight.jpg.jpeg",
    price: "₹3,40,000",
    description: "Chase the Northern Lights from the comfort of your private glass-domed igloo.",
    fullDescription: "Arctic luxury at its finest. Spend your nights watching the Aurora Borealis dance through the ceiling of your heated glass igloo and your days exploring the frozen tundra by dog sled or snowmobile. A truly once-in-a-lifetime Nordic experience.",
    highlights: ["Glass-Domed Igloo", "Private Husky Sledding", "Ice Fishing Excursion", "Northern Lights Hunt"]
  },
  {
    id: "09",
    location: "Erode, Tamil Nadu",
    title: "TEXTILE HERITAGE",
    image: "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?q=80&w=2670&auto=format&fit=crop",
    price: "₹1,25,000",
    description: "Explore the vibrant textile capital of South India with curated heritage walks and luxury stays.",
    fullDescription: "Known as the Turmeric City and a global textile hub, Erode offers a unique blend of industrial heritage and natural beauty. Our exclusive Erode experience includes guided tours of historic handloom centers, private visits to the Bhavani Sangameshwarar temple, and luxury stay at a renovated colonial estate.",
    highlights: ["Heritage Handloom Tour", "Bhavani River Boat Ride", "Private Temple Rituals", "Luxury Estate Lodging"]
  },
];

interface HeroSliderProps {
  onExplore: (exp: Experience) => void;
}

export default function HeroSlider({ onExplore }: HeroSliderProps) {
  const [rotation, setRotation] = useState(0);
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;
  const angleStep = 360 / total;

  const rotate = (direction: "next" | "prev") => {
    const change = direction === "next" ? -angleStep : angleStep;
    const newIdx = (current + (direction === "next" ? 1 : -1) + total) % total;
    setRotation((prev) => prev + change);
    setCurrent(newIdx);
  };

  const activeSlide = SLIDES[current];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-900 flex flex-col justify-center items-center">
      {/* Background with Blur & Gradient */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={activeSlide.image}
            alt=""
            className="w-full h-full object-cover brightness-[0.4] blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/50" />
        </motion.div>
      </AnimatePresence>

      {/* Main Info */}
      <div className="absolute top-32 left-8 md:left-16 z-20 pointer-events-none w-full max-w-2xl">
        <motion.div
          key={`info-${current}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-[2px] bg-primary-container" />
            <span className="text-xs font-bold tracking-[0.4em] text-primary-container uppercase">
              {activeSlide.location}
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            {activeSlide.title}
          </h1>
          <button 
            onClick={() => onExplore(activeSlide)}
            className="px-10 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-stone-900 transition-all text-xs font-bold tracking-widest pointer-events-auto uppercase"
          >
            Explore Experience
          </button>
        </motion.div>
      </div>

      {/* 3D Carousel Stage */}
      <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center perspective-[2000px] pointer-events-none select-none mt-20 md:mt-32">
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: rotation }}
          transition={{ type: "spring", stiffness: 45, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {SLIDES.map((slide, i) => {
            const slideRotation = i * angleStep;
            return (
              <div
                key={slide.id}
                className="absolute left-1/2 top-1/2 -ml-28 md:-ml-40 -mt-40 md:-mt-56 w-56 md:w-80 h-80 md:h-[450px] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 pointer-events-auto cursor-pointer"
                style={{
                  transform: `rotateY(${slideRotation}deg) translateZ(clamp(300px, 45vw, 600px))`,
                  backfaceVisibility: "hidden",
                  opacity: i === current ? 1 : 0.4,
                  scale: i === current ? 1.05 : 0.95,
                  transformStyle: "preserve-3d",
                }}
                onClick={() => {
                  const diff = i - current;
                  // Handle loop normalization for click
                  let normalizedDiff = diff;
                  if (Math.abs(diff) > total / 2) {
                    normalizedDiff = diff > 0 ? diff - total : diff + total;
                  }
                  setRotation((prev) => prev - normalizedDiff * angleStep);
                  setCurrent(i);
                }}
              >
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 w-full max-w-[1440px] px-8 md:px-16 flex justify-between items-center z-30">
        <div className="flex items-center space-x-6 md:space-x-12">
          <div className="flex space-x-3 md:space-x-4">
            <button
              onClick={() => rotate("prev")}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all group active:scale-90"
            >
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => rotate("next")}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all group active:scale-90"
            >
              <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="hidden lg:flex flex-col">
            <span className="text-white/40 text-[10px] font-bold tracking-[0.3em] mb-1 uppercase">Next Destination</span>
            <span className="text-white font-serif text-lg">
              {SLIDES[(current + 1) % total].title}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-6 md:space-x-10">
          <div className="relative w-32 md:w-48 h-[2px] bg-white/10 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-primary-container"
              animate={{ scaleX: (current + 1) / total }}
              style={{ originX: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl md:text-4xl font-serif text-white">{activeSlide.id}</span>
            <span className="text-white/30 font-serif">/ {total.toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* Background rings decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border-[1px] border-white/[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border-[1px] border-white/[0.05] pointer-events-none" />
    </section>
  );
}

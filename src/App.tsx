import React, { useState } from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import HeroSlider from "./components/HeroSlider.tsx";
import Services from "./components/Services.tsx";
import BookingForm from "./components/BookingForm.tsx";
import Footer from "./components/Footer.tsx";
import ExperienceDetail from "./components/ExperienceDetail.tsx";
import { AnimatePresence, motion } from "motion/react";

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

export default function App() {
  const [activeExperience, setActiveExperience] = useState<Experience | null>(null);

  const handleExplore = (exp: Experience) => {
    setActiveExperience(exp);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary-container selection:text-on-primary">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          {!activeExperience ? (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero />
              <div id="experiences">
                <HeroSlider onExplore={handleExplore} />
              </div>
              <Services />
              <BookingForm />
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ExperienceDetail 
                experience={activeExperience} 
                onBack={() => setActiveExperience(null)} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

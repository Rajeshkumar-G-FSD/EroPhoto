import React, { useState } from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import HeroSlider from "./components/HeroSlider.tsx";
import Services from "./components/Services.tsx";
import BookingForm from "./components/BookingForm.tsx";
import Footer from "./components/Footer.tsx";
import ExperienceDetail from "./components/ExperienceDetail.tsx";
import Destinations from "./components/Destinations.tsx";
import Weddings from "./components/Weddings.tsx";
import Offers from "./components/Offers.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { AnimatePresence, motion } from "motion/react";
import { Experience, Page } from "./types";

export default function App() {
  const [activeExperience, setActiveExperience] = useState<Experience | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>("HOME");

  const handleExplore = (exp: Experience) => {
    setActiveExperience(exp);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    setActiveExperience(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleBookNow = () => {
    if (currentPage !== "CONTACT") {
      handlePageChange("CONTACT");
      scrollToContact();
    } else {
      scrollToContact();
    }
  };

  const renderContent = () => {
    if (activeExperience) {
      return (
        <motion.div
          key="detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ExperienceDetail 
            experience={activeExperience} 
            onBack={() => setActiveExperience(null)} 
            onInquire={handleBookNow}
          />
        </motion.div>
      );
    }

    switch (currentPage) {
      case "HOME":
        return (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero onBookNow={handleBookNow} />
            <div id="experiences">
              <HeroSlider onExplore={handleExplore} />
            </div>
            <Services />
            <BookingForm />
          </motion.div>
        );
      case "EXPERIENCES":
        return (
          <motion.div 
            key="experiences-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HeroSlider onExplore={handleExplore} />
            <Services />
          </motion.div>
        );
      case "DESTINATIONS":
        return (
          <motion.div 
            key="destinations-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Destinations />
          </motion.div>
        );
      case "WEDDINGS":
        return (
          <motion.div 
            key="weddings-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Weddings />
          </motion.div>
        );
      case "OFFERS":
        return (
          <motion.div 
            key="offers-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Offers />
          </motion.div>
        );
      case "CONTACT":
        return (
          <motion.div 
            key="contact-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24"
          >
            <BookingForm />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary-container selection:text-on-primary">
      <Navbar onBookNow={handleBookNow} onPageChange={handlePageChange} currentPage={currentPage} />
      <ScrollToTop />
      <main>
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "motion/react";

export default function BookingForm() {
  const [budget, setBudget] = useState(5);

  return (
    <section className="bg-surface-container-low py-32" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl" />
          
          <h2 className="text-4xl font-serif text-on-background mb-10 text-center relative z-10">
            Reserve Your Date
          </h2>
          
          <form className="space-y-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">
                  Event Type
                </label>
                <select className="w-full bg-transparent border-0 border-b border-outline focus:border-primary-container focus:ring-0 px-0 py-3 font-serif text-lg text-on-background appearance-none">
                  <option>Engagement</option>
                  <option>Wedding</option>
                  <option>Reception</option>
                  <option>Luxury Experience</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">
                  Select Date
                </label>
                <input
                  type="date"
                  className="w-full bg-transparent border-0 border-b border-outline focus:border-primary-container focus:ring-0 px-0 py-3 font-serif text-lg text-on-background"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="block text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">
                  Estimated Budget Range
                </label>
                <span className="text-2xl font-serif text-primary-container">₹{budget}k</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-on-surface-variant/50 uppercase">
                <span>₹5k</span>
                <span>₹92k+</span>
              </div>
              <input
                type="range"
                min="5"
                max="92"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-[2px] bg-outline-variant rounded-lg appearance-none cursor-pointer accent-primary-container"
              />
            </div>

            <div className="pt-6 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-container text-on-primary text-[10px] font-bold tracking-[0.3em] px-14 py-5 rounded-full hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.5)] transition-all uppercase"
              >
                Instant Booking Inquiry
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

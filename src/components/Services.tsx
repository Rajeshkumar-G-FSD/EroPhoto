import React from "react";
import { motion } from "motion/react";

const SERVICES = [
  {
    title: "Wedding Photography",
    description: "Capture every fleeting emotion with our award-winning editorial approach.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7RYztsQfqBlU3mXIoyVDCcqkeSbJwLr9Tku2AwkL4-0khsRyA13sPyaRI5lqdhbkCTj57VuIDf6uD6wKeU17rSBeu0JuEW-XZJ9DBnhHEGHjcIf1NWlpiVgni_I7HwE-HUvODmlTnB4JyUXpWsnGESklR6RfiUH2PJqavrciSPKvbc7rXVHpZ3VXc5Pxd9qbSeIXJF45Bd-zgPUa_XSAn_c3UwLHKa-bryHqdS86TvjrBTasuisaXsz0GRJY5e8ew7yJ08XKOeIU",
    pricing: [
      { label: "Basic", price: "₹1,80,000" },
      { label: "Premium", price: "₹3,20,000" },
      { label: "Luxury", price: "₹5,50,000" },
    ],
  },
  {
    title: "Stage & Decor",
    description: "Transform your venue with bespoke architectural floral and stage designs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeZ1v3COtvGGekV0Fvox2gJONFe9m0oy4AJDdSAraW3SRKrftqGFkee5itrFifob-Q6SKm63GicfJvqPfa0qL9DWyL23-mrzEmv_Ef09RgMiwZLlCHlCBEuaKSIAouSE7ymakrMk3uwZNWommMdYEO6jX7QkFQtEhMnIXoKRvCouHSFYC6BFyjmLz0ozLWe12b-dSBw08KA-DmKVZN58jdGaq7gO_mLbv3E2myJ59TOEY9RMA_PPr3Mop0kHEWSpYqWsXMWuknKs8",
    pricing: [
      { label: "Basic", price: "₹4,00,000" },
      { label: "Premium", price: "₹9,50,000" },
      { label: "Luxury", price: "₹20,00,000+" },
    ],
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto bg-background" id="weddings">
      <div className="text-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[0.3em] text-primary mb-4"
        >
          EXPERTISE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-on-surface"
        >
          Curated Services
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="glass-panel rounded-[2rem] overflow-hidden group"
          >
            <div className="h-[400px] overflow-hidden relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
            </div>
            <div className="p-10 lg:p-14">
              <h3 className="text-3xl font-serif text-on-surface mb-4">{service.title}</h3>
              <p className="text-on-surface-variant mb-10 leading-relaxed font-light">
                {service.description}
              </p>
              <div className="space-y-4">
                {service.pricing.map((tier) => (
                  <div
                    key={tier.label}
                    className="flex justify-between items-center py-4 border-b border-outline-variant/30 last:border-0"
                  >
                    <span className="text-xs font-bold tracking-widest text-on-surface uppercase opacity-70">
                      {tier.label}
                    </span>
                    <span className="text-xl font-serif text-primary-container">
                      {tier.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

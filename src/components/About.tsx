"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/UI/Card";
import { restaurantInfo, stats } from "@/data/restaurant";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const reducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 sm:py-28 lg:py-32 bg-stone-50"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
                alt="Ember & Leaf restaurant interior showing elegant dining area with warm lighting"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -left-6 lg:-left-8 bg-white rounded-2xl p-6 lg:p-8 shadow-2xl shadow-stone-900/10 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-stone-500">Rated by Guests</p>
                  <p className="text-2xl font-bold text-stone-900">{restaurantInfo.rating}/5 ⭐</p>
                </div>
              </div>
              <p className="text-stone-600 leading-relaxed">
                "{restaurantInfo.description}"
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
              OUR STORY
            </div>
            <h2 id="about-title" className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              A Place Made for Good Food & Better Conversations
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed mb-10">
              <p>
                Founded in 2016, Ember & Leaf was born from a simple belief: that the best meals are shared.
                What started as a small café on a quiet corner of Banjara Hills has blossomed into Hyderabad's
                most beloved dining destination, where every dish tells a story of passion, provenance, and precision.
              </p>
              <p>
                Our chefs work closely with local farmers and artisans to source the freshest seasonal ingredients,
                transforming them into dishes that honor tradition while embracing innovation. From our signature
                truffle mushroom pasta to the perfectly grilled chicken steak, every plate is crafted with intention.
              </p>
              <p>
                But beyond the food, we're about the moments that happen around the table. The laughter over
                weekend brunch. The quiet conversations over expertly brewed coffee. The celebrations that
                become memories. This is what Ember & Leaf stands for.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center p-4"
                >
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-emerald-700 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-stone-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
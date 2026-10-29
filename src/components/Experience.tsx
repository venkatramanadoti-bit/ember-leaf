"use client";

import { motion } from "framer-motion";
import { Leaf, ChefHat, Home, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/UI/Card";
import { experienceFeatures } from "@/data/restaurant";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const iconMap = {
  Leaf,
  ChefHat,
  Home,
  Clock,
};

export function Experience() {
  const reducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="experience"
      className="py-20 sm:py-28 lg:py-32 bg-stone-50"
      aria-labelledby="experience-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            RESTAURANT EXPERIENCE
          </div>
          <h2 id="experience-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900">
            Why Choose Ember & Leaf
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experienceFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Leaf;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card variant="elevated" hover className="h-full p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-all duration-500">
                    <Icon className="w-8 h-8 text-emerald-700 group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">{feature.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
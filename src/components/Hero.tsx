"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Clock, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/UI/Button";
import { restaurantInfo } from "@/data/restaurant";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const floatingElements = [
  { top: "10%", left: "5%", size: 8, delay: 0 },
  { top: "20%", right: "8%", size: 12, delay: 1 },
  { bottom: "15%", left: "10%", size: 6, delay: 2 },
  { bottom: "25%", right: "15%", size: 10, delay: 0.5 },
  { top: "50%", left: "2%", size: 4, delay: 1.5 },
];

export function Hero() {
  const reducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt="Ember & Leaf restaurant interior with warm lighting and elegant seating"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: reducedMotion ? 1 : 1.05 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          style={{ willChange: "transform" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-stone-900/60 to-stone-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
      </div>

      {!reducedMotion && (
        <>
          {floatingElements.map((el, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-amber-400/20 blur-2xl"
              style={{
                width: el.size * 4,
                height: el.size * 4,
                top: el.top,
                bottom: el.bottom,
                left: el.left,
                right: el.right,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
              transition={{
                duration: 8 + index,
                delay: el.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            />
          ))}
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <span className="text-amber-400 font-medium text-sm tracking-wide uppercase">
              WELCOME TO {restaurantInfo.name}
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Where Great Food Meets
            <br />
            <span className="text-amber-300">Great Moments.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-stone-200 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Premium food, handcrafted beverages and a warm atmosphere in the heart of Banjara Hills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              variant="secondary"
              size="xl"
              onClick={() => scrollToSection("#menu")}
              className="w-full sm:w-auto"
            >
              Explore Our Menu
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollToSection("#reservation")}
              className="w-full sm:w-auto border-white text-white hover:bg-white/10"
            >
              Book a Table
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-stone-300"
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400 fill-current" aria-hidden="true" />
              <span className="font-medium">4.9/5 from 500+ guests</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" aria-hidden="true" />
              <span>{restaurantInfo.address.city}, {restaurantInfo.address.state}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" aria-hidden="true" />
              <span>{restaurantInfo.hours.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>{restaurantInfo.phone}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            aria-hidden="true"
          >
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
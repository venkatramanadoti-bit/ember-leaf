"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/UI/Button";
import { Card } from "@/components/UI/Card";
import { Badge } from "@/components/UI/Badge";
import { menuItems, menuCategories } from "@/data/restaurant";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MenuCardProps {
  item: typeof menuItems[0];
  index: number;
}

function MenuCard({ item, index }: MenuCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reducedMotion ? {} : { y: -8, scale: 1.01 }}
      className="group"
    >
      <Card variant="elevated" hover className="overflow-hidden flex flex-col h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            style={{ willChange: "transform" }}
          />
          <div className="absolute top-3 left-3">
            <Badge variant="emerald" size="sm">{item.badge}</Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
              {item.name}
            </h3>
            <span className="font-serif text-xl font-bold text-emerald-700 whitespace-nowrap">
              {item.price}
            </span>
          </div>
          <p className="text-stone-600 text-sm leading-relaxed mb-4 flex-1">{item.description}</p>
          <div className="flex items-center justify-between">
            <Badge variant="outline" size="sm">{item.category}</Badge>
            <Button variant="primary" size="sm" className="group-hover:scale-105 transition-transform">
              Add
            </Button>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const reducedMotion = useReducedMotion();

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }
  };

  return (
    <section id="menu" className="py-20 sm:py-28 lg:py-32 bg-white" aria-labelledby="menu-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            OUR SIGNATURE MENU
          </div>
          <h2 id="menu-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
            Fresh ingredients. Bold flavours. Beautifully served.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 lg:mb-14"
        >
          <div
            className="flex flex-wrap items-center justify-center gap-2"
            role="tablist"
            aria-label="Menu categories"
          >
            {menuCategories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls={`menu-panel-${category.toLowerCase().replace(/\s+/g, "-")}`}
                id={`menu-tab-${category.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
                  activeCategory === category
                    ? "bg-emerald-700 text-white shadow-lg shadow-emerald-700/30"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            id={`menu-panel-${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}
            role="tabpanel"
            aria-labelledby={`menu-tab-${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredItems.map((item, index) => (
                <MenuCard key={item.id} item={item} index={index} />
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12 text-stone-500">
                No items found in this category.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-12 lg:mt-16"
        >
          <Button variant="outline" size="lg" onClick={() => scrollToSection("#menu")}>
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
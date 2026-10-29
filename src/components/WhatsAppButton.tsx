"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { restaurantInfo } from "@/data/restaurant";
import { getWhatsAppUrl } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function WhatsAppButton() {
  const reducedMotion = useReducedMotion();
  const [showTooltip, setShowTooltip] = useState(false);
  const controls = useAnimation();

  const whatsappUrl = getWhatsAppUrl(restaurantInfo.whatsapp, "Hi Ember & Leaf, I would like to book a table.");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    if (!reducedMotion) {
      controls.start({
        scale: [1, 1.05, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    }
  }, [controls, reducedMotion]);

  return (
    <>
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
      `}</style>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "transition-all duration-300",
          "hover:scale-105",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
        )}
        aria-label="Chat with us on WhatsApp"
      >
        {!reducedMotion && (
          <>
            <motion.div
              className="absolute -inset-1 rounded-full bg-green-500/30"
              animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute -inset-2 rounded-full bg-green-500/20"
              animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeOut" }}
              aria-hidden="true"
            />
          </>
        )}

        <motion.button
          ref={controls as any}
          className={cn(
            "relative flex items-center gap-3 px-5 py-3 rounded-full",
            "bg-green-600 text-white",
            "shadow-xl shadow-green-600/30 hover:shadow-green-600/40",
            "md:px-6 md:py-3.5",
            "group"
          )}
          whileHover={reducedMotion ? {} : { scale: 1.05 }}
          whileTap={reducedMotion ? {} : { scale: 0.95 }}
          aria-hidden="true"
        >
          <MessageCircle className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
          <span className="hidden sm:inline font-medium text-sm">Chat on WhatsApp</span>
        </motion.button>
      </a>

      <motion.div
        className="absolute bottom-full right-0 mb-3 w-max"
        initial={{ opacity: 0, x: 20, scale: 0.9 }}
        animate={{ opacity: showTooltip ? 1 : 0, x: showTooltip ? 0 : 20, scale: showTooltip ? 1 : 0.9 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-xl shadow-xl shadow-stone-900/30 whitespace-nowrap">
          <span className="text-sm font-medium">Chat on WhatsApp</span>
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="p-1 rounded-lg hover:bg-stone-800 transition-colors"
            whileHover={reducedMotion ? {} : { scale: 1.1 }}
            whileTap={reducedMotion ? {} : { scale: 0.9 }}
            aria-label="Dismiss tooltip"
          >
            <X className="w-4 h-4 text-stone-400" aria-hidden="true" />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
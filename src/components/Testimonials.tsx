"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/UI/Card";
import { reviews } from "@/data/restaurant";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Testimonials() {
  const reducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="reviews"
      className="py-20 sm:py-28 lg:py-32 bg-stone-50"
      aria-labelledby="reviews-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            LOVED BY OUR GUESTS
          </div>
          <h2 id="reviews-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Real experiences from real guests who've dined with us.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card variant="elevated" hover className="h-full p-6">
                <div className="flex items-center gap-1 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5 fill-current",
                        i < review.rating ? "text-amber-400" : "text-stone-200"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-stone-700 leading-relaxed mb-5">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-emerald-700 font-bold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <cite className="font-medium text-stone-900 not-italic">{review.name}</cite>
                    <div className="text-sm text-stone-500">{review.date}</div>
                  </div>
                </footer>
              </Card>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-stone-600 mb-4">
            Have a wonderful experience? We'd love to hear from you!
          </p>
          <a
            href="https://g.page/emberleaf" // placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
          >
            Write a Review
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
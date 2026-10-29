"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Map } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/UI/Card";
import { restaurantInfo } from "@/data/restaurant";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Contact() {
  const reducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 sm:py-28 lg:py-32 bg-white"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            GET IN TOUCH
          </div>
          <h2 id="contact-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
            Visit Us or Get in Touch
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            We'd love to hear from you. Visit our restaurant or reach out to us directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10">
              <div className="w-full h-full bg-gradient-to-br from-stone-200 via-stone-300 to-stone-400 relative flex items-center justify-center">
                <Map className="w-20 h-20 text-stone-400" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <p className="font-serif text-2xl font-bold mb-1">Ember & Leaf</p>
                  <p className="text-stone-200 text-sm">{restaurantInfo.address.street}</p>
                  <p className="text-stone-200 text-sm">{restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 right-6 lg:left-8 lg:right-auto lg:w-96 bg-white rounded-2xl p-6 shadow-2xl shadow-stone-900/10">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">Find Us on Google Maps</h3>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurantInfo.name} ${restaurantInfo.address.street} ${restaurantInfo.address.city}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-700/30"
              >
                <MapPin className="w-5 h-5" aria-hidden="true" />
                Open in Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card variant="elevated" className="p-6 sm:p-8 h-full">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-900 mb-1">Visit Us</h4>
                    <address className="text-stone-600 not-italic leading-relaxed">
                      {restaurantInfo.address.street}<br />
                      {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}<br />
                      {restaurantInfo.address.country}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-900 mb-1">Call Us</h4>
                    <a
                      href={`tel:${restaurantInfo.phone.replace(/\s+/g, "")}`}
                      className="text-stone-600 hover:text-emerald-700 transition-colors"
                    >
                      {restaurantInfo.phone}
                    </a>
                    <p className="text-sm text-stone-500 mt-1">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-900 mb-1">Email Us</h4>
                    <a
                      href={`mailto:${restaurantInfo.email}`}
                      className="text-stone-600 hover:text-emerald-700 transition-colors"
                    >
                      {restaurantInfo.email}
                    </a>
                    <p className="text-sm text-stone-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-900 mb-1">Opening Hours</h4>
                    <div className="text-stone-600 leading-relaxed">
                      <p>{restaurantInfo.hours.days}</p>
                      <p>{restaurantInfo.hours.time}</p>
                    </div>
                    <p className="text-sm text-stone-500 mt-1">Open on public holidays</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100">
                <h4 className="font-medium text-stone-900 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/emberandleaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-stone-100 hover:bg-emerald-100 flex items-center justify-center text-stone-600 hover:text-emerald-700 transition-all duration-300"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/emberandleaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-stone-100 hover:bg-emerald-100 flex items-center justify-center text-stone-600 hover:text-emerald-700 transition-all duration-300"
                    aria-label="Follow us on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@emberandleaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-stone-100 hover:bg-emerald-100 flex items-center justify-center text-stone-600 hover:text-emerald-700 transition-all duration-300"
                    aria-label="Subscribe on YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
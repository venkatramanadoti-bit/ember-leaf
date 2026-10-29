"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, restaurantInfo } from "@/data/restaurant";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Footer() {
  const reducedMotion = useReducedMotion();
  const currentYear = 2026;

  const footerLinks = {
    "Quick Links": navItems,
    "Contact": [
      { label: "Call Us", href: `tel:${restaurantInfo.phone.replace(/\s+/g, "")}` },
      { label: "WhatsApp", href: `https://wa.me/${restaurantInfo.whatsapp.replace(/\s+/g, "")}`, external: true },
      { label: "Email Us", href: `mailto:${restaurantInfo.email}` },
      { label: "Location", href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurantInfo.name} ${restaurantInfo.address.street} ${restaurantInfo.address.city}`)}`, external: true },
    ],
    "Legal": [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-stone-900 text-stone-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="w-8 h-8 text-emerald-400" aria-hidden="true" />
              <span className="font-serif text-2xl lg:text-3xl font-bold text-white">
                {restaurantInfo.name}
              </span>
            </div>
            <p className="text-stone-400 mb-6 max-w-xs leading-relaxed">
              "{restaurantInfo.description}"
            </p>
            <p className="text-amber-400 font-medium italic">"Good food. Great moments."</p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://instagram.com/emberandleaf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-emerald-600 flex items-center justify-center text-stone-400 hover:text-white transition-all duration-300"
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
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-emerald-600 flex items-center justify-center text-stone-400 hover:text-white transition-all duration-300"
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
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-emerald-600 flex items-center justify-center text-stone-400 hover:text-white transition-all duration-300"
                aria-label="Subscribe on YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {footerLinks["Quick Links"].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith("#")) {
                          e.preventDefault();
                          const el = document.querySelector(item.href);
                          if (el) {
                            el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
                          }
                        }
                      }}
                      className="text-stone-400 hover:text-amber-400 transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <nav aria-label="Contact information">
              <ul className="space-y-3">
                {footerLinks["Contact"].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors text-sm"
                    >
                      {item.label === "Call Us" && <Phone className="w-4 h-4" aria-hidden="true" />}
                      {item.label === "WhatsApp" && <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378 9.86 9.86 0 0 1-.473-.288 9.879 9.879 0 0 1-2.527-5.255 9.896 9.896 0 0 1 4.578-4.499c.534-.149 1.053-.149 1.536 0 .517.149 1.329 1.255 1.776 1.729.306.337.533.78.565 1.078.033.297-.09.573-.224.853-.149.297-.472.867-.472.967-.001 6.267 4.286 9.999 10.283 9.999 4.155 0 7.777-2.383 9.313-5.699a8.948 8.948 0 0 0 1.3-3.72c0-2.205-.97-4.205-2.478-5.566-.957-.87-2.096-1.646-3.43-1.91-.274-.048-.559-.049-.843-.051-.285-.001-.584.029-.846.124-.262.095-.767.297-1.462.721-1.063.768-2.358 1.589-3.71 1.677-.512.034-1.032.034-1.562-.034zm-1.147-9.913c-.647.272-1.225.598-1.57.944-.36.36-.61.77-.753 1.077-.133.297-.173.372-.198.372-.035 0-.184-.125-.506-.413-.323-.273-1.053-.966-1.547-1.704-.494-.737-.67-1.379-.67-1.379s.285-.752.544-1.112c.242-.347.486-.655.895-1.04.408-.386.896-.67 1.514-.874.6-.206 1.164-.158 1.637.05.516.21 1.273.83 1.57 1.345.307.544.41 1.195.41 1.195s-.08.633-.254 1.04c-.159.347-.373.708-.559 1.04-.186.334-.423.786-.792 1.345-.336.512-.67 1.078-.778 1.147-.107.07-.198.085-.348.085-.134 0-.297-.02-.447-.075z"/></svg> }
                      {item.label === "Email Us" && <Mail className="w-4 h-4" aria-hidden="true" />}
                      {item.label === "Location" && <MapPin className="w-4 h-4" aria-hidden="true" />}
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-semibold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-3 text-stone-400">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>{restaurantInfo.hours.days}</span>
              </li>
              <li className="flex items-center gap-2 ml-6">
                <span>{restaurantInfo.hours.time}</span>
              </li>
              <li className="text-amber-400 text-sm mt-2">Open on public holidays</li>
            </ul>

            <h4 className="font-semibold text-white mb-4 mt-8">Location</h4>
            <address className="text-stone-400 not-italic leading-relaxed space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" aria-hidden="true" />
                {restaurantInfo.address.street}
              </p>
              <p className="flex items-center gap-2 ml-6">
                {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
              </p>
              <p className="flex items-center gap-2 ml-6">
                {restaurantInfo.address.country}
              </p>
            </address>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-stone-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-stone-500 text-sm">
              © {currentYear} {restaurantInfo.name}. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-stone-500">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
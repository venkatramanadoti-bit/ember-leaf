"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Modal } from "@/components/UI/Modal";
import { galleryImages } from "@/data/restaurant";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const openLightbox = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: number) => {
    const newIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!selectedImage) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  };

  return (
    <>
      <section
        ref={ref}
        id="gallery"
        className="py-20 sm:py-28 lg:py-32 bg-white"
        aria-labelledby="gallery-title"
        onKeyDown={handleKeyDown}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
              OUR GALLERY
            </div>
            <h2 id="gallery-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
              A Glimpse of Ember & Leaf
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Explore our space, our food, and the moments that make dining with us special.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            style={{
              gridTemplateAreas: `
                "a a b c"
                "a a d e"
                "f f g h"
                "i i j k"
              `,
            }}
            role="list"
            aria-label="Restaurant gallery images"
          >
            {galleryImages.map((image, index) => (
              <motion.article
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative aspect-square rounded-2xl overflow-hidden cursor-pointer group",
                  "shadow-lg shadow-stone-900/5 hover:shadow-2xl hover:shadow-stone-900/10 transition-shadow duration-500",
                  index === 0 && "md:col-span-2 md:row-span-2 aspect-[4/3]",
                  index === 4 && "md:col-span-2 md:row-span-2 aspect-[4/3]",
                  index === 7 && "md:col-span-2 md:row-span-2 aspect-[4/3]",
                )}
                role="listitem"
                onClick={() => openLightbox(image, index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(image, index);
                  }
                }}
                tabIndex={0}
                aria-label={`View ${image.alt} in full size`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Search className="w-10 h-10 text-white transform group-hover:scale-110 transition-transform" aria-hidden="true" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-medium text-sm">{image.category}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <Modal
            isOpen={true}
            onClose={closeLightbox}
            closeOnOverlayClick={true}
            className="max-w-5xl max-h-[90vh]"
          >
            <div className="relative h-[70vh] md:h-[80vh] flex items-center justify-center bg-stone-900">
              <button
                onClick={() => navigateLightbox(-1)}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain px-4"
              />

              <button
                onClick={() => navigateLightbox(1)}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <button
                onClick={closeLightbox}
                className="absolute top-4 md:top-8 right-4 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 bg-white">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">{selectedImage.alt}</h3>
              <p className="text-stone-600">Image {currentIndex + 1} of {galleryImages.length}</p>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
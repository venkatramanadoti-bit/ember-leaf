"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/UI/Button";
import { Input } from "@/components/UI/Input";
import { Card } from "@/components/UI/Card";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM",
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

function SelectField({
  id,
  label,
  name,
  value,
  onChange,
  error,
  required,
  children,
  icon,
}: {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-stone-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={cn(
            "w-full px-4 py-3 rounded-xl border bg-white text-stone-900",
            "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent",
            "transition-all duration-300 hover:border-stone-400",
            error ? "border-red-400 focus:ring-red-500" : "border-stone-200",
            "appearance-none bg-no-repeat bg-right pr-10"
          )}
          required={required}
          aria-invalid={error ? "true" : "false"}
        >
          {children}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
          {icon}
        </div>
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-500" role="alert">{error}</p>
      )}
    </div>
  );
}

export function Reservation() {
  const reducedMotion = useReducedMotion();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Please select a future date";
      }
    }

    if (!formData.time) {
      newErrors.time = "Please select a time";
    }

    if (!formData.guests) {
      newErrors.guests = "Please select number of guests";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", phone: "", date: "", time: "", guests: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const [dateOptions, setDateOptions] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const options = Array.from({ length: 60 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return (
        <option key={i} value={date.toISOString().split("T")[0]}>
          {date.toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </option>
      );
    });
    setDateOptions(options);
  }, []);

  return (
    <section
      ref={ref}
      id="reservation"
      className="py-20 sm:py-28 lg:py-32 bg-white"
      aria-labelledby="reservation-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            BOOK A TABLE
          </div>
          <h2 id="reservation-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
            Reserve Your Table
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Secure your spot at Ember & Leaf. We'll confirm your reservation shortly.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {submitStatus === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center"
                >
                  <CheckCircle className="w-10 h-10 text-emerald-600" />
                </motion.div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
                  Reservation Requested!
                </h3>
                <p className="text-stone-600 mb-6">
                  Thank you for booking with us. We've received your request and will confirm
                  via SMS or call within 15 minutes.
                </p>
                <Button
                  variant="primary"
                  onClick={() => setSubmitStatus("idle")}
                  className="w-full sm:w-auto"
                >
                  Make Another Reservation
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card variant="elevated" className="p-6 sm:p-8">
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder="John Doe"
                        required
                        autoComplete="name"
                      />
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        placeholder="+91 98765 43210"
                        required
                        autoComplete="tel"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <SelectField
                        id="date"
                        label="Date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        error={errors.date}
                        required
                        icon={
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        }
                      >
                        <option value="">Select a date</option>
                        {dateOptions}
                      </SelectField>

                      <SelectField
                        id="time"
                        label="Time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        error={errors.time}
                        required
                        icon={
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        }
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </SelectField>
                    </div>

                    <SelectField
                      id="guests"
                      label="Number of Guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      error={errors.guests}
                      required
                      icon={
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      }
                    >
                      <option value="">Select guests</option>
                      {guestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt} {opt === "1" ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </SelectField>

                    <Button
                      type="submit"
                      variant="primary"
                      size="xl"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5" aria-hidden="true" />
                          Processing...
                        </>
                      ) : (
                        "Request a Reservation"
                      )}
                    </Button>

                    <p className="text-center text-sm text-stone-500">
                      By submitting, you agree to our <a href="#" className="text-emerald-700 hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
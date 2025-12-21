"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Section from "@/components/ui/Section";
import InvestmentBackground from "@/components/ui/InvestmentBackground";
import toast from "react-hot-toast";

/**
 * ContactFormSection - Client component for form interactivity
 *
 * Note: This uses 'use client' because it needs form state management
 * and event handlers. The parent page is still a server component.
 */
export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || `${formData.type} inquiry`,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Success!
      toast.success("Message sent successfully! We'll get back to you soon.", {
        id: loadingToast,
        duration: 5000,
      });

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        type: "general",
      });
    } catch (error) {
      console.error("Form submission error:", error);

      // Show error toast
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.",
        {
          id: loadingToast,
          duration: 5000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Section
      id="contact-form"
      title="Send Us a Message"
      background="gray"
      className="relative overflow-hidden scroll-mt-20"
    >
      <InvestmentBackground />
      <div className="relative z-10 max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-hard"
        >
          {/* Inquiry Type */}
          <div className="mb-6">
            <label htmlFor="type" className="block text-sm font-semibold mb-2">
              I am interested in:
            </label>
            <div className="relative">
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full pr-10 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-colors appearance-none"
                required
              >
                <option value="" disabled>
                  -- Please select an option --
                </option>
                <option value="general">General Inquiry</option>
                <option value="investor">Becoming an Investor</option>
                <option value="funding">Applying for Funding</option>
                <option value="partnership">Partnership Opportunities</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            </div>
          </div>

          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-colors"
              placeholder="Your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-colors"
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-colors"
              placeholder="+94 XX XXX XXXX"
            />
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold mb-2"
            >
              Subject (Optional)
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-colors"
              placeholder="What is this about?"
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              minLength={10}
              maxLength={5000}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Tell us more about your inquiry... (minimum 10 characters)"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.message.length} / 5000 characters
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-full font-bold text-lg transition-all shadow-lg ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed opacity-70"
                : "bg-primary text-white hover:bg-primary-dark hover:scale-105"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}

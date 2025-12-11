'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import InvestmentBackground from '@/components/ui/InvestmentBackground';

/**
 * ContactFormSection - Client component for form interactivity
 *
 * Note: This uses 'use client' because it needs form state management
 * and event handlers. The parent page is still a server component.
 */
export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setStatus('success');

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Section id="contact-form" title="Send Us a Message" background="gray" className="relative overflow-hidden">
      <InvestmentBackground />
      <div className="relative z-10 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-hard">
          {/* Inquiry Type */}
          <div className="mb-6">
            <label htmlFor="type" className="block text-sm font-semibold mb-2">
              I am interested in:
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-colors"
              required
            >
              <option value="general">General Inquiry</option>
              <option value="investor">Becoming an Investor</option>
              <option value="funding">Applying for Funding</option>
              <option value="partnership">Partnership Opportunities</option>
            </select>
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

          {/* Subject */}
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-semibold mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-colors"
              placeholder="What is this about?"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Tell us more about your inquiry..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`w-full py-4 rounded-full font-bold text-lg transition-all ${
              status === 'submitting'
                ? 'bg-gray-400 cursor-not-allowed'
                : status === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-primary text-white hover:scale-105'
            }`}
          >
            {status === 'submitting' && 'Sending...'}
            {status === 'success' && '✓ Message Sent!'}
            {status === 'idle' && 'Send Message'}
            {status === 'error' && 'Try Again'}
          </button>

          {status === 'success' && (
            <p className="mt-4 text-center text-green-600 font-semibold">
              Thank you for reaching out! We'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

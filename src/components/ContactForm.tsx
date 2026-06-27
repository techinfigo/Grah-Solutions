import React, { useState } from 'react';
import { Send, Sparkles, ChevronDown } from 'lucide-react';
import { SERVICES } from '../constants';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-gray-600">Thank you for reaching out. Our experts will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                required
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-extrabold text-gray-900 tracking-wide uppercase text-[11px]">Service Required</label>
            <div className="relative group/select">
              {/* Premium Left Decorative Icon Accent */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary group-hover/select:text-blue-600 transition-colors duration-300">
                <Sparkles size={18} className="text-blue-600 animate-pulse" />
              </div>
              
              <select
                id="service"
                required
                className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-blue-300 hover:shadow-md focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 appearance-none cursor-pointer text-gray-900 font-medium text-sm shadow-sm"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="" className="text-gray-400">Select standard or premium service...</option>
                {SERVICES.map(s => (
                  <option key={s.id} value={s.title} className="text-gray-900 py-2">{s.title}</option>
                ))}
                <option value="Other" className="text-gray-900 py-2">Other Custom Maintenance</option>
              </select>

              {/* Styled Right Arrow Indicator */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover/select:text-gray-700 transition-colors duration-200">
                <ChevronDown size={18} className="stroke-[2.5]" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your requirements..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <button type="submit" className="w-full btn-primary py-4">
            Request Free Site Visit (No Obligation)
          </button>
        </form>
      )}
    </div>
  );
}

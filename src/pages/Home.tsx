import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Shield, Clock, IndianRupee, Users, Phone, Star, Zap, Award, Check, MapPin } from 'lucide-react';
import { SERVICES, TESTIMONIALS, PROCESS_STEPS, WORK_GALLERY, CUSTOMER_COUNT } from '../constants';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import ProcessStep from '../components/ProcessStep';
import ContactForm from '../components/ContactForm';
import PriceEstimator from '../components/PriceEstimator';
import BrandLogos from '../components/BrandLogos';
import Faq from '../components/Faq';
import SocialProofToast from '../components/SocialProofToast';

export default function Home() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [mouseMoved, setMouseMoved] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    setMouseMoved(0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
    setMouseMoved(Math.abs(x - startX));
  };

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    const firstChild = el.querySelector('.shrink-0');
    const cardWidth = firstChild ? firstChild.clientWidth : 320;
    const gap = 24;
    const scrollPosition = el.scrollLeft;
    const i = Math.round(scrollPosition / (cardWidth + gap));
    setActiveServiceIndex(Math.max(0, Math.min(SERVICES.length - 1, i)));
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div>
      {/* Flash Offer Banner */}
      <div className="bg-slate-950 text-slate-100 border-b border-slate-900 py-3.5 px-4 text-center font-extrabold text-xs md:text-sm tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="bg-amber-400 text-slate-950 text-[10px] md:text-xs px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider animate-pulse whitespace-nowrap">
            FESTIVE SPECIAL
          </span>
          <span className="text-slate-200 font-medium text-center text-xs md:text-sm">
            <span className="text-amber-400 font-black">⚡ LIMITED DEAL:</span> Get 20% OFF on Full Painting + Free Inspector Visit on waterproofing!
          </span>
          <a href="/contact.html" className="text-amber-400 hover:text-amber-300 underline font-black text-xs uppercase tracking-wider shrink-0 transition-colors whitespace-nowrap">
            Claim Free Visit &rarr;
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] lg:min-h-[75vh] py-8 lg:py-12 flex items-center bg-gradient-to-br from-white via-secondary/40 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10 py-4 md:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2.5 mb-4">
              <div className="badge-trust !py-1 !px-3.5 text-xs">
                <Shield size={13} className="fill-primary" />
                <span>100% Verified Professionals</span>
              </div>
              <div className="badge-trust bg-orange-50 text-accent border-orange-100 !py-1 !px-3.5 text-xs">
                <MapPin size={13} className="fill-accent" />
                <span>Serving Agra & Surrounding Areas</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-tight text-gray-900 flex flex-col gap-0.5 md:gap-1">
              <span className="block">Expert Home Care</span>
              <span className="text-primary block">Trusted by {CUSTOMER_COUNT}</span>
              <span className="text-accent block">Indian Families.</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-lg leading-relaxed font-medium">
              Professional Painting, Waterproofing & Pest Control with <span className="text-primary font-bold">5-Year Warranty.</span> Get your home inspected by experts today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href="/contact.html" className="btn-primary group !py-3 !px-6 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2">
                Get a Free Site Visit
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/919068057387?text=Hi%2C%20I'd%20like%20to%20get%20a%20free%20site%20visit%20for%20my%20Agra%20home." className="btn-outline !py-3 !px-6 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2">
                <Phone size={14} />
                WhatsApp Site Visit
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2.5">
                {[
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100'
                ].map((src, idx) => (
                  <img 
                    key={idx}
                    src={src} 
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" 
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-[9px] font-bold shadow-sm whitespace-nowrap">
                  {CUSTOMER_COUNT}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-yellow-550">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className="text-xs font-bold text-gray-750">4.9/5 Bharosa Rating</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                alt="Professional Indian Home Service Supervisor" 
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[4/3.8] max-h-[280px] lg:max-h-[380px]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Trust Cards */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 text-accent rounded-xl flex items-center justify-center shrink-0">
                  <Award size={20} fill="currentColor" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-gray-950">5-Year Warranty</div>
                  <div className="text-[11px] text-gray-500 font-semibold">On All Premium Services</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Shield size={20} fill="currentColor" />
                </div>
                <div>
                  <div className="font-extrabold text-sm text-gray-950">Police Verified</div>
                  <div className="text-[11px] text-gray-500 font-semibold">Background Checked Pros</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar - Indian Brands */}
      <div className="bg-slate-900/85 backdrop-blur-sm py-10 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6">We use only Premium Trusted Brands</p>
          <div className="bg-white/95 backdrop-blur-md py-3.5 px-8 md:px-12 rounded-[2rem] inline-block max-w-full shadow-xl shadow-slate-950/20 border border-white/20">
            <BrandLogos />
          </div>
        </div>
      </div>

      {/* Agra Trust & Credibility Hub */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 via-white to-secondary/15 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="badge-trust mb-4">India's Trusted Brand in Agra</div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-4 tracking-tight leading-tight">
              Agra's Highly Preferred <span className="text-primary">Home Services Experts</span>
            </h2>
            <p className="text-gray-600 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Delivering premium craftsmanship, professional hygiene, on-time delivery, and affordable transparent rates across all of Agra.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Stat 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-primary/5 border border-gray-100/80 hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 to-primary" />
              
              {/* Soft decorative background circles */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              
              {/* Beautiful Icon Container */}
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/10 border border-blue-100 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Award size={30} className="transform group-hover:rotate-6 transition-transform" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-gray-950 mb-2 tracking-tight">10 Years</h3>
              
              <span className="inline-block bg-blue-550/10 text-primary text-[10px] font-black px-3 py-1.5 rounded-full tracking-wider uppercase mb-4 border border-blue-100">
                SERVED DILIGENTLY
              </span>
              
              <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                Over a decade of excellent experience beautifying and sealing residential villas, flats, and bungalows in Agra.
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-accent/5 border border-gray-100/80 hover:border-accent/30 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 to-accent" />
              
              {/* Soft decorative background circles */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              
              {/* Beautiful Icon Container */}
              <div className="w-16 h-16 bg-orange-50 text-accent rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-orange-550/10 border border-orange-100 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Users size={30} className="transform group-hover:scale-110 transition-transform" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-gray-950 mb-2 tracking-tight">{CUSTOMER_COUNT}</h3>
              
              <span className="inline-block bg-orange-50 text-accent text-[10px] font-black px-3 py-1.5 rounded-full tracking-wider uppercase mb-4 border border-orange-100">
                HAPPY CUSTOMERS
              </span>
              
              <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                Thousands of Agra families have experienced complete stress-free services with absolute transparency from our team.
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-green-500/5 border border-gray-100/80 hover:border-green-500/30 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-green-600" />
              
              {/* Soft decorative background circles */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-green-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              
              {/* Beautiful Icon Container */}
              <div className="w-16 h-16 bg-green-50 text-success rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-green-500/10 border border-green-100 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-green-600 group-hover:text-white transition-all duration-300">
                <CheckCircle size={30} className="transform group-hover:rotate-12 transition-transform" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-gray-950 mb-2 tracking-tight font-sans">5-Year</h3>
              
              <span className="inline-block bg-green-50 text-success text-[10px] font-black px-3 py-1.5 rounded-full tracking-wider uppercase mb-4 border border-green-100">
                WARRANTY CARD
              </span>
              
              <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                Enjoy complete peace of mind with formal stamped warranties on Painting, Home Decoration & Waterproofing services.
              </p>
            </motion.div>
          </div>

          {/* Area Coverage Card */}
          <div className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-950/40 border border-slate-800">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="badge-trust mb-3 bg-orange-500/10 text-orange-400 border-orange-500/20">Quick Coverage</div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Agra Localities Served</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">
                  Our professional inspectors reach your home in Agra within 2 hours of booking a free site visit.
                </p>
              </div>
              <div className="lg:w-2/3 w-full">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    'Dayalbagh',
                    'Sadar',
                    'Kamla Nagar',
                    'Sikandra',
                    'Tajganj',
                    'Shastripuram',
                    'Sanjay Place',
                    'Agra Cantt'
                  ].map((area) => (
                    <div key={area} className="group flex items-center gap-3 bg-slate-800/40 hover:bg-slate-800 px-4 py-3.5 rounded-2xl border border-slate-800 hover:border-primary/40 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-extrabold text-xs text-slate-300 group-hover:text-white transition-colors">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Style */}
      <section id="services" className="section-padding bg-slate-50/90 border-y border-slate-100/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="badge-trust mb-4">Our Core Expertise</div>
              <h2 className="heading-md mb-4 font-black">Four Dedicated Services in <span className="text-primary">Agra Homes</span></h2>
              <p className="text-gray-600 text-lg">
                Clearly separated, highly professional solutions customized to resolve leakages, beautify surfaces, or secure your rooms from pests.
              </p>
            </div>
            <a href="/services.html" className="btn-outline py-3.5 px-7 text-xs font-black uppercase tracking-wider bg-white">View All Services</a>
          </div>
          
          <div className="relative">
            {/* Horizontal sliding track with drag gesture support */}
            <div 
              ref={sliderRef}
              id="services-slider"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className={`flex gap-6 overflow-x-auto pb-12 pt-4 px-4 -mx-4 no-scrollbar select-none ${
                isDragging 
                  ? 'cursor-grabbing scroll-auto snap-none' 
                  : 'cursor-grab scroll-smooth snap-x snap-mandatory'
              }`}
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {SERVICES.map((service, index) => (
                <div 
                  key={service.id} 
                  className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 snap-start"
                >
                  <ServiceCard service={service} index={index} />
                </div>
              ))}
            </div>

            {/* Slider Navigator & Progress Metrics */}
            <div className="flex items-center justify-between mt-6">
              {/* Paging Indicators */}
              <div className="flex gap-1.5 items-center">
                {SERVICES.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      const el = sliderRef.current;
                      if (el) {
                        const firstChild = el.querySelector('.shrink-0');
                        const cardWidth = firstChild ? firstChild.clientWidth : 320;
                        const gap = 24; 
                        el.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
                        setActiveServiceIndex(index);
                      }
                    }}
                    className="h-2 py-1.5 group/indicator flex items-center focus:outline-none cursor-pointer"
                    aria-label={`Go to service slide ${index + 1}`}
                  >
                    <span className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeServiceIndex === index 
                        ? 'w-10 bg-primary shadow-sm shadow-primary/30' 
                        : 'w-4 bg-gray-250 group-hover/indicator:bg-primary/40'
                    }`} />
                  </button>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-2.5">
                <button
                  onClick={() => {
                    const el = sliderRef.current;
                    if (el) {
                      const firstChild = el.querySelector('.shrink-0');
                      const cardWidth = firstChild ? firstChild.clientWidth : 320;
                      el.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
                    }
                  }}
                  className="w-10 h-10 rounded-full border border-gray-100 hover:border-primary/20 bg-white shadow-sm hover:shadow-md text-gray-500 hover:text-primary flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                  title="Previous Service"
                >
                  <span className="font-extrabold text-sm select-none">&larr;</span>
                </button>
                <button
                  onClick={() => {
                    const el = sliderRef.current;
                    if (el) {
                      const firstChild = el.querySelector('.shrink-0');
                      const cardWidth = firstChild ? firstChild.clientWidth : 320;
                      el.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
                    }
                  }}
                  className="w-10 h-10 rounded-full border border-gray-100 hover:border-primary/20 bg-white shadow-sm hover:shadow-md text-gray-500 hover:text-primary flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                  title="Next Service"
                >
                  <span className="font-extrabold text-sm select-none">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Estimator Section */}
      <section className="section-padding bg-slate-200/70 border-y border-slate-350/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge-trust mb-4 bg-primary/10 text-primary border-primary/10">Cost transparency</div>
            <h2 className="heading-md mb-4 font-black text-gray-950">Agra's Most Accurate <span className="text-primary">Budget Planner</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-semibold text-xs md:text-sm">
              Avoid dynamic surprises. Estimate standard rates for your specific home plan before scheduling your free diagnostic site visit.
            </p>
          </div>
          <PriceEstimator />
        </div>
      </section>

      {/* Before & After Section */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-trust mb-4 bg-blue-50 text-primary border-blue-100">Our Track Record</div>
            <h2 className="heading-md mb-4 font-black text-gray-950">Real Before / After <span className="text-primary">Transformations</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium text-sm md:text-base">
              "Seeing is believing. Check out our high-quality painting, waterproofing, and decoration works across Agra home and commercial spaces."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {WORK_GALLERY.map((item) => (
              <div key={item.id} className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white flex flex-col bg-gray-50 hover:shadow-primary/5 transition-all duration-300">
                <div className="flex h-[360px] relative">
                  {/* Before side */}
                  <div className="w-1/2 relative overflow-hidden bg-gray-200">
                    <img 
                      src={item.beforeImg} 
                      className="w-full h-full object-cover grayscale brightness-75 transition-all duration-500 group-hover:scale-105" 
                      alt={`Before ${item.altText}`} 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute top-4 left-4 bg-black/75 text-white/90 px-3.5 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase backdrop-blur-sm">BEFORE</div>
                  </div>
                  {/* After side */}
                  <div className="w-1/2 relative overflow-hidden border-l-4 border-white bg-gray-300">
                    <img 
                      src={item.afterImg} 
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
                      alt={`After ${item.altText}`} 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3.5 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase shadow-lg">AFTER</div>
                  </div>
                </div>
                
                <div className="p-6 bg-white flex-grow border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-yellow-400 text-black px-2.5 py-0.5 rounded-lg font-black text-[10px] uppercase tracking-tighter">
                      {item.badgeText}
                    </span>
                    <span className="text-xs text-gray-400 font-extrabold">{item.location}</span>
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-primary font-bold">{item.serviceUsed}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-gray-400 font-bold italic">
            * All transformations listed above use professional premium brands with formal 5-year guarantees.
          </div>
        </div>
      </section>

      {/* Why Choose Us - Pain Points Focus */}
      <section className="py-16 md:py-24 bg-slate-50 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Premium Interactive Illustration & Testimonial Card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
              
              <div className="overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white aspect-square w-full">
                <img 
                  src="/images/natural_indian_people_1782127613078.jpg" 
                  alt="Proud & Happy Indian Homeowners" 
                  className="object-cover w-full h-full scale-[1.02] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Card with Gorgeous Testimonial info */}
              <div className="absolute -bottom-6 -right-2 md:-right-4 bg-white p-4.5 md:p-5 rounded-2xl shadow-xl border border-gray-100/80 max-w-[280px] md:max-w-xs">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-800 font-extrabold text-[11px] md:text-xs leading-relaxed mb-3">
                  "Agra's absolute best. Professional team, zero dynamic cost changes, and flawless speed!"
                </p>
                <div className="flex items-center gap-2 border-t border-slate-50 pt-2.5">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=80&h=80" 
                    className="w-7.5 h-7.5 rounded-full object-cover shadow-inner border border-slate-100" 
                    alt="User" 
                    referrerPolicy="no-referrer" 
                  />
                  <div>
                    <p className="font-black text-[10px] md:text-xs text-slate-900 leading-none">Mrs. Sharma</p>
                    <p className="text-[8px] md:text-[10px] text-gray-500 mt-1 leading-none">Kamla Nagar, Agra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Trust Cards Grid */}
            <div className="lg:col-span-7 space-y-8 mt-12 lg:mt-0">
              <div>
                <div className="inline-block bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full mb-4 border border-primary/10">
                  Agra Direct Advantage
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight text-slate-950 leading-tight">
                  Why {CUSTOMER_COUNT} Homeowners <br />
                  <span className="text-primary font-black">Trust Greh Solutions</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-xl mt-4">
                   Agra's premier home care & waterproofing specialists. Built on trust, high materials standards, and local police-verified expert technicians.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {[
                  { 
                    title: 'No Hidden Costs', 
                    desc: 'Fixed upfront quotes. Absolutely no unexpected charges or mid-project price spikes.',
                    icon: <IndianRupee size={20} className="text-primary" />,
                    tag: 'Paisa Vasool'
                  },
                  { 
                    title: 'On-Time Delivery', 
                    desc: 'Fully committed timelines. Finished on or before guaranteed dates, or we compensate.',
                    icon: <Clock size={20} className="text-primary" />,
                    tag: 'Fast Service'
                  },
                  { 
                    title: 'Premium Brands Only', 
                    desc: 'We strictly use genuine fresh materials from Asian Paints, Dr. Fixit & Berger.',
                    icon: <Award size={20} className="text-primary" />,
                    tag: '100% Original'
                  },
                  { 
                    title: 'Background Checked', 
                    desc: 'Police verified local expert technicians with continuous monitoring for family safety.',
                    icon: <Shield size={20} className="text-primary" />,
                    tag: 'Safe & Secure'
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-primary/25 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div className="flex items-center gap-2 mb-2 justify-between">
                        <h4 className="text-sm md:text-[15px] font-black text-slate-900">{item.title}</h4>
                        <span className="bg-amber-400 text-[8px] font-black uppercase text-slate-950 px-2 py-0.5 rounded-full select-none">{item.tag}</span>
                      </div>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section - Visual Timeline */}
      <section className="section-padding bg-primary text-white overflow-hidden relative border-y border-blue-900/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-white/10 text-accent select-none">
              <Zap size={11} className="text-amber-400 fill-amber-400" />
              <span>Agra Direct Standards</span>
            </div>
            <h2 className="heading-md mb-4 text-white">How It Works</h2>
            <p className="text-blue-100/90 text-sm md:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
              Experience zero uncertainty. Our standard transparent execution process ensures premium outcomes for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-12">
            
             {PROCESS_STEPS.map((step, index) => {
              const pathActive = hoveredStep !== null && index <= hoveredStep;
              const pathFlowing = hoveredStep !== null && index === hoveredStep;
              
              return (
                <div 
                  key={step.number} 
                  className="relative group flex flex-col pt-6 z-10 cursor-pointer"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Step Number Circle aligned perfectly with the horizontal timeline path */}
                  <div className="mx-auto -mt-6 mb-6 relative z-20 pointer-events-none">
                    {/* Outer breathing double ring glow */}
                    <div className={`absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      hoveredStep !== null && index <= hoveredStep ? 'opacity-100 scale-110' : ''
                    }`} />
                    <div className={`absolute -inset-1.5 rounded-full border border-dashed transition-all duration-500 scale-95 group-hover:scale-105 ${
                      hoveredStep !== null && index <= hoveredStep 
                        ? 'border-accent/60 scale-105 animate-[spin_10s_linear_infinite]' 
                        : 'border-white/5 group-hover:border-accent/40'
                    }`} />
                    
                    {/* Main Node */}
                    <div className={`relative w-12 h-12 rounded-full border-2 text-white font-extrabold text-sm flex items-center justify-center shadow-lg transition-all duration-300 font-mono ${
                      hoveredStep !== null && index <= hoveredStep
                        ? 'bg-gradient-to-br from-accent to-amber-400 text-amber-950 border-white scale-110 shadow-[0_0_15px_rgba(255,102,0,0.5)]'
                        : 'bg-gradient-to-br from-blue-900 to-slate-900 border-blue-400/30 group-hover:from-accent group-hover:to-amber-400 group-hover:text-amber-950 group-hover:border-white'
                    }`}>
                      0{step.number}
                    </div>
                  </div>

                  {/* Card Content with polished backdrop glass effect */}
                  <div className={`backdrop-blur-md border px-6 py-6 pb-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full text-center relative z-10 ${
                    hoveredStep === index
                      ? 'bg-white/[0.08] border-accent/40 shadow-xl shadow-accent/5'
                      : hoveredStep !== null && index < hoveredStep
                      ? 'bg-white/[0.04] border-white/20'
                      : 'bg-white/[0.03] border-white/10 hover:border-accent/30 hover:bg-white/[0.06]'
                  }`}>
                    <div>
                      <h3 className={`text-lg md:text-xl font-black mb-3 tracking-tight transition-colors duration-300 ${
                        hoveredStep === index ? 'text-accent' : 'text-white group-hover:text-accent'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-blue-100/70 text-xs md:text-[13px] leading-relaxed font-semibold">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Inline elegant connection indicators for the path */}
                  {index < 3 && (
                    <div className="hidden lg:flex absolute top-6 left-1/2 w-[calc(100%+32px)] h-4 items-center justify-center z-0 pointer-events-none">
                      {/* Quiet inactive background track line */}
                      <div className="absolute left-0 right-0 h-[2px] bg-white/15" />
                      
                      {/* Active sliding/glowing gradient connector path line */}
                      <div className={`absolute left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-amber-400 transition-all duration-500 origin-left ${
                        pathActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                      }`} />

                      {/* Moving slide-dash overlay */}
                      <svg className={`w-full h-4 transition-opacity duration-300 stroke-current ${
                        pathActive ? 'text-accent' : 'text-transparent'
                      }`} fill="none" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path 
                          d="M0,5 L100,5" 
                          strokeWidth="2.5" 
                          className={pathFlowing ? 'animate-slide-dash' : ''}
                          strokeDasharray="4 4" 
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="/contact.html" 
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-slate-50 font-black text-xs md:text-[13px] uppercase tracking-wider py-4 px-10 rounded-xl transition-all shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 cursor-pointer border border-white"
            >
              <span>Book Your Free Inspection Now</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials - Social Proof */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div>
              <div className="badge-trust mb-3">Customer Love</div>
              <h2 className="heading-md mb-4 font-black">Trusted by <span className="text-accent">Families in Agra</span></h2>
              <p className="text-gray-600 text-lg">Real stories and reviews from local Agra homeowners who hired Greh Solutions.</p>
            </div>
            <div className="bg-secondary/50 p-6 rounded-3xl border border-secondary flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-primary">4.9</div>
                <div className="text-xs font-bold text-gray-500 uppercase">Google Rating</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-black text-primary">98%</div>
                <div className="text-xs font-bold text-gray-500 uppercase">Repeat Clients</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Faq />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Ready to Give Your Home the <span className="text-accent">Best Care?</span></h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  Don't wait for damage to get worse. Book a free inspection or site visit in Agra today with zero obligation.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="/contact.html" className="btn-primary">Get a Free Site Visit</a>
                  <a href="tel:+919068057387" className="flex items-center gap-4 text-white font-bold hover:text-accent transition-colors">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <span>Phone: +91 90680 57387</span>
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Toast */}
      <SocialProofToast />
    </div>
  );
}

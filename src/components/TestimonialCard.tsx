import { useState } from 'react';
import { Star, Check } from 'lucide-react';
import { Testimonial } from '../types';
import { motion } from 'motion/react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  key?: string | number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const images = testimonial.projectImages || (testimonial.projectImage ? [testimonial.projectImage] : []);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-between h-full relative group hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center h-full w-full">
        {/* Left/Top Side: Interactive Multi-Image Gallery */}
        {images.length > 0 && (
          <div className="md:col-span-7 flex flex-col gap-3">
            {/* Active/Main Showcase Viewport */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-slate-100 border border-slate-100 shadow-sm">
              <img 
                src={images[activeImgIndex]} 
                alt={`${testimonial.name}'s completed showcase project`} 
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex items-end justify-between">
                <span className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full select-none shadow-md">
                  Verified Project
                </span>
                <span className="text-white/90 text-xs font-extrabold font-mono bg-black/45 px-2 py-0.5 rounded-md">
                  {activeImgIndex + 1} / {images.length}
                </span>
              </div>
            </div>

            {/* Thumbnail row for high visibility and multiple images */}
            {images.length > 1 && (
              <div className="flex gap-2 items-center mt-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onMouseEnter={() => setActiveImgIndex(idx)}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-slate-50 shrink-0 ${
                      activeImgIndex === idx 
                        ? 'border-accent scale-105 shadow-md shadow-accent/25' 
                        : 'border-slate-100 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
                
                {/* Visual guide indicator */}
                <div className="hidden lg:flex flex-col text-[8.5px] font-black text-slate-400 uppercase tracking-widest leading-none ml-3 select-none">
                  <span>Hover to</span>
                  <span className="text-accent mt-0.5">Explore</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Right Side: Testimonial & Review Content */}
        <div className={`flex flex-col justify-between relative z-10 h-full ${images.length > 0 ? 'md:col-span-5' : 'md:col-span-12'}`}>
          <div>
            {/* Stars & Trust badge */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'} 
                  />
                ))}
              </div>
              <div className="inline-flex items-center gap-1 text-[8px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded">
                <Check size={10} className="text-emerald-500" strokeWidth={3} />
                <span>100% Satisfaction</span>
              </div>
            </div>

            {/* Testimonial Content */}
            <p className="text-slate-700 font-extrabold text-xs md:text-sm leading-relaxed italic mb-6">
              "{testimonial.content}"
            </p>
          </div>

          {/* Client profile info */}
          <div className="flex items-center gap-3 border-t border-slate-50 pt-4 mt-auto">
            <div className="relative shrink-0">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-sm"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 text-white p-0.5 rounded-full border border-white">
                <Check size={8} strokeWidth={4} />
              </div>
            </div>
            <div className="min-w-0">
              <h4 className="font-extrabold text-xs md:text-sm text-slate-900 truncate">
                {testimonial.name}
              </h4>
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-wider truncate mt-0.5">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

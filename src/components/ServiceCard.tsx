import { PaintBucket, Droplets, Bug, Sparkles, ArrowRight, Star } from 'lucide-react';
import { Service } from '../types';
import { motion } from 'motion/react';

const icons = {
  PaintBucket: <PaintBucket size={18} />,
  Droplets: <Droplets size={18} />,
  Bug: <Bug size={18} />,
  Sparkles: <Sparkles size={18} />,
};

interface ServiceCardProps {
  service: Service;
  index: number;
  key?: string | number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const whatsappUrl = `https://wa.me/919068057387?text=Hi%2C%20I'd%20like%20a%20free%20inspection%20for%20${encodeURIComponent(service.title.toLowerCase())}%20in%20Agra.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-3xl overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.07)] hover:shadow-[0_25px_60px_rgba(0,102,204,0.14)] border border-gray-100 hover:border-primary/20 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1.5"
    >
      <div className="h-40 overflow-hidden relative bg-slate-100">
        <img 
          src={service.image} 
          alt={`${service.title} professional service Agra home`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Floating icon badge */}
        <div className="absolute top-3 left-3 w-9 h-9 bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-white/40 text-primary flex items-center justify-center">
          {icons[service.icon as keyof typeof icons] || <Sparkles size={18} />}
        </div>

        {/* Quality indicator dot */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2 py-1 rounded-lg text-[9px] font-black shadow-xs border border-white/40 text-emerald-700 uppercase tracking-widest flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Top Rated
        </div>
      </div>
      
      <div className="p-4.5 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-1.5 mb-1.5">
          <h3 className="text-base font-black text-gray-900 group-hover:text-primary transition-colors leading-snug">{service.title}</h3>
          
          <div className="flex items-center gap-1 text-amber-500 bg-amber-50 border border-amber-100 px-1.5 py-0.5 rounded-md shrink-0">
            <Star size={10} fill="currentColor" />
            <span className="text-[10px] font-black text-amber-700">4.9</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-[11.5px] font-semibold mb-4 leading-relaxed line-clamp-2">
          {service.shortDescription}
        </p>
        
        <div className="mt-auto pt-3 border-t border-gray-100/80 flex items-center justify-between gap-2">
          <a 
            href={`/services.html#${service.slug}`} 
            className="flex items-center gap-1.5 text-gray-400 hover:text-primary font-black text-[10px] uppercase tracking-wider transition-all shrink-0"
          >
            <span>Learn More</span>
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-[10px] uppercase tracking-wider py-2 px-3.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 flex items-center gap-1.5"
          >
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="shrink-0"
            >
              <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.546 4.102 1.588 5.877L0 24l6.337-1.662c1.718.937 3.669 1.433 5.66 1.433 6.628 0 12.006-5.379 12.006-12.004C24.003 5.378 18.625 0 12.004 0zm0 1.76c5.654 0 10.244 4.59 10.244 10.244s-4.59 10.243-10.244 10.243c-1.897 0-3.72-.525-5.32-1.52l-.382-.23-3.766.988.995-3.663-.25-.403a10.187 10.187 0 0 1-1.493-5.417c0-5.654 4.59-10.244 10.243-10.244zm-5.405 5.353c-.15 0-.317.02-.468.083-.151.063-.338.167-.47.3-.306.307-.611.85-.611 1.637s.562 1.53.642 1.638c.08.107 1.092 1.782 2.682 2.457.379.16.674.257.904.331.38.12.727.103 1.002.062.307-.046.945-.386 1.077-.76.133-.374.133-.695.093-.761-.04-.066-.147-.107-.307-.187-.16-.081-.945-.467-1.092-.52-.147-.054-.254-.081-.36.08-.108.16-.415.52-.508.628-.094.107-.188.12-.347.04-.16-.08-.677-.25-1.288-.795-.477-.425-.798-.95-.892-1.112-.094-.16-.01-.247.07-.327.072-.072.16-.187.24-.28.08-.093.107-.16.16-.267.054-.107.027-.2-.013-.28-.04-.081-.36-.87-.495-1.192-.132-.317-.263-.274-.36-.28h-.307z" />
            </svg>
            <span>Book</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

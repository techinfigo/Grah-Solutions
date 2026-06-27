import { Phone, Zap } from 'lucide-react';

function WhatsAppIcon({ size = 24, className = "" }: { size?: number, className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      className={className}
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.704 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function MobileActionBar() {
  const whatsappUrl = "https://wa.me/919068057387?text=Hi%2C%20I'm%20interested%20in%20your%20home%20services.";

  return (
    <>
      {/* 1. Mobile Version: Sticky Bottom Action Bar with Dual CTAs */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 p-3.5 shadow-[0_-10px_35px_rgba(0,0,0,0.12)] flex items-center gap-3 z-50">
        {/* Call Now - Secondary CTA */}
        <a 
          href="tel:+919068057387" 
          className="flex-1 bg-gray-900 hover:bg-black text-white h-12 rounded-xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider active:scale-95 transition-all shadow-md"
        >
          <Phone size={16} fill="currentColor" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Us - Primary CTA */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] bg-success hover:bg-green-600 text-white h-12 rounded-xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider active:scale-95 transition-all shadow-md animate-vibrate-subtle"
        >
          <WhatsAppIcon size={18} />
          <span>WhatsApp Us</span>
        </a>
      </div>

      {/* 2. Global Floating WhatsApp Button - Visible on both desktop & mobile */}
      {/* On mobile, we position it above the sticky bottom bar (bottom-22), on desktop at bottom-8 */}
      <div className="fixed bottom-22 md:bottom-8 right-4 md:right-8 z-40">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center w-14 h-14 bg-success hover:bg-green-600 text-white rounded-full shadow-[0_12px_40px_rgba(37,211,102,0.4)] hover:shadow-[0_16px_45px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-350"
          title="Chat on WhatsApp"
        >
          {/* Pulsing Outer Rings */}
          <span className="absolute inset-x-0 inset-y-0 rounded-full bg-success/40 animate-ping" />
          
          <WhatsAppIcon size={28} className="relative z-10" />

          {/* Chat Tooltip / Banner on Desktop Hover */}
          <span className="absolute right-16 bg-white text-gray-900 border border-gray-100 px-3.5 py-2 rounded-2xl shadow-xl text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none hidden md:block select-none">
            💬 Chat with Agra Experts Now!
          </span>
        </a>
      </div>

      {/* 3. Desktop Version: Extra Floating Widgets */}
      <div className="hidden md:flex fixed bottom-24 right-8 z-40 flex-col gap-3 items-end pointer-events-none">
        {/* Social Proof / Festive Offer Badge */}
        <div className="bg-white/95 backdrop-blur-md border border-gray-100 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2.5 pointer-events-auto transition-all hover:scale-105">
          <div className="w-5.5 h-5.5 bg-accent/20 text-accent rounded-full flex items-center justify-center animate-pulse">
            <Zap size={11} fill="currentColor" />
          </div>
          <p className="text-[10px] font-black text-gray-800 uppercase tracking-wider">
            <span className="text-accent">OFFER:</span> Free inspection today!
          </p>
        </div>

        {/* Floating Call Support Button for Desktop */}
        <a 
          href="tel:+919068057387" 
          className="pointer-events-auto group flex items-center bg-white hover:bg-primary text-gray-800 hover:text-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_35px_rgba(0,102,204,0.25)] border border-gray-100 transition-all duration-300 h-11 pl-3 pr-3 overflow-hidden max-w-[44px] hover:max-w-[220px]"
          title="Call Support"
        >
          <div className="w-5 h-5 text-primary group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
            <Phone size={16} fill="currentColor" />
          </div>
          <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 font-extrabold text-[11px] tracking-wide ml-2.5">
            +91 90680 57387
          </span>
        </a>
      </div>
    </>
  );
}

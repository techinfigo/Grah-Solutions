import { SERVICES, CUSTOMER_COUNT } from '../constants';
import { motion } from 'motion/react';
import { CheckCircle, Shield, Zap, Clock, IndianRupee, ArrowRight, PaintBucket, Droplets, Bug, Sparkles, MessageSquare, Star, Phone } from 'lucide-react';
import BrandLogos from '../components/BrandLogos';

export default function Services() {
  const iconMap: Record<string, any> = {
    PaintBucket: <PaintBucket size={32} />,
    Droplets: <Droplets size={32} />,
    Bug: <Bug size={32} />,
    Sparkles: <Sparkles size={32} />,
  };

  return (
    <div className="pb-16 lg:pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/30 to-white pt-8 pb-12 lg:pb-14">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="badge-trust mb-3.5">Expert Home Care Solutions</div>
            <h1 className="text-2xl md:text-4xl lg:text-4.5xl font-black mb-3 tracking-tight leading-tight text-gray-900">
              Professional Services <br className="hidden sm:block" />
              <span className="text-primary">Trusted by {CUSTOMER_COUNT}</span> Families
            </h1>
            <p className="text-gray-500 text-sm md:text-base font-semibold leading-relaxed mb-6 max-w-xl mx-auto">
              From premium painting to 100% leak-proof waterproofing, we provide comprehensive home maintenance solutions with a <span className="text-primary font-bold">5-Year Warranty.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Shield size={16} className="text-primary" />
                <span className="text-xs font-bold">Police Verified Pros</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Clock size={16} className="text-primary" />
                <span className="text-xs font-bold">On-Time Completion</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <IndianRupee size={16} className="text-primary" />
                <span className="text-xs font-bold">No Hidden Costs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar - Indian Brands */}
      <div className="bg-slate-900/85 backdrop-blur-sm py-10 border-y border-slate-800/80 mb-16 lg:mb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6">We use only Premium Trusted Brands</p>
          <div className="bg-white/95 backdrop-blur-md py-3.5 px-8 md:px-12 rounded-[2rem] inline-block max-w-full shadow-xl shadow-slate-950/20 border border-white/20">
            <BrandLogos />
          </div>
        </div>
      </div>

      {/* Services Detailed Sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 lg:space-y-16">
        {SERVICES.map((service, index) => (
          <motion.section 
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            id={service.slug}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-10 items-center`}
          >
            {/* Service Visuals */}
            <div className="w-full lg:w-[48%] relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
              
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] border-white group relative">
                <img 
                  src={service.image} 
                  alt={`${service.title} premium waterproofing, painting, or home service in Agra`} 
                  className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 bg-white text-primary rounded-lg flex items-center justify-center shadow-lg">
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="text-white font-black text-xl">{service.title}</h3>
                  </div>
                  <p className="text-white/80 text-xs font-medium">Professional premium quality workmanship.</p>
                </div>
              </div>

              {/* Trust Badge Floating */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                    <Shield size={20} fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-extrabold text-sm">5-Year Warranty</div>
                    <div className="text-[10px] text-gray-500">On All Premium Work</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Content */}
            <div className="w-full lg:w-[52%]">
              <div className="paisa-vasool mb-2.5 inline-block text-[11px] px-3 py-1">Best Value in Agra</div>
              <h2 className="text-2xl md:text-3.5xl font-black mb-3 leading-tight tracking-tight flex flex-col">
                <span className="block">Premium {service.title}</span>
                <span className="text-accent block">{service.startingPrice}</span>
              </h2>
              <p className="text-gray-600 text-sm font-semibold leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4.5">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-1.5 bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-xs group">
                    <CheckCircle size={13} className="text-emerald-600 shrink-0 fill-emerald-100/50 group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-extrabold text-[11px] text-emerald-950/90 leading-none">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-black text-[10px] uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Our Standard Step-By-Step Execution Process
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {service.process.map((step, i) => (
                    <div key={step} className="relative bg-white hover:bg-slate-50 p-3 rounded-2xl border border-gray-200/80 hover:border-primary/20 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-2 group">
                      <div className="flex items-center gap-1.5">
                        <span className="w-5 h-5 bg-gradient-to-br from-primary to-blue-700 text-white text-[9px] font-black rounded-lg flex items-center justify-center shadow-sm shrink-0">
                          0{i + 1}
                        </span>
                        <span className="text-[9px] uppercase tracking-widest font-black text-gray-400 group-hover:text-primary transition-colors">Step {i + 1}</span>
                      </div>
                      <span className="text-[11px] font-extrabold text-gray-700 leading-snug group-hover:text-gray-900 transition-colors">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={`https://wa.me/919068057387?text=Hi%2C%20I'd%20like%20a%20free%20inspection%20for%20${encodeURIComponent(service.title.toLowerCase())}%20in%20Agra.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group !py-3.5 !px-6 bg-[#25D366] hover:bg-[#128C7E] border-none flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-extrabold shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(18,140,126,0.5)] transition-all duration-300"
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="shrink-0"
                  >
                    <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.546 4.102 1.588 5.877L0 24l6.337-1.662c1.718.937 3.669 1.433 5.66 1.433 6.628 0 12.006-5.379 12.006-12.004C24.003 5.378 18.625 0 12.004 0zm0 1.76c5.654 0 10.244 4.59 10.244 10.244s-4.59 10.243-10.244 10.243c-1.897 0-3.72-.525-5.32-1.52l-.382-.23-3.766.988.995-3.663-.25-.403a10.187 10.187 0 0 1-1.493-5.417c0-5.654 4.59-10.244 10.243-10.244zm-5.405 5.353c-.15 0-.317.02-.468.083-.151.063-.338.167-.47.3-.306.307-.611.85-.611 1.637s.562 1.53.642 1.638c.08.107 1.092 1.782 2.682 2.457.379.16.674.257.904.331.38.12.727.103 1.002.062.307-.046.945-.386 1.077-.76.133-.374.133-.695.093-.761-.04-.066-.147-.107-.307-.187-.16-.081-.945-.467-1.092-.52-.147-.054-.254-.081-.36.08-.108.16-.415.52-.508.628-.094.107-.188.12-.347.04-.16-.08-.677-.25-1.288-.795-.477-.425-.798-.95-.892-1.112-.094-.16-.01-.247.07-.327.072-.072.16-.187.24-.28.08-.093.107-.16.16-.267.054-.107.027-.2-.013-.28-.04-.081-.36-.87-.495-1.192-.132-.317-.263-.274-.36-.28h-.307z" />
                  </svg>
                  Book Free Visit on WhatsApp
                </a>
                <a href="tel:+919068057387" className="btn-outline !py-3.5 !px-6 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-extrabold text-gray-800 border-gray-200">
                  <Phone size={16} />
                  Call Expert Now
                </a>
              </div>
            </div>
          </motion.section>
        ))}

        {/* Custom Solutions Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="paisa-vasool mb-6 inline-block bg-white/10 text-white border-white/20">Custom Home Care</div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Need a Custom <br /><span className="text-accent">Maintenance Plan?</span></h2>
              <p className="text-gray-400 mb-10 text-xl font-medium leading-relaxed">
                Whether it's a large villa, a commercial complex, or a full apartment renovation, we provide tailored solutions that fit your specific needs and budget.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  'Full Home Deep Cleaning',
                  'Mechanized Wall Sanding',
                  '7-Layer Terrace Coating',
                  'Herbal Pest Management'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white/5 p-5 rounded-2xl border border-white/10">
                    <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-[10px] font-black shrink-0">✓</div>
                    <span className="font-bold text-sm text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              <a href="/contact.html" className="btn-primary !bg-white !text-gray-900 hover:!bg-gray-100 !py-6 !px-12 text-lg">Get A Custom Quote</a>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <span className="font-black text-lg">4.9/5 Rating</span>
                </div>
                <p className="text-xl font-medium italic mb-8 text-white/80">
                  "The team provided a custom waterproofing plan for our entire housing society. Professional, transparent, and highly effective results!"
                </p>
                <div className="flex items-center gap-4">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150" className="w-12 h-12 rounded-full border-2 border-white/20 object-cover" alt="User" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-black">Mr. Khanna</p>
                    <p className="text-sm text-white/40">Society Manager, Agra</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/20 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center">
                  <div className="text-3xl font-black mb-1">{CUSTOMER_COUNT}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">Happy Homes</div>
                </div>
                <div className="bg-accent/20 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center">
                  <div className="text-3xl font-black mb-1">5yr</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

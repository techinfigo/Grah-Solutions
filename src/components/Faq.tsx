import { useState } from 'react';
import { Plus, Minus, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQS = [
  {
    question: "Will you move the furniture before painting?",
    answer: "Yes, our team handles all the heavy lifting! We move your furniture, cover it with protective sheets, and restore it once done. You don't have to lift a finger."
  },
  {
    question: "Is the site inspection really free?",
    answer: "Absolutely! Our expert will visit your home, assess the walls, check for dampness, and provide a detailed quote with zero obligation or hidden charges."
  },
  {
    question: "How long does a standard 2BHK painting take?",
    answer: "A standard 2BHK usually takes 4-6 days. We use modern mechanized tools to speed up the process while guaranteeing a premium finish."
  },
  {
    question: "Do you provide a warranty for waterproofing?",
    answer: "Yes, we provide up to 5-year written warranty on waterproofing. We use premium solutions from Dr. Fixit and Asian Paints for leak-proof results."
  },
  {
    question: "Are your workers background-verified?",
    answer: "Safety is our priority. Every professional on our team is background-checked and police-verified. They follow strict uniform and safety protocols."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Context, Title, and Direct Support */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-wider mb-4">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4 select-none leading-tight">
            Frequently Asked <br className="hidden md:inline" />
            <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          
          <p className="text-slate-600 font-extrabold text-xs md:text-sm leading-relaxed mb-8">
            Clear your doubts before you book your free inspection in Agra. We ensure complete transparency at every step of your project.
          </p>

          {/* Direct Support Card to make FAQS highly relevant */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
            
            <h4 className="text-sm font-black mb-1 tracking-tight">Still have questions?</h4>
            <p className="text-[11px] text-slate-400 font-semibold mb-4 leading-relaxed">
              Talk directly with India's best painting and maintenance experts for custom recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="tel:+919368551601" 
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-extrabold text-xs py-2.5 px-4 rounded-xl transition-all shadow-md shadow-primary/20"
              >
                <Phone size={14} />
                <span>Call +91 93685 51601</span>
              </a>
              <a 
                href="https://wa.me/919368551601" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2.5 px-4 rounded-xl transition-all"
              >
                <MessageSquare size={14} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek, space-saving accordion questions list */}
        <div className="lg:col-span-7 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-primary/20 bg-primary/[0.02] shadow-md shadow-slate-100' 
                    : 'border-slate-200/70 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-4 px-5 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-primary text-white scale-105' : 'bg-slate-100 text-slate-400'
                    }`}>
                      <HelpCircle size={16} />
                    </div>
                    <span className="text-xs md:text-sm font-black text-slate-800 leading-snug tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? (
                      <Minus size={16} className="text-primary" />
                    ) : (
                      <Plus size={16} className="text-slate-400" />
                    )}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <div className="pl-16 pr-5 pb-4 text-[11px] md:text-xs text-slate-600 font-semibold leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

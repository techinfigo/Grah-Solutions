import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="badge-trust mb-4">Get In Touch</div>
          <h1 className="heading-md mb-4">Book Your <span className="text-primary">Free Site Inspection</span></h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            Have a question or need an expert quote? Reach out to us. Our experts will visit your home within 24 hours for a detailed assessment.
          </p>
        </motion.div>

        {/* Quick Contact Trio Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Call experts card */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 flex items-start gap-5 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 text-primary rounded-2xl flex items-center justify-center shrink-0">
              <Phone size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-extrabold text-lg text-gray-950 mb-1">Call Experts</h3>
              <div className="space-y-1">
                <a href="tel:+919068057387" className="block text-gray-700 hover:text-primary font-bold text-base transition-colors truncate">
                  +91 90680 57387
                </a>
                <a href="tel:+918909653435" className="block text-gray-700 hover:text-primary font-bold text-base transition-colors truncate">
                  +91 89096 53435
                </a>
              </div>
              <p className="text-[10px] text-primary font-black mt-2.5 uppercase tracking-wider">Tap to Call Now</p>
            </div>
          </div>

          {/* WhatsApp us card */}
          <a 
            href="https://wa.me/919068057387?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20your%20services." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 flex items-start gap-5 hover:border-green-500/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group block"
          >
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
              <MessageCircle size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-extrabold text-lg text-gray-950 mb-1">WhatsApp Us</h3>
              <p className="text-gray-700 font-bold text-base mb-1 truncate">+91 90680 57387</p>
              <p className="text-xs text-green-600 font-medium">Chat Available 24/7</p>
              <p className="text-[10px] text-green-600 font-black mt-2.5 uppercase tracking-wider">Tap to Chat Now</p>
            </div>
          </a>

          {/* Email Support */}
          <a 
            href="mailto:care@grahsolutions.com?subject=Inquiry%20from%20Website"
            className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 flex items-start gap-5 hover:border-accent/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group block"
          >
            <div className="w-12 h-12 bg-orange-50 text-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <Mail size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-extrabold text-lg text-gray-950 mb-1">Email Support</h3>
              <p className="text-gray-700 font-bold text-base mb-1 truncate">care@grahsolutions.com</p>
              <p className="text-xs text-gray-500">Response within 4 hours</p>
              <p className="text-[10px] text-accent font-black mt-2.5 uppercase tracking-wider">Write Email Now</p>
            </div>
          </a>
        </div>

        {/* Secondary Split block: Trust Information & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-12">
          {/* Trust Panel (5 columns) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden h-full flex flex-col justify-between border border-white/5">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-white font-black text-[10px] tracking-widest uppercase mb-4 shadow-md shadow-accent/20">
                    <Sparkles size={10} /> The Grah Promise
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    Hassle-Free <br />Home Assessments
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium mt-3 leading-relaxed">
                    Our verified professionals complete 100+ check-points during our diagnostic visit to give you an accurate upfront estimate.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { title: 'Zero Site Visit Fees', desc: 'No hidden call-out charges or diagnostic fees.' },
                    { title: 'Free Color Consultation', desc: 'Visualize color swatches in digital high-fidelity.' },
                    { title: '5-Year Warranty Quote', desc: 'Get backed-by-contract structural durability.' },
                    { title: 'Safe & Verified Experts', desc: 'Background-checked local service experts.' }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-5 h-5 bg-accent text-white rounded-full flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5 shadow-sm shadow-accent/30">✓</div>
                      <div>
                        <h4 className="text-sm font-extrabold text-white">{benefit.title}</h4>
                        <p className="text-xs text-slate-400 font-medium">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/10 mt-8">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3.5">PROUDLY SERVING AGRA LOCALITIES</h4>
                <div className="flex flex-wrap gap-2">
                  {['Dayalbagh', 'Kamla Nagar', 'Sikandra', 'Sadar', 'Tajganj', 'Sanjay Place'].map(loc => (
                    <span key={loc} className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-[10px] font-black text-white uppercase tracking-wider hover:bg-white/15 transition-colors cursor-default border border-white/5">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact form panel (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ContactForm />
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-24 rounded-[3rem] overflow-hidden shadow-2xl h-[450px] relative border-8 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14195.426279934254!2d78.00693527218678!3d27.202302302381255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974775d7105eed3%3A0x7d0658fa397223ee!2sDayal+Bagh%2C+Agra%2C+Uttar+Pradesh+282005!5e0!3m2!1sen!2sin!4v1719000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Grah Solutions Office, Dayalbagh, Agra"
            className="absolute inset-0 w-full h-full"
          ></iframe>
          {/* Overlay Head Office Info Card */}
          <div className="absolute top-6 left-6 max-w-sm bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 hidden md:block z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <h3 className="font-black text-xl">Our Head Office</h3>
            </div>
            <p className="text-gray-600 text-sm font-semibold leading-relaxed mb-4">
              Dayalbagh, Agra, Uttar Pradesh, India - 282005
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1.5 bg-gray-50 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-wider border border-gray-100">Dayalbagh</div>
              <div className="px-3 py-1.5 bg-gray-50 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-wider border border-gray-100">Kamla Nagar</div>
              <div className="px-3 py-1.5 bg-gray-50 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-wider border border-gray-100">Sikandra</div>
              <div className="px-3 py-1.5 bg-gray-50 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-wider border border-gray-150">Sadar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

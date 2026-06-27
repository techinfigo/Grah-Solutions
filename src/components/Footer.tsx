import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-32 md:pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <a href="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold">Grah Solutions</span>
          </a>
          <p className="text-gray-400 mb-6">
            Your trusted partner for professional home painting, waterproofing, and pest control services. We bring quality and reliability to your doorstep.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/services.html" className="hover:text-white transition-colors">All Services</a></li>
            <li><a href="/about.html" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/contact.html" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Services</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="/services.html" className="hover:text-white transition-colors">Home Painting</a></li>
            <li><a href="/services.html" className="hover:text-white transition-colors">Waterproofing</a></li>
            <li><a href="/services.html" className="hover:text-white transition-colors">Pest Control</a></li>
            <li><a href="/services.html" className="hover:text-white transition-colors">Home Decoration</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Contact Info</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex gap-3">
              <MapPin className="text-accent shrink-0" size={20} />
              <span>Agra, Uttar Pradesh, India - 282005</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-accent shrink-0" size={20} />
              <span>+91 90680 57387</span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-accent shrink-0" size={20} />
              <span>info@grahsolutions.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left text-gray-500 text-sm">
        <p className="order-2 sm:order-1">&copy; {new Date().getFullYear()} Grah Solutions. All rights reserved.</p>
        
        {/* Eye-catching Premium Developer Badge */}
        <div className="order-1 sm:order-2 flex items-center gap-2.5 bg-gray-950/80 backdrop-blur-sm px-4.5 py-2 rounded-2xl border border-gray-800/80 hover:border-accent/40 shadow-xl hover:shadow-[0_0_20px_rgba(255,102,0,0.15)] transition-all duration-300 group">
          <div className="w-2 h-2 bg-accent rounded-full animate-ping group-hover:scale-125 transition-transform" />
          <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">Developed by</span>
          <a 
            href="https://www.techinfigo.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 font-extrabold text-sm"
          >
            <span className="bg-gradient-to-r from-accent via-orange-400 to-amber-500 bg-clip-text text-transparent tracking-widest font-black transition-all group-hover:brightness-110">
              TECHINFIGO
            </span>
            <ExternalLink className="text-accent group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services.html' },
    { name: 'About Us', path: '/about.html' },
    { name: 'Contact Us', path: '/contact.html' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img 
            src="/images/grah_solutions_logo_1782715917242.jpg" 
            alt="Greh Solutions Logo"
            referrerPolicy="no-referrer"
            className="w-12 h-12 rounded-2xl object-cover shadow-lg shadow-primary/20 border border-gray-100"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-text-main leading-none">
              Greh Solutions
            </span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mt-1">
              Home Care Experts
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`font-bold text-sm uppercase tracking-wider transition-all hover:text-primary relative group ${
                currentPath === link.path || (currentPath === '/' && link.path === '/') ? 'text-primary' : 'text-text-main/70'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${currentPath === link.path || (currentPath === '/' && link.path === '/') ? 'w-full' : ''}`} />
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+919068057387" 
              className="flex items-center gap-2 text-primary font-black text-sm hover:scale-105 transition-transform"
            >
              <Phone size={18} fill="currentColor" />
              <span>+91 90680 57387</span>
            </a>
            <a 
              href="/contact.html" 
              className="bg-accent text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-orange-600 transition-all shadow-xl shadow-accent/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>FREE SITE VISIT</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center bg-gray-100 rounded-xl text-text-main"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-black ${
                    currentPath === link.path || (currentPath === '/' && link.path === '/') ? 'text-primary' : 'text-text-main'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-gray-100 w-full" />
              <a 
                href="tel:+919068057387" 
                className="flex items-center justify-center gap-3 bg-primary text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20"
              >
                <Phone size={24} />
                <span>Call +91 90680 57387</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

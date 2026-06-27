import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, MapPin } from 'lucide-react';

const RECENT_BOOKINGS = [
  { name: 'Rajesh Sharma', location: 'Sanjay Place, Agra', service: 'Full Home Painting' },
  { name: 'Priya Patel', location: 'Dayal Bagh, Agra', service: 'Terrace Waterproofing' },
  { name: 'Amit Verma', location: 'Kamla Nagar, Agra', service: 'Kitchen Deep Cleaning' },
  { name: 'Sanjay Gupta', location: 'Taj Ganj, Agra', service: 'Pest Control' },
  { name: 'Deepika Rao', location: 'Sikandra, Agra', service: 'Interior Painting' },
];

export default function SocialProofToast() {
  const [currentBooking, setCurrentBooking] = useState<typeof RECENT_BOOKINGS[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showCount, setShowCount] = useState(0);

  useEffect(() => {
    if (showCount >= 2) return;

    const showToast = () => {
      if (showCount >= 2) return;
      
      const randomBooking = RECENT_BOOKINGS[Math.floor(Math.random() * RECENT_BOOKINGS.length)];
      setCurrentBooking(randomBooking);
      setIsVisible(true);
      setShowCount(prev => prev + 1);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000); // Show for 4 seconds
    };

    // Initial delay
    const initialDelay = setTimeout(showToast, 5000);

    // Second toast after 20 seconds
    const secondDelay = setTimeout(() => {
      if (showCount < 2) showToast();
    }, 25000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(secondDelay);
    };
  }, [showCount]);

  return (
    <AnimatePresence>
      {isVisible && currentBooking && (
        <motion.div
          initial={{ opacity: 0, x: -20, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -20, y: -20 }}
          className="fixed top-24 left-4 z-40 max-w-[200px] w-full md:top-auto md:bottom-24"
        >
          <div className="bg-white p-2.5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
            <div className="w-7 h-7 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
              <CheckCircle size={14} />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-black text-gray-800 leading-tight truncate">
                {currentBooking.name} <span className="text-gray-400 font-bold">booked</span>
              </p>
              <p className="text-[10px] font-black text-primary leading-tight mt-0.5 truncate">
                {currentBooking.service}
              </p>
              <div className="flex items-center gap-1 mt-0.5 text-[8px] font-bold text-gray-400">
                <MapPin size={8} />
                <span className="truncate">{currentBooking.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

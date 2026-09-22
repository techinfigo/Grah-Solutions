import { motion } from 'motion/react';

export default function BrandLogos() {
  const brands = [
    { id: 'asian-paints', name: 'Asian Paints' },
    { id: 'dr-fixit', name: 'Dr. Fixit' },
    { id: 'berger', name: 'Berger' },
    { id: 'nerolac', name: 'Nerolac' },
    { id: 'pidilite', name: 'Pidilite' }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 lg:gap-16">
      {brands.map((brand) => (
        <motion.div
          key={brand.id}
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="flex items-center justify-center min-h-[44px] transition-all duration-300"
        >
          <img
            src={`/brands/${brand.id}.png`}
            alt={brand.name}
            referrerPolicy="no-referrer"
            className="h-10 md:h-[52px] w-auto object-contain select-none"
          />
        </motion.div>
      ))}
    </div>
  );
}

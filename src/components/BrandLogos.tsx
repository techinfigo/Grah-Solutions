import { motion } from 'motion/react';

export default function BrandLogos() {
  const brands = [
    {
      id: 'asianpaints',
      element: (
        <div className="flex items-center gap-1 font-sans select-none tracking-tight">
          <span className="text-gray-800 font-bold text-lg md:text-xl">asian</span>
          <span className="bg-[#ED1C24] text-white px-2.5 py-0.5 text-sm md:text-base font-black rounded-r-lg rounded-tl-lg tracking-wide transform -rotate-2 shadow-sm">paints</span>
        </div>
      )
    },
    {
      id: 'drfixit',
      element: (
        <div className="flex items-center gap-1 font-sans select-none border border-[#F3A81D]/30 rounded-xl bg-[#FFFDF2] p-1 pr-3">
          <div className="bg-[#F3A81D] text-black w-6 h-6 md:w-7 md:h-7 flex items-center justify-center font-black rounded-lg text-xs md:text-sm shadow-sm">Dr</div>
          <span className="text-[#0054A6] font-black text-base md:text-lg tracking-wider pl-1 font-mono uppercase">Fixit</span>
        </div>
      )
    },
    {
      id: 'berger',
      element: (
        <div className="flex items-center gap-1 font-sans select-none">
          <div className="w-5 h-5 flex items-center justify-center text-[#009640]">
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 4l3 5 7-6 7 6 3-5-2 14H4L2 4z" />
            </svg>
          </div>
          <span className="text-base md:text-lg font-extrabold tracking-widest text-[#009640] uppercase">BERGER</span>
        </div>
      )
    },
    {
      id: 'nerolac',
      element: (
        <div className="flex items-center gap-1.5 md:gap-2 font-sans select-none">
          <div className="flex gap-0.5 md:gap-1">
            <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
            <span className="w-2 h-2 rounded-full bg-[#FBBC05]" />
            <span className="w-2 h-2 rounded-full bg-[#34A853]" />
            <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
          </div>
          <span className="text-base md:text-lg font-black text-[#0054A6] tracking-tight">NEROLAC</span>
        </div>
      )
    },
    {
      id: 'pidilite',
      element: (
        <div className="flex items-center select-none font-sans font-black">
          <span className="text-[#0D3895] text-lg md:text-xl tracking-tighter uppercase">Pidi</span>
          <span className="text-[#E95B12] text-lg md:text-xl tracking-tighter uppercase font-extrabold">lite</span>
        </div>
      )
    }
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
          {brand.element}
        </motion.div>
      ))}
    </div>
  );
}

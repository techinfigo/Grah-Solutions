import { useState } from 'react';
import { Home, PhoneCall, Shield, Droplet, Paintbrush, Ban, Star, Sparkles, CheckCircle, HelpCircle, ArrowRight, Layers, Hammer } from 'lucide-react';

const SERVICE_TYPES = [
  { 
    id: 'painting', 
    name: 'Painting & Texture', 
    icon: <Paintbrush size={18} />, 
    desc: 'Wall putty, premium emulsions, gloss, and modern designer texture coats.',
    ratePerSqFtMin: 14,
    ratePerSqFtMax: 22,
  },
  { 
    id: 'waterproofing', 
    name: 'Waterproofing Care', 
    icon: <Droplet size={18} />, 
    desc: 'Roof, walls, & dampness treatment using heavy tech moisture scanners.',
    ratePerSqFtMin: 22,
    ratePerSqFtMax: 35,
  },
  { 
    id: 'pest_control', 
    name: 'Anti-Termite Guard', 
    icon: <Ban size={18} />, 
    desc: 'Complete residential termite shield barrier with long-term guarantees.',
    ratePerSqFtMin: 2.2,
    ratePerSqFtMax: 3.8,
  },
];

const QUALITY_TIERS = [
  { id: 'regular', name: 'Standard Value', desc: 'Premium quality top brand products', multiplier: 1.0 },
  { id: 'premium', name: 'Premium Choice', desc: 'Enhanced washability, luxury gloss finish', multiplier: 1.35 },
  { id: 'luxury', name: 'Ultra Luxury Royale', desc: 'Exceptional weather protection & lifetime gloss', multiplier: 1.7 },
];

const WALL_CONDITIONS = [
  { id: 'smooth', name: 'Flawless / Good', desc: 'Slight cleaning required', multiplier: 1.0, extraPrepFee: 0 },
  { id: 'cracks', name: 'Minor Cracks / Flaking', desc: 'Cracks filling & minor repairs needed', multiplier: 1.15, extraPrepFee: 1500 },
  { id: 'peeling', name: 'Severe Dampness / Peeling', desc: 'Heavy cement treatment & damp-seal layers', multiplier: 1.3, extraPrepFee: 3200 },
];

const PRESETS = [
  { label: '1 BHK', value: 750 },
  { label: '2 BHK', value: 1100 },
  { label: '3 BHK', value: 1600 },
  { label: 'Villa', value: 2500 },
];

export default function PriceEstimator() {
  const [selectedService, setSelectedService] = useState(SERVICE_TYPES[0]);
  const [areaSize, setAreaSize] = useState(1200);
  const [selectedTier, setSelectedTier] = useState(QUALITY_TIERS[0]);
  const [selectedCondition, setSelectedCondition] = useState(WALL_CONDITIONS[0]);

  // Compute live estimation splits
  const baseRateMin = selectedService.ratePerSqFtMin * areaSize * selectedCondition.multiplier * selectedTier.multiplier;
  const baseRateMax = selectedService.ratePerSqFtMax * areaSize * selectedCondition.multiplier * selectedTier.multiplier;

  // Invoice calculations
  const materialCostMin = Math.round(baseRateMin * 0.45);
  const materialCostMax = Math.round(baseRateMax * 0.45);
  
  const laborCostMin = Math.round(baseRateMin * 0.35);
  const laborCostMax = Math.round(baseRateMax * 0.35);

  const safetySetupMin = Math.round(baseRateMin * 0.20);
  const safetySetupMax = Math.round(baseRateMax * 0.20);

  const prepFee = selectedCondition.extraPrepFee;

  const totalMin = Math.round(materialCostMin + laborCostMin + safetySetupMin + prepFee);
  const totalMax = Math.round(materialCostMax + laborCostMax + safetySetupMax + prepFee);

  // Format currency helper
  const formatValue = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const customMessage = `Hi Grah Solutions, I calculated a customized budgetary estimate of ${formatValue(totalMin)} - ${formatValue(totalMax)} online. Area: ${areaSize} sq.ft, Service: ${selectedService.name}, Condition: ${selectedCondition.name}, Grade: ${selectedTier.name}. Please help schedule a free expert visit with precise measuring tools.`;
  const customWhatsappUrl = `https://wa.me/919068057387?text=${encodeURIComponent(customMessage)}`;

  return (
    <div id="inspector-booking-wizard" className="bg-white rounded-2xl shadow-[0_12px_45px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
      
      {/* Header Banner - Tighter padding */}
      <div className="bg-gradient-to-br from-slate-900 via-primary to-blue-900 p-5 md:p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-accent/10 rounded-full blur-2xl" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-1.5 border border-white/10">
            <Sparkles size={10} className="text-amber-400" />
            <span>Interactive Live Cost Calculator</span>
          </div>
          
          <h3 className="text-lg md:text-xl font-black mb-1 tracking-tight">
            Design Your <span className="text-accent">Project Estimate</span> Live
          </h3>
          
          <p className="text-blue-100/90 text-[10.5px] max-w-xl mx-auto font-semibold leading-relaxed">
            Adjust sizes, material select grades, quality and surface health to watch calculations update live.
          </p>
        </div>
      </div>

      <div className="p-4 md:p-5.5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Controls section - Tighter space & smaller steps */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Step 1: Core Service Icon Selector */}
            <div>
              <span className="flex items-center gap-1.5 text-primary text-[10px] font-black uppercase tracking-widest mb-2">
                <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-[8px] font-black">1</span>
                Service Requirement
              </span>
              <div className="grid grid-cols-3 gap-2">
                {SERVICE_TYPES.map((service) => {
                  const isSelected = selectedService.id === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`p-2 rounded-xl border transition-all text-left flex flex-col items-center text-center gap-1 cursor-pointer ${
                        isSelected 
                          ? 'border-primary bg-primary/[0.03] shadow-[0_3px_10px_rgba(0,102,204,0.05)] scale-[1.01]' 
                          : 'border-slate-200/60 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-primary text-white' : 'bg-slate-100/95 text-slate-500'}`}>
                        {service.icon}
                      </div>
                      <p className={`font-black text-[10px] leading-tight truncate max-w-full ${isSelected ? 'text-primary' : 'text-slate-800'}`}>{service.name}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Custom Area Size Slider */}
            <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-100/70">
              <div className="flex items-center justify-between mb-1.5">
                <span className="flex items-center gap-1.5 text-primary text-[10px] font-black uppercase tracking-widest">
                  <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-[8px] font-black">2</span>
                  Approx Built-up Area
                </span>
                <span className="bg-primary/10 px-2 py-0.5 rounded text-[10.5px] font-black text-primary">
                  {areaSize} sq.ft
                </span>
              </div>

              {/* Slider Input with Dynamic Indicator */}
              <div className="space-y-2">
                <input 
                  type="range" 
                  min="300" 
                  max="4000" 
                  step="50"
                  value={areaSize}
                  onChange={(e) => setAreaSize(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-200 rounded appearance-none cursor-ew-resize accent-primary" 
                />
                
                {/* Visual Label Presets */}
                <div className="flex justify-between items-center bg-white p-1 rounded border border-slate-100">
                  <span className="text-[8.5px] font-black text-slate-400 uppercase tracking-wider pl-1">Presets:</span>
                  <div className="flex gap-1">
                    {PRESETS.map((preset) => (
                      <button
                        key={preset.label}
                        onClick={() => setAreaSize(preset.value)}
                        className={`text-[8.5px] font-black px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                          Math.abs(areaSize - preset.value) < 100
                            ? 'bg-primary text-white'
                            : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Current Wall Condition */}
            <div>
              <span className="flex items-center gap-1.5 text-primary text-[10px] font-black uppercase tracking-widest mb-1.5">
                <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-[8px] font-black">3</span>
                Condition of Surfaces
              </span>
              <div className="grid grid-cols-3 gap-2">
                {WALL_CONDITIONS.map((cond) => {
                  const isSelected = selectedCondition.id === cond.id;
                  return (
                    <button
                      key={cond.id}
                      onClick={() => setSelectedCondition(cond)}
                      className={`p-1.5 px-2 rounded-xl border transition-all text-left flex flex-col justify-between cursor-pointer h-[52px] ${
                        isSelected 
                          ? 'border-primary bg-primary/[0.02] shadow-xs' 
                          : 'border-slate-200/60 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <p className={`font-black text-[9.5px] leading-tight flex items-center gap-1 truncate ${isSelected ? 'text-primary' : 'text-slate-850'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full inline-block ${isSelected ? 'bg-primary' : 'bg-slate-300'}`} />
                          {cond.name.split(' / ')[0]}
                        </p>
                        <p className="text-[8px] text-slate-405 font-bold leading-none mt-0.5 line-clamp-2">{cond.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Material Grade / Brand Tier */}
            <div>
              <span className="flex items-center gap-1.5 text-primary text-[10px] font-black uppercase tracking-widest mb-1.5">
                <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-[8px] font-black">4</span>
                Select Quality Category
              </span>
              <div className="grid grid-cols-3 gap-2">
                {QUALITY_TIERS.map((tier) => {
                  const isSelected = selectedTier.id === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTier(tier)}
                      className={`p-1.5 px-2 rounded-xl border transition-all text-left flex flex-col justify-between cursor-pointer h-[52px] ${
                        isSelected 
                          ? 'border-accent bg-accent/[0.03] shadow-xs' 
                          : 'border-slate-200/60 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <p className={`font-black text-[9.5px] leading-tight flex items-center gap-1 truncate ${isSelected ? 'text-accent' : 'text-slate-800'}`}>
                          {isSelected ? <Star size={9} className="text-accent fill-accent shrink-0" /> : <span className="w-1.5 h-1.5 rounded-full border border-slate-300 inline-block" />}
                          {tier.name.split(' (')[0]}
                        </p>
                        <p className="text-[8px] text-slate-405 mt-0.5 leading-none line-clamp-2 font-semibold">{tier.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Dynamic Invoice Estimation Receipt Box - Right side */}
          <div className="lg:col-span-5 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-slate-200/60">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                  <Layers size={10} className="text-primary" />
                  Cost Blueprint
                </span>
                <span className="text-[8px] bg-emerald-50 text-emerald-700 font-extrabold uppercase px-1.5 py-0.5 rounded border border-emerald-100 animate-pulse">
                  Standard Rate
                </span>
              </div>

              {/* Dynamic Invoice Itemized rows */}
              <div className="space-y-1 mb-3">
                {/* Item 1: Material Cost */}
                <div className="flex justify-between items-center bg-white p-1.5 rounded border border-slate-100">
                  <div>
                    <p className="text-[9px] font-black text-slate-800 leading-none">Branded Paint & Materials (45%)</p>
                    <p className="text-[7.5px] text-slate-400 font-bold mt-0.5">Asian Paints / Dr. Fixit</p>
                  </div>
                  <span className="text-[9px] font-black text-slate-700 font-mono">
                    {formatValue(materialCostMin)} - {formatValue(materialCostMax)}
                  </span>
                </div>

                {/* Item 2: Skilled Labor */}
                <div className="flex justify-between items-center bg-white p-1.5 rounded border border-slate-100">
                  <div>
                    <p className="text-[9px] font-black text-slate-800 leading-none">Skilled Safety Labor (35%)</p>
                    <p className="text-[7.5px] text-slate-400 font-bold mt-0.5">Scaffolding & expert masking</p>
                  </div>
                  <span className="text-[9px] font-black text-slate-700 font-mono">
                    {formatValue(laborCostMin)} - {formatValue(laborCostMax)}
                  </span>
                </div>

                {/* Item 3: Safety & Masking Sheeting */}
                <div className="flex justify-between items-center bg-white p-1.5 rounded border border-slate-100">
                  <div>
                    <p className="text-[9px] font-black text-slate-800 leading-none">Safety & Dust protection (20%)</p>
                    <p className="text-[7.5px] text-slate-400 font-bold mt-0.5">Elite safety sheet cover</p>
                  </div>
                  <span className="text-[9px] font-black text-slate-700 font-mono">
                    {formatValue(safetySetupMin)} - {formatValue(safetySetupMax)}
                  </span>
                </div>

                {/* Item 4: Extra wall preparation fee */}
                {prepFee > 0 && (
                  <div className="flex justify-between items-center bg-orange-50/50 p-1.5 rounded border border-orange-100">
                    <div>
                      <p className="text-[9px] font-black text-orange-850 leading-none">Surface defect prep fee</p>
                      <p className="text-[7.5px] text-orange-500 font-bold mt-0.5">Damp proof crack treat</p>
                    </div>
                    <span className="text-[9px] font-black text-orange-700 font-mono">
                      + {formatValue(prepFee)}
                    </span>
                  </div>
                )}
              </div>

              {/* Total final display block */}
              <div className="bg-slate-900 text-white rounded-lg p-3 shadow-inner mb-3 text-center">
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Total Project Estimate</p>
                <div className="text-lg md:text-xl font-black text-accent mt-0.5 mb-0.5 tracking-tight font-mono">
                  {formatValue(totalMin)} - {formatValue(totalMax)}
                </div>
                <div className="text-[7.5px] text-slate-400 font-semibold flex items-center justify-center gap-1 leading-none">
                  <Shield size={8} className="text-accent" />
                  <span>Includes {areaSize} sq.ft, {selectedTier.name} grade</span>
                </div>
              </div>

              {/* Real Value List */}
              <div className="space-y-0.5 mb-3">
                <div className="flex gap-1 items-center">
                  <CheckCircle size={9} className="text-emerald-500 shrink-0" />
                  <span className="text-[8.5px] font-semibold text-slate-600">Zero service dust guaranteed with site cleanup</span>
                </div>
                <div className="flex gap-1 items-center">
                  <CheckCircle size={9} className="text-emerald-500 shrink-0" />
                  <span className="text-[8.5px] font-semibold text-slate-600">Post-service expert moisture scanner checkup</span>
                </div>
              </div>
            </div>

            {/* Direct Instant Action CTAs */}
            <div className="space-y-1 pt-2.5 border-t border-slate-200">
              <a 
                href={customWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-2 px-2.5 rounded-lg font-extrabold text-[9.5px] uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.546 4.102 1.588 5.877L0 24l6.337-1.662c1.718.937 3.669 1.433 5.66 1.433 6.628 0 12.006-5.379 12.006-12.004C24.003 5.378 18.625 0 12.004 0zm0 1.76c5.654 0 10.244 4.59 10.244 10.244s-4.59 10.243-10.244 10.243c-1.897 0-3.72-.525-5.32-1.52l-.382-.23-3.766.988.995-3.663-.25-.403a10.187 10.187 0 0 1-1.493-5.417c0-5.654 4.59-10.244 10.243-10.244zm-5.405 5.353c-.15 0-.317.02-.468.083-.151.063-.338.167-.47.3-.306.307-.611.85-.611 1.637s.562 1.53.642 1.638c.08.107 1.092 1.782 2.682 2.457.379.16.674.257.904.331.38.12.727.103 1.002.062.307-.046.945-.386 1.077-.76.133-.374.133-.695.093-.761-.04-.066-.147-.107-.307-.187-.16-.081-.945-.467-1.092-.52-.147-.054-.254-.081-.36.08-.108.16-.415.52-.508.628-.094.107-.188.12-.347.04-.16-.08-.677-.25-1.288-.795-.477-.425-.798-.95-.892-1.112-.094-.16-.01-.247.07-.327.072-.072.16-.187.24-.28.08-.093.107-.16.16-.267.054-.107.027-.2-.013-.28-.04-.081-.36-.87-.495-1.192-.132-.317-.263-.274-.36-.28h-.307z" />
                </svg>
                Lock Price & Book Visit
              </a>
              <a 
                href="tel:+919068057387"
                className="w-full bg-white border border-slate-200 hover:border-slate-300 text-slate-800 py-1.5 px-2 rounded-lg font-extrabold text-[9.5px] uppercase tracking-wider text-center flex items-center justify-center gap-1 transition-all duration-200 cursor-pointer"
              >
                <PhoneCall size={10} />
                Call +91 90680 57387
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

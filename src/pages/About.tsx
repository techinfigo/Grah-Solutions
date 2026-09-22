import { motion } from 'motion/react';
import { Shield, Award, Heart, Users } from 'lucide-react';
import { CUSTOMER_COUNT } from '../constants';

export default function About() {
  return (
    <div className="pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="badge-trust mb-6">Our Story</div>
            <h1 className="heading-md mb-6">Building <span className="text-primary">Trust</span>, One Home at a Time.</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              Founded with a mission to organize the unorganized home services sector in India, <span className="text-primary font-black">Greh Solutions</span> has grown into a trusted name for {CUSTOMER_COUNT} homeowners.
            </p>
            <p className="text-lg text-gray-600 mb-10 font-medium leading-relaxed">
              We understood the pain of dealing with unreliable contractors, hidden costs, and poor quality work. That's why we built a platform where quality is guaranteed, pricing is transparent, and every professional is background-verified.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="trust-card p-5 sm:p-8 min-w-0 flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-accent mb-2 truncate">{CUSTOMER_COUNT}</div>
                <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px] sm:text-xs leading-snug">Happy Families</div>
              </div>
              <div className="trust-card p-5 sm:p-8 min-w-0 flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2 truncate">15k+</div>
                <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px] sm:text-xs leading-snug">Projects Done</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white -rotate-2">
              {/* // REPLACE WITH REAL TEAM OR JOB-SITE PHOTO */}
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop" 
                alt="Greh Solutions Professional Team on Job-site"
                className="w-full h-auto aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 max-w-xs rotate-3">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                  <Shield size={24} />
                </div>
                <div className="font-black text-xl leading-tight">ISO 9001:2015 Certified</div>
              </div>
              <p className="text-gray-500 text-sm font-bold">Standardized processes for guaranteed quality.</p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-secondary/20 rounded-[4rem] p-12 md:p-24 mb-24 border border-secondary">
          <div className="text-center mb-20">
            <div className="paisa-vasool mb-4 inline-block">Our DNA</div>
            <h2 className="heading-md mb-4">The Values That <span className="text-primary">Define Us</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
              In India, a home is more than just a building; it's an emotion. We treat your home with the same respect and care as our own.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Shield size={32} />, title: 'Bharosa (Trust)', desc: 'No hidden costs, no surprises. Just honest, transparent service.' },
              { icon: <Award size={32} />, title: 'Quality First', desc: 'We use only premium materials from trusted brands like Asian Paints.' },
              { icon: <Heart size={32} />, title: 'Customer Khushi', desc: 'Your happiness is our only metric for success. We go the extra mile.' },
              { icon: <Users size={32} />, title: 'Verified Pros', desc: 'Every technician is background-checked and police-verified for your safety.' }
            ].map((value, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-white text-accent rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:-translate-y-2">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{value.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />
            <h3 className="text-3xl font-black mb-6 text-accent">Our Mission</h3>
            <p className="text-gray-600 text-xl leading-relaxed font-medium">
              To provide reliable, high-quality, and affordable home maintenance services that enhance the longevity and beauty of Indian homes while ensuring a completely stress-free experience for homeowners.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
            <h3 className="text-3xl font-black mb-6 text-primary">Our Vision</h3>
            <p className="text-gray-600 text-xl leading-relaxed font-medium">
              To become India's most trusted and preferred home service brand, known for our innovation, expert craftsmanship, and unwavering commitment to making every home a better place to live.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


import React, { useState, useEffect, useRef } from 'react';
import { Leaf, ArrowRight, CheckCircle, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES, TESTIMONIALS, PARTNERS } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Dynamic Hero Section with Video */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27dc340205562a129ef997a82823c90710609b5&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/40 to-slate-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-emerald-300 text-sm font-bold mb-8 animate-in slide-in-from-bottom-4 duration-1000">
              <Leaf size={16} className="text-emerald-400" />
              <span className="uppercase tracking-widest text-[10px]">Nigerian Agricultural Excellence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Cultivating a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Green Legacy</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50/90 mb-10 leading-relaxed max-w-2xl font-light">
              Transforming Nigeria's agricultural landscape through integrated farming and technology-driven value chains.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onNavigate('products')}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center space-x-3 transition-all group shadow-2xl shadow-emerald-900/40"
              >
                <span>Marketplace</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
              >
                Our Vision
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
              <h2 className="text-5xl md:text-6xl font-bold text-emerald-950 mb-10 leading-tight">Integrated <br/>Farming Reimagined</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                We engineer agricultural value chains from the soil up. Our operations prioritize sustainability, quality, and long-term community impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {['Industrial Supply', 'Value Addition', 'Farm Services', 'Tech Integration'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                    <span className="font-bold text-slate-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => onNavigate('services')}
                className="inline-flex items-center space-x-2 text-emerald-700 font-black uppercase tracking-widest text-xs border-b-2 border-emerald-600 pb-1 hover:text-emerald-900 hover:border-emerald-900 transition-all"
              >
                <span>View All Services</span>
                <ArrowRight size={14} />
              </button>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7">
                <img src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800" className="rounded-[2.5rem] h-[450px] w-full object-cover shadow-2xl border-4 border-white" alt="Farming Hub" />
              </div>
              <div className="col-span-5 flex flex-col gap-4">
                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=600" className="rounded-[2rem] h-52 w-full object-cover shadow-xl border-4 border-white" alt="Cassava processing" />
                <div className="bg-emerald-600 rounded-[2rem] flex-1 p-8 text-white flex flex-col justify-end">
                   <p className="text-3xl font-black mb-1">500+</p>
                   <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Local Farmers Supported</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section - Multi-card */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-emerald-950 mb-6">Voices of Growth</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              Real stories from the people and industries we work with every day.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden py-10">
              <div 
                ref={containerRef}
                className="flex transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIdx * (100 / visibleCount)}%)`,
                }}
              >
                {TESTIMONIALS.map((t) => (
                  <div 
                    key={t.id} 
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                      <div className="flex items-center space-x-1 mb-8">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className={`${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} />
                        ))}
                      </div>
                      <div className="relative flex-1 mb-8">
                        <Quote className="absolute -top-6 -left-6 w-12 h-12 text-emerald-100/50" />
                        <p className="text-lg text-slate-700 leading-relaxed italic relative z-10 font-serif">
                          "{t.content}"
                        </p>
                      </div>
                      <div className="mt-8 pt-8 border-t border-slate-100 flex items-center space-x-4">
                        <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover ring-4 ring-white shadow-md" />
                        <div>
                          <h4 className="font-bold text-emerald-950">{t.name}</h4>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-6">
              <button 
                onClick={prevSlide}
                className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:scale-110 transition-all active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex space-x-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentIdx(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentIdx === i ? 'w-8 bg-emerald-600' : 'w-2 bg-slate-200'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:scale-110 transition-all active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Positioned below Testimonials */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden group">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Trusted Strategic Industrial Partners</p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="flex py-6 animate-infinite-scroll group-hover:pause whitespace-nowrap">
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <div key={i} className="mx-16 flex items-center space-x-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                 <div className="w-12 h-12 bg-emerald-900 rounded-2xl flex items-center justify-center text-white font-black italic shadow-lg shadow-emerald-900/10">G</div>
                 <span className="text-emerald-950 font-black text-xl tracking-tighter uppercase">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 bg-emerald-950 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-800 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-800 rounded-full blur-[100px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-white text-5xl md:text-7xl font-bold mb-8 tracking-tight">Feed the Nation,<br/><span className="text-emerald-400">Grow the Future.</span></h2>
          <p className="text-emerald-100/70 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            We're building the infrastructure for a food-secure Nigeria. Be part of the sustainable agricultural revolution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
             <button onClick={() => onNavigate('contact')} className="bg-emerald-500 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20 active:scale-95">
               Start Partnership
             </button>
             <button onClick={() => onNavigate('products')} className="bg-white/10 text-white border border-white/20 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all active:scale-95">
               View Catalog
             </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Home;

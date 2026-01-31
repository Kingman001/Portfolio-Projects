
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 mb-6">Our Operations</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From the field to the factory, we provide specialized services that drive the agricultural economy forward.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, i) => (
            <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full h-[400px] bg-slate-100 rounded-[3rem] overflow-hidden shadow-xl">
                 <img 
                   src={`https://images.unsplash.com/photo-${[
                     '1500382017468-9049fed747ef',
                     '1551733938-207ed77d65b1',
                     '1523348837708-15d4a09cfac2',
                     '1592982537447-7440770cbfc9'
                   ][i]}?auto=format&fit=crop&q=80&w=1200`} 
                   className="w-full h-full object-cover" 
                   alt={service.title} 
                 />
              </div>
              <div className="flex-1">
                <div className="bg-emerald-50 text-emerald-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-bold text-emerald-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {service.description} Expanded operational capabilities include state-of-the-art machinery, localized expertise, and robust supply chain integration to ensure maximum efficiency and quality output.
                </p>
                <button className="flex items-center space-x-3 text-emerald-700 font-black uppercase tracking-widest text-sm hover:text-emerald-900 group">
                  <span>Learn Project Details</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

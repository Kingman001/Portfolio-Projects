
import React, { useState } from 'react';
import { ShieldCheck, Target, Eye, Heart, ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../constants';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

/**
 * A reusable Accordion Item component with smooth CSS grid animations.
 */
const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${
        isOpen 
          ? 'bg-white border-emerald-200 shadow-[0_20px_50px_-12px_rgba(5,150,105,0.12)]' 
          : 'bg-slate-50 border-transparent hover:border-slate-200 hover:bg-white'
      }`}
    >
      <button 
        onClick={onClick}
        className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-bold transition-colors duration-300 pr-4 ${isOpen ? 'text-emerald-900' : 'text-slate-700 group-hover:text-emerald-800'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'bg-emerald-600 text-white' : 'bg-white text-slate-400 border border-slate-100 group-hover:border-emerald-200'
        }`}>
          <ChevronDown size={20} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      
      {/* 
        The grid-rows-[0fr] to [1fr] trick allows for animating from 0 to auto height 
        without needing a fixed max-height.
      */}
      <div 
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-8 pt-2 text-slate-600 leading-relaxed text-lg">
            <div className="h-px w-full bg-slate-100 mb-6" />
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full text-emerald-700 text-xs font-black uppercase tracking-widest mb-6">
            <Heart size={14} className="fill-emerald-700" />
            <span>Founded in 2014</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 mb-6">Our Story</h1>
          <div className="w-24 h-2 bg-emerald-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Glean Agro was born from a vision to feed Nigeria sustainably. We are more than just a farm; we are a movement dedicated to agricultural sovereignty and rural development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
              alt="Farm History" 
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 hidden md:block hover:-translate-y-2 transition-transform duration-300">
              <ShieldCheck className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="font-bold text-slate-900 text-xl">10+ Years</h3>
              <p className="text-slate-500 text-sm">Of Agricultural Excellence</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-emerald-900 mb-8 leading-tight">Pioneering Progress in Ogun State and Beyond</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Based in the heart of Nigeria's agricultural belt, we have expanded our reach from simple crop cultivation to a complex ecosystem involving out-grower programs and industrial processing.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our commitment remains unchanged: providing the highest quality raw materials for industries and healthy, affordable food for families.
            </p>
            <div className="mt-10 p-6 bg-slate-50 rounded-3xl border border-slate-100 italic text-slate-500 flex items-start space-x-4">
              <div className="w-1 h-full bg-emerald-500 rounded-full flex-shrink-0" />
              <p>"We believe that the future of Africa lies in the soil. By empowering local farmers, we grow more than just crops; we grow a nation."</p>
            </div>
          </div>
        </div>

        {/* Mission / Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              title: 'Our Mission', 
              text: 'To bridge the gap in the food supply chain by leveraging technology and sustainable farming practices.', 
              icon: <Target className="w-8 h-8" /> 
            },
            { 
              title: 'Our Vision', 
              text: 'To be Nigeria’s leading integrated agricultural firm, synonymous with quality and food security.', 
              icon: <Eye className="w-8 h-8" /> 
            },
            { 
              title: 'Our Values', 
              text: 'Integrity, innovation, and a deep commitment to the communities we serve.', 
              icon: <Heart className="w-8 h-8" /> 
            },
          ].map((item, i) => (
            <div key={i} className="bg-emerald-50 p-10 rounded-[2.5rem] border border-emerald-100 hover:bg-emerald-600 hover:text-white transition-all duration-500 group">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-emerald-600 shadow-sm group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="opacity-80 leading-relaxed font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section - Refactored Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-lg">Find answers to common questions about our operations and products.</p>
          </div>
          
          <div className="space-y-6">
            {FAQ_DATA.map((faq, idx) => (
              <AccordionItem 
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

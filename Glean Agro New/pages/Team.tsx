
import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Mail, Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredTeam = TEAM_MEMBERS.filter(member => 
    filter === 'All' || member.category === filter
  );

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 mb-6">Our Leadership</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Glean Agro is steered by a blend of experienced industry veterans and visionary advisors.
          </p>
          
          <div className="mt-12 flex justify-center space-x-4">
            {['All', 'Management', 'Advisory'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-200' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {filteredTeam.map((member) => (
            <div key={member.id} className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-colors">
                    <Linkedin size={20} />
                  </button>
                  <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-colors">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
              <div className="p-8 text-center">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-2 block">{member.category}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-sm font-bold text-slate-500 mb-4">{member.role}</p>
                <p className="text-xs text-slate-400 leading-relaxed italic">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

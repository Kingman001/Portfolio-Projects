
import React, { useState } from 'react';
import { Leaf, ArrowRight, Instagram, Twitter, Facebook, CheckCircle2, Loader2 } from 'lucide-react';
import { apiService } from '../services/apiService';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await apiService.subscribeNewsletter(email);
      if (response.success) {
        setIsSubscribed(true);
        setEmail('');
      }
    } catch (err) {
      setError('Subscription failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:col-span-1 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div 
              className="flex items-center space-x-2 text-white mb-8 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-emerald-600 p-2 rounded-xl">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black tracking-tight">Glean Agro</span>
            </div>
            <p className="leading-relaxed text-sm mb-8 pr-4">
              Pioneering sustainable agricultural excellence in Nigeria through modern farming and innovative value chain management.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-lg">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-3">
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><button onClick={() => onNavigate('about')} className="hover:text-emerald-400 transition-colors">Our Story</button></li>
                <li><button onClick={() => onNavigate('team')} className="hover:text-emerald-400 transition-colors">Our Team</button></li>
                <li><button className="hover:text-emerald-400 transition-colors">Career Hub</button></li>
                <li><button className="hover:text-emerald-400 transition-colors">CSR Projects</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Business</h4>
              <ul className="space-y-4 text-sm">
                <li><button onClick={() => onNavigate('products')} className="hover:text-emerald-400 transition-colors">Industrial Supply</button></li>
                <li><button onClick={() => onNavigate('products')} className="hover:text-emerald-400 transition-colors">Retail Products</button></li>
                <li><button onClick={() => onNavigate('services')} className="hover:text-emerald-400 transition-colors">Value Chain</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-emerald-400 transition-colors">Investment</button></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Subscribe</h4>
              <p className="text-xs mb-6">Get the latest market updates and harvest news.</p>
              
              {isSubscribed ? (
                <div className="bg-emerald-900/30 border border-emerald-500/30 p-4 rounded-xl flex items-center space-x-3 text-emerald-400 animate-in zoom-in duration-300">
                  <CheckCircle2 size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">You're on the list!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address" 
                        className={`w-full bg-slate-800 border-none rounded-xl px-4 py-3.5 text-xs text-white placeholder:text-slate-500 focus:ring-2 transition-all outline-none ${error ? 'ring-2 ring-red-500' : 'focus:ring-emerald-500'}`} 
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-emerald-600 text-white p-3.5 rounded-xl hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20 active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
                    </button>
                  </div>
                  {error && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest ml-1">{error}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-widest">
          <p>&copy; 2024 Glean Agro Limited. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Terms of Trade</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

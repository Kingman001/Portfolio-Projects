
import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { 
      name: 'About', 
      id: 'about',
      subLinks: [
        { name: 'Our Story', id: 'about' },
        { name: 'Management Team', id: 'team' }
      ]
    },
    { name: 'Services', id: 'services' },
    { name: 'Products', id: 'products' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-emerald-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-black tracking-tight ${isScrolled || currentPage !== 'home' ? 'text-emerald-900' : 'text-white'}`}>
              Glean Agro
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.id} className="relative group/nav">
                {link.subLinks ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <button
                      className={`text-sm font-bold tracking-wide uppercase transition-all flex items-center space-x-1 py-2 ${
                        isScrolled || currentPage !== 'home' 
                          // Fix: Use type casting to prevent narrowing when comparing currentPage to 'team' to avoid "no overlap" error
                          ? ((currentPage as string) === link.id || (currentPage as string) === 'team' ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-500') 
                          : ((currentPage as string) === link.id || (currentPage as string) === 'team' ? 'text-emerald-400' : 'text-white hover:text-emerald-200')
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute left-0 top-full pt-2 w-52 transition-all duration-300 ${isAboutDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                        {link.subLinks.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleNavClick(sub.id)}
                            className={`w-full text-left px-6 py-4 text-xs font-black uppercase tracking-widest hover:bg-emerald-50 transition-colors ${currentPage === sub.id ? 'text-emerald-600' : 'text-slate-600'}`}
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`text-sm font-bold tracking-wide uppercase transition-all relative py-2 ${
                      isScrolled || currentPage !== 'home' 
                        ? (currentPage === link.id ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-500') 
                        : (currentPage === link.id ? 'text-emerald-400' : 'text-white hover:text-emerald-200')
                    }`}
                  >
                    {link.name}
                    {currentPage === link.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full"></span>
                    )}
                  </button>
                )}
              </div>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20"
            >
              Partner With Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-white'} hover:text-emerald-600`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-[60] flex flex-col p-8 animate-in fade-in slide-in-from-top duration-300">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-600 p-2 rounded-xl">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight text-emerald-900">Glean Agro</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="text-slate-900"><X size={32} /></button>
          </div>
          
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <React.Fragment key={link.id}>
                {link.subLinks ? (
                  link.subLinks.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleNavClick(sub.id)}
                      className={`text-3xl font-bold text-left ${currentPage === sub.id ? 'text-emerald-600' : 'text-slate-800'}`}
                    >
                      {sub.name}
                    </button>
                  ))
                ) : (
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`text-3xl font-bold text-left ${currentPage === link.id ? 'text-emerald-600' : 'text-slate-800'}`}
                  >
                    {link.name}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <div className="mt-auto pb-12">
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full bg-emerald-600 text-white py-5 rounded-2xl text-lg font-bold shadow-xl shadow-emerald-200"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-500/30 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium animate-bounce">
              <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
              Pioneering Digital Excellence
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Bringing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Light</span> to Your Digital Vision
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
              Light Designs is your premier partner for cutting-edge web development, breathtaking graphic design, and future-ready digital skills training. We don't just build; we illuminate.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#portfolio" 
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 group"
              >
                View Our Work
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a 
                href="#ai-consultant" 
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl font-bold transition-all backdrop-blur-sm flex items-center justify-center gap-2"
              >
                AI Project Planner
                <i className="fa-solid fa-robot text-blue-400"></i>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-500">Projects Done</div>
              </div>
              <div className="h-10 w-px bg-gray-800"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-500">Global Clients</div>
              </div>
              <div className="h-10 w-px bg-gray-800"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">1k+</div>
                <div className="text-sm text-gray-500">Students Trained</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/tech/1200/800" 
                alt="Digital Design Team" 
                className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl animate-pulse z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-check text-green-600"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold">Web Project</div>
                  <div className="text-sm font-bold text-gray-800">Live & Secured</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 p-4 bg-blue-600 rounded-2xl shadow-xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-pen-nib text-white"></i>
                </div>
                <div className="text-white">
                  <div className="text-xs opacity-80 font-semibold">Brand Design</div>
                  <div className="text-sm font-bold">Zenith Identity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

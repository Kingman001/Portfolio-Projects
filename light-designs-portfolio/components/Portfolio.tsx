
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Web' | 'Design' | 'Training'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Recent Projects & Case Studies
            </h3>
            <p className="text-gray-600">
              Take a look at some of our favorite builds and designs. Each project represents a unique challenge solved through innovation.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['All', 'Web', 'Design', 'Training'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === f 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all"
                >
                  View Case Study
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-8">Want to see more of our work?</p>
          <a 
            href="https://github.com/Kingman001/Portfolio-Projects" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
          >
            <i className="fa-brands fa-github text-xl"></i>
            Explore GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

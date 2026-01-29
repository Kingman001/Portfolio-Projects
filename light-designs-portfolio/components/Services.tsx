
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Core Competencies
          </h3>
          <p className="text-gray-600 text-lg">
            We provide a comprehensive suite of digital services designed to help startups and established brands thrive in an ever-evolving tech landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-gray-500">
                  <i className="fa-solid fa-circle-check text-blue-500"></i>
                  Tailored Solutions
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500">
                  <i className="fa-solid fa-circle-check text-blue-500"></i>
                  Industry Best Practices
                </li>
              </ul>
              <button className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Trusted by Innovators
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative">
              <div className="absolute -top-4 right-8 text-6xl text-blue-600/10 italic font-serif">"</div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                {testimonial.content}
              </p>
              <div className="mt-6 flex text-yellow-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-[10px]"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

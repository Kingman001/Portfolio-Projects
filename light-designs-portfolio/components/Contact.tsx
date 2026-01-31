
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form side */}
            <div className="p-10 md:p-16">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Start Your Project</h3>
              <p className="text-gray-500 mb-10">Fill out the form below and we'll get back to you within 24 hours to discuss how we can illuminate your business.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Service Required</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer">
                    <option>Web Development</option>
                    <option>Graphic Design</option>
                    <option>Digital Skills Training</option>
                    <option>Multiple Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Project Details</label>
                  <textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all h-32" placeholder="Tell us a bit about your vision..."></textarea>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                  Send Message
                  <i className="fa-solid fa-paper-plane text-xs opacity-70"></i>
                </button>
              </form>
            </div>

            {/* Info side */}
            <div className="bg-blue-600 p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="space-y-12 relative z-10">
                <h3 className="text-3xl font-extrabold text-white">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-envelope text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm font-medium">Email us at</p>
                      <p className="text-white text-lg font-bold">hello@lightdesigns.tech</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-phone text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm font-medium">Call us at</p>
                      <p className="text-white text-lg font-bold">+1 (234) 567-890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-location-dot text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm font-medium">Visit us at</p>
                      <p className="text-white text-lg font-bold">Tech Hub Central, Floor 5<br/>San Francisco, CA 94103</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 relative z-10">
                <p className="text-blue-100 text-sm font-medium mb-6">Follow our journey</p>
                <div className="flex gap-4">
                  {['twitter', 'instagram', 'linkedin', 'github'].map((social) => (
                    <a key={social} href="#" className="w-10 h-10 bg-white/10 hover:bg-white text-white hover:text-blue-600 rounded-lg flex items-center justify-center transition-all">
                      <i className={`fa-brands fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

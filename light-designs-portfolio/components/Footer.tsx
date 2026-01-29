
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="logo 2.webp" alt="LightDzyns Logo" className="w-100 h-20" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Illuminating businesses through creative design and robust technical solutions. Your startup partner for the digital age.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Portfolio', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-blue-500 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Graphic Design', 'Skill Training', 'AI Consulting'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">Join our newsletter to stay up to date on features and releases.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm text-white w-full focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <button type="submit" title="Subscribe to newsletter" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
          <p>© 2024 Light Designs. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

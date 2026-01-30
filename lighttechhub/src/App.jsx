import { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, ArrowRight, Star, Code, Users, Laptop, CheckCircle2 } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="assets/pics/light tech hub logo.webp" alt="Light Tech Hub Logo" className="h-10 w-10 hover:scale-110 transition-transform duration-300" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">LIGHT TECH HUB</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Portfolio</a>
            <a href="#bootcamp" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Bootcamp</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Contact</a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700 hover:text-blue-600 transition-colors">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t borders-gray-200 animate-fadeIn">
            <a href="#home" className="block py-3 px-6 hover:bg-blue-50 hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="block py-3 px-6 hover:bg-blue-50 hover:text-blue-600 transition-colors">Services</a>
            <a href="#portfolio" className="block py-3 px-6 hover:bg-blue-50 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#bootcamp" className="block py-3 px-6 hover:bg-blue-50 hover:text-blue-600 transition-colors">Bootcamp</a>
            <a href="#contact" className="block py-3 px-6 hover:bg-blue-50 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-slideInLeft">
            <div className="mb-6 inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">⚡ Welcome to Light Tech Hub</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Web Designer</span> & Digital Skills Trainer
            </h1>
            <p className="text-xl text-gray-600 mb-8">Based in Abuja | Serving All of Nigeria | UI/UX Training & Bootcamps</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary inline-block text-center">Hire Me for Web Design</a>
              <a href="#bootcamp" className="btn-secondary inline-block text-center">Join My Bootcamp</a>
            </div>
          </div>
          <div className="flex-1 animate-slideInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img src="https://images.unsplash.com/photo-1573496358961-3c8e9132247c?w=500" alt="Joshua Audu" className="relative rounded-full shadow-2xl mx-auto w-80 h-80 object-cover border-4 border-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">My Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="card p-8 hover:shadow-2xl border border-gray-100 group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
                <Laptop className="text-blue-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Design & Development</h3>
              <p className="text-gray-600 mb-6">Modern, fast-loading websites that convert visitors to customers.</p>
              <p className="text-2xl font-bold text-blue-600">From ₦450,000</p>
            </div>
            <div className="card p-8 hover:shadow-2xl border border-gray-100 group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
                <Users className="text-blue-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Skills Bootcamp</h3>
              <p className="text-gray-600 mb-6">4-Weekend UI/UX + Web Design training. Zero to job-ready.</p>
              <p className="text-2xl font-bold text-blue-600">₦65,000 Early Bird</p>
            </div>
            <div className="card p-8 hover:shadow-2xl border border-gray-100 group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
                <Code className="text-blue-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Corporate Training</h3>
              <p className="text-gray-600 mb-6">In-house UI/UX & Web Dev training for your team.</p>
              <p className="text-2xl font-bold text-blue-600">From ₦250,000/day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">Showcasing beautiful and functional web experiences</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Bakery Website", emoji: "🍰", color: "from-pink-400 to-rose-400" },
              { name: "Event Decor Site", emoji: "🎉", color: "from-purple-400 to-pink-400" },
              { name: "Church Redesign", emoji: "⛪", color: "from-blue-400 to-cyan-400" },
              { name: "E-commerce Store", emoji: "🛍️", color: "from-green-400 to-cyan-400" },
              { name: "React Dashboard", emoji: "📊", color: "from-orange-400 to-red-400" },
              { name: "Portfolio Site", emoji: "🎨", color: "from-indigo-400 to-blue-400" }
            ].map((project, idx) => (
              <div key={project.name} className={`group cursor-pointer rounded-xl h-64 flex items-center justify-center text-2xl font-semibold text-white bg-gradient-to-br ${project.color} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="relative text-center">
                  <div className="text-6xl mb-2">{project.emoji}</div>
                  <p className="font-bold">{project.name}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-600 text-lg">✨ More live projects coming this week!</p>
        </div>
      </section>

      {/* Bootcamp CTA */}
      <section id="bootcamp" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Zero to Hired Bootcamp</h2>
          <p className="text-xl mb-4">UI/UX + Web Design Training</p>
          <p className="text-lg mb-8 opacity-90">Next Batch: January 2026 | Abuja Physical | Only 20 seats</p>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-white/20">
            <div className="text-5xl font-bold mb-2">₦65,000</div>
            <p className="text-lg opacity-90">Early Bird (Normal ₦85,000)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">4-Weekend Course</p>
                <p className="text-sm opacity-75">Intensive hands-on training</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Guaranteed Job Ready</p>
                <p className="text-sm opacity-75">Portfolio + Interview prep</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Lifetime Support</p>
                <p className="text-sm opacity-75">Community access forever</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 size={24} className="flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Certificate Included</p>
                <p className="text-sm opacity-75">Industry-recognized</p>
              </div>
            </div>
          </div>

          <a href="https://selar.co/yourlink" className="inline-block bg-white text-blue-600 px-12 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl">
            Secure Your Seat Now <ArrowRight className="inline ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12">Let's Work Together</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="bg-blue-600 text-white p-3 w-fit rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:joshuaaudu@email.com" className="text-blue-600 hover:text-blue-700 font-semibold">joshuaaudu@email.com</a>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="bg-blue-600 text-white p-3 w-fit rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+2348123456789" className="text-blue-600 hover:text-blue-700 font-semibold">+234 812 345 6789</a>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="bg-blue-600 text-white p-3 w-fit rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-700 font-semibold">Abuja, Nigeria</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Serving Clients Across Nigeria</h3>
            <p className="text-lg text-gray-600">Abuja • Lagos • Port Harcourt • Enugu • Kano • Ibadan</p>
          </div>

          <a href="mailto:joshuaaudu@email.com" className="btn-primary inline-block">Send Me a Message</a>
        </div>
      </section>

      {/* Testimonials & FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <details className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <summary className="flex items-center justify-between p-6 font-semibold text-lg hover:bg-blue-50 transition-colors duration-300">
                <span>How much does a website cost in Abuja?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="px-6 pb-6 text-gray-600">My professional websites start from ₦450,000 for fast-loading, SEO-optimized sites that convert.</p>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <summary className="flex items-center justify-between p-6 font-semibold text-lg hover:bg-blue-50 transition-colors duration-300">
                <span>Where can I learn UI/UX design in Abuja?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="px-6 pb-6 text-gray-600">Join my intensive 4-weekend bootcamp. Next batch starts January 2026. Only ₦65,000 early bird!</p>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <summary className="flex items-center justify-between p-6 font-semibold text-lg hover:bg-blue-50 transition-colors duration-300">
                <span>What's included in the bootcamp?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="px-6 pb-6 text-gray-600">UI/UX fundamentals, web design, front-end basics, portfolio building, interview prep, and lifetime community access.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Light Tech Hub</h4>
              <p className="text-gray-400">Professional Web Design & Digital Skills Training</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">Web Design</a></li>
                <li><a href="#bootcamp" className="hover:text-white transition">Bootcamp</a></li>
                <li><a href="#services" className="hover:text-white transition">Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Light Tech Hub. All rights reserved. | Crafted with ❤️ in Abuja</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

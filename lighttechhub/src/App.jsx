import { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, ArrowRight, Star, Code, Users, Laptop } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="assets/pics/light tech hub logo.webp" alt="Light Tech Hub Logo" className="h-10 w-10 mr-2"/>
          <h1 className="text-2xl font-bold text-blue-600">LIGHT TECH HUB</h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a>
            <a href="#bootcamp" className="hover:text-blue-600 transition">Bootcamp</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <a href="#home" className="block py-3 px-6">Home</a>
            <a href="#services" className="block py-3 px-6">Services</a>
            <a href="#portfolio" className="block py-3 px-6">Portfolio</a>
            <a href="#bootcamp" className="block py-3 px-6">Bootcamp</a>
            <a href="#contact" className="block py-3 px-6">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
  Professional Web Designer & Digital Skills Trainer in Abuja
</h1>
            <h2 className="text-4xl font-bold text-center mb-12">
  Best Web Designer in Abuja | UI/UX Training & Bootcamps
</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="btn-primary">Hire Me for Web Design</a>
              <a href="#bootcamp" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold">
                Join My Bootcamp
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1573496358961-3c8e9132247c?w=500" alt="Joshua Audu" className="rounded-full shadow-2xl mx-auto w-80 h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Laptop className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-2xl font-bold mb-4">Web Design & Development</h3>
              <p className="text-gray-600 mb-6">Modern, fast-loading websites that convert visitors to customers. From ₦450,000</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Users className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-2xl font-bold mb-4">Digital Skills Bootcamp</h3>
              <p className="text-gray-600 mb-6">4-Weekend UI/UX + Web Design training. Zero to job-ready. ₦65,000 early bird</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Code className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-2xl font-bold mb-4">Corporate Training</h3>
              <p className="text-gray-600 mb-6">In-house UI/UX & Web Dev training for your team. From ₦250,000/day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Recent Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Bakery Website", "Event Decor Site", "Church Redesign", "E-commerce Store", "React Dashboard", "Portfolio Site"].map((project) => (
              <div key={project} className="bg-gray-200 border-2 border-dashed rounded-xl h-64 flex items-center justify-center text-2xl font-semibold text-gray-500">
                {project}
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-gray-600">More live projects coming this week!</p>
        </div>
      </section>

      {/* Bootcamp CTA */}
      <section id="bootcamp" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Zero to Hired UI/UX + Web Design Bootcamp</h2>
          <p className="text-xl mb-8">Next Batch: January 2026 | Abuja Physical | Only 20 seats</p>
          <div className="text-5xl font-bold mb-4">₦65,000 Early Bird (Normal ₦85,000)</div>
          <a href="https://selar.co/yourlink" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition">
            Secure Your Seat Now <ArrowRight className="inline ml-2" />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Let’s Work Together</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div><Mail className="mx-auto mb-2" size={32} /> joshuaaudu@email.com</div>
            <div><Phone className="mx-auto mb-2" size={32} /> +234 812 345 6789</div>
            <div><MapPin className="mx-auto mb-2" size={32} /> Abuja, Nigeria</div>
          </div>
          <div className="text-center mb-8">
  <h3 className="text-2xl font-bold">Serving Clients Across Nigeria</h3>
  <p>Abuja | Lagos | Port Harcourt | Enugu | Kano | Ibadan</p>
</div>
          <a href="mailto:joshuaaudu@email.com" className="btn-primary">Send Me a Message</a>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold">How much does a website cost in Abuja?</h3>
        <p>My websites start from ₦450,000 for professional, fast-loading sites.</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">Where can I learn UI/UX design in Abuja?</h3>
        <p>Join my 4-weekend physical bootcamp – next batch January 2026.</p>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2025 JoshCreates. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
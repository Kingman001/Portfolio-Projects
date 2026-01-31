
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook, CheckCircle2 } from 'lucide-react';
import { apiService, ContactSubmission } from '../services/apiService';

interface FormErrors {
  fullName?: string;
  email?: string;
  interest?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactSubmission>({
    fullName: '',
    email: '',
    interest: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name is too short';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.interest || formData.interest === '') {
      newErrors.interest = 'Please select an area of interest';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a bit more detail (min 10 chars)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await apiService.submitContactForm(formData);
        if (response.success) {
          setIsSubmitted(true);
        }
      } catch (err) {
        console.error("Submission failed", err);
        // Handle error state if needed
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 animate-in fade-in zoom-in duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-[3rem] shadow-2xl p-16 md:p-24 border border-slate-100 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-4">Message Sent!</h1>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Thank you for reaching out to Glean Agro. Our team has received your message and we will get back to you within 24-48 hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-2xl font-bold transition-all"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 mb-6 tracking-tight">Let's Connect</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to partner with Nigeria's agricultural future? Reach out to our team today.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-slate-100">
          <div className="p-12 md:p-16 bg-emerald-900 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -mr-32 -mt-32 opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
              <p className="text-emerald-100 text-lg mb-12">
                Our offices and farm complexes are strategically located for maximum impact across the region.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center space-x-6 group">
                  <div className="bg-emerald-800 p-4 rounded-2xl group-hover:bg-emerald-700 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1">General Inquiries</p>
                    <p className="font-medium text-lg">info@gleanagrong.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="bg-emerald-800 p-4 rounded-2xl group-hover:bg-emerald-700 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1">Direct Hotline</p>
                    <p className="font-medium text-lg">+234 (0) 803 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="bg-emerald-800 p-4 rounded-2xl group-hover:bg-emerald-700 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1">Headquarters</p>
                    <p className="font-medium text-lg leading-snug">Glean Agro Farm Complex,<br/>Ogun State, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 relative z-10">
               <h4 className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-6">Follow Our Harvest</h4>
               <div className="flex space-x-4">
                  {[Facebook, Instagram, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-14 h-14 bg-emerald-800 rounded-2xl flex items-center justify-center hover:bg-emerald-700 transition-colors border border-emerald-700/50 active:scale-95">
                      <Icon size={24} />
                    </a>
                  ))}
               </div>
            </div>
          </div>

          <div className="p-12 md:p-16 bg-white">
            <form className="space-y-8" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 bg-slate-50 rounded-2xl border-none ring-1 transition-all outline-none ${
                      errors.fullName ? 'ring-red-500 focus:ring-red-500' : 'ring-slate-200 focus:ring-emerald-500'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.fullName && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wide ml-1">{errors.fullName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 bg-slate-50 rounded-2xl border-none ring-1 transition-all outline-none ${
                      errors.email ? 'ring-red-500 focus:ring-red-500' : 'ring-slate-200 focus:ring-emerald-500'
                    }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wide ml-1">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-1">Interest Area</label>
                <div className="relative">
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 bg-slate-50 rounded-2xl border-none ring-1 transition-all outline-none appearance-none pr-12 cursor-pointer ${
                      errors.interest ? 'ring-red-500 focus:ring-red-500' : 'ring-slate-200 focus:ring-emerald-500'
                    }`}
                  >
                    <option value="" disabled>Select an area of interest</option>
                    <option value="Industrial Off-take">Industrial Off-take</option>
                    <option value="Retail Partnership">Retail Partnership</option>
                    <option value="Consultancy">Consultancy</option>
                    <option value="Investment Opportunities">Investment Opportunities</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <Send size={14} className="rotate-90" />
                  </div>
                </div>
                {errors.interest && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wide ml-1">{errors.interest}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-1">Your Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className={`w-full px-6 py-4 bg-slate-50 rounded-2xl border-none ring-1 transition-all outline-none resize-none ${
                    errors.message ? 'ring-red-500 focus:ring-red-500' : 'ring-slate-200 focus:ring-emerald-500'
                  }`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wide ml-1">{errors.message}</p>}
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-emerald-200 transition-all flex items-center justify-center space-x-3 group active:scale-[0.98] ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

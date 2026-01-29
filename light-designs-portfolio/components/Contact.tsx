import React, { useState } from 'react';
import { submitContactForm } from '../services/firebaseService';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: 'Web Development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send to Firebase Firestore
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message
      });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We\'ll get back to you within 24 hours.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        service: 'Web Development',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form side */}
            <div className="p-10 md:p-16">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Start Your Project</h3>
              <p className="text-gray-500 mb-10">Fill out the form below and we'll get back to you within 24 hours to discuss how we can illuminate your business.</p>

              {submitStatus && (
                <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${submitStatus.type === 'success'
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
                  }`}>
                  <i className={`fa-solid ${submitStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} ${submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
                    } mt-1`}></i>
                  <div>
                    <p className={`text-sm ${submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                      {submitStatus.message}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-gray-50 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-200'
                        }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-gray-50 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-200'
                        }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-gray-700 ml-1">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
                    title="Select the service you need"
                  >
                    <option>Web Development</option>
                    <option>Graphic Design</option>
                    <option>Digital Skills Training</option>
                    <option>Multiple Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all h-32 ${errors.message ? 'border-red-500' : 'border-gray-200'
                      }`}
                    placeholder="Tell us a bit about your vision..."
                  ></textarea>
                  {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-xl font-bold shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
                      <p className="text-white text-lg font-bold">Tech Hub Central, Floor 5<br />San Francisco, CA 94103</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 relative z-10">
                <p className="text-blue-100 text-sm font-medium mb-6">Follow our journey</p>
                <div className="flex gap-4">
                  {['twitter', 'instagram', 'linkedin', 'github'].map((social) => (
                    <a
                      key={social}
                      href={`https://${social}.com`}
                      title={`Follow us on ${social}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-white text-white hover:text-blue-600 rounded-lg flex items-center justify-center transition-all"
                    >
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

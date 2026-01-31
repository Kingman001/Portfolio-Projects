
import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl mb-6">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-slate-500 font-medium">Last Updated: May 20, 2024</p>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-xl space-y-12 text-slate-600 leading-relaxed">
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="text-emerald-600" size={24} />
              <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
            </div>
            <p>
              At Glean Agro, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="text-emerald-600" size={24} />
              <h2 className="text-2xl font-bold text-slate-900">Data We Collect</h2>
            </div>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="text-emerald-600" size={24} />
              <h2 className="text-2xl font-bold text-slate-900">How We Use Your Data</h2>
            </div>
            <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To register you as a new customer or partner.</li>
              <li>To process and deliver your order or service request.</li>
              <li>To manage our relationship with you which will include notifying you about changes to our terms or privacy policy.</li>
              <li>To enable you to partake in a prize draw, competition or complete a survey.</li>
            </ul>
          </section>

          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact our data privacy manager at:</p>
            <p className="mt-4 font-bold text-emerald-700">privacy@gleanagrong.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

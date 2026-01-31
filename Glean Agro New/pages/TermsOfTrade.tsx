
import React from 'react';
import { Scale, Truck, CreditCard, AlertCircle } from 'lucide-react';

const TermsOfTrade: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl mb-6">
            <Scale size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">Terms of Trade</h1>
          <p className="text-lg text-slate-500 font-medium">Effective Date: June 1, 2024</p>
        </div>

        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-xl space-y-12 text-slate-600 leading-relaxed">
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <CreditCard className="text-emerald-600" size={24} />
              <h2 className="text-2xl font-bold text-slate-900">1. Ordering and Pricing</h2>
            </div>
            <p className="mb-4">
              All prices are subject to market fluctuations. Quotes provided via our marketplace are valid for 48 hours unless otherwise stated.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are confirmed only upon receipt of a formal purchase order or payment.</li>
              <li>We reserve the right to cancel orders due to unforeseen crop failure or force majeure.</li>
              <li>All industrial quantities are measured by metric weight at the time of dispatch.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Truck className="text-emerald-600" size={24} />
              <h2 className="text-2xl font-bold text-slate-900">2. Delivery and Logistics</h2>
            </div>
            <p className="mb-4">
              Glean Agro provides logistics services for both intra-state and inter-state deliveries.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Risk of loss transfers to the buyer upon handover to the third-party carrier or buyer's transport.</li>
              <li>Standard delivery times for retail products are 3-5 business days.</li>
              <li>Industrial bulk deliveries are scheduled according to the harvest calendar and agreed contract timelines.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6">
              <AlertCircle className="text-emerald-600" size={24} />
              <h2 className="text-2xl font-bold text-slate-900">3. Quality Assurance and Returns</h2>
            </div>
            <p className="mb-4">
              We take pride in our "Fresh-to-Factory" promise.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any quality discrepancies must be reported within 24 hours of delivery.</li>
              <li>Perishable goods are generally non-returnable unless a significant quality defect is proven.</li>
              <li>Refunds or credit notes will be processed within 14 business days of an approved claim.</li>
            </ul>
          </section>

          <section className="bg-emerald-900 text-emerald-50 p-8 rounded-3xl">
            <h2 className="text-xl font-bold mb-4">Governing Law</h2>
            <p className="opacity-80">
              These Terms of Trade are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Ogun State, Nigeria.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfTrade;

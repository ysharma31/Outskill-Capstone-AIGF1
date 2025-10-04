import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import frustratedPerson from '../assets/PO created.jpg';
import happyPerson from '../assets/PO created copy.jpg';

export default function BeforeAfter() {
  const beforeProblems = [
    'Manual order entry takes hours',
    'High error rates from typing mistakes',
    'Constant follow-ups for payments',
    'Lost orders in WhatsApp chaos',
    'No time for business growth'
  ];

  const afterBenefits = [
    'Automatic order processing',
    '99% accuracy with AI',
    'Automated payment reminders',
    'Organized order management',
    'Focus on scaling your business'
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            The Transformation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how Simbly.ai transforms your business from manual chaos to automated efficiency
          </p>
        </div>

        {/* Before & After Split */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 items-center">
          {/* BEFORE - Left Side */}
          <div className="flex-1 w-full">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-red-100 dark:border-red-900/30">
              {/* Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={frustratedPerson}
                  alt="Frustrated business owner before automation"
                  className="w-full h-full object-contain object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle size={24} className="text-red-400" />
                    <span className="text-white font-semibold text-lg">BEFORE Simbly.ai</span>
                  </div>
                  <p className="text-white/90 text-sm">Manual work, constant stress, lost opportunities</p>
                </div>
              </div>
              
              {/* Problems List */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  The Pain Points
                </h3>
                <ul className="space-y-3">
                  {beforeProblems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Arrow Separator */}
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
              <ArrowRight size={24} className="text-white md:w-8 md:h-8" />
            </div>
          </div>

          {/* AFTER - Right Side */}
          <div className="flex-1 w-full">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-green-100 dark:border-green-900/30">
              {/* Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={happyPerson}
                  alt="Happy business owner after automation"
                  className="w-full h-full object-contain object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={24} className="text-green-400" />
                    <span className="text-white font-semibold text-lg">AFTER Simbly.ai</span>
                  </div>
                  <p className="text-white/90 text-sm">Automated efficiency, peace of mind, business growth</p>
                </div>
              </div>
              
              {/* Benefits List */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  The Solution
                </h3>
                <ul className="space-y-3">
                  {afterBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to make the transformation?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}

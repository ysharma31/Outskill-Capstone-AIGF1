import { Check, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase'


export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '₹2,999',
      period: 'per month',
      description: 'Perfect for small businesses getting started',
      features: [
        'WhatsApp to Purchase Order conversion',
        'Gmail drafts integration',
        'Up to 100 orders/month',
        'Basic payment reminders',
        'Email support',
        'Single user access',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Growth',
      price: '₹6,999',
      period: 'per month',
      description: 'For growing businesses ready to scale',
      features: [
        'Everything in Starter',
        'Unlimited orders',
        'Auto-generated debit notes',
        'Voice AI payment reminders',
        'Tally export integration',
        'Multi-user dashboard (up to 5 users)',
        'Priority email & WhatsApp support',
        'Custom invoice templates',
      ],
      cta: 'Book a Demo',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For established businesses with multiple branches',
      features: [
        'Everything in Growth',
        'Unlimited users',
        'Multi-branch support',
        'White-label invoices',
        'Custom workflow automation',
        'Dedicated account manager',
        'Advanced analytics & reports',
        'API access',
        'Priority phone support',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-secondary/10 to-bg/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-4 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2 font-semibold text-sm">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-accent text-white shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={18} />
                </button>
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All plans include 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}

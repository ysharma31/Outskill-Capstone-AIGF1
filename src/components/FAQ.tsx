import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase'


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need to change how my customers send orders?',
      answer: 'Not at all! Your customers continue using WhatsApp exactly as they do now. Simbly.ai works in the background to capture and process these orders automatically.',
    },
    {
      question: 'How does it integrate with Tally?',
      answer: 'Simbly.ai generates purchase orders in a format compatible with Tally. You can export data directly or use our API for seamless integration. Our team helps with setup during onboarding.',
    },
    {
      question: 'What if the AI makes a mistake in the order?',
      answer: 'Every order goes to your Gmail drafts first, so you always review before sending. Our AI has 98%+ accuracy, and you have full control. Plus, it learns from corrections to improve over time.',
    },
    {
      question: 'Is my customer data secure?',
      answer: 'Absolutely. We use bank-grade encryption, store data on secure Indian servers, and are fully compliant with data protection regulations. Your data is never shared with third parties.',
    },
    {
      question: 'How quickly can I start using Simbly.ai?',
      answer: 'Most businesses are up and running within 2-3 days. Setup includes connecting your WhatsApp Business account, Gmail, and configuring your workflow preferences. Our team guides you through every step.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Simbly.ai
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-bg/20 to-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

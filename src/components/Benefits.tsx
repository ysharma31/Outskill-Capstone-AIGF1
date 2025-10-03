import { Clock, Target, TrendingUp, Phone, FileText } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Save 10+ hours weekly',
      description: 'Automate manual order entry, data processing, and follow-ups. Focus on growing your business instead of paperwork.',
    },
    {
      icon: Target,
      title: 'Reduce errors by 70%',
      description: 'Eliminate manual typing mistakes and miscommunication. Every order is captured accurately from WhatsApp.',
    },
    {
      icon: TrendingUp,
      title: 'Process 3x more orders',
      description: 'Scale your operations without hiring more staff. Handle more orders with the same team size.',
    },
    {
      icon: Phone,
      title: 'Auto-payment calls with Voice AI',
      description: 'Our intelligent Voice AI agent makes payment reminder calls automatically, so you never have to chase customers.',
    },
    {
      icon: FileText,
      title: 'Auto-generated debit notes',
      description: 'Debit notes are created and sent automatically for every transaction. Stay organized without extra effort.',
    },
  ];

  return (
    <section id="benefits" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Why Indian SMBs choose Simbly.ai
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built specifically for trading businesses that run on WhatsApp and Tally
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-bg/40 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

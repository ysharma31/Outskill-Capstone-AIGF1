import { MessageSquare, FileCheck, Send, Phone, FileText, LayoutDashboard } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Receive WhatsApp order',
      description: 'Customer sends order details via WhatsApp like they always do',
    },
    {
      icon: FileCheck,
      title: 'Auto-convert to purchase order',
      description: 'Simbly instantly converts the message into a clean PO and saves it to your Gmail drafts',
    },
    {
      icon: Send,
      title: 'Review and send to supplier',
      description: 'You quickly review the auto-generated PO and send it to your supplier with one click',
    },
    {
      icon: Phone,
      title: 'Auto-reminder calls',
      description: 'Our Voice AI agent automatically calls customers with payment reminders',
    },
    {
      icon: FileText,
      title: 'Debit notes sent automatically',
      description: 'System generates and sends debit notes without any manual work',
    },
    {
      icon: LayoutDashboard,
      title: 'Track everything on dashboard',
      description: 'Monitor all orders and payment status in one clean, simple dashboard',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-secondary/10 to-bg/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            How Simbly.ai works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From WhatsApp message to completed order in 6 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-md">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="mt-2 text-center">
                        <span className="text-2xl font-bold text-primary">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-secondary rounded-full transform translate-x-1 -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-all">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
              </div>
              <p className="text-xl font-semibold">Watch the complete workflow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

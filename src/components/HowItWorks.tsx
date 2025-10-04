import { MessageSquare, FileCheck, Send, Phone, FileText, LayoutDashboard } from 'lucide-react';

export default function HowItWorks() {
  const sequentialSteps = [
    {
      icon: MessageSquare,
      title: 'Receive WhatsApp Orders',
      description: 'Customers send an order via WhatsApp in different formats',
    },
    {
      icon: FileCheck,
      title: 'Auto-convert to purchase order',
      description: 'Simbly instantly converts the message into a clean PO and saves it to your mailbox',
    },
    {
      icon: Send,
      title: 'Review and send to supplier',
      description: 'Your team quickly reviews the auto-generated PO and sends it to your supplier with one click',
    },
  ];

  const additionalFeatures = [
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
            From WhatsApp message to completed order in 3 simple steps
          </p>
        </div>

        {/* Sequential Flow - Steps 1-3 */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {sequentialSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex-1 max-w-sm">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-md mx-auto mb-4">
                        <Icon size={28} className="text-white" />
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-primary">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {/* Arrow pointing to next step */}
                  {index < sequentialSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-8 w-16 h-16 items-center justify-center transform -translate-y-1/2 z-10">
                      <div className="flex items-center">
                        <div className="w-12 h-2 bg-primary rounded-full shadow-lg"></div>
                        <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-primary border-b-4 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Features - Steps 4-6 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Plus these powerful features
            </h3>
            <p className="text-lg text-gray-600">
              Additional automation tools to streamline your business
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shadow-md mx-auto mb-4">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
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

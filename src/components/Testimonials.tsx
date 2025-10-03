import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Simbly.ai has completely transformed how we handle orders. We used to spend 3 hours daily just typing WhatsApp messages into Tally. Now it's automatic!",
      name: 'Rajesh Kumar',
      business: 'Electronics Trader',
      city: 'Mumbai',
    },
    {
      quote: "The Voice AI payment reminders are a game changer. Our collection time reduced from 45 days to 25 days. No more awkward calls to customers!",
      name: 'Priya Sharma',
      business: 'Textile Distributor',
      city: 'Surat',
    },
    {
      quote: "We process 200+ orders daily now with the same 4-person team. Before Simbly, we could barely handle 60-70. ROI was positive in just 2 months.",
      name: 'Amit Patel',
      business: 'FMCG Wholesaler',
      city: 'Delhi',
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Trusted by Indian traders
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers say about Simbly.ai
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-bg/40 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Quote size={40} className="text-primary mb-4 opacity-50" />
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.business}</p>
                <p className="text-sm text-primary">{testimonial.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

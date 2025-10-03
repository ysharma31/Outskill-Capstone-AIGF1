import { Play, ArrowRight } from 'lucide-react';
import heroBackground from '../assets/PO created copy.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="SMB Owner"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-secondary/10"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Turn WhatsApp messages into orders, automatically!
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Save 10+ hours weekly and cut errors by 70%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-[0_8px_24px_rgba(30,90,125,0.35)] hover:shadow-[0_12px_32px_rgba(30,90,125,0.45)] transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 hover:bg-[#174864]">
                Book a Demo
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-primary font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-primary flex items-center justify-center gap-2">
                <Play size={20} />
                Watch How it Works
              </button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-600">Hours saved weekly</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-primary">70%</div>
                <div className="text-sm text-gray-600">Error reduction</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-primary">3x</div>
                <div className="text-sm text-gray-600">More orders</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-medium">See Simbly.ai in action</p>
                <p className="text-white/80 text-sm">Watch how we automate your WhatsApp orders</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

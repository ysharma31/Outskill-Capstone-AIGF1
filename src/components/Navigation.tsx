import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/Simbly-logo copy.jpg';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: 'hero' },
    { label: 'How it Works', href: 'how-it-works' },
    { label: 'Benefits', href: 'benefits' },
    { label: 'Pricing', href: 'pricing' },
    { label: 'Dashboard', href: 'dashboard' },
  ];

  const scrollToSection = (id: string) => {
    if (id === 'dashboard') {
      onNavigate('dashboard');
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Simbly.ai" className="h-16 w-auto" />
          </div>

          <div className="hidden md:flex items-center justify-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-5 py-2.5 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-primary hover:text-white transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(30,90,125,0.25)] hover:scale-105"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('pricing')}
              className="px-7 py-3 rounded-full bg-primary text-white font-semibold shadow-[0_4px_16px_rgba(30,90,125,0.3)] hover:shadow-[0_6px_24px_rgba(30,90,125,0.4)] transition-all duration-200 hover:scale-105 hover:bg-[#174864]"
            >
              Book a Demo
            </button>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X size={24} className="text-gray-700 dark:text-gray-300" /> : <Menu size={24} className="text-gray-700 dark:text-gray-300" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full px-6 py-3 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-primary hover:text-white transition-all duration-200 shadow-md text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-lg"
            >
              Book a Demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

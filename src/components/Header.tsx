import { useState } from 'react';
import { Menu, X,} from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-slate-900 to-blue-900 backdrop-blur-md shadow-lg z-40 text-white border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/images/bn.logo.png"
              alt="BN Tech Innovations Logo"
              className="w-48 object-contain"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-white-700 hover:text-blue-600 font-medium transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white-700 hover:text-blue-600 font-medium transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 font-medium transition-colors"
            >
              Contact Us
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-white-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left text-white-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-white-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 font-medium transition-colors"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

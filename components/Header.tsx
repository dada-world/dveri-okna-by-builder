'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center">
          <a href="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-blue text-white flex items-center justify-center rounded-xl font-bold text-xl shadow-lg group-hover:rotate-6 transition-transform">
              OD
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-gray-900 md:text-gray-800'}`}>
              Окна и двери ПВХ
            </span>
          </a>
          
          {/* Phone number - Desktop */}
          <a 
            href="tel:+375293423221" 
            className={`hidden md:flex items-center gap-2 font-bold text-lg transition-all duration-300 hover:scale-105 ${
              scrolled ? 'text-brand-blue' : 'text-brand-blue'
            }`}
          >
            <span className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
              📞
            </span>
            +375 29 342-32-21
          </a>
          
          {/* Mobile section - Phone + Menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Phone number - Mobile */}
            <a 
              href="tel:+375293423221" 
              className="bg-brand-blue text-white hover:bg-brand-orange transition-all duration-300 font-bold text-sm px-3 py-2 rounded-full shadow-lg flex items-center gap-2"
            >
              <span>📞</span>
              <span className="hidden sm:inline">+375 29 342-32-21</span>
            </a>
          
            {/* Mobile menu button */}
            <button 
                className="p-2 text-gray-800 transition-transform duration-200 hover:scale-110 active:scale-95 bg-white/50 backdrop-blur-sm rounded-lg" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-white/50 backdrop-blur-sm rounded-full px-2 py-1 border border-white/20 shadow-sm">
            <a href="/#about" className="px-5 py-2 text-gray-600 hover:text-brand-blue font-medium transition-all duration-300 hover:bg-white/50 rounded-full">
              О нас
            </a>
            <a href="/#advantages" className="px-5 py-2 text-gray-600 hover:text-brand-blue font-medium transition-all duration-300 hover:bg-white/50 rounded-full">
              Наши преимущества
            </a>
            <a href="/#projects" className="px-5 py-2 text-gray-600 hover:text-brand-blue font-medium transition-all duration-300 hover:bg-white/50 rounded-full">
              Наши работы
            </a>
            <Link 
              href="/calculator" 
              className="px-5 py-2 text-gray-600 hover:text-brand-blue font-medium transition-all duration-300 hover:bg-white/50 rounded-full"
            >
              Калькулятор
            </Link>
            <a 
              href="/#contact" 
              className="ml-2 bg-gray-900 text-white rounded-full px-6 py-2 hover:bg-brand-orange transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
            >
              Контакты
            </a>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl p-4 space-y-2 animate-slide-up">
            <a 
              href="/#about" 
              className="block px-4 py-3 text-gray-600 hover:text-brand-blue hover:bg-blue-50 rounded-xl transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="/#advantages" 
              className="block px-4 py-3 text-gray-600 hover:text-brand-blue hover:bg-blue-50 rounded-xl transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Наши преимущества
            </a>
            <a 
              href="/#projects" 
              className="block px-4 py-3 text-gray-600 hover:text-brand-blue hover:bg-blue-50 rounded-xl transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Наши работы
            </a>
            <Link
              href="/calculator"
              className="block px-4 py-3 text-gray-600 hover:text-brand-blue hover:bg-blue-50 rounded-xl transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Калькулятор
            </Link>
            <a 
              href="/#contact" 
              className="block mt-4 bg-gray-900 text-white rounded-xl px-4 py-3 text-center hover:bg-brand-orange transition-all shadow-md font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

'use client'

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 animate-fade-in hover-lift">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a href="/" className="text-black text-2xl font-bold transition-transform duration-300 hover:scale-105 animate-fade-in-left">
            Окна и двери ПВХ
          </a>

          {/* Phone number - Desktop */}
          <a
            href="tel:+375293423221"
            className="hidden md:flex items-center text-brand-blue hover:text-brand-orange transition-colors duration-300 font-semibold text-lg"
          >
            +375 29 342-32-21
          </a>

          {/* Mobile section - Phone + Menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Phone number - Mobile (prominent and always visible) */}
            <a
              href="tel:+375293423221"
              className="bg-brand-blue text-white hover:bg-brand-orange transition-all duration-300 font-bold text-sm px-3 py-2 rounded-full shadow-lg animate-fade-in-right hover-glow flex items-center space-x-1"
            >
              <span>📞</span>
              <span>+375 29 342-32-21</span>
          </a>

          {/* Mobile menu button */}
          <button
              className="p-2 transition-transform duration-200 hover:scale-110 animate-bounce-subtle hover-lift"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
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
          <div className="hidden md:flex items-center space-x-6">
            <a href="/#about" className="text-gray-600 hover:text-brand-blue transition-all duration-300 hover:scale-105 animate-fade-in-up animate-stagger-1 hover-lift">
              О нас
            </a>
            <a href="/#advantages" className="text-gray-600 hover:text-brand-blue transition-all duration-300 hover:scale-105 animate-fade-in-up animate-stagger-2 hover-lift">
              Наши преимущества
            </a>
            <a href="/#projects" className="text-gray-600 hover:text-brand-blue transition-all duration-300 hover:scale-105 animate-fade-in-up animate-stagger-3 hover-lift">
              Наши работы
            </a>
            <Link
              href="/calculator"
              className="text-gray-600 hover:text-brand-blue transition-all duration-300 hover:scale-105 animate-fade-in-up animate-stagger-4 hover-lift"
            >
              Калькулятор
            </Link>
            <a
              href="/#contact"
              className="bg-brand-orange text-white rounded-md px-6 py-2 hover:bg-[#e69816] transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up animate-stagger-5 btn-primary"
            >
              Контакты
            </a>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3 animate-slide-up">
            <a
              href="/#about"
              className="block text-gray-600 hover:text-brand-blue transition-all duration-300 py-2 hover:translate-x-2 animate-fade-in-left animate-stagger-1 hover-lift"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </a>
            <a
              href="/#advantages"
              className="block text-gray-600 hover:text-brand-blue transition-all duration-300 py-2 hover:translate-x-2 animate-fade-in-left animate-stagger-2 hover-lift"
              onClick={() => setIsMenuOpen(false)}
            >
              Наши преимущества
            </a>
            <a
              href="/#projects"
              className="block text-gray-600 hover:text-brand-blue transition-all duration-300 py-2 hover:translate-x-2 animate-fade-in-left animate-stagger-3 hover-lift"
              onClick={() => setIsMenuOpen(false)}
            >
              Наши работы
            </a>
            <Link
              href="/calculator"
              className="block text-gray-600 hover:text-brand-blue transition-all duration-300 py-2 hover:translate-x-2 animate-fade-in-left animate-stagger-4 hover-lift"
              onClick={() => setIsMenuOpen(false)}
            >
              Калькулятор
            </Link>
            <a
              href="/#contact"
              className="block bg-brand-orange text-white rounded-md px-4 py-2 hover:bg-[#e69816] transition-all duration-300 w-full text-center hover:scale-105 animate-fade-in-left animate-stagger-5 btn-primary"
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

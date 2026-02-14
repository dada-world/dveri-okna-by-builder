'use client'

import { useEffect, useRef } from "react";
import Link from "next/link";

const CalculatorBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const element = bannerRef.current;

      if (element) {
        const position = element.offsetTop;
        if (scrollY > position - window.innerHeight * 0.75) {
          element.classList.add('animate-fade-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="py-16 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/lovable-uploads/61a3a38f-c6f1-40e7-a1b3-5f1004cff925.png')"
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform -skew-x-12 px-8 py-4 inline-block shadow-2xl rounded-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold transform skew-x-12 text-white">Калькулятор стоимости</h2>
          </div>
        </div>

        <div
          ref={bannerRef}
          className="opacity-0 transition-opacity duration-1000 text-center"
        >
          <div className="text-white text-2xl md:text-3xl font-medium mb-12 max-w-3xl mx-auto">
            Хотите узнать цену? Всё просто.<br />
            Ответьте на несколько вопросов — и получите предварительную стоимость.
          </div>
        </div>

        {/* Centered call to action button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/calculator"
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-12 py-4 rounded-full transition-all text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 uppercase tracking-wide"
          >
            Рассчитать стоимость
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CalculatorBanner;

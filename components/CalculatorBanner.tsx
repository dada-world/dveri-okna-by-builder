'use client'

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Calculator } from "lucide-react";

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
      className="py-24 relative bg-gray-50"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={bannerRef}
          className="opacity-0 transition-opacity duration-1000 max-w-5xl mx-auto"
        >
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl min-h-[500px] flex items-center">
            {/* Background Image with Modern Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/lovable-uploads/61a3a38f-c6f1-40e7-a1b3-5f1004cff925.png')"
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            
            {/* Content Card */}
            <div className="relative z-10 p-8 md:p-16 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/10 mb-8 text-white text-sm font-medium">
                <Calculator className="w-4 h-4" />
                <span>Онлайн калькулятор</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-sans">
                Узнайте стоимость <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">прямо сейчас</span>
              </h2>
              
              <p className="text-gray-200 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                Ответьте на несколько простых вопросов и получите точный расчет стоимости ваших окон.
              </p>
              
              <Link 
                href="/calculator" 
                className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold px-12 py-5 rounded-full transition-all text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Рассчитать стоимость
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorBanner;

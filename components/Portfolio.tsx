'use client'

import { useRef, useEffect } from "react";
import Link from "next/link";

const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const element = portfolioRef.current;

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
      id="projects"
      className="py-24 relative overflow-hidden min-h-[500px] bg-gradient-to-br from-[#FFF5EC] via-[#FFF9F3] to-[#FFEEE0]"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full opacity-30 animate-float-1"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-100 rounded-full opacity-40 animate-float-2"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow-100 rounded-full opacity-35 animate-float-3"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-red-50 rounded-full opacity-25 animate-float-1"></div>
      </div>

      <div className="container relative z-10">
        <div
          ref={portfolioRef}
          className="opacity-0 transition-opacity duration-1000 flex flex-col items-center justify-center"
        >
          <div className="text-center mb-8">
            {/* Enhanced text with gradient background */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 rounded-2xl transform rotate-1"></div>
              <p className="relative text-gray-800 text-xl md:text-2xl font-medium px-8 py-6 leading-relaxed">
                Наши клиенты уже наслаждаются новыми окнами и дверями.<br />
                <span className="text-red-600 font-semibold">Посмотрите, как это может выглядеть и у вас</span>
              </p>
            </div>

            {/* Enhanced button with glow effect */}
            <Link href="/portfolio">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <button className="relative bg-red-500 hover:bg-red-600 text-white font-bold px-12 py-4 rounded-full transition-all text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 uppercase tracking-wide border-2 border-red-400">
                  Примеры наших работ
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

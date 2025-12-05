'use client'

import React, { useRef, useState, useEffect } from 'react';
import { Truck, Calendar, Shield, Ruler, LayoutGrid, CreditCard, ArrowRight } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "Бесплатная доставка",
      description: "Доставим ваш заказ быстро и бесплатно в любой уголок страны.",
      bg: "bg-blue-500"
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Работаем с 2009 года",
      description: "Многолетний опыт и надежность компании гарантируют качество услуг.",
      bg: "bg-orange-500"
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Гарантия качества",
      description: "Только высококачественные товары и услуги для наших клиентов.",
      bg: "bg-green-500"
    },
    {
      icon: <Ruler className="w-6 h-6 text-white" />,
      title: "Индивидуальный размер",
      description: "Окна и двери ПВХ под ваш размер с доставкой по всей стране.",
      bg: "bg-purple-500"
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-white" />,
      title: "Сложные конструкции",
      description: "Делаем любой сложности конструкции из ПВХ, ламинируем и тонируем стекло.",
      bg: "bg-rose-500"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "Гибкая оплата",
      description: "Работаем с наличным и безналичным расчетом, предлагаем различные варианты оплаты.",
      bg: "bg-teal-500"
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="advantages" className="bg-gray-50 py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 font-sans tracking-tight">
            Почему выбирают <span className="text-brand-blue">нас?</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Мы создаем не просто окна, а комфорт и уют в вашем доме. Вот 6 причин доверить нам свой выбор.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className={`group bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 ${advantage.bg} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                {advantage.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-brand-blue transition-colors">
                {advantage.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-6">
                {advantage.description}
              </p>

              <div className="flex items-center text-sm font-semibold text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                Подробнее <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

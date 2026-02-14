'use client'

import React, { useRef, useState, useEffect } from 'react';
import { Truck, Calendar, Shield, Ruler, LayoutGrid, CreditCard } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: <Truck className="w-6 h-6 text-brand-yellow" />,
      title: "Бесплатная доставка",
      description: "Доставим ваш заказ быстро и бесплатно в любой уголок страны."
    },
    {
      icon: <Calendar className="w-6 h-6 text-brand-yellow" />,
      title: "Работаем с 2009 года",
      description: "Многолетний опыт и надежность компании гарантируют качество услуг."
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-yellow" />,
      title: "Качество",
      description: "Только высококачественные товары и услуги для наших клиентов."
    },
    {
      icon: <Ruler className="w-6 h-6 text-brand-yellow" />,
      title: "Индивидуальный размер",
      description: "Окна и двери ПВХ под ваш размер с доставкой по всей стране."
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-brand-yellow" />,
      title: "Сложные конструкции",
      description: "Делаем любой сложности конструкции из ПВХ, ламинируем и тонируем стекло."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-brand-yellow" />,
      title: "Гибкая оплата",
      description: "Работаем с наличным и безналичным расчетом, предлагаем различные варианты оплаты."
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
    <section id="advantages" className="bg-white py-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 transform -skew-x-12 px-8 py-4 inline-block shadow-2xl rounded-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold transform skew-x-12 text-white">6 причин выбрать нас</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-5 mt-1 text-brand-yellow">
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

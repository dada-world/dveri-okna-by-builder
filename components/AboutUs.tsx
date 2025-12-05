'use client'

import { useRef, useEffect, useState } from 'react';

const AboutUs = () => {
  const [visible, setVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const element = aboutRef.current;

      if (element) {
        const position = element.getBoundingClientRect().top + window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollPosition = scrollY + windowHeight * 0.8;

        if (scrollPosition > position && !visible) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible]);

  useEffect(() => {
    if (visible) {
      // Start count animations when section becomes visible
      const duration = 2000; // 2 seconds duration
      const framesPerSecond = 60;
      const totalFrames = duration / 1000 * framesPerSecond;
      
      const target1 = 15;
      const target2 = 80;
      const target3 = 6;

      let frame = 0;
      
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        
        if (progress < 1) {
          setCount1(Math.floor(target1 * progress));
          setCount2(Math.floor(target2 * progress));
          setCount3(Math.floor(target3 * progress));
        } else {
          setCount1(target1);
          setCount2(target2);
          setCount3(target3);
          clearInterval(counter);
        }
      }, 1000 / framesPerSecond);
      
      return () => clearInterval(counter);
    }
  }, [visible]);

  return (
    <section id="about" className="py-24 bg-[#FFF5EC]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans tracking-tight mb-8">
            Почему <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">выбирают нас?</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up">
            Наша компания уже более <span className="text-brand-orange font-bold bg-orange-50 px-2 py-1 rounded-lg border border-orange-100">{count1}+</span> лет работает на рынке оконных конструкций. 
            Применяя новейшие технологии, контроль каждой детали, безупречный стиль мы смогли достичь высокого качества 
            предлагаемых товаров и услуг, главное - завоевали доверие тысяч потребителей!
          </p>
        </div>
        
        <div ref={aboutRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-[32px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="mb-4 inline-block p-4 rounded-2xl bg-orange-50 group-hover:scale-110 transition-transform duration-300">
               <span className="text-5xl font-bold text-brand-orange">{count1}+</span>
            </div>
            <p className="text-lg font-medium text-gray-600">
              лет опыта работы в сфере оконных технологий
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-10 rounded-[32px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="mb-4 inline-block p-4 rounded-2xl bg-orange-50 group-hover:scale-110 transition-transform duration-300">
               <span className="text-5xl font-bold text-brand-orange">{count2}%</span>
            </div>
            <p className="text-lg font-medium text-gray-600">
              клиентов обращаются к нам повторно
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-10 rounded-[32px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="mb-4 inline-block p-4 rounded-2xl bg-orange-50 group-hover:scale-110 transition-transform duration-300">
               <span className="text-5xl font-bold text-brand-orange">{count3} <span className="text-3xl text-gray-400">из</span> 10</span>
            </div>
            <p className="text-lg font-medium text-gray-600">
              новых клиентов приходят по рекомендациям
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

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
    <section id="about" className="py-16 bg-[#FFF5EC] animate-on-scroll">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-6 animate-fade-in-up">
            <div className="bg-gradient-to-r from-green-500 via-green-600 to-teal-600 transform -skew-x-12 px-8 py-4 inline-block shadow-2xl rounded-xl border border-white/20 hover-glow animate-wobble-slight">
              <h2 className="text-4xl font-bold transform skew-x-12 text-white animate-pulse-soft">Почему мы?</h2>
            </div>
          </div>
          <p className="text-xl text-gray-600 animate-fade-in-up animate-stagger-1">
            Наша компания уже более <span className="text-brand-orange font-bold animate-bounce-subtle">{count1}+</span> лет работает на рынке оконных конструкций. Применяя новейшие технологии, контроль каждой детали, безупречный стиль мы смогли достичь высокого качества предлагаемых товаров и услуг, главное - завоевали доверие тысяч потребителей!
          </p>
        </div>

        <div ref={aboutRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm animate-fade-in-up animate-stagger-2 card-hover hover-glow">
            <div className="text-4xl font-bold mb-4">
              <span className="text-brand-orange animate-bounce-subtle">{count1}+</span>
            </div>
            <p className="text-lg text-gray-600 animate-fade-in-up animate-stagger-3">
              лет опыта работы в сфере оконных технологий
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm animate-fade-in-up animate-stagger-3 card-hover hover-glow">
            <div className="text-4xl font-bold mb-4">
              <span className="text-brand-orange animate-bounce-subtle">{count2}%</span>
            </div>
            <p className="text-lg text-gray-600 animate-fade-in-up animate-stagger-4">
              клиентов обращаются к нам повторно
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm animate-fade-in-up animate-stagger-4 card-hover hover-glow">
            <div className="text-4xl font-bold mb-4">
              <span className="text-brand-orange animate-bounce-subtle">{count3} из 10</span>
            </div>
            <p className="text-lg text-gray-600 animate-fade-in-up animate-stagger-5">
              новых клиентов обращаются к нам по рекомендациям от довольных заказчиков
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

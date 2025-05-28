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
      const target2 = 5000;
      const target3 = 10000;

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
    <section id="about" className="py-16 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">О нас</h2>
          <p className="text-xl text-gray-600">
            Наша компания уже более <span className="text-brand-orange font-bold">{count1}+</span> лет работает на рынке оконных конструкций. Применяя новейшие технологии, контроль каждой детали, безупречный стиль мы смогли достичь высокого качества предлагаемых товаров и услуг, главное - завоевали доверие тысяч потребителей!
          </p>
        </div>
        
        <div ref={aboutRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="text-4xl font-bold mb-4">
              <span className="text-brand-orange">{count1}+</span>
            </div>
            <p className="text-lg text-gray-600">
              лет опыта работы в сфере оконных технологий
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="text-4xl font-bold mb-4">
              <span className="text-brand-orange">{count2}+</span>
            </div>
            <p className="text-lg text-gray-600">
              установленных окон в жилых и коммерческих помещениях
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="text-4xl font-bold mb-4">
              <span className="text-brand-orange">{count3}+</span>
            </div>
            <p className="text-lg text-gray-600">
              довольных клиентов рекомендуют нас своим знакомым
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

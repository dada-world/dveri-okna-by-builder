'use client'

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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

  const userImages = [
    "/lovable-uploads/76c10cc3-6dab-4728-9d5f-264aa6a1e4b8.png",
    "/lovable-uploads/89c8bfb5-7110-47b8-a2bf-d25e93b9bb94.png",
    "/lovable-uploads/cd43adf0-93d5-43d1-8db8-a3df1eb8eb32.png",
    "/lovable-uploads/f3f46460-0fef-4610-bd88-a102d5fefff3.png"
  ];

  return (
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden bg-[#FDFCFB]"
    >
      {/* Modern Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-orange-50/50 rounded-full blur-[100px] translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={portfolioRef} 
          className="opacity-0 transition-opacity duration-1000 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Text Content Side - Bento Style */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Наши работы</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tighter mb-6">
                  ВДОХНОВЕНИЕ <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-600">В КАЖДОМ</span> <br/>
                  ПРОЕКТЕ
                </h2>
                
                <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
                  Посмотрите реальные примеры наших работ. Мы гордимся каждым установленным окном и дверью, создавая уют для наших клиентов.
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <Link 
                    href="/portfolio" 
                    className="group bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 flex items-center gap-2 shadow-xl"
                  >
                    Смотреть все работы
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </Link>
                  
                  <div className="flex -space-x-3 pl-2">
                     {userImages.map((src, i) => (
                       <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white bg-gray-100 overflow-hidden relative z-0 hover:z-10 hover:scale-110 transition-transform cursor-pointer shadow-sm">
                         <img src={src} alt={`Client ${i+1}`} className="w-full h-full object-cover" />
                       </div>
                     ))}
                     <div className="w-12 h-12 rounded-full border-[3px] border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 relative z-10 shadow-sm">
                       +500
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Side - Modern Card */}
            <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl group border-4 border-white">
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              <img 
                src="/lovable-uploads/fc927ff3-e72c-4e2c-98ff-7b7c6811512e.png" 
                alt="Портфолио" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/80 text-sm mb-2 font-medium">Последний проект</p>
                      <h3 className="text-white text-2xl font-bold">Остекление коттеджа</h3>
                    </div>
                    <div className="bg-white rounded-full p-3 cursor-pointer hover:bg-gray-100 transition-colors">
                      <ArrowRight className="w-5 h-5 text-gray-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

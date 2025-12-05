import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

const Hero = () => {
  const userImages = [
    "/lovable-uploads/06109cee-21de-482d-90df-9f3de9229638.png",
    "/lovable-uploads/251f8b97-522e-4a32-95fa-0964d05c98fb.png",
    "/lovable-uploads/653b459a-6124-494c-ba37-2cad708e0d56.png",
  ];

  return (
    <div className="relative min-h-[800px] flex items-center bg-[#FDFCFB] overflow-hidden font-sans">
      {/* Background Gradients - Subtle Warmth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-orange-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content - Typography Heavy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-8 animate-fade-in">
               <span className="text-brand-orange font-bold tracking-wider text-sm uppercase mb-4 block">DVERI OKNA BY</span>
               
               <div className="space-y-2 md:space-y-4">
                 <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter">
                   ОКНА ПВХ
                 </h1>
                 
                 <div className="flex items-center gap-4">
                   <div className="h-px bg-gray-900 flex-1 max-w-[100px]"></div>
                   <ArrowRight className="w-8 h-8 text-gray-900" />
                   <span className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                     ВЫГОДНО
                   </span>
                 </div>

                 <div className="inline-block border-2 border-gray-900 rounded-full px-6 py-2 md:px-8 md:py-3 mt-2">
                   <span className="text-4xl md:text-6xl font-light text-gray-900 tracking-tighter block">
                     КАЧЕСТВЕННО
                   </span>
                 </div>

                 <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-[0.9] tracking-tighter">
                   НА ВЕКА
                 </h2>
               </div>
            </div>

            <p className="text-gray-500 text-lg max-w-md mb-10 leading-relaxed">
              Создаем уют и комфорт в вашем доме. Бесплатная доставка, профессиональный монтаж и честные цены.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/calculator" 
                className="bg-[#E58E53] hover:bg-[#d67d42] text-white px-8 py-4 rounded-full font-medium transition-all hover:-translate-y-1 flex items-center gap-2 shadow-lg shadow-orange-200"
              >
                Рассчитать стоимость
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <a 
                href="#contact" 
                className="bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-full font-medium transition-all hover:bg-gray-50 hover:border-gray-300 flex items-center gap-2"
              >
                Связаться
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Bento Grid */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full min-h-[500px]">
              
              {/* Main Image Card (Top Full Width or Big Square) */}
              <div className="md:col-span-2 relative h-[300px] md:h-[350px] rounded-[32px] overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-500 border border-white">
                <img 
                  src="/lovable-uploads/fc927ff3-e72c-4e2c-98ff-7b7c6811512e.png" 
                  alt="Windows" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                
                {/* Floating Tags on Image */}
                <div className="absolute top-6 right-6 flex flex-col gap-2">
                   <div className="bg-white/20 backdrop-blur-md border border-white/30 p-1 rounded-full">
                     <div className="bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100 transition-colors">
                       <ArrowUpRight className="w-4 h-4 text-gray-900" />
                     </div>
                   </div>
                </div>

                <div className="absolute bottom-8 left-8 text-white max-w-xs">
                  <div className="bg-orange-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold inline-block mb-3">
                    ТОП ПРОДАЖ
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-2">Энергосберегающие технологии</h3>
                  <p className="text-sm text-white/80">Тепло зимой, прохладно летом</p>
                </div>
              </div>

              {/* Stats Card (Bottom Left) */}
              <div className="bg-white rounded-[32px] p-6 md:p-8 flex flex-col justify-between shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-lg transition-all">
                <div className="flex -space-x-3 mb-6 relative z-10">
                   {userImages.map((src, i) => (
                     <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                       <img src={src} alt="Client" className="w-full h-full object-cover" />
                     </div>
                   ))}
                   <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-900 text-white flex items-center justify-center text-xs font-bold">
                     +
                   </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-gray-900 mb-1">10,000+</h3>
                  <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">Довольных клиентов</p>
                  
                  {/* Progress bar visual */}
                  <div className="w-full h-2 bg-gray-100 rounded-full mt-6 overflow-hidden">
                    <div className="h-full bg-gray-900 w-[85%] rounded-full"></div>
                  </div>
                </div>
                
                {/* Background decorative icon */}
                <div className="absolute -bottom-4 -right-4 text-gray-50 opacity-50">
                  <ShieldCheck className="w-32 h-32" />
                </div>
              </div>

              {/* Feature Card (Bottom Right) */}
              <div className="bg-[#F5F5F7] rounded-[32px] p-6 md:p-8 shadow-sm border border-white relative overflow-hidden group hover:shadow-lg transition-all">
                 <div className="flex justify-between items-start mb-8">
                   <div className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-gray-200">
                     New
                   </div>
                   <div className="bg-black rounded-full p-2 text-white transform group-hover:rotate-45 transition-transform">
                     <ArrowUpRight className="w-4 h-4" />
                   </div>
                 </div>

                 <div className="relative z-10">
                   <p className="text-gray-500 text-sm mb-2">Рассрочка 0%</p>
                   <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                     Покупай сейчас,<br/>плати потом
                   </h3>
                 </div>
                 
                 <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-white/50 to-transparent"></div>
                 
                 {/* 3D visual placeholder */}
                 <div className="absolute bottom-[-20px] right-[-20px] opacity-80">
                    <Zap className="w-32 h-32 text-orange-400/20" />
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;

import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-[650px] flex items-center overflow-hidden animate-fade-in">
      {/* Golden-yellow to orange retro background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-orange-400 to-orange-500">

        {/* Static sunburst rays from bottom center */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="absolute origin-bottom"
              style={{
                width: '8px',
                height: '120vh',
                background: `linear-gradient(to top,
                  rgba(255, 255, 255, 0.5) 0%,
                  rgba(255, 255, 255, 0.3) 50%,
                  rgba(255, 255, 255, 0) 100%)`,
                transform: `rotate(${(i - 30) * 3}deg)`,
                left: '50%',
                bottom: '0',
                transformOrigin: 'bottom center',
                marginLeft: '-4px'
              }}
            />
          ))}

          {/* Secondary medium rays for density */}
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={`medium-${i}`}
              className="absolute origin-bottom"
              style={{
                width: '4px',
                height: '110vh',
                background: `linear-gradient(to top,
                  rgba(255, 255, 255, 0.3) 0%,
                  rgba(255, 255, 255, 0.15) 40%,
                  rgba(255, 255, 255, 0) 100%)`,
                transform: `rotate(${(i - 60) * 1.5}deg)`,
                left: '50%',
                bottom: '0',
                transformOrigin: 'bottom center',
                marginLeft: '-2px'
              }}
            />
          ))}

          {/* Tertiary thin rays for maximum density */}
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={`thin-${i}`}
              className="absolute origin-bottom"
              style={{
                width: '2px',
                height: '100vh',
                background: `linear-gradient(to top,
                  rgba(255, 255, 255, 0.2) 0%,
                  rgba(255, 255, 255, 0.1) 30%,
                  rgba(255, 255, 255, 0) 100%)`,
                transform: `rotate(${(i - 100) * 0.9}deg)`,
                left: '50%',
                bottom: '0',
                transformOrigin: 'bottom center',
                marginLeft: '-1px'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 px-6 py-8 md:py-16">
        <div className="flex flex-col items-center justify-center text-center max-w-7xl mx-auto group gap-2 md:gap-4">
          {/* Main banner shape with enhanced styling - centered */}
          <div className="relative mb-1 md:mb-2 w-full flex justify-center">
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 px-8 py-4 md:px-16 md:py-8 lg:px-28 lg:py-14 rounded-xl shadow-2xl border border-white/20 transition-all duration-500 group-hover:scale-105 animate-scale-in w-full max-w-4xl">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-wide text-white font-sans text-center">
                Окна и двери ПВХ
              </h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left max-w-7xl mx-auto group gap-2 md:gap-4">
            {/* Text content */}
            <div className="text-white flex-1 flex flex-col items-center">
              {/* Second text with enhanced colorful background */}
              <div className="relative mb-1 w-full flex justify-center">
                <div className="bg-gradient-to-r from-green-500 via-green-600 to-teal-600 px-4 py-3 md:px-8 md:py-6 rounded-xl shadow-2xl border border-white/20 transition-all duration-500 group-hover:scale-105 animate-scale-in w-full max-w-4xl" style={{animationDelay: '0.2s'}}>
                  <h2 className="text-lg md:text-2xl lg:text-5xl font-bold text-white tracking-wide font-sans text-center">
                    Бесплатная доставка по РБ
                  </h2>
                </div>
              </div>

              {/* Third text with enhanced colorful background */}
              <div className="relative mb-2 md:mb-3 w-full flex justify-center">
                <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 px-4 py-3 md:px-8 md:py-6 rounded-xl shadow-2xl border border-white/20 transition-all duration-500 group-hover:scale-105 animate-scale-in w-full max-w-4xl" style={{animationDelay: '0.4s'}}>
                  <h3 className="text-lg md:text-xl lg:text-4xl font-bold text-white tracking-wide font-sans text-center">
                    Без монтажа и переплат
                  </h3>
                </div>
              </div>

              {/* Descriptive text */}
              <div className="mb-3 md:mb-4 animate-fade-in w-full flex justify-center" style={{animationDelay: '0.6s'}}>
                <p className="text-sm md:text-lg lg:text-2xl text-white font-medium leading-relaxed max-w-4xl mx-auto bg-black/20 backdrop-blur-sm rounded-2xl px-4 py-3 md:px-8 md:py-6 border border-white/20 transition-all duration-300 hover:bg-black/30 text-center">
                  Надежные окна и двери ПВХ с бесплатной доставкой по РБ - комфорт без переплат!
                </p>
              </div>

              {/* Enhanced buttons */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center lg:justify-start animate-fade-in w-full" style={{animationDelay: '0.8s'}}>
                <Link
                  href="/calculator"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-3 md:px-14 md:py-5 rounded-full transition-all duration-300 text-lg md:text-xl shadow-2xl hover:shadow-red-500/30 transform hover:-translate-y-2 hover:scale-105 uppercase tracking-wider border border-white/20 text-center"
                >
                  Рассчитать стоимость
                </Link>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 md:px-12 md:py-5 rounded-full transition-all duration-300 text-lg md:text-xl shadow-xl hover:shadow-white/30 transform hover:-translate-y-1 backdrop-blur-sm bg-white/10 text-center"
                >
                  Связаться с нами
                </a>
              </div>
            </div>

            {/* Window image - hidden on mobile, visible on desktop */}
            <div className="hidden lg:flex flex-1 lg:flex-none lg:w-2/3 max-w-2xl animate-scale-in" style={{animationDelay: '1s'}}>
              <div className="relative">
                <img
                  src="/lovable-uploads/fc927ff3-e72c-4e2c-98ff-7b7c6811512e.png"
                  alt="Пластиковые окна ПВХ"
                  className="w-full h-auto drop-shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1 cursor-pointer"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

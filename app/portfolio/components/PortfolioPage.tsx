'use client'

// Portfolio organization by categories - Mon Jan 13 2025 20:45:00 +03
// Фотографии организованы по папкам: Окна (14 шт) и Двери (12 шт)
// Updated: 3 комбинированные фотографии перемещены в папку Двери
// Cache fix: добавлен параметр ?v=2025 для принудительного обновления кеша
// Mobile fix: русские названия папок для лучшей организации
// Mobile UX: улучшенные touch-события, большие кнопки и адаптивный дизайн
// Mobile improvements: удалены onTouchEnd события, улучшен responsive дизайн

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";

const portfolioImages: Array<{src: string; alt: string; category: string}> = [
  // ОКНА
  {
    src: "/lovable-uploads/windows/c28c989c-3309-4eb0-9ef8-2cd5e9c2acec.png?v=2025",
    alt: "",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/windows/1bbbaca7-93c1-444c-80b5-5d32d9176822.png?v=2025",
    alt: "",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/windows/1e8ee32d-0fd5-433d-ae08-d7dbe2c80d53.png?v=2025",
    alt: "",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/windows/a870395e-92a4-45c4-b768-8a67a516e22b.png?v=2025",
    alt: "",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/windows/bc50b004-a5da-4933-b08d-308e4e721760.png?v=2025",
    alt: "",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/windows/0ff6a3ce-ad45-46a5-81cb-dc3fb9b3617b.png?v=2025",
    alt: "",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/windows/a662a934-24ed-4cac-8191-15134efd4c0e.png?v=2025",
    alt: "",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/windows/bca390b2-69a1-4634-acfe-9ebf4b324d1f.png?v=2025",
    alt: "",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/windows/4b4a93b2-840a-4843-aeff-57513faa3e3d.png?v=2025",
    alt: "",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/windows/8e2b30d3-c283-4178-946d-e7b78968f2c5.png?v=2025",
    alt: "",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/windows/2e7b11a4-8e01-48d9-9eb0-f6b0a0311d1b.png?v=2025",
    alt: "",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/doors/072e5201-cf25-4290-8c68-000e30a7463f.png?v=2025",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/a3fee1b6-658f-4052-a7f3-ff07a86a0101.png?v=2025",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/ade91ed9-baa1-4c74-88ce-f33e1ff0727f.png?v=2025",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/windows/2880df95-8940-416b-90fe-8d815f8f4fff.png?v=2025",
    alt: "",
    category: "Окна"
  },
  {
    src: "/lovable-uploads/windows/7dd23bd1-624f-4386-b886-d867e990faae.png?v=2025",
    alt: "",
    category: "Окна"
  },
  
  // ДВЕРИ
  {
    src: "/lovable-uploads/doors/926930bf-2f14-4680-a760-9ab3f3ad6f59.png?v=2025",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/acf01a73-d054-48e2-b15f-81d2264f566b.png?v=2025",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/f94c3198-586f-4be8-bf09-dda086360082.png?v=2025",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/5c3bc3b9-f688-460e-9078-b5f0ecd17014.png?v=2025",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/e9d0f43b-560e-4788-a121-f74e6614f06c.png?v=2025",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/c4a41f14-224b-4b89-80ee-eb94e6134070.png?v=2025",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/5d86d7a2-3aac-4bed-9ebd-cdeeb3f2004d.png?v=2025",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/7899a64a-10e8-4780-ae70-2df0a061ad79.png?v=2025",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/12ef9963-23c6-4f38-8b39-31aa4c9f7f71.png?v=2025",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/70427fce-56ad-45ce-a8b6-6c38c45490fd.png?v=2025",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/два.jpg",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/три.jpg",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/четыре.jpg",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/пять.jpg",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/шесть.jpg",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/семь.jpg",
    alt: "",
    category: "Двери"
  },
  {
    src: "/lovable-uploads/doors/восемь.jpg",
    alt: "",
    category: "Двери"
  }
];

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const handleImageError = (src: string) => {
    setImageErrors(prev => new Set(prev).add(src));
  };

  const filteredImages = selectedCategory === "Все" 
    ? portfolioImages 
    : portfolioImages.filter(image => image.category === selectedCategory);



  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="py-8 md:py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-10 space-y-4 md:space-y-0">
            <h1 className="text-2xl md:text-4xl font-bold">Примеры наших работ</h1>
            <Link href="/" className="text-brand-blue hover:underline text-sm md:text-base">
              Вернуться на главную
            </Link>
          </div>

          {/* Фильтры по категориям */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8">
            <button
              key="all"
              onClick={() => setSelectedCategory("Все")}
              className={`px-4 md:px-6 py-3 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base min-h-[44px] shadow-lg ${selectedCategory === "Все" ? "bg-red-500 text-white" : "bg-gray-100 text-gray-800"}`}
            >
              Все работы
            </button>
            <button
              key="windows"
              onClick={() => setSelectedCategory("Окна")}
              className={`px-4 md:px-6 py-3 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base min-h-[44px] shadow-lg ${selectedCategory === "Окна" ? "bg-red-500 text-white" : "bg-gray-100 text-gray-800"}`}
            >
              Окна
            </button>
            <button
              key="doors"
              onClick={() => setSelectedCategory("Двери")}
              className={`px-4 md:px-6 py-3 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base min-h-[44px] shadow-lg ${selectedCategory === "Двери" ? "bg-red-500 text-white" : "bg-gray-100 text-gray-800"}`}
            >
              Двери
            </button>
          </div>

          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg md:text-xl text-gray-600">В выбранной категории пока нет работ</p>
            </div>
          ) : (
            <div key={selectedCategory} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={index} 
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                  onClick={() => openLightbox(image.src, image.alt)}
                >
                  <div className="relative group aspect-square">
                    {!imageErrors.has(image.src) ? (
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={() => handleImageError(image.src)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <div className="text-center text-gray-500 p-4">
                          <div className="text-2xl md:text-4xl mb-2">🖼️</div>
                          <div className="text-xs md:text-sm">Изображение недоступно</div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium text-sm md:text-base bg-black bg-opacity-50 px-3 py-1 rounded-full">
                        👆 Увеличить
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

          {/* Дополнительная информация для мобильных */}
          <div className="mt-8 md:mt-12 text-center">
            <div className="bg-gray-50 rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Нужна консультация?</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Свяжитесь с нами для расчета стоимости ваших окон и дверей
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="tel:+375291234567" 
                  className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm md:text-base min-h-[44px] flex items-center justify-center"
                >
                  📞 Позвонить
                </a>
                <Link 
                  href="/calculator" 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-3 rounded-full transition-colors text-sm md:text-base min-h-[44px] flex items-center justify-center"
                >
                  🧮 Калькулятор
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {selectedImage && (
        <ImageLightbox 
          imageUrl={selectedImage} 
          alt={selectedAlt} 
          onClose={closeLightbox} 
        />
      )}
    </div>
  );
};

export default PortfolioPage;

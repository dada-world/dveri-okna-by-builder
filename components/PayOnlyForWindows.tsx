
const PayOnlyForWindows = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans tracking-tight mb-6">
              Платите только за <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">окна!</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            
            {/* Feature Card 1 - "Fair Price" */}
            <div className="lg:col-span-1 bg-[#F8F8F8] p-8 rounded-[32px] relative overflow-hidden group hover:bg-[#F0F0F0] transition-colors duration-500">
               <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-bl-[100px] opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
               <div className="relative z-10 flex flex-col h-full justify-between">
                 <div>
                   <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm mb-6">
                     💰
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                     Честная<br/>цена
                   </h3>
                 </div>
                 <p className="text-gray-500 font-medium leading-relaxed text-sm">
                   В стандартную цену на окна «под ключ» закладываются все расходы, а в случае с дилерами еще и наценка, еще более увеличивающая стоимость окна, как минимум, наполовину.
                 </p>
               </div>
            </div>

            {/* Image Card - Central Visual */}
            <div className="lg:col-span-1 row-span-2 relative rounded-[32px] overflow-hidden h-[500px] lg:h-auto group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
              <img 
                src="/lovable-uploads/85eacec9-72f8-4633-9afd-f88f218fa7f6.png" 
                alt="Экономия при покупке окон"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-md p-6 rounded-[24px] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">Выгода до 40%</span>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Card 2 - "Direct from Production" */}
            <div className="lg:col-span-1 bg-[#F8F8F8] p-8 rounded-[32px] relative overflow-hidden group hover:bg-[#F0F0F0] transition-colors duration-500">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-tr-[100px] opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
               <div className="relative z-10 flex flex-col h-full justify-between">
                 <div>
                   <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm mb-6">
                     🏭
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                     Прямо с<br/>производства
                   </h3>
                 </div>
                 <p className="text-gray-500 font-medium leading-relaxed text-sm">
                    Мы предлагаем Окна и Двери ПВХ без установки по ценам нашего производства — без скрытых доплат.
                 </p>
               </div>
            </div>
            
            {/* Decorative/Extra Info Card */}
             <div className="lg:col-span-1 bg-black text-white p-8 rounded-[32px] relative overflow-hidden flex flex-col justify-center items-center text-center group">
               <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black z-0"></div>
               <div className="relative z-10">
                 <span className="text-5xl mb-2 block">💎</span>
                 <h4 className="text-xl font-bold mb-2">Гарантия качества</h4>
                 <p className="text-gray-400 text-sm">Сертифицированные материалы и фурнитура</p>
               </div>
             </div>

             <div className="lg:col-span-1 bg-brand-blue text-white p-8 rounded-[32px] relative overflow-hidden flex flex-col justify-center items-center text-center group">
               <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
               <div className="relative z-10">
                 <span className="text-5xl mb-2 block">🚀</span>
                 <h4 className="text-xl font-bold mb-2">Быстрая доставка</h4>
                 <p className="text-blue-100 text-sm">По всей Беларуси в кратчайшие сроки</p>
               </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PayOnlyForWindows;

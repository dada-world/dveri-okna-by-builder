
const PayOnlyForWindows = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 transform -skew-x-12 px-8 py-4 inline-block shadow-2xl rounded-xl border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold transform skew-x-12 text-white">
                Платите только за окна!
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div className="w-full text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                В стандартную цену на окна «под ключ» закладываются все расходы, а в случае с дилерами еще и наценка, еще более увеличивающая стоимость окна, как минимум, наполовину.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Мы предлагаем Окна и Двери ПВХ без установки по ценам нашего производства — без скрытых доплат.
              </p>
            </div>

            <div className="w-full">
              <img
                src="/lovable-uploads/85eacec9-72f8-4633-9afd-f88f218fa7f6.png"
                alt="Экономия при покупке окон без установки"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayOnlyForWindows;

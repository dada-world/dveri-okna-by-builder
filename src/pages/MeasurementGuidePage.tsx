
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MeasurementGuidePage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-bold">Как правильно замерить пластиковое окно?</h1>
            <Link to="/" className="text-brand-blue hover:underline">
              Вернуться на главную
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Точный замер оконных проемов — это основа качественной установки пластиковых окон. От правильности измерений зависит не только внешний вид, но и функциональность окна, его энергоэффективность и долговечность. В этом руководстве мы подробно расскажем, как правильно измерить оконный проем для разных типов конструкций.
              </p>
            </div>

            {/* Navigation Menu */}
            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Выберите тип замера:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => scrollToSection('zameer-s-chetvertyu')}
                  className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-6 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Замер окна с четвертью
                </button>
                <button
                  onClick={() => scrollToSection('zameer-bez-chetvertey')}
                  className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-6 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Замер окна без четвертей
                </button>
                <button
                  onClick={() => scrollToSection('zameer-moskitnoy-setki')}
                  className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-6 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Замер москитной сетки
                </button>
              </div>
            </div>

            {/* Общие принципы замера */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Что нужно знать перед началом замера</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Прежде чем приступить к замерам, важно понимать, что существует два основных типа оконных проемов:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <ul className="list-disc pl-6 text-gray-700 space-y-3">
                    <li><strong>Проем с четвертью</strong> — наиболее распространенный тип в многоэтажных домах. Четверть — это выступ стены внутрь проема, который обеспечивает более надежное крепление окна и лучшую теплоизоляцию.</li>
                    <li><strong>Проем без четверти</strong> — прямоугольное отверстие в стене без выступов, чаще встречается в частных домах и некоторых типах панельных домов.</li>
                  </ul>
                </div>
                <h3 className="text-xl font-semibold mb-4">Необходимые инструменты:</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Рулетка (желательно металлическая, длиной не менее 3 метров)</li>
                  <li>Строительный уровень</li>
                  <li>Карандаш и бумага для записей</li>
                  <li>Линейка или угольник</li>
                  <li>Фонарик (для измерений в труднодоступных местах)</li>
                </ul>
              </div>
            </div>

            {/* Замер окна с четвертью */}
            <section id="zameer-s-chetvertyu" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Замер окна с четвертью</h2>
              <div className="prose prose-lg max-w-none">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                  <p className="text-green-800 font-medium">
                    Четверть — это L-образный выступ стены в оконном проеме. Она служит для лучшего примыкания окна к стене и повышения теплоизоляционных свойств.
                  </p>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Измерение ширины окна с четвертью:</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <ol className="list-decimal pl-6 text-gray-700 space-y-4">
                    <li><strong>Найдите самое узкое место</strong> — измерьте расстояние между четвертями в верхней, средней и нижней части проема. Возьмите наименьший размер.</li>
                    <li><strong>Добавьте припуски на четверти</strong> — к полученному размеру прибавьте 30-40 мм (по 15-20 мм с каждой стороны для захода рамы за четверть).</li>
                    <li><strong>Учтите монтажный зазор</strong> — если четверть меньше 50 мм, может потребоваться корректировка размера.</li>
                  </ol>
                </div>

                <h3 className="text-2xl font-semibold mb-4">Измерение высоты окна с четвертью:</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <ol className="list-decimal pl-6 text-gray-700 space-y-4">
                    <li><strong>Измерьте высоту проема</strong> — от верхней четверти до подоконника (или нижней части проема).</li>
                    <li><strong>Прибавьте заход на верхнюю четверть</strong> — обычно 15-25 мм.</li>
                    <li><strong>Вычтите место под подоконник</strong> — если планируется установка нового подоконника, отнимите 30-40 мм.</li>
                    <li><strong>Учтите отлив</strong> — если устанавливается новый отлив, может потребоваться дополнительная корректировка.</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">Важные нюансы при замере с четвертью:</h4>
                  <ul className="list-disc pl-6 text-yellow-700 space-y-2">
                    <li>Проверьте симметричность четвертей — они могут отличаться с разных сторон</li>
                    <li>Убедитесь в вертикальности и горизонтальности проема с помощью уровня</li>
                    <li>При значительных отклонениях (более 15 мм) обязательно укажите это в замерном листе</li>
                    <li>Измерьте глубину четверти — она должна быть не менее 12-15 мм для надежного крепления</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-4">Формула расчета для окна с четвертью:</h3>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="font-mono text-blue-800">
                    <strong>Ширина окна</strong> = Ширина проема (самое узкое место) + 30-40 мм<br/>
                    <strong>Высота окна</strong> = Высота проема + 15-25 мм (верх) - 30-40 мм (подоконник)
                  </p>
                </div>
              </div>
            </section>

            {/* Замер окна без четвертей */}
            <section id="zameer-bez-chetvertey" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Замер окна без четвертей</h2>
              <div className="prose prose-lg max-w-none">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <p className="text-blue-800 font-medium">
                    Проем без четверти — это прямоугольное отверстие в стене, где оконная рама устанавливается заподлицо со стеной или с небольшим заглублением.
                  </p>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Измерение ширины окна без четверти:</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <ol className="list-decimal pl-6 text-gray-700 space-y-4">
                    <li><strong>Измерьте ширину в трех точках</strong> — вверху, посередине и внизу проема.</li>
                    <li><strong>Выберите наименьший размер</strong> — это будет базовый размер для расчета.</li>
                    <li><strong>Отнимите монтажные зазоры</strong> — по 20-30 мм с каждой стороны (итого 40-60 мм).</li>
                    <li><strong>Учтите толщину будущей отделки</strong> — если планируется штукатурка или обшивка.</li>
                  </ol>
                </div>

                <h3 className="text-2xl font-semibold mb-4">Измерение высоты окна без четверти:</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <ol className="list-decimal pl-6 text-gray-700 space-y-4">
                    <li><strong>Измерьте высоту в трех точках</strong> — слева, по центру и справа.</li>
                    <li><strong>Выберите наименьший размер</strong> — базовая высота проема.</li>
                    <li><strong>Отнимите верхний монтажный зазор</strong> — 20-30 мм сверху.</li>
                    <li><strong>Отнимите место под подоконник</strong> — 30-50 мм снизу.</li>
                    <li><strong>Учтите неровности</strong> — если пол или потолок имеют уклон.</li>
                  </ol>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6">
                  <h4 className="font-semibold text-red-800 mb-2">Критически важно для проемов без четверти:</h4>
                  <ul className="list-disc pl-6 text-red-700 space-y-2">
                    <li>Оставить достаточные монтажные зазоры — иначе окно не войдет в проем</li>
                    <li>Проверить диагонали проема — разница не должна превышать 10 мм</li>
                    <li>Учесть все планируемые отделочные работы</li>
                    <li>Предусмотреть место для крепежных элементов</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-4">Формула расчета для окна без четверти:</h3>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="font-mono text-blue-800">
                    <strong>Ширина окна</strong> = Ширина проема (минимальная) - 40-60 мм<br/>
                    <strong>Высота окна</strong> = Высота проема (минимальная) - 50-80 мм
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mt-6">
                  <h4 className="font-semibold text-amber-800 mb-2">Дополнительные рекомендации:</h4>
                  <ul className="list-disc pl-6 text-amber-700 space-y-2">
                    <li>При большой кривизне проема (более 20 мм) рассмотрите возможность его выравнивания</li>
                    <li>Если окно устанавливается в деревянном доме, учтите возможную усадку</li>
                    <li>Для проемов шириной более 1,5 м обязательно проверьте несущую способность перемычки</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Замер москитной сетки */}
            <section id="zameer-moskitnoy-setki" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Замер москитной сетки</h2>
              <div className="prose prose-lg max-w-none">
                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-6">
                  <p className="text-purple-800 font-medium">
                    Москитная сетка измеряется по-разному в зависимости от типа крепления и конструкции. Рассмотрим основные варианты.
                  </p>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Рамочная москитная сетка (наружная установка):</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <ol className="list-decimal pl-6 text-gray-700 space-y-4">
                    <li><strong>Измерьте световой проем створки</strong> — внутренние размеры открывающейся части окна.</li>
                    <li><strong>Прибавьте размеры для захлеста</strong> — по 10-15 мм к ширине и высоте.</li>
                    <li><strong>Учтите тип крепления</strong> — для крепления на петли или Z-кронштейны размеры могут отличаться.</li>
                    <li><strong>Проверьте свободное открывание</strong> — сетка не должна мешать работе фурнитуры.</li>
                  </ol>
                </div>

                <h3 className="text-2xl font-semibold mb-4">Внутренняя (вставная) москитная сетка:</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <ol className="list-decimal pl-6 text-gray-700 space-y-4">
                    <li><strong>Измерьте внутренний размер рамы</strong> — по штапику стеклопакета.</li>
                    <li><strong>Отнимите зазоры для установки</strong> — по 2-3 мм с каждой стороны.</li>
                    <li><strong>Учтите глубину посадки</strong> — обычно 10-15 мм.</li>
                    <li><strong>Проверьте отсутствие препятствий</strong> — ручки, ограничители и др.</li>
                  </ol>
                </div>

                <h3 className="text-2xl font-semibold mb-4">Рулонная москитная сетка:</h3>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <ol className="list-decimal pl-6 text-gray-700 space-y-4">
                    <li><strong>Измерьте проем для короба</strong> — обычно верхняя часть оконного проема.</li>
                    <li><strong>Определите размер защищаемой площади</strong> — полный световой проем.</li>
                    <li><strong>Учтите место для направляющих</strong> — по бокам проема.</li>
                    <li><strong>Проверьте возможность крепления</strong> — достаточная толщина рамы или откосов.</li>
                  </ol>
                </div>

                <Accordion type="single" collapsible className="mt-8">
                  <AccordionItem value="types">
                    <AccordionTrigger>Типы москитных сеток и особенности замера</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6">
                        <div className="border-l-4 border-gray-300 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Рамочная сетка на петлях</h4>
                          <p className="text-gray-700 mb-2">Самый популярный тип. Крепится на петли с внешней стороны окна.</p>
                          <p className="text-sm text-gray-600"><strong>Замер:</strong> световой проем + 20-30 мм к ширине и высоте</p>
                        </div>
                        <div className="border-l-4 border-gray-300 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Сетка на Z-кронштейнах</h4>
                          <p className="text-gray-700 mb-2">Крепится без сверления, на специальные кронштейны.</p>
                          <p className="text-sm text-gray-600"><strong>Замер:</strong> точный световой проем створки</p>
                        </div>
                        <div className="border-l-4 border-gray-300 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Плиссированная сетка</h4>
                          <p className="text-gray-700 mb-2">Складывается гармошкой, подходит для больших проемов.</p>
                          <p className="text-sm text-gray-600"><strong>Замер:</strong> размер проема с учетом направляющих</p>
                        </div>
                        <div className="border-l-4 border-gray-300 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Магнитная сетка</h4>
                          <p className="text-gray-700 mb-2">Крепится на магнитах, легко снимается.</p>
                          <p className="text-sm text-gray-600"><strong>Замер:</strong> внутренний размер рамы по штапику</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="errors">
                    <AccordionTrigger>Частые ошибки при замере москитных сеток</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="bg-red-50 p-4 rounded">
                          <h5 className="font-semibold text-red-800">❌ Неправильный замер светового проема</h5>
                          <p className="text-red-700 text-sm">Измеряют по внешнему краю рамы вместо внутреннего</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded">
                          <h5 className="font-semibold text-red-800">❌ Забывают про фурнитуру</h5>
                          <p className="text-red-700 text-sm">Не учитывают выступающие ручки и ограничители</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded">
                          <h5 className="font-semibold text-red-800">❌ Неправильные припуски</h5>
                          <p className="text-red-700 text-sm">Слишком большие или маленькие припуски на крепление</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded">
                          <h5 className="font-semibold text-red-800">❌ Не проверяют тип открывания</h5>
                          <p className="text-red-700 text-sm">Сетка может мешать повороту или откидыванию створки</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-6">
                  <h4 className="font-semibold text-green-800 mb-2">💡 Полезные советы:</h4>
                  <ul className="list-disc pl-6 text-green-700 space-y-2">
                    <li>Всегда измеряйте каждую створку отдельно — размеры могут отличаться</li>
                    <li>Для нестандартных окон лучше заказать выезд замерщика</li>
                    <li>Учитывайте сезонные изменения — пластик может немного изменять размеры</li>
                    <li>При заказе указывайте цвет профиля окна для подбора цвета сетки</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Заключительные советы */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-6">Общие рекомендации и частые ошибки</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-green-700">✅ Что обязательно нужно делать:</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Измерять в нескольких точках</li>
                    <li>Использовать строительный уровень</li>
                    <li>Проверять диагонали проема</li>
                    <li>Учитывать планируемую отделку</li>
                    <li>Делать подробные записи и схемы</li>
                    <li>Фотографировать проблемные места</li>
                    <li>Измерять толщину стен</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-red-700">❌ Частые ошибки при замере:</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Замер только в одной точке</li>
                    <li>Игнорирование кривизны проема</li>
                    <li>Неучет толщины отделки</li>
                    <li>Замер по старой раме</li>
                    <li>Забывают про подоконник</li>
                    <li>Неправильный расчет четвертей</li>
                    <li>Малые монтажные зазоры</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-lg border-2 border-blue-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">📋 Чек-лист перед заказом окна:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Размеры проема:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>□ Ширина (в 3 точках)</li>
                      <li>□ Высота (в 3 точках)</li>
                      <li>□ Диагонали</li>
                      <li>□ Глубина четвертей</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Дополнительно:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>□ Толщина стены</li>
                      <li>□ Состояние проема</li>
                      <li>□ Планируемая отделка</li>
                      <li>□ Тип подоконника</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Сомневаетесь в точности замеров? Закажите бесплатный выезд нашего специалиста!
              </p>
              <Link to="/#contact" className="bg-brand-orange hover:bg-[#e69816] text-white font-medium px-8 py-3 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl inline-block">
                Заказать бесплатный замер
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MeasurementGuidePage;

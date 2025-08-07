
const Footer = () => {
  return (
    <div className="bg-brand-darkblue text-white">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4 animate-pulse-soft">Dverivokna</h3>
            <p className="max-w-xs text-gray-300 animate-stagger-1">
              Качественные окна и двери ПВХ по доступным ценам с бесплатной доставкой по РБ
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="animate-stagger-2">
              <h4 className="text-lg font-medium mb-4">О нас</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors hover-lift">О нас</a></li>
                <li><a href="#advantages" className="hover:text-white transition-colors hover-lift">Отзывы</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors hover-lift">Наши работы</a></li>
              </ul>
            </div>
            
            <div className="animate-stagger-3">
              <h4 className="text-lg font-medium mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#calculator" className="hover:text-white transition-colors hover-lift">Рассчитать стоимость</a></li>
              </ul>
            </div>
            
            <div className="animate-stagger-4">
              <h4 className="text-lg font-medium mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="tel:+375293423221" className="hover:text-white transition-colors hover-lift hover-glow">+375 29 342-32-21</a></li>
                <li><a href="mailto:vitaliy9977@mail.ru" className="hover:text-white transition-colors hover-lift hover-glow">vitaliy9977@mail.ru</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-400">
          <div className="mb-2">
            © 2023 Dverivokna. Все права защищены.
          </div>
          <div className="text-xs text-gray-500">
            ИП Рублевский В.В. | УНП 490628239
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

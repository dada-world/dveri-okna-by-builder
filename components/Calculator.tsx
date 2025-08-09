
'use client'

import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import WindowTypeSelector from "./WindowTypeSelector";
import WindowFrameSelector from "./WindowFrameSelector";

const Calculator = () => {
  const [step, setStep] = useState(1);
  const [windowType, setWindowType] = useState("");
  const [frameTypes, setFrameTypes] = useState<string[]>([]);
  const [dimensions, setDimensions] = useState({ width: "", height: "" });
  const [options, setOptions] = useState<string[]>([]);
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "", consent: false });
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Функция перевода опций на русский
  const translateOptions = (options: string[]): string => {
    const translations: { [key: string]: string } = {
      'mosquito': 'Москитная сетка',
      'drain': 'Отлив',
      'sill': 'Подоконник',
      'none': 'Ничего из перечисленного'
    };
    
    if (options.length === 0) return "нет";
    return options.map(option => translations[option] || option).join(", ");
  };

  const getWindowCount = (type: string) => {
    switch (type) {
      case "one-leaf":
        return 1;
      case "two-leaf":
        return 2;
      case "three-leaf":
        return 3;
      case "balcony-door-two-window":
        return 3; // 2 windows + 1 door
      case "balcony-door":
        return 2; // 1 window + 1 door
      case "other-type":
      default:
        return 0;
    }
  };

  const handleWindowTypeChange = (type: string) => {
    setWindowType(type);
    // Reset frames when window type changes
    setFrameTypes(Array(getWindowCount(type)).fill("fixed"));
  };

  const handleFrameTypeChange = (frames: string[]) => {
    setFrameTypes(frames);
  };

  const handleDimensionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDimensions({
      ...dimensions,
      [e.target.name]: e.target.value
    });
  };

  const toggleOption = (option: string) => {
    if (options.includes(option)) {
      setOptions(options.filter(o => o !== option));
    } else {
      if (option === "none" && options.length > 0) {
        setOptions(["none"]);
      } else if (options.includes("none")) {
        setOptions([...options.filter(o => o !== "none"), option]);
      } else {
        setOptions([...options, option]);
      }
    }
  };

  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const calculatePrice = () => {
    // Simple placeholder price calculation
    let basePrice = 0;
    
    switch (windowType) {
      case "one-leaf":
        basePrice = 5000;
        break;
      case "two-leaf":
        basePrice = 7000;
        break;
      case "three-leaf":
        basePrice = 9000;
        break;
      case "balcony-door-two-window":
      case "balcony-door":
        basePrice = 12000;
        break;
      default:
        basePrice = 5000;
    }
    
    // Add extras for premium frame types
    const framePrices = frameTypes.reduce((total, frame) => {
      if (frame === "swing") return total + 500;
      if (frame === "tilt-turn") return total + 1000;
      return total;
    }, 0);
    
    // Add price for dimensions
    const dimensionsMultiplier = dimensions.width && dimensions.height 
      ? (parseInt(dimensions.width) * parseInt(dimensions.height)) / 10000
      : 1;
    
    // Add price for options
    const optionsPrice = options.includes("none") ? 0 : options.length * 800;
    
    const total = Math.round((basePrice + framePrices) * dimensionsMultiplier + optionsPrice);
    setEstimatedPrice(total);
    
    return total;
  };

  const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '/api/contact';

  const nextStep = async () => {
    if (step === 1 && !windowType) {
      toast({
        title: "Ошибка",
        description: "Выберите тип окна",
        variant: "destructive"
      });
      return;
    }

    if (step === 2 && (!dimensions.width || !dimensions.height)) {
      toast({
        title: "Ошибка",
        description: "Укажите размеры окна",
        variant: "destructive"
      });
      return;
    }

    if (step === 4) {
      // Calculate final price before submission
      calculatePrice();
      
      if (!contactInfo.name || !contactInfo.phone || !contactInfo.consent) {
        toast({
          title: "Ошибка",
          description: "Заполните все обязательные поля",
          variant: "destructive"
        });
        return;
      }
      
      // Form submission logic
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: contactInfo.name,
            phone: contactInfo.phone,
            message: `Заявка с калькулятора: ${windowType}, размеры: ${dimensions.width}мм x ${dimensions.height}мм, опции: ${translateOptions(options)}, примерная стоимость: ${estimatedPrice} руб.`
          }),
        });

        const result = await response.json();

        if (result.success) {
          toast({
            title: "Заявка отправлена",
            description: "Мы свяжемся с вами в ближайшее время",
          });
          
          // Reset form
          setStep(1);
          setWindowType("");
          setFrameTypes([]);
          setDimensions({ width: "", height: "" });
          setOptions([]);
          setContactInfo({ name: "", phone: "", consent: false });
        } else {
          toast({
            title: "Ошибка",
            description: "Ошибка при отправке заявки. Попробуйте еще раз.",
            variant: "destructive"
          });
        }
      } catch (error) {
        console.error('Error:', error);
        toast({
          title: "Ошибка",
          description: "Ошибка при отправке заявки. Попробуйте еще раз.",
          variant: "destructive"
        });
      }
      return;
    }

    if (step === 3) {
      // Calculate price before showing the contact form
      calculatePrice();
    }

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <section id="calculator" className="py-16 bg-[#FFF5EC]">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-4">Калькулятор стоимости</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Рассчитайте предварительную стоимость окон с учетом ваших требований.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium mb-6">Конфигуратор окон</h3>
            <p className="text-gray-600 mb-8">Выберите параметры для расчета стоимости</p>

            {step === 1 && (
              <WindowTypeSelector 
                onChange={handleWindowTypeChange} 
                value={windowType} 
              />
            )}

            {step === 2 && (
              <>
                <h4 className="text-lg font-medium mb-4">Выберите тип:</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="frame-type-fixed"
                      type="radio"
                      className="w-5 h-5"
                      checked={frameTypes[0] === "fixed"}
                      onChange={() => handleFrameTypeChange(['fixed'])}
                    />
                    <label htmlFor="frame-type-fixed" className="ml-2">
                      Створка (глухая, поворотная, поворотно-откидная)
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="frame-type-door"
                      type="radio"
                      className="w-5 h-5"
                      checked={frameTypes[0] === "door"}
                      onChange={() => handleFrameTypeChange(['door'])}
                    />
                    <label htmlFor="frame-type-door" className="ml-2">
                      Балконная дверь (поворотная, поворотно-откидная)
                    </label>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Укажите размеры</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2">Ширина, мм</label>
                      <input
                        type="number"
                        name="width"
                        value={dimensions.width}
                        onChange={handleDimensionsChange}
                        className="w-full p-3 border rounded-md"
                        placeholder="Введите ширину"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Высота, мм</label>
                      <input
                        type="number"
                        name="height"
                        value={dimensions.height}
                        onChange={handleDimensionsChange}
                        className="w-full p-3 border rounded-md"
                        placeholder="Введите высоту"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <div>
                <h4 className="text-lg font-medium mb-4">Дополнительные опции</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="option-mosquito"
                      type="checkbox"
                      className="w-5 h-5"
                      checked={options.includes("mosquito")}
                      onChange={() => toggleOption("mosquito")}
                      disabled={options.includes("none")}
                    />
                    <label htmlFor="option-mosquito" className="ml-2">Москитная сетка</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="option-drain"
                      type="checkbox"
                      className="w-5 h-5"
                      checked={options.includes("drain")}
                      onChange={() => toggleOption("drain")}
                      disabled={options.includes("none")}
                    />
                    <label htmlFor="option-drain" className="ml-2">Отлив</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="option-sill"
                      type="checkbox"
                      className="w-5 h-5"
                      checked={options.includes("sill")}
                      onChange={() => toggleOption("sill")}
                      disabled={options.includes("none")}
                    />
                    <label htmlFor="option-sill" className="ml-2">Подоконник</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="option-none"
                      type="checkbox"
                      className="w-5 h-5"
                      checked={options.includes("none")}
                      onChange={() => toggleOption("none")}
                    />
                    <label htmlFor="option-none" className="ml-2">Ничего из перечисленного</label>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h4 className="text-lg font-medium mb-4">Укажите Ваши данные для получения точной стоимости</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2">Ваше имя</label>
                    <input
                      type="text"
                      name="name"
                      value={contactInfo.name}
                      onChange={handleContactInfoChange}
                      className="w-full p-3 border rounded-md"
                      placeholder="Введите имя"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Телефон</label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactInfo.phone}
                      onChange={handleContactInfoChange}
                      className="w-full p-3 border rounded-md"
                      placeholder="+375 XX XXX XX XX"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      className="w-5 h-5"
                      checked={contactInfo.consent}
                      onChange={handleContactInfoChange}
                    />
                    <label htmlFor="consent" className="ml-2">
                      Нажимая кнопку, вы соглашаетесь на <a href="#" className="text-brand-orange underline">обработку персональных данных</a>
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={prevStep}
                  className="px-6 py-3 border border-brand-orange text-brand-orange rounded-md hover:bg-brand-orange hover:text-white transition-colors"
                >
                  Назад
                </button>
              )}
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-brand-orange text-white rounded-md hover:bg-[#e69816] transition-colors ml-auto"
              >
                {step === 4 ? "Отправить заявку" : "Далее"}
              </button>
            </div>
            
            {step === 4 && (
              <div className="text-center mt-4 text-sm text-gray-500">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </div>
            )}
          </div>

          <div className="lg:w-1/3 bg-brand-darkblue text-white p-8 rounded-lg">
            <h3 className="text-2xl font-medium mb-6">Ваш расчет</h3>
            <p className="mb-8">Предварительная стоимость</p>

            <div className="text-5xl font-bold mb-8">{estimatedPrice || "7680"} ₽</div>
            <p className="text-gray-300 mb-6">Приблизительная стоимость</p>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Тип окна:</span>
                <span className="font-medium">
                  {windowType === "one-leaf" ? "Одностворчатое окно" : 
                   windowType === "two-leaf" ? "Двухстворчатое окно" :
                   windowType === "three-leaf" ? "Трехстворчатое окно" :
                   windowType === "balcony-door" ? "Балконный блок" :
                   windowType === "balcony-door-two-window" ? "Балконная дверь с окном" :
                   "Одностворчатое окно"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Материал:</span>
                <span className="font-medium">ПВХ (пластик)</span>
              </div>
              <div className="flex justify-between">
                <span>Размеры:</span>
                <span className="font-medium">
                  {dimensions.width && dimensions.height
                    ? `${dimensions.width} x ${dimensions.height} мм`
                    : "800 x 1200 мм"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Стеклопакет:</span>
                <span className="font-medium">Двойной стеклопакет (32 мм)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

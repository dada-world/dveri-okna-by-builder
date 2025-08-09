
'use client'

import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import WindowConfigurationItem from "./WindowConfigurationItem";
import ContactInfoForm from "./ContactInfoForm";

interface WindowConfig {
  windowType: string;
  frameTypes: string[];
  dimensions: { width: string; height: string };
  options: string[];
}

interface ContactInfo {
  name: string;
  phone: string;
  consent: boolean;
}

const WindowConfigurationForm = () => {
  const [windows, setWindows] = useState<WindowConfig[]>([{
    windowType: "",
    frameTypes: [],
    dimensions: { width: "", height: "" },
    options: []
  }]);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({ name: "", phone: "", consent: false });

  // Функция перевода опций на русский
  const translateOptions = (options: string[]): string => {
    const translations: { [key: string]: string } = {
      'mosquito': 'Москитная сетка',
      'drain': 'Отлив',
      'sill': 'Подоконник',
      'none': 'Ничего из перечисленного',
      'description': 'Описание'
    };
    
    if (options.length === 0) return "Нет";
    return options.map(option => translations[option] || option).join(", ");
  };

  const handleWindowChange = (index: number, updatedWindow: WindowConfig) => {
    const updatedWindows = [...windows];
    updatedWindows[index] = updatedWindow;
    setWindows(updatedWindows);
  };

  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: type === "checkbox" ? checked : value
    });
  };
  
  const addWindow = () => {
    setWindows([...windows, {
      windowType: "",
      frameTypes: [],
      dimensions: { width: "", height: "" },
      options: []
    }]);
  };

  const formatWindowsData = () => {
    return windows.map((window, index) => {
      const windowTypeNames = {
        "one-leaf": "Одностворчатое окно",
        "two-leaf": "Двухстворчатое окно", 
        "three-leaf": "Трехстворчатое окно",
        "balcony-door": "Балконная дверь с окном",
        "balcony-door-two-window": "Балконная дверь с двумя окнами",
        "other-type": "Другой тип окна"
      };
      
      return `Окно #${index + 1}:
Тип: ${windowTypeNames[window.windowType as keyof typeof windowTypeNames] || window.windowType}
Размеры: ${window.dimensions.width}мм x ${window.dimensions.height}мм
Опции: ${translateOptions(window.options)}`;
    }).join("\n\n");
  };

  const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '/api/contact';
  const FALLBACK_ENDPOINT = 'https://submit-form.com/esY14v503';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Базовая валидация
    if (!contactInfo.name || !contactInfo.phone) {
      toast({
        title: "Заполните поля",
        description: "Имя и телефон обязательны для заполнения",
        variant: "destructive"
      });
      return;
    }
    
    if (!contactInfo.consent) {
      toast({
        title: "Согласие обязательно",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive"
      });
      return;
    }
    
    // Проверяем, что есть хотя бы одно окно с типом
    const hasValidWindows = windows.some(window => window.windowType);
    if (!hasValidWindows) {
      toast({
        title: "Выберите тип окна",
        description: "Необходимо выбрать тип хотя бы одного окна",
        variant: "destructive"
      });
      return;
    }
    
    try {
      const formData = {
        name: contactInfo.name,
        phone: contactInfo.phone,
        email: 'noreply@example.com', // submit-form.com требует email
        windows_configuration: formatWindowsData()
      };

      console.log('Отправка формы окон:', formData);
      console.log('Endpoint:', FORM_ENDPOINT);

      let response;
      let result;

      try {
        // Сначала пробуем локальный API
        response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData),
        });

        console.log('Ответ локального API:', response.status, response.statusText);
        result = await response.json();
        console.log('Результат локального API:', result);
      } catch (apiError) {
        console.log('Локальный API не работает, используем fallback:', apiError);
        
        // Fallback на прямую отправку в submit-form.com
        response = await fetch(FALLBACK_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData),
        });

        console.log('Ответ submit-form.com:', response.status, response.statusText);
        
        // submit-form.com возвращает 302 при успехе
        if (response.status === 302 || response.status === 200) {
          result = { success: true, message: 'Заявка отправлена успешно' };
        } else {
          result = { success: false, message: 'Ошибка при отправке' };
        }
      }

      if (result.success) {
        toast({
          title: "Заявка отправлена",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        
        // Reset form
        setWindows([{
          windowType: "",
          frameTypes: [],
          dimensions: { width: "", height: "" },
          options: []
        }]);
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        {windows.map((window, windowIndex) => (
          <WindowConfigurationItem
            key={windowIndex}
            windowIndex={windowIndex}
            window={window}
            onWindowChange={handleWindowChange}
          />
        ))}

        <div className="mb-8 flex justify-center">
          <button
            type="button"
            onClick={addWindow}
            className="px-8 py-3 bg-brand-orange text-white rounded-md hover:bg-[#e69816] transition-colors"
          >
            Добавить окно
          </button>
        </div>
        
        {/* Hidden input to send formatted windows data */}
        <input type="hidden" name="windows_configuration" value={formatWindowsData()} />
        
        {/* Hidden input for email field (required by submit-form.com) */}
        <input type="hidden" name="email" value="noreply@example.com" />
        
        <ContactInfoForm 
          contactInfo={contactInfo}
          onContactInfoChange={handleContactInfoChange}
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-brand-orange text-white rounded-md hover:bg-[#e69816] transition-colors"
          >
            Отправить заявку
          </button>
        </div>
      </div>
    </form>
  );
};

export default WindowConfigurationForm;

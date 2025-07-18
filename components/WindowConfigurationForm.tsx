
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
Опции: ${window.options.length > 0 ? window.options.join(", ") : "Нет"}`;
    }).join("\n\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all windows
    for (let i = 0; i < windows.length; i++) {
      if (!windows[i].windowType) {
        toast({
          title: "Ошибка",
          description: `Выберите тип окна #${i + 1}`,
          variant: "destructive"
        });
        return;
      }

      if (!windows[i].dimensions.width || !windows[i].dimensions.height) {
        toast({
          title: "Ошибка",
          description: `Укажите размеры окна #${i + 1}`,
          variant: "destructive"
        });
        return;
      }
      
      if (windows[i].windowType === "other-type" && !windows[i].options.includes("description")) {
        toast({
          title: "Ошибка",
          description: `Опишите окно #${i + 1}`,
          variant: "destructive"
        });
        return;
      }
    }
    
    if (!contactInfo.name || !contactInfo.phone || !contactInfo.consent) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }
    
    // Submit the form (submit-form.com will handle the actual submission)
    const form = e.target as HTMLFormElement;
    form.submit();
    
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
  };

  return (
    <form action="https://submit-form.com/esY14v503" method="POST" onSubmit={handleSubmit}>
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

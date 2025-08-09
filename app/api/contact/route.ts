import { NextRequest, NextResponse } from 'next/server';

// URL для отправки формы
const FORM_SUBMIT_URL = 'https://submit-form.com/esY14v503';

// Словарь для перевода технических названий на русский
const translateOptions = (options: string[]): string => {
  const translations: { [key: string]: string } = {
    'mosquito': 'Москитная сетка',
    'drain': 'Отлив',
    'sill': 'Подоконник',
    'none': 'Ничего из перечисленного',
    'description': 'Описание'
  };
  
  return options.map(option => translations[option] || option).join(", ");
};

export async function POST(request: NextRequest) {
  try {
    // Получаем данные из запроса
    const body = await request.json();
    const { name, phone, email, message, windows_configuration } = body;

        // Подготавливаем данные для отправки
    const formData = {
      name,
      phone,
      email,
      message,
      windows_configuration: windows_configuration ? windows_configuration : undefined,
      timestamp: new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Minsk' })
    };
    
    // Если есть конфигурация окон, переводим технические названия на русский
    if (windows_configuration) {
      let translatedConfiguration = windows_configuration;
      
      // Заменяем технические названия опций на русские
      translatedConfiguration = translatedConfiguration.replace(/mosquito/g, 'Москитная сетка');
      translatedConfiguration = translatedConfiguration.replace(/drain/g, 'Отлив');
      translatedConfiguration = translatedConfiguration.replace(/sill/g, 'Подоконник');
      translatedConfiguration = translatedConfiguration.replace(/none/g, 'Ничего из перечисленного');
      
      formData.windows_configuration = translatedConfiguration;
    }

    console.log('=== SENDING FORM DATA ===');
    console.log('Form data:', formData);

    // Отправляем данные на FormSubmit
    const formResponse = await fetch(FORM_SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('=== FORM SUBMIT RESPONSE ===');
    console.log('Status:', formResponse.status);
    console.log('========================');

    if (!formResponse.ok) {
      throw new Error('Form submission error: ' + formResponse.statusText);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Сообщение отправлено успешно' 
    });

  } catch (error) {
    console.error('=== ERROR ===');
    console.error('Error sending message:', error);
    console.error('==================');
    
    const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Ошибка при отправке сообщения: ' + errorMessage
      },
      { status: 500 }
    );
  }
}
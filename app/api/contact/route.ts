import { NextRequest, NextResponse } from 'next/server';

// URL для отправки формы
const FORM_SUBMIT_URL = 'https://submit-form.com/esY14v503';

export async function GET() {
  return NextResponse.json({ ok: true, service: 'contact' });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message, windows_configuration } = body;

    const formData = {
      name,
      phone,
      email,
      message,
      windows_configuration: windows_configuration ? windows_configuration : undefined,
      timestamp: new Date().toISOString()
    } as Record<string, any>;

    const formResponse = await fetch(FORM_SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData),
    });

    // Проверяем статус ответа
    if (formResponse.status === 302 || formResponse.status === 200) {
      // 302 - редирект означает успешную отправку
      // 200 - успешная отправка
      console.log('Form submitted successfully, status:', formResponse.status);
      return NextResponse.json({ 
        success: true, 
        message: 'Сообщение отправлено успешно' 
      });
    }

    // Если статус не 200 или 302, читаем ответ для диагностики
    const text = await formResponse.text();
    console.error('Form submit failed', formResponse.status, text);
    
    return NextResponse.json({ 
      success: false, 
      message: 'Ошибка при отправке формы' 
    }, { status: 502 });

  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Ошибка при отправке сообщения' 
    }, { status: 500 });
  }
}

export async function OPTIONS() {
  const res = new NextResponse(null, { status: 204 });
  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Accept');
  return res;
}
'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '/api/contact';
  const FALLBACK_ENDPOINT = 'https://submit-form.com/esY14v503';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Убеждаемся, что email всегда присутствует (требуется submit-form.com)
      const dataToSend = {
        ...formData,
        email: formData.email || 'noreply@example.com'
      };

      console.log('Отправка формы:', dataToSend);
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
          body: JSON.stringify(dataToSend),
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
          body: JSON.stringify(dataToSend),
        });

        console.log('Ответ submit-form.com:', response.status, response.statusText);
        
        // submit-form.com возвращает 302 при успехе
        if (response.status === 302 || response.status === 200) {
          result = { success: true, message: 'Сообщение отправлено успешно' };
        } else {
          result = { success: false, message: 'Ошибка при отправке' };
        }
      }

      if (result.success) {
        alert('Сообщение отправлено успешно! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Ошибка при отправке сообщения. Попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ошибка при отправке сообщения. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="bg-gray-50 py-24 relative">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans tracking-tight mb-4">
            Нужна <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">консультация?</span>
          </h2>
          <p className="text-xl text-gray-500">Перезвоним в удобное для вас время</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <div className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 flex flex-col justify-between h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-50 to-blue-50 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Наши контакты</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Телефоны</p>
                    <a href="tel:+375293423221" className="block text-lg font-bold hover:text-brand-blue transition-colors">+375 (29) 342-32-21</a>
                    <a href="tel:+375292589210" className="block text-lg font-bold hover:text-brand-blue transition-colors">+375 (29) 258-92-10</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 shrink-0">
                    ✉️
                  </div>
                  <div>
                     <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:vitaliy9977@mail.ru" className="text-lg font-medium hover:text-brand-blue transition-colors">vitaliy9977@mail.ru</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 shrink-0">
                    🕒
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Режим работы</p>
                    <p className="text-lg font-medium text-gray-900">9:00 – 19:00 (Без выходных)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <p className="text-gray-500 mb-4 text-sm font-medium">Мы в мессенджерах:</p>
              <div className="flex gap-4">
                <a href="viber://chat?number=%2B375293423221" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <img src="/lovable-uploads/aee8cfd2-6b4f-4a4b-a2b1-42890379f49f.png" alt="Viber" className="w-12 h-12 drop-shadow-md" />
                </a>
                <a href="https://wa.me/375293423221" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <img src="/lovable-uploads/653de03b-05d0-4cd5-b6bf-515fa14a31d6.png" alt="WhatsApp" className="w-12 h-12 drop-shadow-md" />
                </a>
                <a href="https://www.instagram.com/dveri_okna_krovlya_lelchicy/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <img src="/lovable-uploads/76c10cc3-6dab-4728-9d5f-264aa6a1e4b8.png" alt="Instagram" className="w-12 h-12 drop-shadow-md" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-100 relative">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Оставить заявку</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Ваше имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border-transparent focus:bg-white focus:border-brand-blue rounded-2xl transition-all outline-none font-medium" 
                    placeholder="Иван"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">Телефон</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-50 border-transparent focus:bg-white focus:border-brand-blue rounded-2xl transition-all outline-none font-medium" 
                    placeholder="+375 XX XXX XX XX"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-50 border-transparent focus:bg-white focus:border-brand-blue rounded-2xl transition-all outline-none font-medium" 
                  placeholder="example@mail.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Сообщение</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  className="w-full px-6 py-4 bg-gray-50 border-transparent focus:bg-white focus:border-brand-blue rounded-2xl transition-all outline-none font-medium resize-none" 
                  placeholder="Какой вопрос вас интересует?"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-orange to-orange-500 text-white font-bold text-lg px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-orange-200 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </button>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                Нажимая кнопку, вы соглашаетесь на {" "}
                <a href="/consent" target="_blank" rel="noopener noreferrer" className="text-gray-600 underline hover:text-brand-blue">
                  обработку персональных данных
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

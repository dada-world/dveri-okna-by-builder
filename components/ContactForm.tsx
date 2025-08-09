
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
    <section id="contact" className="bg-[#FFF5EC] py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 transform -skew-x-12 px-8 py-4 inline-block shadow-2xl rounded-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold transform skew-x-12 text-white">
              Нужна консультация?<br />
              Перезвоним в удобное время!
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-4">Телефоны</h4>
                <p className="text-gray-600">
                  <a href="tel:+375293423221" className="block hover:text-brand-blue transition-colors">+375 (29) 342-32-21</a>
                  <a href="tel:+375292589210" className="block hover:text-brand-blue transition-colors">+375 (29) 258-92-10</a>
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Email</h4>
                <p className="text-gray-600">
                  <a href="mailto:vitaliy9977@mail.ru" className="hover:text-brand-blue transition-colors">vitaliy9977@mail.ru</a>
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Режим работы</h4>
                <p className="text-gray-600">
                  9:00 – 19:00<br />Без выходных
                </p>
              </div>
              
              <div className="flex space-x-4 items-center pt-4">
                <a 
                  href="viber://chat?number=%2B375293423221" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/aee8cfd2-6b4f-4a4b-a2b1-42890379f49f.png" 
                    alt="Viber" 
                    className="w-10 h-10" 
                  />
                </a>
                <a 
                  href="https://wa.me/375293423221" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/653de03b-05d0-4cd5-b6bf-515fa14a31d6.png" 
                    alt="WhatsApp" 
                    className="w-10 h-10" 
                  />
                </a>
                <a 
                  href="https://www.instagram.com/dveri_okna_krovlya_lelchicy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/76c10cc3-6dab-4728-9d5f-264aa6a1e4b8.png" 
                    alt="Instagram" 
                    className="w-10 h-10" 
                  />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Ваше имя</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue" 
                  placeholder="Введите ваше имя"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue" 
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue" 
                  placeholder="+375 XX XXX XX XX"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Сообщение</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue" 
                  placeholder="Введите ваше сообщение"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-brand-orange text-white px-8 py-3 rounded-md hover:bg-[#e69816] transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                Нажимая кнопку, вы соглашаетесь на {" "}
                <a href="/consent" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
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

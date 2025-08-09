
'use client'

interface ContactInfo {
  name: string;
  phone: string;
  consent: boolean;
}

interface ContactInfoFormProps {
  contactInfo: ContactInfo;
  onContactInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactInfoForm = ({ contactInfo, onContactInfoChange }: ContactInfoFormProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-medium mb-6">Контактные данные</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block mb-2">Ваше имя*</label>
          <input
            type="text"
            name="name"
            value={contactInfo.name}
            onChange={onContactInfoChange}
            className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue focus:outline-none"
            placeholder="Введите имя"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Телефон*</label>
          <input
            type="tel"
            name="phone"
            value={contactInfo.phone}
            onChange={onContactInfoChange}
            className="w-full p-3 border rounded-md focus:ring focus:border-brand-blue focus:outline-none"
            placeholder="+375 XX XXX XX XX"
            required
          />
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="w-5 h-5"
            checked={contactInfo.consent}
            onChange={onContactInfoChange}
            required
          />
          <label htmlFor="consent" className="ml-2">
            Нажимая кнопку, вы соглашаетесь на {" "}
            <a href="/consent" target="_blank" rel="noopener noreferrer" className="text-brand-orange underline">
              обработку персональных данных
            </a>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;

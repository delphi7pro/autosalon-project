import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    { icon: 'ShoppingCart', title: 'Продажа авто', description: 'Широкий выбор новых и подержанных автомобилей' },
    { icon: 'CreditCard', title: 'Кредит и лизинг', description: 'Выгодные условия финансирования' },
    { icon: 'Shield', title: 'Страхование', description: 'КАСКО и ОСАГО на лучших условиях' },
    { icon: 'Wrench', title: 'Сервисное обслуживание', description: 'Профессиональный ремонт и ТО' },
    { icon: 'RefreshCw', title: 'Trade-in', description: 'Обмен старого автомобиля на новый' },
    { icon: 'Car', title: 'Тест-драйв', description: 'Бесплатное тестирование автомобилей' },
    { icon: 'FileText', title: 'Оформление документов', description: 'Полное юридическое сопровождение' },
    { icon: 'Truck', title: 'Доставка', description: 'Доставка автомобиля по всей России' }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-secondary mb-4">Наши услуги</h3>
          <p className="text-gray-600 text-lg">Полный спектр автомобильных услуг</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-secondary mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'ShoppingCart',
      title: 'Продажа автомобилей',
      description: 'Широкий выбор новых и подержанных автомобилей премиум-класса',
      features: ['Новые автомобили', 'Сертифицированные б/у', 'Гарантия качества', 'Проверка истории'],
      price: 'От 1 500 000 ₽'
    },
    {
      icon: 'CreditCard',
      title: 'Автокредитование',
      description: 'Выгодные условия кредитования с минимальной процентной ставкой',
      features: ['Ставка от 5.9%', 'Первый взнос от 10%', 'Срок до 7 лет', 'Быстрое одобрение'],
      price: 'Ставка от 5.9%'
    },
    {
      icon: 'RefreshCw',
      title: 'Trade-in',
      description: 'Обмен вашего автомобиля на новый с доплатой',
      features: ['Честная оценка', 'Быстрое оформление', 'Без комиссий', 'Юридическая чистота'],
      price: 'Бесплатная оценка'
    },
    {
      icon: 'Shield',
      title: 'Страхование',
      description: 'КАСКО и ОСАГО от ведущих страховых компаний',
      features: ['КАСКО от 3%', 'ОСАГО онлайн', 'Быстрое урегулирование', 'Партнерские тарифы'],
      price: 'КАСКО от 3%'
    },
    {
      icon: 'Wrench',
      title: 'Сервисное обслуживание',
      description: 'Профессиональный ремонт и техническое обслуживание',
      features: ['Оригинальные запчасти', 'Сертифицированные мастера', 'Гарантия на работы', 'Диагностика'],
      price: 'ТО от 15 000 ₽'
    },
    {
      icon: 'Car',
      title: 'Тест-драйв',
      description: 'Бесплатное тестирование любого автомобиля из салона',
      features: ['Без ограничений по времени', 'Опытный инструктор', 'Различные маршруты', 'Полная страховка'],
      price: 'Бесплатно'
    },
    {
      icon: 'FileText',
      title: 'Юридические услуги',
      description: 'Полное юридическое сопровождение сделки',
      features: ['Проверка документов', 'Регистрация в ГИБДД', 'Оформление договоров', 'Консультации'],
      price: 'От 5 000 ₽'
    },
    {
      icon: 'Truck',
      title: 'Доставка',
      description: 'Доставка автомобиля в любую точку России',
      features: ['По всей России', 'Застрахованная перевозка', 'Отслеживание груза', 'Гарантия сохранности'],
      price: 'От 50 ₽/км'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Наши услуги</h1>
          <p className="text-xl opacity-90">Полный спектр автомобильных услуг для вашего комфорта</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
                <div className="text-2xl font-bold text-primary">{service.price}</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="text-green-600 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary mb-4">Почему выбирают нас?</h2>
            <p className="text-gray-600 text-lg">Мы предоставляем комплексные решения для всех ваших автомобильных потребностей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ лет опыта</h3>
              <p className="text-gray-600">Многолетний опыт работы на автомобильном рынке</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10000+ клиентов</h3>
              <p className="text-gray-600">Тысячи довольных клиентов по всей России</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 поддержка</h3>
              <p className="text-gray-600">Круглосуточная поддержка клиентов</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
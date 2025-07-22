import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Location = () => {
  const directions = [
    {
      transport: 'На автомобиле',
      icon: 'Car',
      routes: [
        'С МКАД: съезд на Сокольническую площадь, далее по ул. Примерной 2 км',
        'Из центра: по Садовому кольцу до Сокольнической площади',
        'Парковка: бесплатная на 50 мест перед салоном'
      ]
    },
    {
      transport: 'На метро',
      icon: 'Train',
      routes: [
        'Станция метро "Сокольники" (красная ветка)',
        'Выход №2, далее пешком 5 минут',
        'Станция "Преображенская площадь" - 10 минут на автобусе №140'
      ]
    },
    {
      transport: 'На общественном транспорте',
      icon: 'Bus',
      routes: [
        'Автобусы: №140, №716 до остановки "Автосалон"',
        'Троллейбус: №14 до остановки "Примерная улица"',
        'Маршрутка: №567м от м. Сокольники'
      ]
    }
  ];

  const landmarks = [
    { name: 'ТЦ "Сокольники"', distance: '200 м', direction: 'слева от салона' },
    { name: 'Сбербанк', distance: '100 м', direction: 'напротив' },
    { name: 'АЗС Лукойл', distance: '300 м', direction: 'справа' },
    { name: 'Макдоналдс', distance: '150 м', direction: 'через дорогу' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Как нас найти</h1>
          <p className="text-xl opacity-90">Подробные инструкции для поездки в наш автосалон</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Основная информация */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" size={24} className="mr-2 text-primary" />
                  Наш адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">AutoPremium Сокольники</h3>
                    <p className="text-gray-600">Москва, ул. Примерная, 123</p>
                    <p className="text-gray-600">Индекс: 107014</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-2 text-primary" />
                      <div>
                        <div className="font-medium">Режим работы:</div>
                        <div className="text-gray-600">Пн-Вс: 9:00 - 21:00</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Icon name="Phone" size={16} className="mr-2 text-primary" />
                      <div>
                        <div className="font-medium">Телефон:</div>
                        <div className="text-gray-600">+7 (495) 123-45-67</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="Navigation" size={16} className="mr-2" />
                      Построить маршрут
                    </Button>
                    <Button variant="outline">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Позвонить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-0">
                <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Map" size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 font-medium">Интерактивная карта</p>
                    <p className="text-sm text-gray-500">Москва, ул. Примерная, 123</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Способы добраться */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Как добраться</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {directions.map((direction, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Icon name={direction.icon} size={20} className="text-primary" />
                    </div>
                    {direction.transport}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {direction.routes.map((route, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="ArrowRight" size={16} className="mr-2 mt-0.5 text-primary" />
                        <span className="text-sm text-gray-600">{route}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ориентиры */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-secondary mb-6">Ориентиры рядом с салоном</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {landmarks.map((landmark, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <div>
                      <div className="font-medium text-sm">{landmark.name}</div>
                      <div className="text-xs text-gray-600">{landmark.distance}, {landmark.direction}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Парковка */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Car" size={24} className="mr-2 text-primary" />
                Парковка
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Бесплатная парковка</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2 text-green-600" />
                      50 парковочных мест
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2 text-green-600" />
                      Охраняемая территория
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2 text-green-600" />
                      Видеонаблюдение
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2 text-green-600" />
                      Места для инвалидов
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Дополнительные услуги</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Icon name="Zap" size={16} className="mr-2 text-primary" />
                      Зарядка для электромобилей
                    </li>
                    <li className="flex items-center">
                      <Icon name="Wrench" size={16} className="mr-2 text-primary" />
                      Мойка автомобилей
                    </li>
                    <li className="flex items-center">
                      <Icon name="Coffee" size={16} className="mr-2 text-primary" />
                      Кафе в здании салона
                    </li>
                    <li className="flex items-center">
                      <Icon name="Wifi" size={16} className="mr-2 text-primary" />
                      Бесплатный Wi-Fi
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Контакты для навигации */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Нужна помощь с навигацией?</h2>
          <p className="text-gray-600 mb-6">
            Если у вас возникли сложности с поиском нашего салона, мы поможем вам добраться
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить консультанту
            </Button>
            <Button variant="outline">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Написать в WhatsApp
            </Button>
            <Button variant="outline">
              <Icon name="Navigation" size={16} className="mr-2" />
              Отправить геолокацию
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>Консультанты работают ежедневно с 9:00 до 21:00</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Location;
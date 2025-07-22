import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Offices = () => {
  const offices = [
    {
      id: 1,
      name: 'AutoPremium Сокольники',
      type: 'Флагманский салон',
      address: 'Москва, ул. Примерная, 123',
      phone: '+7 (495) 123-45-67',
      email: 'sokolniki@autopremium.ru',
      schedule: 'Пн-Вс: 9:00 - 21:00',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      services: ['Продажа новых авто', 'Продажа б/у авто', 'Сервисный центр', 'Trade-in', 'Кредитование', 'Страхование'],
      brands: ['BMW', 'Audi', 'Mercedes-Benz'],
      features: ['Парковка на 50 мест', 'Детская зона', 'Кафе', 'Wi-Fi', 'Зарядка для электромобилей'],
      manager: 'Мария Сидорова',
      managerPhone: '+7 (495) 123-45-68'
    },
    {
      id: 2,
      name: 'AutoPremium Тверская',
      type: 'Городской салон',
      address: 'Москва, ул. Тверская, 45',
      phone: '+7 (495) 123-45-69',
      email: 'tverskaya@autopremium.ru',
      schedule: 'Пн-Вс: 10:00 - 20:00',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      services: ['Продажа новых авто', 'Trade-in', 'Кредитование', 'Консультации'],
      brands: ['BMW', 'Audi'],
      features: ['Центр города', 'Метро рядом', 'VIP-зона', 'Wi-Fi'],
      manager: 'Дмитрий Козлов',
      managerPhone: '+7 (495) 123-45-70'
    },
    {
      id: 3,
      name: 'AutoPremium Сервис Юг',
      type: 'Сервисный центр',
      address: 'Москва, ул. Южная, 78',
      phone: '+7 (495) 123-45-71',
      email: 'service-south@autopremium.ru',
      schedule: 'Пн-Пт: 8:00 - 20:00, Сб: 9:00 - 18:00',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      services: ['Техническое обслуживание', 'Ремонт', 'Диагностика', 'Запчасти', 'Шиномонтаж'],
      brands: ['BMW', 'Audi', 'Mercedes-Benz', 'Lexus'],
      features: ['20 сервисных постов', 'Экспресс-сервис', 'Мойка', 'Склад запчастей'],
      manager: 'Игорь Петров',
      managerPhone: '+7 (495) 123-45-72'
    },
    {
      id: 4,
      name: 'AutoPremium Подольск',
      type: 'Региональный офис',
      address: 'Подольск, ул. Ленина, 156',
      phone: '+7 (4967) 12-34-56',
      email: 'podolsk@autopremium.ru',
      schedule: 'Пн-Сб: 9:00 - 19:00',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      services: ['Продажа новых авто', 'Trade-in', 'Кредитование', 'Базовый сервис'],
      brands: ['BMW', 'Audi'],
      features: ['Парковка', 'Зона ожидания', 'Wi-Fi'],
      manager: 'Елена Волкова',
      managerPhone: '+7 (4967) 12-34-57'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Флагманский салон': 'bg-primary text-white',
      'Городской салон': 'bg-blue-100 text-blue-800',
      'Сервисный центр': 'bg-green-100 text-green-800',
      'Региональный офис': 'bg-purple-100 text-purple-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Наши офисы</h1>
          <p className="text-xl opacity-90">Сеть салонов и сервисных центров AutoPremium</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="pt-8">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-gray-600">Офиса</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-8">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-gray-600">Города</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-8">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Автомобилей</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-8">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Сотрудников</div>
            </CardContent>
          </Card>
        </div>

        {/* Список офисов */}
        <div className="space-y-8">
          {offices.map((office) => (
            <Card key={office.id} className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="relative">
                  <img 
                    src={office.image} 
                    alt={office.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${getTypeColor(office.type)}`}>
                    {office.type}
                  </Badge>
                </div>
                
                <div className="lg:col-span-2 p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-2xl font-bold text-secondary mb-4">{office.name}</h2>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                          <Icon name="MapPin" size={16} className="mr-3 text-primary" />
                          <span className="text-gray-600">{office.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Icon name="Phone" size={16} className="mr-3 text-primary" />
                          <span className="text-gray-600">{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Icon name="Mail" size={16} className="mr-3 text-primary" />
                          <span className="text-gray-600">{office.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Icon name="Clock" size={16} className="mr-3 text-primary" />
                          <span className="text-gray-600">{office.schedule}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Услуги:</h3>
                        <div className="flex flex-wrap gap-2">
                          {office.services.map((service, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Бренды:</h3>
                        <div className="flex flex-wrap gap-2">
                          {office.brands.map((brand, index) => (
                            <Badge key={index} className="bg-primary text-white text-xs">
                              {brand}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Особенности:</h3>
                        <ul className="space-y-2">
                          {office.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <Icon name="Check" size={14} className="mr-2 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Руководитель:</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="font-medium">{office.manager}</div>
                          <div className="text-sm text-gray-600 flex items-center mt-1">
                            <Icon name="Phone" size={14} className="mr-2" />
                            {office.managerPhone}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-primary hover:bg-primary/90 flex-1">
                          <Icon name="Navigation" size={16} className="mr-2" />
                          Маршрут
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="Phone" size={16} className="mr-2" />
                          Позвонить
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Планы расширения */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary mb-4">Планы расширения</h2>
            <p className="text-gray-600">Мы продолжаем развиваться и открывать новые точки</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="text-center pt-8">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Санкт-Петербург</h3>
                <p className="text-sm text-gray-600 mb-4">Открытие в 2024 году</p>
                <Badge variant="outline">В планах</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center pt-8">
                <Icon name="Building" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Новосибирск</h3>
                <p className="text-sm text-gray-600 mb-4">Региональный центр</p>
                <Badge variant="outline">2025 год</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center pt-8">
                <Icon name="Wrench" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Сервис Север</h3>
                <p className="text-sm text-gray-600 mb-4">Дополнительный сервисный центр</p>
                <Badge variant="outline">2024 год</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Контакты */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Нужна помощь в выборе офиса?</h2>
          <p className="text-gray-600 mb-6">
            Наши консультанты помогут выбрать ближайший офис и записаться на встречу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Единый номер: +7 (495) 123-45-67
            </Button>
            <Button variant="outline">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Онлайн-консультант
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Offices;
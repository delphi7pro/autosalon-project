import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      info: '+7 (495) 123-45-67',
      description: 'Звоните с 9:00 до 21:00'
    },
    {
      icon: 'Mail',
      title: 'Email',
      info: 'info@autopremium.ru',
      description: 'Ответим в течение часа'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      info: 'Москва, ул. Примерная, 123',
      description: 'Рядом с метро Сокольники'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      info: 'Пн-Вс: 9:00 - 21:00',
      description: 'Без выходных'
    }
  ];

  const departments = [
    {
      name: 'Отдел продаж',
      phone: '+7 (495) 123-45-67',
      email: 'sales@autopremium.ru',
      manager: 'Мария Сидорова'
    },
    {
      name: 'Сервисный центр',
      phone: '+7 (495) 123-45-68',
      email: 'service@autopremium.ru',
      manager: 'Дмитрий Козлов'
    },
    {
      name: 'Отдел кредитования',
      phone: '+7 (495) 123-45-69',
      email: 'credit@autopremium.ru',
      manager: 'Елена Волкова'
    },
    {
      name: 'Trade-in',
      phone: '+7 (495) 123-45-70',
      email: 'tradein@autopremium.ru',
      manager: 'Андрей Смирнов'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-xl opacity-90">Свяжитесь с нами удобным для вас способом</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Основные контакты */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contacts.map((contact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                <p className="text-primary font-medium mb-1">{contact.info}</p>
                <p className="text-gray-600 text-sm">{contact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Форма обратной связи */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Напишите нам</CardTitle>
                <p className="text-gray-600">Оставьте сообщение, и мы свяжемся с вами в ближайшее время</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Тема обращения</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Покупка автомобиля</option>
                      <option>Сервисное обслуживание</option>
                      <option>Кредитование</option>
                      <option>Trade-in</option>
                      <option>Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение *</label>
                    <Textarea 
                      placeholder="Опишите ваш вопрос или пожелание..." 
                      rows={4}
                      required 
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Отделы */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">Наши отделы</h2>
            <div className="space-y-4">
              {departments.map((dept, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{dept.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Icon name="Phone" size={16} className="mr-2 text-primary" />
                        <span>{dept.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Mail" size={16} className="mr-2 text-primary" />
                        <span>{dept.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="User" size={16} className="mr-2 text-primary" />
                        <span>Менеджер: {dept.manager}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Карта */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Как нас найти</h2>
          <Card>
            <CardContent className="p-0">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Icon name="MapPin" size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">Интерактивная карта</p>
                  <p className="text-sm text-gray-500">Москва, ул. Примерная, 123</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Удобные способы связи</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Онлайн-чат</h3>
              <p className="text-gray-600 mb-4">Быстрые ответы на ваши вопросы</p>
              <Button variant="outline">Начать чат</Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Запись на встречу</h3>
              <p className="text-gray-600 mb-4">Персональная консультация</p>
              <Button variant="outline">Записаться</Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Обратный звонок</h3>
              <p className="text-gray-600 mb-4">Мы перезвоним в удобное время</p>
              <Button variant="outline">Заказать звонок</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
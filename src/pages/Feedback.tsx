import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Feedback = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState('');

  const topics = [
    'Качество обслуживания',
    'Процесс покупки',
    'Сервисное обслуживание',
    'Работа менеджеров',
    'Техническое состояние автомобиля',
    'Финансовые услуги',
    'Другое'
  ];

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Телефон',
      description: 'Прямая линия для обратной связи',
      contact: '+7 (495) 123-45-67',
      availability: 'Ежедневно 9:00 - 21:00'
    },
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Отправьте подробное сообщение',
      contact: 'feedback@autopremium.ru',
      availability: 'Ответ в течение 24 часов'
    },
    {
      icon: 'MessageCircle',
      title: 'Онлайн-чат',
      description: 'Быстрая связь с оператором',
      contact: 'Чат на сайте',
      availability: 'Ежедневно 9:00 - 21:00'
    },
    {
      icon: 'MessageSquare',
      title: 'WhatsApp',
      description: 'Удобное общение в мессенджере',
      contact: '+7 (495) 123-45-67',
      availability: 'Круглосуточно'
    }
  ];

  const renderStars = (rating: number, interactive: boolean = false) => {
    return Array.from({ length: 5 }, (_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => interactive && setSelectedRating(index + 1)}
        className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-all`}
        disabled={!interactive}
      >
        <Icon
          name="Star"
          size={24}
          className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
        />
      </button>
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Обратная связь</h1>
          <p className="text-xl opacity-90">Ваше мнение важно для нас — помогите стать лучше!</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Форма обратной связи */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Оставить отзыв или жалобу</CardTitle>
                <p className="text-gray-600">
                  Расскажите о своем опыте взаимодействия с AutoPremium. 
                  Мы внимательно изучаем каждое обращение.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Фамилия</label>
                      <Input placeholder="Ваша фамилия" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Тема обращения *</label>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((topic) => (
                        <Badge
                          key={topic}
                          variant={selectedTopic === topic ? "default" : "outline"}
                          className={`cursor-pointer transition-colors ${
                            selectedTopic === topic 
                              ? 'bg-primary text-white' 
                              : 'hover:bg-primary/10'
                          }`}
                          onClick={() => setSelectedTopic(topic)}
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Оценка нашей работы</label>
                    <div className="flex items-center space-x-2">
                      {renderStars(selectedRating, true)}
                      <span className="ml-4 text-sm text-gray-600">
                        {selectedRating > 0 && `${selectedRating} из 5`}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Автомобиль (если применимо)</label>
                    <Input placeholder="Марка и модель автомобиля" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Дата обращения/покупки</label>
                    <Input type="date" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение *</label>
                    <Textarea 
                      placeholder="Подробно опишите ваш опыт, предложения или жалобы..."
                      rows={6}
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Прикрепить файлы</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Icon name="Upload" size={24} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">Перетащите файлы сюда или нажмите для выбора</p>
                      <p className="text-xs text-gray-500 mt-1">Фото, документы, до 10MB каждый</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="consent" className="mt-1" required />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      Я согласен на обработку персональных данных и получение ответа на указанные контакты *
                    </label>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить обращение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Способы связи */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">Способы связи</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name={method.icon} size={20} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{method.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                          <p className="font-medium text-primary">{method.contact}</p>
                          <p className="text-xs text-gray-500">{method.availability}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Часто задаваемые вопросы */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" size={20} className="mr-2 text-primary" />
                  Часто задаваемые вопросы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Как долго рассматривается обращение?</h4>
                    <p className="text-sm text-gray-600">
                      Мы отвечаем на все обращения в течение 24 часов в рабочие дни.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Можно ли подать жалобу анонимно?</h4>
                    <p className="text-sm text-gray-600">
                      Да, но для получения ответа необходимо указать контактные данные.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Что делать, если проблема не решается?</h4>
                    <p className="text-sm text-gray-600">
                      Вы можете обратиться к руководству компании по телефону +7 (495) 123-45-99.
                    </p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4" asChild>
                  <a href="/faq">
                    Все вопросы и ответы
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Статистика обращений */}
            <Card>
              <CardHeader>
                <CardTitle>Статистика обращений</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Среднее время ответа</span>
                    <span className="font-semibold text-primary">4 часа</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Решено в первом обращении</span>
                    <span className="font-semibold text-primary">89%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Удовлетворенность ответом</span>
                    <span className="font-semibold text-primary">4.7/5</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Обращений в этом месяце</span>
                    <span className="font-semibold text-primary">247</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Благодарности */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Спасибо за ваши отзывы!</h2>
          <p className="text-gray-600 mb-6">
            Благодаря вашим отзывам и предложениям мы постоянно улучшаем качество наших услуг. 
            За последний год мы внедрили более 50 улучшений на основе обратной связи от клиентов.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">1,247</div>
              <div className="text-sm text-gray-600">Отзывов получено</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-gray-600">Положительных оценок</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">52</div>
              <div className="text-sm text-gray-600">Улучшения внедрено</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Feedback;
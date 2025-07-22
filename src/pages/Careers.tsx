import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Careers = () => {
  const vacancies = [
    {
      id: 1,
      title: 'Менеджер по продажам автомобилей',
      department: 'Продажи',
      location: 'Москва',
      type: 'Полная занятость',
      salary: '80 000 - 150 000 ₽',
      experience: '2+ года',
      description: 'Ищем опытного менеджера по продажам премиальных автомобилей для работы в нашем флагманском салоне.',
      requirements: [
        'Опыт продаж автомобилей от 2 лет',
        'Знание особенностей премиальных брендов',
        'Отличные коммуникативные навыки',
        'Ориентация на результат'
      ],
      benefits: [
        'Высокая заработная плата + бонусы',
        'Обучение за счет компании',
        'Корпоративный автомобиль',
        'Медицинская страховка'
      ]
    },
    {
      id: 2,
      title: 'Автомеханик-диагност',
      department: 'Сервис',
      location: 'Москва',
      type: 'Полная занятость',
      salary: '70 000 - 120 000 ₽',
      experience: '3+ года',
      description: 'Требуется опытный автомеханик для диагностики и ремонта автомобилей BMW, Audi, Mercedes.',
      requirements: [
        'Опыт работы с премиальными брендами',
        'Знание современного диагностического оборудования',
        'Профильное образование',
        'Ответственность и внимательность'
      ],
      benefits: [
        'Стабильная заработная плата',
        'Современное оборудование',
        'Повышение квалификации',
        'Социальный пакет'
      ]
    },
    {
      id: 3,
      title: 'Специалист по кредитованию',
      department: 'Финансы',
      location: 'Москва',
      type: 'Полная занятость',
      salary: '60 000 - 100 000 ₽',
      experience: '1+ год',
      description: 'В команду финансового отдела требуется специалист по автокредитованию и страхованию.',
      requirements: [
        'Опыт работы в банке или автосалоне',
        'Знание продуктов автокредитования',
        'Навыки работы с документами',
        'Клиентоориентированность'
      ],
      benefits: [
        'Конкурентная заработная плата',
        'Обучение продуктам банков-партнеров',
        'Карьерный рост',
        'Дружный коллектив'
      ]
    }
  ];

  const benefits = [
    {
      icon: 'DollarSign',
      title: 'Конкурентная зарплата',
      description: 'Достойная оплата труда + система бонусов'
    },
    {
      icon: 'GraduationCap',
      title: 'Обучение и развитие',
      description: 'Регулярные тренинги и повышение квалификации'
    },
    {
      icon: 'Car',
      title: 'Корпоративный транспорт',
      description: 'Возможность пользования служебным автомобилем'
    },
    {
      icon: 'Heart',
      title: 'Медицинская страховка',
      description: 'Полный социальный пакет и ДМС'
    },
    {
      icon: 'Coffee',
      title: 'Комфортные условия',
      description: 'Современный офис и дружная команда'
    },
    {
      icon: 'TrendingUp',
      title: 'Карьерный рост',
      description: 'Возможности для профессионального развития'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Карьера в AutoPremium</h1>
          <p className="text-xl opacity-90">Присоединяйтесь к команде лидеров автомобильной индустрии</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Почему мы */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-6">Почему стоит работать с нами?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            AutoPremium — это не просто работа, это возможность стать частью успешной команды, 
            развиваться профессионально и строить карьеру в динамично развивающейся компании.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Вакансии */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary mb-4">Открытые вакансии</h2>
            <p className="text-gray-600">Найдите свою идеальную позицию в нашей команде</p>
          </div>

          <div className="space-y-6">
            {vacancies.map((vacancy) => (
              <Card key={vacancy.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{vacancy.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">{vacancy.department}</Badge>
                        <Badge variant="outline">{vacancy.location}</Badge>
                        <Badge variant="outline">{vacancy.type}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{vacancy.salary}</div>
                      <div className="text-sm text-gray-600">Опыт: {vacancy.experience}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{vacancy.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3">Требования:</h4>
                      <ul className="space-y-2">
                        {vacancy.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <Icon name="Check" size={16} className="text-green-600 mr-2 mt-0.5" />
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Мы предлагаем:</h4>
                      <ul className="space-y-2">
                        {vacancy.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <Icon name="Star" size={16} className="text-primary mr-2 mt-0.5" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button className="bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Откликнуться на вакансию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Инициативная заявка */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">Не нашли подходящую вакансию?</h2>
            <p className="text-gray-600 mb-6">
              Отправьте нам свое резюме, и мы обязательно рассмотрим вашу кандидатуру 
              при появлении подходящих позиций.
            </p>
            
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Фамилия *</label>
                      <Input placeholder="Ваша фамилия" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="your@email.com" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input placeholder="+7 (___) ___-__-__" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Желаемая позиция</label>
                    <Input placeholder="Например: Менеджер по продажам" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">О себе</label>
                    <Textarea 
                      placeholder="Расскажите о своем опыте и навыках..."
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Резюме</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Icon name="Upload" size={24} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">Перетащите файл сюда или нажмите для выбора</p>
                      <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX до 5MB</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить резюме
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">Процесс трудоустройства</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Подача заявки</h3>
                  <p className="text-gray-600 text-sm">Отправьте резюме через форму или на email</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Рассмотрение</h3>
                  <p className="text-gray-600 text-sm">HR-специалист изучит ваше резюме в течение 3 дней</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Собеседование</h3>
                  <p className="text-gray-600 text-sm">Интервью с HR и руководителем отдела</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Принятие решения</h3>
                  <p className="text-gray-600 text-sm">Обратная связь в течение 2 дней после собеседования</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  5
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Добро пожаловать!</h3>
                  <p className="text-gray-600 text-sm">Оформление документов и адаптация в команде</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Контакты HR-отдела</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2 text-primary" />
                  <span>hr@autopremium.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2 text-primary" />
                  <span>+7 (495) 123-45-71</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
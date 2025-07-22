import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HowWeWork = () => {
  const steps = [
    {
      number: 1,
      title: 'Консультация и выбор',
      description: 'Наши эксперты помогут определить ваши потребности и подобрать идеальный автомобиль',
      details: [
        'Анализ ваших потребностей и бюджета',
        'Подбор автомобилей по критериям',
        'Консультация по техническим характеристикам',
        'Сравнение различных моделей и комплектаций'
      ],
      icon: 'Search',
      duration: '30-60 минут'
    },
    {
      number: 2,
      title: 'Тест-драйв',
      description: 'Протестируйте автомобиль в реальных условиях, чтобы убедиться в правильности выбора',
      details: [
        'Бесплатный тест-драйв любого автомобиля',
        'Сопровождение опытного инструктора',
        'Тестирование в городских условиях',
        'Проверка всех систем и функций'
      ],
      icon: 'Car',
      duration: '45-90 минут'
    },
    {
      number: 3,
      title: 'Оценка Trade-in',
      description: 'Если у вас есть автомобиль для обмена, мы проведем его честную оценку',
      details: [
        'Профессиональная диагностика автомобиля',
        'Проверка документов и истории',
        'Рыночная оценка стоимости',
        'Прозрачный расчет доплаты'
      ],
      icon: 'RefreshCw',
      duration: '60-90 минут'
    },
    {
      number: 4,
      title: 'Финансирование',
      description: 'Подберем оптимальные условия кредитования или лизинга для вашей покупки',
      details: [
        'Работа с ведущими банками-партнерами',
        'Индивидуальные условия кредитования',
        'Минимальный пакет документов',
        'Быстрое одобрение заявки'
      ],
      icon: 'CreditCard',
      duration: '30-120 минут'
    },
    {
      number: 5,
      title: 'Оформление документов',
      description: 'Берем на себя все юридические формальности и оформление документов',
      details: [
        'Подготовка договора купли-продажи',
        'Оформление страховки КАСКО и ОСАГО',
        'Регистрация в ГИБДД',
        'Получение номерных знаков'
      ],
      icon: 'FileText',
      duration: '2-4 часа'
    },
    {
      number: 6,
      title: 'Передача автомобиля',
      description: 'Торжественная передача ключей и подробный инструктаж по эксплуатации',
      details: [
        'Детальный осмотр автомобиля',
        'Инструктаж по всем системам',
        'Передача всех документов',
        'Настройка персональных функций'
      ],
      icon: 'Key',
      duration: '60-90 минут'
    }
  ];

  const principles = [
    {
      icon: 'Shield',
      title: 'Прозрачность',
      description: 'Честные цены без скрытых платежей и комиссий'
    },
    {
      icon: 'Clock',
      title: 'Экономия времени',
      description: 'Все процедуры в одном месте за минимальное время'
    },
    {
      icon: 'Award',
      title: 'Качество',
      description: 'Только сертифицированные автомобили с гарантией'
    },
    {
      icon: 'Users',
      title: 'Персональный подход',
      description: 'Индивидуальное решение для каждого клиента'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Помощь и консультации в любое время'
    },
    {
      icon: 'CheckCircle',
      title: 'Гарантии',
      description: 'Полная юридическая защита сделки'
    }
  ];

  const services = [
    {
      title: 'Онлайн-консультации',
      description: 'Получите профессиональную консультацию не выходя из дома',
      features: ['Видеозвонки с экспертами', 'Виртуальный показ автомобилей', 'Онлайн-расчет кредита'],
      icon: 'Video'
    },
    {
      title: 'Доставка на дом',
      description: 'Привезем автомобиль для осмотра и тест-драйва к вам',
      features: ['Доставка по Москве и области', 'Тест-драйв у вашего дома', 'Оформление на месте'],
      icon: 'Truck'
    },
    {
      title: 'Экспресс-покупка',
      description: 'Быстрое оформление покупки за 2-3 часа',
      features: ['Предварительное одобрение кредита', 'Готовые документы', 'Ускоренная регистрация'],
      icon: 'Zap'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Как мы работаем</h1>
          <p className="text-xl opacity-90">Простой и понятный процесс покупки автомобиля</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Введение */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-6">Покупка автомобиля — это просто!</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы создали максимально удобный и прозрачный процесс покупки автомобиля. 
            От первой консультации до получения ключей — мы сопровождаем вас на каждом этапе.
          </p>
        </div>

        {/* Этапы работы */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">Этапы покупки</h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={step.number} className="overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-3 ${index % 2 === 1 ? 'lg:grid-cols-3' : ''}`}>
                  <div className={`bg-primary/5 p-8 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-3' : ''}`}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={step.icon} size={24} className="text-primary" />
                      </div>
                      <div className="text-sm text-gray-600">Время: {step.duration}</div>
                    </div>
                  </div>
                  
                  <div className={`lg:col-span-2 p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold text-secondary mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start">
                          <Icon name="Check" size={16} className="text-green-600 mr-3 mt-1" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Принципы работы */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Наши принципы</h2>
            <p className="text-gray-600">Ценности, которыми мы руководствуемся в работе</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={principle.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Дополнительные услуги */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Дополнительные услуги</h2>
            <p className="text-gray-600">Делаем процесс покупки еще более удобным</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={14} className="text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Гарантии */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Наши гарантии</h2>
            <p className="text-gray-600">Мы гарантируем качество и надежность каждой сделки</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Icon name="Shield" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Юридическая чистота</h3>
              <p className="text-sm text-gray-600">100% проверка документов</p>
            </div>
            
            <div className="text-center">
              <Icon name="Wrench" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Техническое состояние</h3>
              <p className="text-sm text-gray-600">Полная диагностика перед продажей</p>
            </div>
            
            <div className="text-center">
              <Icon name="RefreshCw" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Обмен в течение 7 дней</h3>
              <p className="text-sm text-gray-600">Если автомобиль не подошел</p>
            </div>
            
            <div className="text-center">
              <Icon name="Headphones" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Поддержка после покупки</h3>
              <p className="text-sm text-gray-600">Консультации и помощь</p>
            </div>
          </div>
        </div>

        {/* Начать покупку */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">Готовы начать?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Свяжитесь с нами любым удобным способом, и мы поможем вам найти идеальный автомобиль
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить консультанту
            </Button>
            <Button variant="outline">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Онлайн-чат
            </Button>
            <Button variant="outline">
              <Icon name="Calendar" size={16} className="mr-2" />
              Записаться на встречу
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>Консультации бесплатны • Работаем ежедневно с 9:00 до 21:00</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowWeWork;
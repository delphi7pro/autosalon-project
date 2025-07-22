import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const History = () => {
  const timeline = [
    {
      year: '2009',
      title: 'Основание компании',
      description: 'AutoPremium была основана группой энтузиастов автомобильной индустрии с целью предоставления клиентам доступа к лучшим премиальным автомобилям.',
      achievements: ['Первый офис в Москве', 'Команда из 5 человек', 'Партнерство с BMW'],
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      year: '2012',
      title: 'Расширение бренд-портфеля',
      description: 'Заключены официальные дилерские соглашения с Audi и Mercedes-Benz. Открыт первый сервисный центр.',
      achievements: ['Официальный дилер Audi', 'Официальный дилер Mercedes', 'Сервисный центр на 20 постов'],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      year: '2015',
      title: 'Новое руководство',
      description: 'Александр Петров становится генеральным директором. Начинается период активного роста и модернизации.',
      achievements: ['Новая стратегия развития', 'Обновление автосалона', 'Рост продаж на 80%'],
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      year: '2018',
      title: 'Цифровая трансформация',
      description: 'Запуск онлайн-платформы для продаж и внедрение современных CRM-систем для улучшения клиентского сервиса.',
      achievements: ['Онлайн-каталог', 'CRM-система', 'Мобильное приложение'],
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      year: '2020',
      title: 'Преодоление вызовов',
      description: 'Успешная адаптация к пандемии COVID-19. Развитие онлайн-продаж и бесконтактного сервиса.',
      achievements: ['Онлайн тест-драйвы', 'Доставка на дом', 'Бесконтактный сервис'],
      image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      year: '2022',
      title: 'Лидерство на рынке',
      description: 'AutoPremium признана лучшим дилером года. Открытие второго салона и расширение географии присутствия.',
      achievements: ['Лучший дилер года', 'Второй салон', '10,000 проданных авто'],
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      year: '2024',
      title: 'Будущее уже здесь',
      description: 'Внедрение технологий искусственного интеллекта, развитие электромобильного направления и устойчивого развития.',
      achievements: ['ИИ-консультант', 'Электромобили', 'Экологические инициативы'],
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const milestones = [
    { number: '15+', label: 'Лет на рынке', icon: 'Calendar' },
    { number: '10,000+', label: 'Довольных клиентов', icon: 'Users' },
    { number: '500+', label: 'Автомобилей в наличии', icon: 'Car' },
    { number: '98%', label: 'Положительных отзывов', icon: 'Star' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">История AutoPremium</h1>
          <p className="text-xl opacity-90">15 лет успешного развития и инноваций</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Введение */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-6">Наш путь к успеху</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            С момента основания в 2009 году AutoPremium прошла долгий путь от небольшого 
            автосалона до одного из ведущих дилеров премиальных автомобилей в России. 
            Наша история — это история постоянного развития, инноваций и стремления к совершенству.
          </p>
        </div>

        {/* Ключевые достижения */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {milestones.map((milestone, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={milestone.icon} size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{milestone.number}</div>
                <div className="text-gray-600">{milestone.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Временная линия */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">Хронология развития</h2>
          
          {timeline.map((event, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <Card className="overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                </Card>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="text-4xl font-bold text-primary mb-4">{event.year}</div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{event.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-secondary">Ключевые достижения:</h4>
                    {event.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center">
                        <Icon name="CheckCircle" size={16} className="text-green-600 mr-2" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Наши ценности */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary mb-4">Наши ценности</h2>
            <p className="text-gray-600">Принципы, которые ведут нас вперед</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Клиентоориентированность</h3>
              <p className="text-gray-600">Каждый клиент уникален, и мы стремимся превзойти ожидания</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-gray-600">Мы предлагаем только проверенные автомобили высочайшего качества</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Инновации</h3>
              <p className="text-gray-600">Мы постоянно внедряем новые технологии для улучшения сервиса</p>
            </div>
          </div>
        </div>

        {/* Будущее */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">Взгляд в будущее</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Мы продолжаем развиваться и адаптироваться к изменяющемуся миру. 
            Наши планы включают расширение электромобильного направления, 
            внедрение новых технологий и открытие дополнительных точек продаж.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="text-center pt-8">
                <Icon name="Zap" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Электромобили</h3>
                <p className="text-sm text-gray-600">Развитие направления экологически чистого транспорта</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="text-center pt-8">
                <Icon name="Smartphone" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Цифровизация</h3>
                <p className="text-sm text-gray-600">Внедрение ИИ и автоматизация процессов</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="text-center pt-8">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Расширение</h3>
                <p className="text-sm text-gray-600">Открытие новых салонов в регионах</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default History;
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const team = [
    {
      name: 'Александр Петров',
      position: 'Генеральный директор',
      experience: '20 лет в автомобильной индустрии',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Мария Сидорова',
      position: 'Директор по продажам',
      experience: '15 лет опыта продаж премиум авто',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Главный механик',
      experience: '18 лет сервисного обслуживания',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Елена Волкова',
      position: 'Менеджер по кредитованию',
      experience: '12 лет в банковской сфере',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const achievements = [
    { icon: 'Trophy', title: 'Лучший дилер года', description: '2023, 2022, 2021' },
    { icon: 'Star', title: 'Рейтинг 4.9/5', description: 'По отзывам клиентов' },
    { icon: 'Award', title: 'Сертификат качества', description: 'ISO 9001:2015' },
    { icon: 'Shield', title: 'Официальный дилер', description: 'BMW, Audi, Mercedes' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">О компании AutoPremium</h1>
          <p className="text-xl opacity-90">Ваш надежный партнер в мире премиальных автомобилей</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* История компании */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  AutoPremium была основана в 2009 году с простой миссией: предоставить клиентам 
                  доступ к лучшим премиальным автомобилям и исключительному сервису.
                </p>
                <p>
                  За 15 лет работы мы стали одним из ведущих автосалонов в России, 
                  продав более 10,000 автомобилей и завоевав доверие тысяч клиентов.
                </p>
                <p>
                  Сегодня мы представляем ведущие мировые бренды и предлагаем полный 
                  спектр услуг: от продажи до сервисного обслуживания.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Автосалон" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Миссия и ценности */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary mb-4">Наши ценности</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Клиентоориентированность</h3>
              <p className="text-gray-600">Каждый клиент для нас уникален, и мы стремимся превзойти ожидания</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-gray-600">Мы предлагаем только проверенные автомобили высочайшего качества</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Handshake" size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Честность</h3>
              <p className="text-gray-600">Прозрачные условия и честные цены - основа нашей работы</p>
            </div>
          </div>
        </div>

        {/* Достижения */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary mb-4">Наши достижения</h2>
            <p className="text-gray-600 text-lg">Признание профессионального сообщества и клиентов</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={achievement.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Команда */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary mb-4">Наша команда</h2>
            <p className="text-gray-600 text-lg">Профессионалы с многолетним опытом</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Статистика */}
        <div className="bg-secondary text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">AutoPremium в цифрах</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-lg opacity-90">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-lg opacity-90">Проданных автомобилей</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg opacity-90">Автомобилей в наличии</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg opacity-90">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
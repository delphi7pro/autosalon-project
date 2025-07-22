import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Team = () => {
  const leadership = [
    {
      name: 'Александр Петров',
      position: 'Генеральный директор',
      experience: '20 лет в автомобильной индустрии',
      education: 'МГУ, экономический факультет',
      achievements: ['Лучший дилер года 2023', 'Рост продаж на 150%'],
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Александр руководит компанией с 2015 года. Под его руководством AutoPremium стала одним из ведущих автосалонов премиум-класса в России.'
    },
    {
      name: 'Мария Сидорова',
      position: 'Директор по продажам',
      experience: '15 лет опыта продаж премиум авто',
      education: 'МГИМО, международные отношения',
      achievements: ['Топ-менеджер года', 'Команда №1 по продажам'],
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Мария отвечает за стратегию продаж и развитие клиентской базы. Благодаря её работе уровень удовлетворенности клиентов составляет 98%.'
    }
  ];

  const departments = [
    {
      title: 'Отдел продаж',
      description: 'Профессиональные консультанты помогут выбрать идеальный автомобиль',
      team: [
        { name: 'Дмитрий Козлов', position: 'Старший менеджер', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
        { name: 'Елена Волкова', position: 'Менеджер по продажам', image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
        { name: 'Андрей Смирнов', position: 'Менеджер по продажам', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' }
      ]
    },
    {
      title: 'Сервисный центр',
      description: 'Опытные механики обеспечат качественное обслуживание вашего автомобиля',
      team: [
        { name: 'Игорь Петров', position: 'Главный механик', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
        { name: 'Сергей Иванов', position: 'Мастер-диагност', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
        { name: 'Михаил Федоров', position: 'Слесарь-ремонтник', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' }
      ]
    },
    {
      title: 'Финансовый отдел',
      description: 'Специалисты по кредитованию и страхованию',
      team: [
        { name: 'Ольга Кузнецова', position: 'Менеджер по кредитованию', image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
        { name: 'Татьяна Морозова', position: 'Специалист по страхованию', image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Наша команда</h1>
          <p className="text-xl opacity-90">Профессионалы, которые делают AutoPremium лучшим</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Руководство */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Руководство компании</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                    <p className="text-primary font-semibold mb-3">{leader.position}</p>
                    <p className="text-gray-600 mb-4">{leader.bio}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Icon name="Briefcase" size={16} className="mr-2 text-primary" />
                        <span>{leader.experience}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="GraduationCap" size={16} className="mr-2 text-primary" />
                        <span>{leader.education}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Достижения:</h4>
                      <ul className="text-sm space-y-1">
                        {leader.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center">
                            <Icon name="Award" size={14} className="mr-2 text-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Отделы */}
        <div className="space-y-12">
          {departments.map((dept, index) => (
            <div key={index}>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-4">{dept.title}</h2>
                <p className="text-gray-600 text-lg">{dept.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.team.map((member, idx) => (
                  <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-4">{member.position}</p>
                      <Button variant="outline" size="sm">
                        <Icon name="MessageCircle" size={14} className="mr-2" />
                        Связаться
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Присоединяйтесь к команде */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Присоединяйтесь к нашей команде!</h2>
          <p className="text-gray-600 mb-6">
            Мы всегда ищем талантливых и мотивированных специалистов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="/careers">
                <Icon name="Users" size={16} className="mr-2" />
                Вакансии
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/contacts">
                <Icon name="Mail" size={16} className="mr-2" />
                Отправить резюме
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
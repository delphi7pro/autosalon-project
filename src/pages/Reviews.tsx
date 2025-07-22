import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Алексей Морозов',
      car: 'BMW X5 2023',
      rating: 5,
      date: '2024-01-10',
      text: 'Отличный сервис! Купил BMW X5, все прошло быстро и без проблем. Менеджеры очень внимательные, помогли с выбором комплектации и оформлением кредита. Автомобиль в идеальном состоянии, все документы оформили за один день. Рекомендую!',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Мария Кузнецова',
      car: 'Audi Q7 2024',
      rating: 5,
      date: '2024-01-08',
      text: 'Прекрасный автосалон! Покупала Audi Q7, очень довольна обслуживанием. Сотрудники профессиональные, терпеливо отвечали на все вопросы. Особенно хочу отметить работу отдела кредитования - помогли получить выгодные условия. Спасибо большое!',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Дмитрий Соколов',
      car: 'Mercedes C-Class 2023',
      rating: 4,
      date: '2024-01-05',
      text: 'Хороший автосалон с качественными автомобилями. Купил Mercedes C-Class, машина в отличном состоянии. Единственный минус - пришлось немного подождать оформления документов, но в целом все прошло хорошо. Цены адекватные, персонал вежливый.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 4,
      name: 'Елена Петрова',
      car: 'BMW 3 Series 2024',
      rating: 5,
      date: '2024-01-03',
      text: 'Замечательный опыт покупки! Долго выбирала между разными моделями, менеджеры терпеливо показывали все варианты, организовали тест-драйвы. В итоге выбрала BMW 3 Series и очень довольна. Отдельное спасибо за помощь с trade-in моего старого автомобиля.',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 5,
      name: 'Андрей Волков',
      car: 'Audi A6 2023',
      rating: 5,
      date: '2023-12-28',
      text: 'Покупал Audi A6 в этом салоне. Все на высшем уровне - от консультации до получения автомобиля. Особенно понравилось, что предложили несколько вариантов финансирования и помогли выбрать оптимальный. Автомобиль получил в идеальном состоянии, со всеми документами.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 6,
      name: 'Ольга Смирнова',
      car: 'Mercedes GLC 2024',
      rating: 4,
      date: '2023-12-25',
      text: 'Хороший автосалон, купила Mercedes GLC. Понравилось внимательное отношение к клиентам и профессионализм сотрудников. Автомобиль соответствует всем заявленным характеристикам. Небольшая задержка была только с доставкой, но в целом все отлично.',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const stats = [
    { label: 'Общий рейтинг', value: '4.8/5', icon: 'Star' },
    { label: 'Всего отзывов', value: '1,247', icon: 'MessageSquare' },
    { label: 'Рекомендуют', value: '98%', icon: 'ThumbsUp' },
    { label: 'Повторные покупки', value: '76%', icon: 'RefreshCw' }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Отзывы клиентов</h1>
          <p className="text-xl opacity-90">Узнайте, что говорят о нас наши клиенты</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Отзывы */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-secondary">Отзывы покупателей</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Сортировка:</span>
                <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  <option>Сначала новые</option>
                  <option>Сначала старые</option>
                  <option>По рейтингу</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">{review.name}</h3>
                            <p className="text-sm text-gray-600">{review.car}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              {renderStars(review.rating)}
                            </div>
                            <p className="text-xs text-gray-500">{formatDate(review.date)}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{review.text}</p>
                        
                        <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
                          <button className="flex items-center space-x-1 hover:text-primary">
                            <Icon name="ThumbsUp" size={14} />
                            <span>Полезно (12)</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-primary">
                            <Icon name="MessageCircle" size={14} />
                            <span>Ответить</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Пагинация */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Icon name="ChevronLeft" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-white">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">
                  <Icon name="ChevronRight" size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Форма добавления отзыва */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <h3 className="text-xl font-bold text-secondary">Оставить отзыв</h3>
                <p className="text-gray-600">Поделитесь своим опытом покупки</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <Input placeholder="Ваше имя" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Автомобиль</label>
                    <Input placeholder="Модель автомобиля" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Оценка *</label>
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }, (_, index) => (
                        <button
                          key={index}
                          type="button"
                          className="text-gray-300 hover:text-yellow-400 transition-colors"
                        >
                          <Icon name="Star" size={20} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Отзыв *</label>
                    <Textarea 
                      placeholder="Расскажите о своем опыте покупки..."
                      rows={4}
                      required 
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Средний рейтинг */}
            <Card className="mt-6">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.8</div>
                <div className="flex justify-center space-x-1 mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-gray-600">На основе 1,247 отзывов</p>
                
                <div className="mt-4 space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center space-x-2 text-sm">
                      <span>{stars}</span>
                      <Icon name="Star" size={12} className="text-yellow-400" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: `${stars === 5 ? 85 : stars === 4 ? 12 : 3}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-500">
                        {stars === 5 ? '85%' : stars === 4 ? '12%' : '3%'}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;
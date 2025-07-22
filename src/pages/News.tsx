import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Новый BMW X7 2024 уже в салоне!',
      excerpt: 'Встречайте обновленный флагманский кроссовер BMW с улучшенным дизайном и новыми технологиями.',
      content: 'Полная статья о новом BMW X7...',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      date: '2024-01-15',
      category: 'Новинки',
      author: 'Мария Сидорова'
    },
    {
      id: 2,
      title: 'Специальные условия кредитования в январе',
      excerpt: 'Воспользуйтесь выгодными условиями автокредитования со ставкой от 5.9% годовых.',
      content: 'Подробности акции...',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      date: '2024-01-10',
      category: 'Акции',
      author: 'Елена Волкова'
    },
    {
      id: 3,
      title: 'Открытие нового сервисного центра',
      excerpt: 'Мы расширяемся! Новый современный сервисный центр открылся на Ленинском проспекте.',
      content: 'Информация о новом сервисе...',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      date: '2024-01-05',
      category: 'Компания',
      author: 'Дмитрий Козлов'
    },
    {
      id: 4,
      title: 'Mercedes EQS - электрическое будущее уже здесь',
      excerpt: 'Тест-драйв нового электрического седана Mercedes EQS с запасом хода до 770 км.',
      content: 'Обзор электромобиля...',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      date: '2024-01-01',
      category: 'Обзоры',
      author: 'Александр Петров'
    },
    {
      id: 5,
      title: 'Программа Trade-in: обновите свой автомобиль',
      excerpt: 'Узнайте, как выгодно обменять старый автомобиль на новый с доплатой.',
      content: 'Условия программы Trade-in...',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      date: '2023-12-28',
      category: 'Услуги',
      author: 'Андрей Смирнов'
    },
    {
      id: 6,
      title: 'Итоги года: AutoPremium в цифрах',
      excerpt: 'Подводим итоги успешного 2023 года и делимся планами на будущее.',
      content: 'Статистика и достижения...',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      date: '2023-12-25',
      category: 'Компания',
      author: 'Александр Петров'
    }
  ];

  const categories = ['Все', 'Новинки', 'Акции', 'Компания', 'Обзоры', 'Услуги'];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Новинки': 'bg-blue-100 text-blue-800',
      'Акции': 'bg-red-100 text-red-800',
      'Компания': 'bg-green-100 text-green-800',
      'Обзоры': 'bg-purple-100 text-purple-800',
      'Услуги': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Новости AutoPremium</h1>
          <p className="text-xl opacity-90">Будьте в курсе последних событий и новинок автомобильного мира</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Фильтры */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="hover:bg-primary hover:text-white"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Главная новость */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={news[0].image} 
                  alt={news[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <Badge className={`absolute top-4 left-4 ${getCategoryColor(news[0].category)}`}>
                  {news[0].category}
                </Badge>
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  {formatDate(news[0].date)}
                  <Icon name="User" size={16} className="ml-4 mr-2" />
                  {news[0].author}
                </div>
                <h2 className="text-2xl font-bold text-secondary mb-4">{news[0].title}</h2>
                <p className="text-gray-600 mb-6">{news[0].excerpt}</p>
                <Button className="bg-primary hover:bg-primary/90">
                  Читать полностью
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Остальные новости */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(1).map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className={`absolute top-4 right-4 ${getCategoryColor(article.category)}`}>
                  {article.category}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  {formatDate(article.date)}
                </div>
                <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Icon name="User" size={14} className="mr-1" />
                    {article.author}
                  </div>
                  <Button variant="outline" size="sm">
                    Читать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Подписка на новости */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Подпишитесь на новости</h2>
          <p className="text-gray-600 mb-6">Получайте последние новости и специальные предложения на email</p>
          
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Mail" size={16} className="mr-2" />
              Подписаться
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
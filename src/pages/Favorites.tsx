import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: 'BMW 3 Series',
      price: '2 890 000',
      year: 2024,
      fuel: 'Бензин',
      transmission: 'Автомат',
      mileage: '0',
      type: 'Седан',
      brand: 'BMW',
      image: '/img/35658ce2-0e0f-41a4-a417-c35990cabc29.jpg',
      features: ['Кожаный салон', 'Подогрев сидений', 'Навигация', 'Климат-контроль'],
      engine: '2.0L турбо',
      power: '184 л.с.',
      acceleration: '7.1 сек',
      consumption: '6.8 л/100км',
      drive: 'Задний привод',
      color: 'Серебристый металлик',
      description: 'Элегантный и динамичный BMW 3 Series.',
      specs: {
        dimensions: '4709×1827×1442 мм',
        trunk: '480 л',
        weight: '1570 кг',
        fuelTank: '59 л',
        maxSpeed: '235 км/ч'
      }
    }
  ]);

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Избранные автомобили</h1>
          <p className="text-xl opacity-90">Ваши любимые автомобили в одном месте</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {favorites.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-secondary">
                Избранных автомобилей: {favorites.length}
              </h2>
              <Button variant="outline" onClick={clearFavorites}>
                <Icon name="Trash2" size={16} className="mr-2" />
                Очистить список
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favorites.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Готовы к покупке?</h3>
              <p className="text-gray-600 mb-6">
                Свяжитесь с нами для получения персонального предложения
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Позвонить
                </Button>
                <Button variant="outline">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Написать в чат
                </Button>
              </div>
            </div>
          </>
        ) : (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={32} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Список избранного пуст</h2>
              <p className="text-gray-600 mb-8">
                Добавляйте понравившиеся автомобили в избранное, нажимая на иконку сердца
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="/catalog">
                  <Icon name="Search" size={16} className="mr-2" />
                  Перейти к каталогу
                </a>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Favorites;
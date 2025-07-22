import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const cars = [
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
      features: ['Кожаный салон', 'Подогрев сидений', 'Навигация', 'Климат-контроль', 'Bluetooth', 'USB'],
      engine: '2.0L турбо',
      power: '184 л.с.',
      acceleration: '7.1 сек',
      consumption: '6.8 л/100км',
      drive: 'Задний привод',
      color: 'Серебристый металлик',
      description: 'Элегантный и динамичный BMW 3 Series представляет собой идеальное сочетание спортивности и комфорта.',
      specs: {
        dimensions: '4709×1827×1442 мм',
        trunk: '480 л',
        weight: '1570 кг',
        fuelTank: '59 л',
        maxSpeed: '235 км/ч'
      }
    },
    {
      id: 2,
      name: 'Audi Q5',
      price: '3 450 000',
      year: 2024,
      fuel: 'Бензин',
      transmission: 'Автомат',
      mileage: '0',
      type: 'Кроссовер',
      brand: 'Audi',
      image: '/img/b6e0d970-0bdc-442d-af99-f0a51ff0863e.jpg',
      features: ['Полный привод', 'Панорамная крыша', 'LED фары', 'Virtual Cockpit', 'Кожаный салон', 'Подогрев сидений'],
      engine: '2.0L TFSI',
      power: '249 л.с.',
      acceleration: '6.3 сек',
      consumption: '7.4 л/100км',
      drive: 'Полный привод quattro',
      color: 'Красный металлик',
      description: 'Audi Q5 - это премиальный кроссовер, который сочетает в себе элегантность, технологии и превосходные внедорожные возможности.',
      specs: {
        dimensions: '4663×1893×1659 мм',
        trunk: '550 л',
        weight: '1765 кг',
        fuelTank: '70 л',
        maxSpeed: '237 км/ч'
      }
    },
    {
      id: 3,
      name: 'Mercedes C-Class Coupe',
      price: '4 120 000',
      year: 2024,
      fuel: 'Бензин',
      transmission: 'Автомат',
      mileage: '0',
      type: 'Купе',
      brand: 'Mercedes',
      image: '/img/8da9e761-2e1b-453f-9c89-1afd4df236ee.jpg',
      features: ['AMG пакет', 'Премиум звук', 'Автопилот', 'Панорамная крыша', 'Ambient освещение', 'Массаж сидений'],
      engine: '2.0L турбо',
      power: '255 л.с.',
      acceleration: '6.0 сек',
      consumption: '7.2 л/100км',
      drive: 'Задний привод',
      color: 'Жемчужно-белый',
      description: 'Mercedes C-Class Coupe воплощает в себе спортивную элегантность и роскошь.',
      specs: {
        dimensions: '4751×1810×1421 мм',
        trunk: '400 л',
        weight: '1615 кг',
        fuelTank: '66 л',
        maxSpeed: '250 км/ч'
      }
    }
  ];

  const brands = ['BMW', 'Audi', 'Mercedes', 'Lexus', 'Porsche'];
  const types = ['Седан', 'Кроссовер', 'Купе', 'Хэтчбек', 'Универсал'];
  const priceRanges = [
    { value: 'all', label: 'Любая цена' },
    { value: '0-2000000', label: 'До 2 млн ₽' },
    { value: '2000000-4000000', label: '2-4 млн ₽' },
    { value: '4000000-6000000', label: '4-6 млн ₽' },
    { value: '6000000+', label: 'От 6 млн ₽' }
  ];

  const filteredCars = cars.filter(car => {
    const price = parseInt(car.price.replace(/\s/g, ''));
    let priceMatch = true;
    
    if (priceRange !== 'all') {
      if (priceRange === '0-2000000') priceMatch = price <= 2000000;
      else if (priceRange === '2000000-4000000') priceMatch = price > 2000000 && price <= 4000000;
      else if (priceRange === '4000000-6000000') priceMatch = price > 4000000 && price <= 6000000;
      else if (priceRange === '6000000+') priceMatch = price > 6000000;
    }

    return (
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedBrand === 'all' || car.brand === selectedBrand) &&
      (selectedType === 'all' || car.type === selectedType) &&
      priceMatch
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Каталог автомобилей</h1>
          <p className="text-xl opacity-90">Найдите идеальный автомобиль из нашего обширного каталога</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Фильтры */}
          <div className="lg:w-1/4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Фильтры</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Поиск</label>
                    <Input
                      placeholder="Модель автомобиля..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Марка</label>
                    <select 
                      value={selectedBrand} 
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="all">Все марки</option>
                      {brands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Тип кузова</label>
                    <select 
                      value={selectedType} 
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="all">Все типы</option>
                      {types.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Цена</label>
                    <select 
                      value={priceRange} 
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {priceRanges.map(range => (
                        <option key={range.value} value={range.value}>{range.label}</option>
                      ))}
                    </select>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedBrand('all');
                      setSelectedType('all');
                      setPriceRange('all');
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Результаты */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-secondary">
                Найдено {filteredCars.length} автомобилей
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Сортировка:</span>
                <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  <option>По цене (возрастание)</option>
                  <option>По цене (убывание)</option>
                  <option>По году</option>
                  <option>По популярности</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Автомобили не найдены</h3>
                <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
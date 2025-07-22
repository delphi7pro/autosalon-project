import { useState } from 'react';
import CarCard from './CarCard';

const CatalogSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

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
      description: 'Элегантный и динамичный BMW 3 Series представляет собой идеальное сочетание спортивности и комфорта. Этот седан оснащен передовыми технологиями и обеспечивает превосходное качество вождения.',
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
      description: 'Audi Q5 - это премиальный кроссовер, который сочетает в себе элегантность, технологии и превосходные внедорожные возможности. Оснащен системой полного привода quattro для максимального контроля.',
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
      description: 'Mercedes C-Class Coupe воплощает в себе спортивную элегантность и роскошь. Этот автомобиль создан для тех, кто ценит стиль, производительность и передовые технологии.',
      specs: {
        dimensions: '4751×1810×1421 мм',
        trunk: '400 л',
        weight: '1615 кг',
        fuelTank: '66 л',
        maxSpeed: '250 км/ч'
      }
    }
  ];

  const filteredCars = cars.filter(car => {
    return (
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedBrand === 'all' || car.brand === selectedBrand) &&
      (selectedType === 'all' || car.type === selectedType)
    );
  });

  return (
    <section id="catalog" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-secondary mb-4">Наш каталог</h3>
          <p className="text-gray-600 text-lg">Найдено {filteredCars.length} автомобилей</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
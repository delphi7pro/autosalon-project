import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const brands = ['BMW', 'Audi', 'Mercedes', 'Lexus', 'Porsche'];
  const types = ['Седан', 'Кроссовер', 'Купе', 'Хэтчбек', 'Универсал'];

  return (
    <section className="bg-gradient-to-br from-secondary to-secondary/80 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">Найдите автомобиль своей мечты</h2>
        <p className="text-xl mb-8 opacity-90">Более 500 премиальных автомобилей в наличии</p>
        
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <Input
                placeholder="Поиск по модели..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <select 
              value={selectedBrand} 
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">Все марки</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">Все типы</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <Button className="bg-primary hover:bg-primary/90 w-full">
              <Icon name="Search" size={16} className="mr-2" />
              Найти
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
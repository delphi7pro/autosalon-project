import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Car {
  id: number;
  name: string;
  price: string;
  year: number;
  fuel: string;
  transmission: string;
  mileage: string;
  type: string;
  brand: string;
  image: string;
  features: string[];
  engine: string;
  power: string;
  acceleration: string;
  consumption: string;
  drive: string;
  color: string;
  description: string;
  specs: {
    dimensions: string;
    trunk: string;
    weight: string;
    fuelTank: string;
    maxSpeed: string;
  };
}

interface CarDetailModalProps {
  car: Car;
}

const CarDetailModal = ({ car }: CarDetailModalProps) => (
  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold text-secondary">{car.name}</DialogTitle>
    </DialogHeader>
    
    <div className="space-y-6">
      <div className="relative">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-80 object-cover rounded-lg"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-lg px-3 py-1">
          {car.price} ₽
        </Badge>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Обзор</TabsTrigger>
          <TabsTrigger value="specs">Характеристики</TabsTrigger>
          <TabsTrigger value="features">Опции</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <p className="text-gray-600 leading-relaxed">{car.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Zap" size={16} className="text-primary" />
                <span className="font-semibold">Двигатель</span>
              </div>
              <p className="text-sm text-gray-600">{car.engine}</p>
              <p className="text-sm text-gray-600">{car.power}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Activity" size={16} className="text-primary" />
                <span className="font-semibold">Разгон</span>
              </div>
              <p className="text-sm text-gray-600">0-100 км/ч</p>
              <p className="text-sm text-gray-600">{car.acceleration}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Settings" size={16} className="text-primary" />
                <span className="font-semibold">Расход</span>
              </div>
              <p className="text-sm text-gray-600">Смешанный цикл</p>
              <p className="text-sm text-gray-600">{car.consumption}</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="specs" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-secondary">Технические характеристики</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Год выпуска:</span>
                  <span>{car.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Двигатель:</span>
                  <span>{car.engine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Мощность:</span>
                  <span>{car.power}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Привод:</span>
                  <span>{car.drive}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Коробка передач:</span>
                  <span>{car.transmission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Макс. скорость:</span>
                  <span>{car.specs.maxSpeed}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-secondary">Габариты и вес</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Размеры (Д×Ш×В):</span>
                  <span>{car.specs.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Багажник:</span>
                  <span>{car.specs.trunk}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Масса:</span>
                  <span>{car.specs.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Топливный бак:</span>
                  <span>{car.specs.fuelTank}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Цвет:</span>
                  <span>{car.color}</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="features" className="space-y-4">
          <h4 className="font-semibold text-secondary">Комплектация и опции</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {car.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex space-x-4 pt-4 border-t">
        <Button className="flex-1 bg-primary hover:bg-primary/90">
          <Icon name="Phone" size={16} className="mr-2" />
          Записаться на тест-драйв
        </Button>
        <Button variant="outline" className="flex-1">
          <Icon name="Calculator" size={16} className="mr-2" />
          Рассчитать кредит
        </Button>
      </div>
    </div>
  </DialogContent>
);

export default CarDetailModal;
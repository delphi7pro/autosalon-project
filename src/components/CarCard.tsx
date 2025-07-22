import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import CarDetailModal from './CarDetailModal';

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

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 right-4 bg-primary">Новый</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-secondary">{car.name}</CardTitle>
        <div className="text-2xl font-bold text-primary">{car.price} ₽</div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Icon name="Calendar" size={14} className="mr-2" />
            {car.year} год
          </div>
          <div className="flex items-center">
            <Icon name="Zap" size={14} className="mr-2" />
            {car.fuel}
          </div>
          <div className="flex items-center">
            <Icon name="Settings" size={14} className="mr-2" />
            {car.transmission}
          </div>
          <div className="flex items-center">
            <Icon name="Activity" size={14} className="mr-2" />
            {car.mileage} км
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {car.features.slice(0, 2).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                Подробнее
              </Button>
            </DialogTrigger>
            <CarDetailModal car={car} />
          </Dialog>
          <Button variant="outline" size="icon">
            <Icon name="Heart" size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
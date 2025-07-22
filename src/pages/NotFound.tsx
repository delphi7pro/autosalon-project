import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="text-center py-16">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Icon name="AlertTriangle" size={64} className="text-primary" />
            </div>
            
            <h1 className="text-6xl font-bold text-secondary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-secondary mb-4">Страница не найдена</h2>
            <p className="text-gray-600 mb-8 text-lg">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/">
                  <Icon name="Home" size={16} className="mr-2" />
                  На главную
                </Link>
              </Button>
              
              <Button variant="outline" asChild>
                <Link to="/catalog">
                  <Icon name="Car" size={16} className="mr-2" />
                  Каталог автомобилей
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Возможно, вас заинтересует:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <Link to="/services" className="text-primary hover:underline">
                  Наши услуги
                </Link>
                <Link to="/about" className="text-primary hover:underline">
                  О компании
                </Link>
                <Link to="/contacts" className="text-primary hover:underline">
                  Контакты
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;

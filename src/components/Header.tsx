import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Car" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-secondary">AutoPremium</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="/catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            <a href="/news" className="text-foreground hover:text-primary transition-colors">Новости</a>
            <a href="/reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
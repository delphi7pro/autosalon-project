import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Car" size={24} className="text-primary" />
              <h4 className="text-xl font-bold">AutoPremium</h4>
            </div>
            <p className="text-gray-400 mb-4">Лучший автосалон премиальных автомобилей в городе</p>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Услуги</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/catalog" className="hover:text-primary transition-colors">Продажа автомобилей</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Trade-in</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Кредитование</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Сервис</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Контакты</h5>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                info@autopremium.ru
              </li>
              <li className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                Москва, ул. Примерная, 123
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Следите за нами</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AutoPremium. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
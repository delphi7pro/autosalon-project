import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все вопросы', icon: 'HelpCircle' },
    { id: 'purchase', name: 'Покупка', icon: 'ShoppingCart' },
    { id: 'credit', name: 'Кредитование', icon: 'CreditCard' },
    { id: 'service', name: 'Сервис', icon: 'Wrench' },
    { id: 'tradein', name: 'Trade-in', icon: 'RefreshCw' },
    { id: 'warranty', name: 'Гарантия', icon: 'Shield' },
    { id: 'documents', name: 'Документы', icon: 'FileText' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'purchase',
      question: 'Как купить автомобиль в вашем салоне?',
      answer: 'Процесс покупки включает несколько этапов: консультацию с менеджером, выбор автомобиля, тест-драйв, оформление документов и получение автомобиля. Весь процесс занимает от 2 до 4 часов в зависимости от способа оплаты.',
      tags: ['покупка', 'процесс', 'этапы']
    },
    {
      id: 2,
      category: 'purchase',
      question: 'Можно ли зарезервировать автомобиль?',
      answer: 'Да, вы можете зарезервировать понравившийся автомобиль на срок до 3 дней, внеся предоплату в размере 50 000 рублей. Предоплата засчитывается при покупке или возвращается при отказе.',
      tags: ['резерв', 'предоплата', 'бронирование']
    },
    {
      id: 3,
      category: 'credit',
      question: 'Какие документы нужны для получения кредита?',
      answer: 'Для оформления автокредита необходимы: паспорт, водительское удостоверение, справка о доходах (2-НДФЛ или справка по форме банка), трудовая книжка или трудовой договор. Для некоторых программ достаточно только паспорта и водительских прав.',
      tags: ['кредит', 'документы', 'справки']
    },
    {
      id: 4,
      category: 'credit',
      question: 'Какая минимальная процентная ставка по кредиту?',
      answer: 'Минимальная ставка составляет 5.9% годовых для клиентов с отличной кредитной историей. Средняя ставка по рынку — 8-12% в зависимости от банка, суммы кредита и первоначального взноса.',
      tags: ['ставка', 'проценты', 'условия']
    },
    {
      id: 5,
      category: 'service',
      question: 'Какие виды сервисного обслуживания вы предоставляете?',
      answer: 'Мы предоставляем полный спектр услуг: плановое ТО, диагностика, ремонт двигателя и трансмиссии, кузовной ремонт, шиномонтаж, замена масла и фильтров, компьютерная диагностика. Работаем только с оригинальными запчастями.',
      tags: ['сервис', 'ремонт', 'обслуживание']
    },
    {
      id: 6,
      category: 'service',
      question: 'Сколько стоит техническое обслуживание?',
      answer: 'Стоимость ТО зависит от марки автомобиля и объема работ. Базовое ТО (замена масла, фильтров, диагностика) стоит от 15 000 рублей. Полное ТО с заменой всех расходников — от 25 000 рублей.',
      tags: ['цена', 'стоимость', 'то']
    },
    {
      id: 7,
      category: 'tradein',
      question: 'Как происходит оценка автомобиля по программе Trade-in?',
      answer: 'Оценка включает: внешний осмотр кузова, проверку салона, диагностику двигателя и электроники, проверку документов и истории автомобиля. Процедура занимает 60-90 минут. Оценка действительна 7 дней.',
      tags: ['трейд-ин', 'оценка', 'обмен']
    },
    {
      id: 8,
      category: 'tradein',
      question: 'Какие автомобили принимаются в Trade-in?',
      answer: 'Мы принимаем автомобили любых марок возрастом до 15 лет. Автомобиль должен быть в рабочем состоянии, с полным комплектом документов, без серьезных повреждений кузова и двигателя.',
      tags: ['принимаем', 'условия', 'требования']
    },
    {
      id: 9,
      category: 'warranty',
      question: 'Какая гарантия предоставляется на автомобили?',
      answer: 'На новые автомобили действует официальная гарантия производителя (2-3 года или 100 000 км). На сертифицированные подержанные автомобили предоставляем гарантию 6 месяцев или 10 000 км пробега.',
      tags: ['гарантия', 'новые', 'бу']
    },
    {
      id: 10,
      category: 'warranty',
      question: 'Что покрывает гарантия?',
      answer: 'Гарантия покрывает все заводские дефекты, неисправности двигателя, трансмиссии, электроники. Не покрывается: износ расходных материалов, повреждения от ДТП, неправильной эксплуатации или тюнинга.',
      tags: ['покрытие', 'условия', 'исключения']
    },
    {
      id: 11,
      category: 'documents',
      question: 'Какие документы выдаются при покупке?',
      answer: 'При покупке вы получаете: договор купли-продажи, ПТС, СТС, полис ОСАГО, справку-счет, акт приема-передачи, сервисную книжку, руководство по эксплуатации, комплект ключей.',
      tags: ['документы', 'птс', 'стс']
    },
    {
      id: 12,
      category: 'documents',
      question: 'Помогаете ли вы с постановкой на учет в ГИБДД?',
      answer: 'Да, мы предоставляем услугу регистрации автомобиля в ГИБДД. Стоимость услуги — 5 000 рублей. Срок оформления — 1-2 рабочих дня. Также можем оформить красивые номера за дополнительную плату.',
      tags: ['гибдд', 'регистрация', 'номера']
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const popularQuestions = faqs.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h1>
          <p className="text-xl opacity-90">Найдите ответы на самые популярные вопросы</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Поиск */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Поиск по вопросам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>

        {/* Категории */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Категории вопросов</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-primary text-white" : ""}
              >
                <Icon name={category.icon} size={16} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Популярные вопросы */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Icon name="TrendingUp" size={20} className="mr-2 text-primary" />
                  Популярные вопросы
                </h3>
                <div className="space-y-3">
                  {popularQuestions.map((faq) => (
                    <button
                      key={faq.id}
                      className="text-left text-sm text-gray-600 hover:text-primary transition-colors block w-full"
                      onClick={() => {
                        setSelectedCategory(faq.category);
                        setSearchTerm('');
                      }}
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-3">Не нашли ответ?</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="/feedback">
                        <Icon name="MessageCircle" size={14} className="mr-2" />
                        Задать вопрос
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <Icon name="Phone" size={14} className="mr-2" />
                      Позвонить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Список вопросов */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-secondary mb-2">
                {selectedCategory === 'all' ? 'Все вопросы' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">Найдено {filteredFAQs.length} вопросов</p>
            </div>

            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border rounded-lg">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex items-start space-x-3">
                        <Icon name="HelpCircle" size={20} className="text-primary mt-1" />
                        <span className="font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="pl-8">
                        <p className="text-gray-600 leading-relaxed mb-4">{faq.answer}</p>
                        <div className="flex flex-wrap gap-2">
                          {faq.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Вопросы не найдены</h3>
                  <p className="text-gray-500 mb-6">
                    Попробуйте изменить поисковый запрос или выбрать другую категорию
                  </p>
                  <Button variant="outline" onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                    Сбросить фильтры
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Дополнительная помощь */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-4">Нужна дополнительная помощь?</h2>
            <p className="text-gray-600">Наши специалисты готовы ответить на любые вопросы</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="text-center pt-8">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-sm text-gray-600 mb-4">Прямая линия поддержки</p>
                <Button variant="outline" size="sm">
                  +7 (495) 123-45-67
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center pt-8">
                <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Онлайн-чат</h3>
                <p className="text-sm text-gray-600 mb-4">Быстрые ответы в чате</p>
                <Button variant="outline" size="sm">
                  Начать чат
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center pt-8">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-gray-600 mb-4">Подробный ответ на почту</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/feedback">Написать</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
const StatsSection = () => {
  const stats = [
    { number: '500+', label: 'Автомобилей в наличии' },
    { number: '15+', label: 'Лет на рынке' },
    { number: '10000+', label: 'Довольных клиентов' },
    { number: '98%', label: 'Положительных отзывов' }
  ];

  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const computerCategories = [
    {
      title: "Для офиса и склада",
      subtitle: "Стабильная работа для базовых задач",
      description: "Идеально для: 1С, офисные приложения, почта, работа с документами, складские программы",
      image: "/img/5b8ded2f-e28f-4846-9d62-5f7d6438385a.jpg",
      variants: [
        { name: "Экономичный", specs: "Core i3-6100, 8GB DDR4, SSD 240GB", price: "9 000₽" },
        { name: "С запасом мощности", specs: "Core i5-6500, 8GB, SSD 240GB", price: "11 000₽" }
      ]
    },
    {
      title: "Для многозадачности",
      subtitle: "Ни одного зависания при работе с десятками вкладок",
      description: "Для: менеджеров, риелторов, операторов, руководителей отделов",
      image: "/img/5fcd5029-490f-45a5-8e40-8cf374015280.jpg",
      variants: [
        { name: "Оптимальный", specs: "Core i3-6100, 16GB DDR4, SSD 500GB", price: "12 000₽" },
        { name: "Максимальная скорость", specs: "Core i5-7500, 16GB, SSD 500GB", price: "14 500₽" }
      ]
    },
    {
      title: "Для бухгалтерии",
      subtitle: "Скорость и надежность для главного бухгалтера",
      description: "Мощности для комфортной работы с 1С, клиент-банками и формированием сложной отчетности",
      image: "/img/2b7489d5-031b-4565-8678-d99bbe2a60bf.jpg",
      variants: [
        { name: "Сбалансированный", specs: "Core i3-8100, 16GB DDR4, SSD 500GB", price: "14 000₽" },
        { name: "Для сложных расчетов", specs: "Core i5-8500, 16GB, SSD 500GB", price: "17 500₽" }
      ]
    },
    {
      title: "Для дизайнеров",
      subtitle: "Творчество и проектирование без ограничений",
      description: "Решение для работы с графикой, монтажа видео и проектирования",
      image: "/img/52a6a0bb-fe17-4cab-ba32-c128ebd551c5.jpg",
      variants: [
        { name: "Отличный старт", specs: "i5-10400, 16GB, SSD 500GB, RX580 8GB", price: "30 000₽" },
        { name: "Профессиональная мощь", specs: "i7-10700, 16GB, SSD 500GB, RTX3060 8GB", price: "49 000₽" }
      ]
    },
    {
      title: "Топовое решение",
      subtitle: "Мощность будущего уже сегодня",
      description: "Для монтажа видео 4K, 3D-моделирования, разработки и самых сложных вычислений",
      image: "/img/4738c31c-427e-4094-a0a8-5d67d6f3c677.jpg",
      variants: [
        { name: "Топ", specs: "i5-12400, 32GB, SSD 1TB, RTX4060 8GB", price: "58 000₽" },
        { name: "Флагман", specs: "Ryzen 7-5700X3D, 32GB, SSD 1TB, RTX5060", price: "80 000₽" }
      ]
    }
  ];

  const monitors = [
    { size: '22" IPS', price: "4 000₽" },
    { size: '23" IPS', price: "5 000₽" },
    { size: '24" TN', price: "5 000₽" },
    { size: '24" IPS', price: "6 500₽" },
    { size: '27" IPS', price: "8 500₽" },
    { size: '32" IPS', price: "14 000₽" }
  ];

  const advantages = [
    { icon: "Target", title: "Решение под задачу", desc: "Подберем конфигурацию именно для ваших потребностей" },
    { icon: "DollarSign", title: "Экономия до 50%", desc: "Получите мощные рабочие станции по цене офисных ПК" },
    { icon: "CheckCircle", title: "Безупречное состояние", desc: "Корпуса 4/5, техника 5/5. Вы не отличите от новой" },
    { icon: "Package", title: "Готовность к работе", desc: "Установлена ОС и базовое ПО. Подключил и работай" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Monitor" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Office - PC</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-blue-600 transition-colors">Каталог</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#guarantee" className="text-gray-700 hover:text-blue-600 transition-colors">Гарантия</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="https://wa.me/79637730456" target="_blank" rel="noopener noreferrer">
                <Icon name="Phone" size={16} className="mr-2" />
                +7(963)773-04-56
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0">
          <img 
            src="/img/f6feea81-6fc2-4b66-8d7d-b2d28cdeace3.jpg" 
            alt="Офис с сотрудниками" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              ИТ-решения для вашего бизнеса
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Высокая производительность и надежность. Оптимальная стоимость.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3" asChild>
                <a href="https://wa.me/79637730456" target="_blank" rel="noopener noreferrer">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Выбрать компьютер
                </a>
              </Button>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3" asChild>
                <a href="https://wa.me/79637730456" target="_blank" rel="noopener noreferrer">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Почему выбирают нас?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon as any} size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Каталог решений
          </h2>
          <div className="space-y-12">
            {computerCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative">
                      <img 
                        src={category.image} 
                        alt={category.title} 
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2 text-gray-900">{category.title}</h3>
                        <p className="text-lg text-blue-600 mb-4">{category.subtitle}</p>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                      <div className="grid gap-4">
                        {category.variants.map((variant, vIndex) => (
                          <div key={vIndex} className="bg-gray-50 rounded-lg p-6">
                            <div className="mb-4">
                              <h4 className="text-xl font-semibold text-gray-900 mb-2">{variant.name}</h4>
                            </div>
                            <p className="text-gray-600 mb-4">{variant.specs} {variant.price && `— ${variant.price}`}</p>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                              <a href="https://wa.me/79637730456" target="_blank" rel="noopener noreferrer">
                                <Icon name="ShoppingCart" size={16} className="mr-2" />
                                Заказать
                              </a>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Monitors and Accessories */}
          <Card className="mt-12 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Мониторы и аксессуары</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Дополните свою рабочую станцию качественными мониторами и периферией
                </p>
              </div>
              
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <img 
                      src="/img/3cecd8cd-84c1-49f5-bd2c-19f83010ea06.jpg" 
                      alt="Мониторы" 
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-xl font-semibold mb-4 text-gray-900">
                      <Icon name="Monitor" size={24} className="inline mr-2 text-blue-600" />
                      Мониторы БУ без дефектов
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {monitors.map((monitor, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                          <div className="text-lg font-semibold text-gray-900 mb-1">{monitor.size}</div>
                          <div className="text-xl font-bold text-blue-600">{monitor.price}</div>
                          <Button size="sm" className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-xs" asChild>
                            <a href="https://wa.me/79637730456" target="_blank" rel="noopener noreferrer">
                              Заказать
                            </a>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <img 
                      src="/img/05139d14-7bfa-4091-8a75-4841d9fcdb3f.jpg" 
                      alt="Аксессуары" 
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-xl font-semibold mb-4 text-gray-900">
                      <Icon name="Keyboard" size={24} className="inline mr-2 text-blue-600" />
                      Клавиатуры и мыши
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <h5 className="font-semibold text-gray-900">Комплект проводной</h5>
                            <p className="text-sm text-gray-600">Клавиатура + мышь новые</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600">800₽</div>
                          </div>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                          <a href="https://wa.me/79637730456" target="_blank" rel="noopener noreferrer">
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            Заказать комплект
                          </a>
                        </Button>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <h5 className="font-semibold text-gray-900">Комплект беспроводной</h5>
                            <p className="text-sm text-gray-600">Клавиатура + мышь новые</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">1 400₽</div>
                          </div>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                          <a href="https://wa.me/79637730456" target="_blank" rel="noopener noreferrer">
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            Заказать комплект
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    <Icon name="Truck" size={20} className="inline mr-2 text-blue-600" />
                    Быстрая доставка и установка
                  </h4>
                  <p className="text-gray-600">
                    Подключим и настроим все оборудование. Готовое рабочее место за один день!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Что вы получаете?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <Icon name="Settings" size={48} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Подбор под задачу</h3>
                <p className="text-gray-600">Экономьте только на цене, а не на качестве работы</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <Icon name="Shield" size={48} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Гарантия 6 месяцев</h3>
                <p className="text-gray-600">Полное гарантийное обслуживание</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <Icon name="CheckCircle2" size={48} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Тест и установка</h3>
                <p className="text-gray-600">Полная диагностика и установка необходимого ПО</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-6">
                <Icon name="Star" size={48} className="mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Внешний вид</h3>
                <p className="text-gray-600">Аккуратные корпуса, которые впишутся в любой интерьер</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Готовы повысить эффективность вашей команды?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Свяжитесь с нами для консультации и подбора идеального решения!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <a href="tel:+79637730456">
                <Icon name="Phone" size={20} className="mr-2" />
                +7(963)773-04-56
              </a>
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <a href="tel:+79637873487">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                +7(963)787-34-87
              </a>
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <a href="https://t.me/pc4officce" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} className="mr-2" />
                Telegram канал
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Monitor" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">IT-Solutions</span>
              </div>
              <p className="text-gray-400">
                Надежная техника с идеальным соотношением цены и качества
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Офисные решения</li>
                <li>Для многозадачности</li>
                <li>Бухгалтерские ПК</li>
                <li>Дизайнерские станции</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Подбор конфигурации</li>
                <li>Установка ПО</li>
                <li>Гарантийное обслуживание</li>
                <li>Техническая поддержка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>Телефон: +7(963)773-04-56</p>
                <p>Email: miitgidro@mail.ru</p>
                <p>Адрес: Москва, Угловой переулок 2</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IT-Solutions. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
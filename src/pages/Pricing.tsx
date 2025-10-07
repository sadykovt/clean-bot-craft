import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingData = [
    {
      category: "Верхняя одежда",
      items: [
        { name: "Пальто", price: "от 1500 ₽" },
        { name: "Куртка", price: "от 1200 ₽" },
        { name: "Пуховик", price: "от 1500 ₽" },
        { name: "Шуба", price: "от 3000 ₽" },
      ],
    },
    {
      category: "Костюмы и платья",
      items: [
        { name: "Мужской костюм (двойка)", price: "от 1200 ₽" },
        { name: "Мужской костюм (тройка)", price: "от 1500 ₽" },
        { name: "Платье простое", price: "от 800 ₽" },
        { name: "Платье вечернее", price: "от 1500 ₽" },
      ],
    },
    {
      category: "Повседневная одежда",
      items: [
        { name: "Рубашка", price: "от 300 ₽" },
        { name: "Блузка", price: "от 400 ₽" },
        { name: "Брюки", price: "от 500 ₽" },
        { name: "Юбка", price: "от 400 ₽" },
      ],
    },
    {
      category: "Текстиль",
      items: [
        { name: "Плед (до 2м)", price: "от 800 ₽" },
        { name: "Штора (за 1 м²)", price: "от 200 ₽" },
        { name: "Ковер (за 1 м²)", price: "от 300 ₽" },
        { name: "Подушка", price: "от 400 ₽" },
      ],
    },
    {
      category: "Обувь",
      items: [
        { name: "Ботинки/Сапоги", price: "от 600 ₽" },
        { name: "Кроссовки", price: "от 500 ₽" },
        { name: "Туфли", price: "от 400 ₽" },
        { name: "Сумка", price: "от 800 ₽" },
      ],
    },
    {
      category: "Дополнительные услуги",
      items: [
        { name: "Срочная чистка (24 часа)", price: "+50% к стоимости" },
        { name: "Выведение сложного пятна", price: "от 300 ₽" },
        { name: "Ремонт одежды", price: "от 200 ₽" },
        { name: "Выездная служба", price: "Бесплатно от 3000 ₽" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent to-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
              Прайс-лист
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
              Прозрачные и доступные цены на все виды услуг
            </p>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {pricingData.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-foreground">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{item.name}</span>
                          <span className="font-semibold text-foreground">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Note */}
            <Card className="bg-accent border-0 max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Важная информация
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Точная стоимость определяется после осмотра изделия</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Срок выполнения заказа: 3-5 рабочих дней</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Срочная чистка выполняется за 24 часа</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Действует система скидок для постоянных клиентов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-4">
                Остались вопросы по ценам?
              </p>
              <Link to="/contacts">
                <Button size="lg">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;

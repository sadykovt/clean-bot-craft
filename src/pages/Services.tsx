import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, Sofa, Footprints, Briefcase, Sparkles, Home } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: "Чистка одежды",
      description: "Профессиональная химчистка любых видов одежды: пальто, куртки, платья, костюмы, рубашки",
    },
    {
      icon: Sofa,
      title: "Чистка текстиля",
      description: "Чистка мягкой мебели, ковров, штор, постельного белья и других текстильных изделий",
    },
    {
      icon: Footprints,
      title: "Чистка обуви",
      description: "Бережная чистка обуви из любых материалов: кожа, замша, нубук, текстиль",
    },
    {
      icon: Briefcase,
      title: "Чистка аксессуаров",
      description: "Химчистка сумок, рюкзаков, кожгалантереи, головных уборов",
    },
    {
      icon: Sparkles,
      title: "Срочная чистка",
      description: "Экспресс-чистка вашей одежды за 24 часа без потери качества",
    },
    {
      icon: Home,
      title: "Выездная служба",
      description: "Бесплатный забор и доставка вещей по городу при заказе от 3000 рублей",
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
              Наши услуги
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг химчистки для вашего комфорта
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-foreground">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-16 max-w-3xl mx-auto">
              <Card className="bg-accent border-0">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Что входит в услугу химчистки?
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Предварительный осмотр и определение типа загрязнений</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Удаление пятен с использованием профессиональных средств</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Бережная химчистка с учетом типа ткани и цвета</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Сушка и глажка изделий</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Финальный контроль качества</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Упаковка в защитные чехлы</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Services;

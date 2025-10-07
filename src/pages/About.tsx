import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent to-background py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
              О нас
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
              Профессиональная химчистка с более чем 10-летним опытом работы
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-lg text-muted-foreground mb-6">
                ЧистоПро — это современная химчистка, которая предлагает полный спектр услуг по уходу за одеждой, 
                текстилем и обувью. Мы работаем с 2013 года и за это время завоевали доверие тысяч клиентов.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наша команда состоит из опытных специалистов, которые постоянно повышают свою квалификацию 
                и следят за новыми технологиями в индустрии химчистки. Мы используем только профессиональное 
                оборудование и безопасные средства, которые бережно относятся к вашим вещам.
              </p>
              <p className="text-lg text-muted-foreground">
                Мы гордимся тем, что каждый клиент для нас важен, и стремимся предоставить сервис 
                высочайшего качества с индивидуальным подходом к каждому заказу.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Наша миссия</h3>
                  <p className="text-muted-foreground">
                    Делать жизнь наших клиентов комфортнее, беря на себя заботу о чистоте 
                    их вещей с максимальным качеством и вниманием к деталям
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Качество</h3>
                  <p className="text-muted-foreground">
                    Мы гарантируем высочайшее качество работы благодаря современному 
                    оборудованию и опытным специалистам
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Команда</h3>
                  <p className="text-muted-foreground">
                    Наша команда — это профессионалы своего дела, которые любят свою работу 
                    и ответственно подходят к каждому заказу
                  </p>
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

export default About;

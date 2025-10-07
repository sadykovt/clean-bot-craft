import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">Ч</span>
              </div>
              <span className="font-bold text-xl text-foreground">ЧистоПро</span>
            </div>
            <p className="text-muted-foreground">
              Профессиональная химчистка с заботой о ваших вещах
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Навигация</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                О нас
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Услуги
              </Link>
              <Link to="/pricing" className="block text-muted-foreground hover:text-primary transition-colors">
                Прайс-лист
              </Link>
              <Link to="/contacts" className="block text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@chistopro.ru</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>г. Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ЧистоПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

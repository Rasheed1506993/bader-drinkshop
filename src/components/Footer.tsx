
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-badr-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/lovable-uploads/62655fad-ec14-4d7d-ae44-e375cd8b84d1.png" 
              alt="شركة البدر الدولية التجارية" 
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm text-center md:text-right md:dir-rtl mb-4">
              شركة البدر الدولية التجارية هي شركة متخصصة في استيراد وتوزيع العصائر والمشروبات المعبأة بمختلف أنواعها وأحجامها.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-badr-gold font-bold text-lg mb-4 dir-rtl">روابط سريعة</h4>
            <nav className="flex flex-col space-y-2 items-center md:items-end dir-rtl">
              <NavLink 
                to="/" 
                className="text-gray-300 hover:text-badr-gold transition-colors duration-300"
              >
                الرئيسية
              </NavLink>
              <NavLink 
                to="/products" 
                className="text-gray-300 hover:text-badr-gold transition-colors duration-300"
              >
                المنتجات
              </NavLink>
              <NavLink 
                to="/about" 
                className="text-gray-300 hover:text-badr-gold transition-colors duration-300"
              >
                من نحن
              </NavLink>
              <NavLink 
                to="/contact" 
                className="text-gray-300 hover:text-badr-gold transition-colors duration-300"
              >
                اتصل بنا
              </NavLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-badr-gold font-bold text-lg mb-4 dir-rtl">تواصل معنا</h4>
            <div className="flex flex-col space-y-3 items-center md:items-end">
              <a 
                href="tel:+9660590663486" 
                className="flex items-center text-gray-300 hover:text-badr-gold transition-colors duration-300 dir-rtl"
              >
                <span className="mx-2">+966 0590663486</span>
                <Phone size={18} />
              </a>
              <a 
                href="https://wa.me/9660534488744" 
                className="flex items-center text-gray-300 hover:text-badr-gold transition-colors duration-300 dir-rtl"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="mx-2">+966 0534488744</span>
                <Phone size={18} />
              </a>
              <a 
                href="mailto:buraed1@hotmail.com" 
                className="flex items-center text-gray-300 hover:text-badr-gold transition-colors duration-300 dir-rtl"
              >
                <span className="mx-2">buraed1@hotmail.com</span>
                <Mail size={18} />
              </a>
              <div className="flex items-center text-gray-300 dir-rtl">
                <span className="mx-2">المملكة العربية السعودية</span>
                <MapPin size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} شركة البدر الدولية التجارية. جميع الحقوق محفوظة
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-3">
            <p className="text-sm">
              تم التصميم والتطوير بواسطة{" "}
              <span className="font-semibold">Mazen Sharaf Aldeen</span>
            </p>
            <a
              href="mailto:mazen1221cool@gmail.com"
              className="flex items-center gap-1 text-primary hover:underline font-medium"
            >
              <Mail className="h-4 w-4" />
              <span>mazen1221cool@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Search, LogIn } from 'lucide-react';
import ProductSearch from './ProductSearch';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setShowSearch(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 
      ${isScrolled ? 'glass-effect shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img 
            src="/lovable-uploads/62655fad-ec14-4d7d-ae44-e375cd8b84d1.png" 
            alt="شركة البدر الدولية التجارية" 
            className="h-12 md:h-14 w-auto transition-transform hover:scale-105"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-badr-black hover:text-badr-gold transition-colors duration-300 
              ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`
            }
          >
            الرئيسية
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              `text-badr-black hover:text-badr-gold transition-colors duration-300 
              ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`
            }
          >
            المنتجات
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-badr-black hover:text-badr-gold transition-colors duration-300 
              ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`
            }
          >
            من نحن
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-badr-black hover:text-badr-gold transition-colors duration-300 
              ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`
            }
          >
            اتصل بنا
          </NavLink>

          {/* زر البحث */}
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="text-badr-black hover:text-badr-gold transition-colors duration-300"
            aria-label="بحث"
          >
            <Search size={20} />
          </button>

          {/* زر تسجيل الدخول كأيقونة */}
          <NavLink 
            to="/login" 
            className="text-badr-black hover:text-badr-gold transition-colors duration-300"
            aria-label="تسجيل الدخول"
          >
            <LogIn size={20} />
          </NavLink>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          {/* زر البحث للموبايل */}
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="mr-4 text-badr-black hover:text-badr-gold transition-colors duration-300"
            aria-label="بحث"
          >
            <Search size={20} />
          </button>

          {/* زر تسجيل الدخول للموبايل */}
          <NavLink 
            to="/login" 
            className="mr-4 text-badr-black hover:text-badr-gold transition-colors duration-300"
            aria-label="تسجيل الدخول"
          >
            <LogIn size={20} />
          </NavLink>

          {/* زر القائمة */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-badr-black hover:text-badr-gold transition-colors duration-300"
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-effect animate-slide-up py-4 px-6 shadow-md">
          <nav className="flex flex-col space-y-4 items-end dir-rtl">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-badr-black hover:text-badr-gold transition-colors duration-300 
                ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`
              }
            >
              الرئيسية
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `text-badr-black hover:text-badr-gold transition-colors duration-300 
                ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`
              }
            >
              المنتجات
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-badr-black hover:text-badr-gold transition-colors duration-300 
                ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`
              }
            >
              من نحن
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-badr-black hover:text-badr-gold transition-colors duration-300 
                ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`
              }
            >
              اتصل بنا
            </NavLink>
          </nav>
        </div>
      )}

      {/* Search Panel */}
      {showSearch && (
        <div className="absolute top-full left-0 right-0 glass-effect animate-slide-up py-4 px-6 shadow-md">
          <ProductSearch onClose={() => setShowSearch(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
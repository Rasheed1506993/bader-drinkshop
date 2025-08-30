import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, LogIn, LogOut } from 'lucide-react';
import ProductSearch from './ProductSearch';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setShowSearch(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    toast.success('تم تسجيل الخروج');
    navigate('/');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 ${isScrolled ? 'glass-effect shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img 
            src={`${import.meta.env.BASE_URL}lovable-uploads/62655fad-ec14-4d7d-ae44-e375cd8b84d1.png`} 
            alt="شركة البدر الدولية التجارية" 
            className="h-12 md:h-14 w-auto transition-transform hover:scale-105"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <NavLink to="/" className={({ isActive }) => `text-badr-black hover:text-badr-gold transition-colors duration-300 ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`}>الرئيسية</NavLink>
          <NavLink to="/products" className={({ isActive }) => `text-badr-black hover:text-badr-gold transition-colors duration-300 ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`}>المنتجات</NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-badr-black hover:text-badr-gold transition-colors duration-300 ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`}>من نحن</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `text-badr-black hover:text-badr-gold transition-colors duration-300 ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`}>اتصل بنا</NavLink>

          {/* Search Icon */}
          <button onClick={() => setShowSearch(!showSearch)} className="text-badr-black hover:text-badr-gold transition-colors duration-300" aria-label="بحث">
            <Search size={20} />
          </button>

          {/* Login / Logout Icon */}
          {!isAuthenticated ? (
            <NavLink to="/login" className="text-badr-black hover:text-badr-gold transition-colors duration-300" aria-label="تسجيل الدخول">
              <LogIn size={22} />
            </NavLink>
          ) : (
            <button onClick={handleLogout} className="text-badr-black hover:text-badr-gold transition-colors duration-300" aria-label="تسجيل الخروج">
              <LogOut size={22} />
            </button>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setShowSearch(!showSearch)} className="mr-4 text-badr-black hover:text-badr-gold transition-colors duration-300" aria-label="بحث">
            <Search size={20} />
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-badr-black hover:text-badr-gold transition-colors duration-300" aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-effect animate-slide-up py-4 px-6 shadow-md">
          <nav className="flex flex-col space-y-4 items-end dir-rtl">
            <NavLink to="/" className={({ isActive }) => `text-badr-black hover:text-badr-gold transition-colors duration-300 ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`}>الرئيسية</NavLink>
            <NavLink to="/products" className={({ isActive }) => `text-badr-black hover:text-badr-gold transition-colors duration-300 ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`}>المنتجات</NavLink>
            <NavLink to="/about" className={({ isActive }) => `text-badr-black hover:text-badr-gold transition-colors duration-300 ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`}>من نحن</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `text-badr-black hover:text-badr-gold transition-colors duration-300 ${isActive ? 'font-semibold text-badr-gold' : 'font-medium'}`}>اتصل بنا</NavLink>

            {/* Login / Logout Icon in Mobile */}
            {!isAuthenticated ? (
              <NavLink to="/login" className="text-badr-black hover:text-badr-gold transition-colors duration-300" aria-label="تسجيل الدخول">
                <LogIn size={22} />
              </NavLink>
            ) : (
              <button onClick={handleLogout} className="text-badr-black hover:text-badr-gold transition-colors duration-300" aria-label="تسجيل الخروج">
                <LogOut size={22} />
              </button>
            )}
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


import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Login = () => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // استخراج المسار المقصود من البارامترات، إن وجد
  const from = new URLSearchParams(location.search).get('from') || '/';
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (login(password)) {
      toast.success('تم تسجيل الدخول بنجاح');
      navigate(from);
    } else {
      toast.error('كلمة المرور غير صحيحة');
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen font-arabic">
      <Header />
      
      <section className="pt-32 pb-10 px-6 bg-badr-gray">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-up">
            <h1 className="text-3xl font-bold mb-4 text-center dir-rtl">تسجيل دخول المسؤول</h1>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <AnimatedSection animation="fade-in">
            <form onSubmit={handleSubmit} className="space-y-6 dir-rtl">
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  كلمة المرور
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                  className="w-full"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-badr-gold hover:bg-badr-gold/90 text-black"
                disabled={isLoading}
              >
                {isLoading ? 'جاري التسجيل...' : 'تسجيل الدخول'}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Login;

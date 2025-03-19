
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ProductList from '../components/ProductList';
import AnimatedSection from '../components/AnimatedSection';
import WhatsappButton from '../components/WhatsappButton';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Sample featured products - in a real app, these would come from an API
const featuredProducts = [
  {
    id: 1,
    name: 'برتقال توب ماكس',
    category: 'عصائر توب ماكس',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'عصير برتقال طبيعي 100%',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  {
    id: 2,
    name: 'مانجو توب ماكس',
    category: 'عصائر توب ماكس',
    image: 'https://images.unsplash.com/photo-1623848162500-4b5732d2f3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'عصير مانجو طبيعي بدون إضافات',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  {
    id: 3,
    name: 'تفاح كادي عادي',
    category: 'عصائر كادي عادي',
    image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'عصير تفاح منعش',
    size: '330 مل',
    origin: 'السعودية',
    available: true
  },
  {
    id: 4,
    name: 'مشكل كادي نكتار',
    category: 'عصائر كادي نكتار',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'مزيج من الفواكه الطازجة',
    size: '330 مل',
    origin: 'السعودية',
    available: true
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-arabic">
      <Header />
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12" animation="slide-up">
            <h2 className="text-3xl font-bold mb-4 dir-rtl">شركة البدر الدولية التجارية</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto dir-rtl">
              نحن متخصصون في استيراد وتوزيع أجود أنواع العصائر والمشروبات المعبأة، 
              ونقدم منتجات ذات جودة عالية تناسب جميع الأذواق والمناسبات.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection 
              className="bg-white p-6 rounded-lg shadow-md text-center" 
              animation="scale-in"
              delay={100}
            >
              <div className="w-20 h-20 bg-badr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 dir-rtl">جودة عالية</h3>
              <p className="text-gray-600 dir-rtl">نلتزم بتقديم منتجات ذات جودة عالية تلبي احتياجات عملائنا.</p>
            </AnimatedSection>
            
            <AnimatedSection 
              className="bg-white p-6 rounded-lg shadow-md text-center" 
              animation="scale-in"
              delay={200}
            >
              <div className="w-20 h-20 bg-badr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 dir-rtl">توصيل سريع</h3>
              <p className="text-gray-600 dir-rtl">نوفر خدمة توصيل سريعة وفعالة لضمان وصول منتجاتنا في الوقت المناسب.</p>
            </AnimatedSection>
            
            <AnimatedSection 
              className="bg-white p-6 rounded-lg shadow-md text-center" 
              animation="scale-in"
              delay={300}
            >
              <div className="w-20 h-20 bg-badr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 dir-rtl">خدمة عملاء ممتازة</h3>
              <p className="text-gray-600 dir-rtl">فريق خدمة العملاء لدينا متاح دائمًا للإجابة على استفساراتكم وتلبية طلباتكم.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 px-6 bg-badr-gray">
        <div className="max-w-7xl mx-auto">
          <ProductList 
            products={featuredProducts} 
            title="منتجاتنا المميزة"
          />
          
          <AnimatedSection className="mt-12 text-center" animation="fade-in">
            <a 
              href="/products" 
              className="inline-flex items-center justify-center bg-badr-gold hover:bg-badr-dark-gold text-black font-medium rounded-full py-3 px-8 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              عرض جميع المنتجات
            </a>
          </AnimatedSection>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-badr-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="slide-up">
            <h2 className="text-3xl font-bold mb-4 dir-rtl">هل تريد طلب منتجاتنا؟</h2>
            <p className="text-lg text-gray-300 mb-8 dir-rtl">
              تواصل معنا الآن عبر الواتساب للاستفسار عن المنتجات والأسعار وطلب الكميات التي تحتاجها.
            </p>
            <WhatsappButton 
              phoneNumber="+9660534488744" 
              message="مرحباً، أود الاستفسار عن منتجاتكم"
              className="text-lg"
            >
              تواصل معنا الآن
            </WhatsappButton>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

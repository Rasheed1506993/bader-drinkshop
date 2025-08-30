import WhatsappButton from './WhatsappButton';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1583237884407-8a1448caae10?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)', 
          filter: 'brightness(0.5)'  // تم تعتيم الخلفية قليلاً
        }}
      ></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center justify-center text-center">
        <AnimatedSection animation="fade-in">
          <img 
            src={`${import.meta.env.BASE_URL}lovable-uploads/62655fad-ec14-4d7d-ae44-e375cd8b84d1.png`} 
            alt="شركة البدر الدولية التجارية" 
            className="h-28 md:h-32 w-auto mb-6 animate-float"
          />
        </AnimatedSection>

        <AnimatedSection className="mb-6" animation="slide-up" delay={200}>
          <div className="bg-black bg-opacity-50 rounded-lg p-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] dir-rtl">
              شركة البدر الدولية التجارية
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)] dir-rtl">
              استيراد وتوزيع أجود أنواع العصائر والمشروبات المعبأة
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <WhatsappButton 
              phoneNumber="+9660534488744" 
              message="مرحباً، أود الاستفسار عن منتجاتكم"
              className="text-lg"
            >
              تواصل معنا
            </WhatsappButton>
            
            <a 
              href="/products" 
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-badr-black font-medium rounded-full py-3 px-6 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              استعرض المنتجات
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;

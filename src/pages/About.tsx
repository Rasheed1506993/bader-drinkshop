
import { useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-arabic">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-10 px-6 bg-badr-gray">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection animation="slide-up">
            <h1 className="text-4xl font-bold mb-4 dir-rtl">من نحن</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto dir-rtl">
              تعرف على شركة البدر الدولية التجارية
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* About Us Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="شركة البدر الدولية التجارية" 
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="dir-rtl">
                <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
                <p className="text-lg text-gray-700 mb-6">
                  تأسست شركة البدر الدولية التجارية بهدف توفير أجود أنواع العصائر والمشروبات المعبأة في المملكة العربية السعودية. انطلقت رحلتنا من رؤية واضحة تتمثل في توفير منتجات ذات جودة عالية تلبي احتياجات وأذواق المستهلكين.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  تخصصنا في استيراد وتوزيع العصائر والمشروبات المعبأة بمختلف أنواعها وأحجامها، ونعمل دائمًا على توسيع شبكة عملائنا وتقديم خدمات متميزة ترضي جميع الأطراف.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 px-6 bg-badr-gray">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12" animation="slide-up">
            <h2 className="text-3xl font-bold mb-4 dir-rtl">قيمنا</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto dir-rtl">
              نلتزم بمجموعة من القيم الأساسية التي توجه عملنا وتضمن تقديم أفضل خدمة لعملائنا
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection 
              className="bg-white p-8 rounded-lg shadow-md text-center" 
              animation="scale-in"
              delay={100}
            >
              <div className="w-16 h-16 bg-badr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 dir-rtl">الجودة</h3>
              <p className="text-gray-600 dir-rtl">
                نركز على تقديم منتجات ذات جودة عالية تلبي معايير السلامة والصحة العالمية.
              </p>
            </AnimatedSection>
            
            <AnimatedSection 
              className="bg-white p-8 rounded-lg shadow-md text-center" 
              animation="scale-in"
              delay={200}
            >
              <div className="w-16 h-16 bg-badr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 dir-rtl">خدمة العملاء</h3>
              <p className="text-gray-600 dir-rtl">
                نضع العميل في مقدمة أولوياتنا ونسعى دائمًا لتقديم تجربة استثنائية وخدمة متميزة.
              </p>
            </AnimatedSection>
            
            <AnimatedSection 
              className="bg-white p-8 rounded-lg shadow-md text-center" 
              animation="scale-in"
              delay={300}
            >
              <div className="w-16 h-16 bg-badr-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 dir-rtl">التطور المستمر</h3>
              <p className="text-gray-600 dir-rtl">
                نسعى دائمًا للتطوير وتحسين منتجاتنا وخدماتنا لنواكب احتياجات السوق المتغيرة.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12" animation="slide-up">
            <h2 className="text-3xl font-bold mb-4 dir-rtl">لماذا تختارنا؟</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto dir-rtl">
              ما يميزنا عن غيرنا ويجعلنا الخيار الأفضل لتوريد العصائر والمشروبات المعبأة
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md dir-rtl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-badr-gold rounded-full flex items-center justify-center shrink-0 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">تنوع المنتجات</h3>
                </div>
                <p className="text-gray-600">
                  نقدم تشكيلة واسعة من العصائر والمشروبات المعبأة بمختلف النكهات والأحجام لتلبية كافة الأذواق والمناسبات.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md dir-rtl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-badr-gold rounded-full flex items-center justify-center shrink-0 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">التوصيل السريع</h3>
                </div>
                <p className="text-gray-600">
                  نلتزم بمواعيد التسليم المحددة ونوفر خدمة توصيل سريعة وفعالة لضمان وصول المنتجات في الوقت المناسب.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md dir-rtl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-badr-gold rounded-full flex items-center justify-center shrink-0 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">أسعار منافسة</h3>
                </div>
                <p className="text-gray-600">
                  نقدم منتجاتنا بأسعار منافسة مع الحفاظ على جودة عالية، مما يضمن أفضل قيمة لعملائنا.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md dir-rtl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-badr-gold rounded-full flex items-center justify-center shrink-0 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">دعم فني متكامل</h3>
                </div>
                <p className="text-gray-600">
                  فريق دعم متخصص يعمل على مدار الساعة للإجابة على استفساراتكم وتقديم المساعدة اللازمة.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-badr-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="slide-up">
            <h2 className="text-3xl font-bold mb-4 dir-rtl">هل تريد معرفة المزيد عن منتجاتنا؟</h2>
            <p className="text-lg text-gray-300 mb-8 dir-rtl">
              تواصل معنا الآن عبر الواتساب للاستفسار عن المنتجات والأسعار وطلب الكميات التي تحتاجها.
            </p>
            <WhatsappButton 
              phoneNumber="+9660534488744" 
              message="مرحباً، أود معرفة المزيد عن منتجاتكم"
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

export default About;


import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from 'sonner';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen font-arabic">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-10 px-6 bg-badr-gray">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection animation="slide-up">
            <h1 className="text-4xl font-bold mb-4 dir-rtl">اتصل بنا</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto dir-rtl">
              نحن هنا للإجابة على جميع استفساراتكم وتلبية طلباتكم
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="slide-up">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 dir-rtl">أرسل لنا رسالة</h2>
                <form onSubmit={handleSubmit} className="dir-rtl">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 mb-2">الاسم</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-badr-gold focus:border-transparent transition-all duration-300"
                      placeholder="الاسم الكامل"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-badr-gold focus:border-transparent transition-all duration-300"
                      placeholder="example@example.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-badr-gold focus:border-transparent transition-all duration-300"
                      placeholder="+966 XX XXX XXXX"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">الرسالة</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-badr-gold focus:border-transparent transition-all duration-300"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-badr-gold hover:bg-badr-dark-gold text-black font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-t-2 border-b-2 border-black rounded-full animate-spin"></div>
                        <span>جاري الإرسال...</span>
                      </>
                    ) : (
                      <>
                        <span>إرسال الرسالة</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>
            
            {/* Contact Info */}
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6 dir-rtl">معلومات التواصل</h2>
                  
                  <div className="space-y-6 dir-rtl">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-badr-gold rounded-full flex items-center justify-center shrink-0 ml-4">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">الهاتف</h3>
                        <p className="text-gray-600 mb-1">
                          <a href="tel:+9660590663486" className="hover:text-badr-gold transition-colors duration-300">
                            +966 059 066 3486
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-badr-gold rounded-full flex items-center justify-center shrink-0 ml-4">
                        <MessageCircle className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">الواتساب</h3>
                        <p className="text-gray-600 mb-1">
                          <a 
                            href="https://wa.me/9660534488744" 
                            className="hover:text-badr-gold transition-colors duration-300"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            +966 053 448 8744
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-badr-gold rounded-full flex items-center justify-center shrink-0 ml-4">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">البريد الإلكتروني</h3>
                        <p className="text-gray-600 mb-1">
                          <a 
                            href="mailto:buraed1@hotmail.com" 
                            className="hover:text-badr-gold transition-colors duration-300"
                          >
                            buraed1@hotmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-badr-gold rounded-full flex items-center justify-center shrink-0 ml-4">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">العنوان</h3>
                        <p className="text-gray-600">
                          المملكة العربية السعودية
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6 dir-rtl">ساعات العمل</h2>
                  <div className="space-y-3 dir-rtl">
                    <div className="flex justify-between">
                      <span className="text-gray-600">الأحد - الخميس</span>
                      <span className="font-medium">9:00 ص - 5:00 م</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">الجمعة</span>
                      <span className="font-medium">مغلق</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">السبت</span>
                      <span className="font-medium">9:00 ص - 3:00 م</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Map Section (Placeholder) */}
      <section className="py-10 px-6 bg-badr-gray">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg h-80 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">خريطة الموقع</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;

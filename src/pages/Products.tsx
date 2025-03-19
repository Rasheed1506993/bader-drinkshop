
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';
import AnimatedSection from '../components/AnimatedSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSearch from '../components/ProductSearch';

// Sample products data - in a real app, these would come from an API
const allProducts = [
  // Top Max Juice Category
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
    name: 'مشكل توب ماكس',
    category: 'عصائر توب ماكس',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'مزيج من الفواكه الطازجة',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  {
    id: 3,
    name: 'جوافة توب ماكس',
    category: 'عصائر توب ماكس',
    image: 'https://images.unsplash.com/photo-1587486937303-32eaa2134b78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'عصير جوافة طبيعي',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  {
    id: 4,
    name: 'مانجو توب ماكس',
    category: 'عصائر توب ماكس',
    image: 'https://images.unsplash.com/photo-1623848162500-4b5732d2f3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'عصير مانجو طبيعي بدون إضافات',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  {
    id: 5,
    name: 'تفاح توب ماكس',
    category: 'عصائر توب ماكس',
    image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'عصير تفاح منعش',
    size: '1 لتر',
    origin: 'السعودية',
    available: true
  },
  
  // Cadi Regular Juice Category
  {
    id: 6,
    name: 'تفاح كادي عادي',
    category: 'عصائر كادي عادي',
    image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'عصير تفاح منعش',
    size: '330 مل',
    origin: 'السعودية',
    available: true
  },
  {
    id: 7,
    name: 'مانجو كادي عادي',
    category: 'عصائر كادي عادي',
    image: 'https://images.unsplash.com/photo-1623848162500-4b5732d2f3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'عصير مانجو طبيعي',
    size: '330 مل',
    origin: 'السعودية',
    available: true
  },
  {
    id: 8,
    name: 'جوافة كادي عادي',
    category: 'عصائر كادي عادي',
    image: 'https://images.unsplash.com/photo-1587486937303-32eaa2134b78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'عصير جوافة منعش',
    size: '330 مل',
    origin: 'السعودية',
    available: false
  },
  
  // Cadi Nectar Juice Category
  {
    id: 9,
    name: 'برتقال كادي نكتار',
    category: 'عصائر كادي نكتار',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'نكتار برتقال طبيعي',
    size: '330 مل',
    origin: 'السعودية',
    available: true
  },
  {
    id: 10,
    name: 'مانجو كادي نكتار',
    category: 'عصائر كادي نكتار',
    image: 'https://images.unsplash.com/photo-1623848162500-4b5732d2f3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'نكتار مانجو طبيعي',
    size: '330 مل',
    origin: 'السعودية',
    available: true
  },
  {
    id: 11,
    name: 'مشكل كادي نكتار',
    category: 'عصائر كادي نكتار',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'نكتار مشكل فواكه',
    size: '330 مل',
    origin: 'السعودية',
    available: true
  }
];

const categories = ['عصائر توب ماكس', 'عصائر كادي عادي', 'عصائر كادي نكتار'];

const Products = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Get search query from URL if present
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    
    if (searchParam) {
      setSearchQuery(searchParam);
      filterProductsBySearch(searchParam);
    } else {
      setFilteredProducts(allProducts);
      setSearchQuery('');
    }
  }, [location.search]);

  const filterProductsBySearch = (query: string) => {
    if (!query.trim()) {
      setFilteredProducts(allProducts);
      return;
    }
    
    const filtered = allProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen font-arabic">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-10 px-6 bg-badr-gray">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection animation="slide-up">
            <h1 className="text-4xl font-bold mb-4 dir-rtl">منتجاتنا</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto dir-rtl">
              اكتشف مجموعتنا المتنوعة من العصائر والمشروبات المعبأة ذات الجودة العالية
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="mt-8 max-w-lg mx-auto" animation="slide-up" delay={200}>
            <ProductSearch />
          </AnimatedSection>
        </div>
      </section>
      
      {/* Products Listing */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {searchQuery ? (
            <>
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-semibold mb-2 dir-rtl">نتائج البحث عن: "{searchQuery}"</h2>
                <p className="text-gray-600 dir-rtl">تم العثور على {filteredProducts.length} منتج</p>
              </div>
              <ProductList products={filteredProducts} />
            </>
          ) : (
            <ProductList 
              products={allProducts} 
              categories={categories}
              title="جميع المنتجات"
            />
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;

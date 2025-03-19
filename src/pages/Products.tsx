
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import AnimatedSection from '../components/AnimatedSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSearch from '../components/ProductSearch';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

// Import product data from separate file
import { allProducts, categories } from '../data/products';

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

          <AnimatedSection className="mt-8" animation="slide-up" delay={300}>
            <Link to="/products/add">
              <Button className="bg-badr-gold hover:bg-badr-gold/90 text-black">
                <Plus className="h-5 w-5 ml-2" /> إضافة منتج جديد
              </Button>
            </Link>
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


import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductForm from '../components/ProductForm';
import AnimatedSection from '../components/AnimatedSection';
import { Product } from '../components/ProductCard';
import { toast } from 'sonner';

// Import product data from the data file instead of Products page
import { allProducts, categories } from '../data/products';

const ProductManagement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const isEditMode = !!id;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (isEditMode) {
      const productId = parseInt(id as string);
      const foundProduct = allProducts.find(p => p.id === productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        toast.error('المنتج غير موجود');
        navigate('/products');
      }
    }
  }, [id, navigate, isEditMode]);

  const handleSaveProduct = (updatedProduct: Product) => {
    if (isEditMode) {
      // Update existing product
      // In a real app, this would call an API
      const productIndex = allProducts.findIndex(p => p.id === updatedProduct.id);
      if (productIndex !== -1) {
        allProducts[productIndex] = updatedProduct;
      }
    } else {
      // Add new product
      // In a real app, this would call an API
      allProducts.push(updatedProduct);
    }
  };

  return (
    <div className="min-h-screen font-arabic">
      <Header />
      
      <section className="pt-32 pb-10 px-6 bg-badr-gray">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="slide-up">
            <h1 className="text-3xl font-bold mb-4 text-center dir-rtl">
              {isEditMode ? 'تعديل المنتج' : 'إضافة منتج جديد'}
            </h1>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <AnimatedSection animation="fade-in">
            <ProductForm 
              product={product}
              categories={categories}
              onSave={handleSaveProduct}
            />
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductManagement;

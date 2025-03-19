
import { useState } from 'react';
import ProductCard, { Product } from './ProductCard';
import AnimatedSection from './AnimatedSection';

interface ProductListProps {
  products: Product[];
  categories?: string[];
  title?: string;
}

const ProductList = ({ products, categories = [], title }: ProductListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="w-full">
      {title && (
        <AnimatedSection animation="slide-up">
          <h2 className="text-3xl font-bold text-center mb-6 dir-rtl">{title}</h2>
        </AnimatedSection>
      )}

      {categories.length > 0 && (
        <AnimatedSection 
          className="flex flex-wrap justify-center gap-3 mb-8" 
          animation="slide-up"
          delay={100}
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 dir-rtl
              ${selectedCategory === 'all' 
                ? 'bg-badr-gold text-black' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            جميع المنتجات
          </button>
          
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 dir-rtl
                ${selectedCategory === category 
                  ? 'bg-badr-gold text-black' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <AnimatedSection 
            key={product.id} 
            animation="scale-in" 
            delay={100 + (index % 4) * 100}
          >
            <ProductCard product={product} />
          </AnimatedSection>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 dir-rtl">لا توجد منتجات في هذه الفئة</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
